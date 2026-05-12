import type { ChangeEventHandler, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import './ContactField.scss';

type BaseContactFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  fieldClassName?: string;
  error?: string | null;
};

type InputContactFieldProps = BaseContactFieldProps & {
  as?: 'input';
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'id' | 'name' | 'value' | 'onChange' | 'className' | 'placeholder'
  >;
};

type TextareaContactFieldProps = BaseContactFieldProps & {
  as: 'textarea';
  textareaProps?: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'id' | 'name' | 'value' | 'onChange' | 'className' | 'placeholder'
  >;
};

type ContactFieldProps = InputContactFieldProps | TextareaContactFieldProps;

export function ContactField(props: ContactFieldProps) {
  const { id, name, label, value, onChange, fieldClassName, error } = props;

  const className = fieldClassName ? `contact__field ${fieldClassName}` : 'contact__field';
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={className}>
      {props.as === 'textarea' ? (
        <>
          <textarea
            className="contact__input contact__input--textarea"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder=" "
            {...props.textareaProps}
            aria-invalid={error ? true : undefined}
            aria-describedby={errorId}
          />
          <span className="contact__top-border" aria-hidden="true" />
        </>
      ) : (
        <input
          className="contact__input"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          {...props.inputProps}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
        />
      )}
      <label className="contact__label" htmlFor={id}>
        {label}
      </label>
      {error ? (
        <p id={errorId} className="contact__field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
