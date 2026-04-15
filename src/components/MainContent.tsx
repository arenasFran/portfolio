import { Home } from './Home'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Experience } from './Experience'
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
    experience: <Experience />,
    contact: <Contact />,
  }

  return sections[section]
}
