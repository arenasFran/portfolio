import { Home } from './Home'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { type ReactElement, type Dispatch, type SetStateAction } from 'react'

export type Section = 'home' | 'projects' | 'experience' | 'contact'

type Props = {
  section: Section
  setSection: Dispatch<SetStateAction<Section>>
}

export default function MainContent({ section, setSection }: Props) {
  const sections: Record<Section, ReactElement> = {
    home: <Home setSection={setSection} />,
    projects: <Projects />,
    experience: <section className="hero-panel"><h1 className="profile-name">Experience</h1><p className="intro-copy">Experience section coming soon.</p></section>,
    contact: <Contact />,
  }

  return sections[section]
}
