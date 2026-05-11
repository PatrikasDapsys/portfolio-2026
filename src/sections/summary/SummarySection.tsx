import { useEffect, useRef, useState } from 'react'
import './SummarySection.scss'
import portfolioPhoto from '../../assets/portfolioPhoto.webp'

const PORTFOLIO_PHOTO_WIDTH = 902
const PORTFOLIO_PHOTO_HEIGHT = 800

export function SummarySection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = imageRef.current;
    if (img?.complete && img.naturalWidth > 0) setImageLoaded(true);
  }, []);

  return (
    <section id="summary" className="summary">
      <h2 className="section-title">
        Summary
      </h2>
      <div className="summary__container">
        <div
          className={`summary__image-wrapper${imageLoaded ? ' summary__image-wrapper--loaded' : ''}`}
        >
          <div className="summary__image-skeleton" aria-hidden="true" />
          <img
            ref={imageRef}
            className="summary__image"
            src={portfolioPhoto}
            width={PORTFOLIO_PHOTO_WIDTH}
            height={PORTFOLIO_PHOTO_HEIGHT}
            alt="Patrikas portrait"
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </div>
        <div className="summary__text">
          <h3 className="summary__text-title">About Me</h3>
          <p>
          Frontend Developer specializing in Vue 3, React, and TypeScript,
          with experience building scalable, high-performance web applications
          in international Agile teams.
          <br />
          <br />
          Focused on clean architecture, responsive UI
          development, and performance optimization, including improving page speed
          and achieving perfect Lighthouse SEO scores.
          <br />
          <br />
          Experienced in integrating
          frontend systems with Laravel backends and using AI-powered tools to
          improve development workflows and code quality.
          <br />
          <br />
          Outside of development, I enjoy sports and paramotoring.
          </p>
        </div>
      </div>
    </section>
  )
}
