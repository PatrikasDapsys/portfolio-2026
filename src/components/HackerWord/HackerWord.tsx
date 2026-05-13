import { useEffect, useMemo, useRef, useState } from 'react';

const DEFAULT_CHARSET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

const DEFAULT_RESOLVE_MS = 400;
const DEFAULT_SCRAMBLE_MS = 50;

function pickRandomChar(charset: string): string {
  return charset[Math.floor(Math.random() * charset.length)] ?? '?';
}

function buildOutput(chars: string[], k: number, charset: string): string {
  if (k >= chars.length) {
    return chars.join('');
  }
  return chars
    .map((char, index) => (index < k ? char : pickRandomChar(charset)))
    .join('');
}

export type HackerWordProps = {
  /** Final string to reveal. If empty, nothing is rendered. */
  text: string;
  resolveIntervalMs?: number;
  scrambleIntervalMs?: number;
  /** Characters used for the scrambling suffix. */
  charset?: string;
  onComplete?: () => void;
  className?: string;
  /** When true, hovering the text restarts the reveal animation from the beginning. */
  retriggerOnHover?: boolean;
};

type HackerWordImplProps = {
  text: string;
  charset: string;
  resolveIntervalMs: number;
  scrambleIntervalMs: number;
  onComplete?: () => void;
  className?: string;
  retriggerOnHover: boolean;
};

function HackerWordImpl({
  text,
  charset,
  resolveIntervalMs,
  scrambleIntervalMs,
  onComplete,
  className,
  retriggerOnHover,
}: HackerWordImplProps) {
  const chars = useMemo(() => Array.from(text), [text]);
  const length = chars.length;

  const [replayNonce, setReplayNonce] = useState(0);

  const [output, setOutput] = useState(() =>
    length > 0 ? buildOutput(chars, 0, charset) : '',
  );
  const kRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (length === 0) {
      return;
    }

    kRef.current = 0;

    let scrambleId: number | undefined;
    let resolveId: number | undefined;
    let cancelled = false;

    queueMicrotask(() => {
      if (cancelled) {
        return;
      }
      setOutput(buildOutput(chars, 0, charset));

      scrambleId = window.setInterval(() => {
        if (cancelled) {
          return;
        }
        const k = kRef.current;
        if (k >= length) {
          return;
        }
        setOutput(buildOutput(chars, k, charset));
      }, scrambleIntervalMs);

      resolveId = window.setInterval(() => {
        if (cancelled) {
          return;
        }
        if (kRef.current >= length) {
          return;
        }

        kRef.current += 1;

        if (kRef.current >= length) {
          setOutput(chars.join(''));
          if (scrambleId !== undefined) {
            window.clearInterval(scrambleId);
          }
          if (resolveId !== undefined) {
            window.clearInterval(resolveId);
          }
          onCompleteRef.current?.();
          return;
        }

        setOutput(buildOutput(chars, kRef.current, charset));
      }, resolveIntervalMs);
    });

    return () => {
      cancelled = true;
      if (scrambleId !== undefined) {
        window.clearInterval(scrambleId);
      }
      if (resolveId !== undefined) {
        window.clearInterval(resolveId);
      }
    };
  }, [chars, charset, length, replayNonce, resolveIntervalMs, scrambleIntervalMs]);

  if (length === 0) {
    return null;
  }

  const rootClass = ['hacker-word', className].filter(Boolean).join(' ');

  const handleMouseEnter = () => {
    if (!retriggerOnHover) {
      return;
    }
    kRef.current = 0;
    setOutput(buildOutput(chars, 0, charset));
    setReplayNonce((n) => n + 1);
  };

  return (
    <span
      className={rootClass}
      aria-label={text}
      aria-live="off"
      onMouseEnter={handleMouseEnter}
    >
      {output}
    </span>
  );
}

export function HackerWord(props: HackerWordProps) {
  const charset = props.charset ?? DEFAULT_CHARSET;
  const resolveIntervalMs = props.resolveIntervalMs ?? DEFAULT_RESOLVE_MS;
  const scrambleIntervalMs = props.scrambleIntervalMs ?? DEFAULT_SCRAMBLE_MS;

  if (props.text.length === 0) {
    return null;
  }

  const instanceKey = `${props.text}\0${charset}\0${resolveIntervalMs}\0${scrambleIntervalMs}`;

  return (
    <HackerWordImpl
      key={instanceKey}
      text={props.text}
      charset={charset}
      resolveIntervalMs={resolveIntervalMs}
      scrambleIntervalMs={scrambleIntervalMs}
      onComplete={props.onComplete}
      className={props.className}
      retriggerOnHover={props.retriggerOnHover ?? false}
    />
  );
}
