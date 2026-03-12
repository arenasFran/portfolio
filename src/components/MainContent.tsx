import { Home } from './Home'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { type ReactElement } from 'react'

export type Section = 'home' | 'projects' | 'experience' | 'contact'

type Props = {
  section: Section
}

export default function MainContent({ section }: Props) {
  const sections: Record<Section, ReactElement> = {
    home: <Home />,
    projects: <Projects />,
    experience: <section className="hero-panel"><h1 className="profile-name">Experience</h1><p className="intro-copy">Experience section coming soon.</p></section>,
    contact: <Contact />,
  }

  return sections[section]
}
