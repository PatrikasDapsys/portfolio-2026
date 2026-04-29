import './LandingSocialLink.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

type LandingSocialLinkProps = {
  icon: IconProp
  label: string
  link: string
}

export function LandingSocialLink({ icon, label, link }: LandingSocialLinkProps) {
  return (
    <li className="landing-social-link">
      <a className="landing-social-link__container" href={link} target="_blank" rel="noopener noreferrer">
        <span className="landing-social-link__text highlight">{label}</span>
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  )
}
