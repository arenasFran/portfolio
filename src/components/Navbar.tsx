import { IoHomeOutline } from 'react-icons/io5'
import { GrProjects } from 'react-icons/gr'
import { type Dispatch, type ReactNode, type SetStateAction } from 'react'
import { type Section } from './MainContent'

const navItems: Array<{ id: Section; label: string; glyph: ReactNode }> = [
    { id: 'home', label: 'Home', glyph: <IoHomeOutline /> },
    { id: 'projects', label: 'Projects', glyph: <GrProjects /> },
    { id: 'experience', label: 'Experience', glyph: '##' },
    { id: 'contact', label: 'Contact', glyph: '@@' },
]

type NavbarProps = {
    section: Section
    setSection: Dispatch<SetStateAction<Section>>
}

export const Navbar = ({ section, setSection }: NavbarProps) => {
  return (
    <aside className="side-nav" aria-label="Section links">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`side-link ${section === item.id ? 'active' : ''}`}
          onClick={() => setSection(item.id)}
          aria-current={section === item.id ? 'page' : undefined}
        >
          <span aria-hidden="true" className="glyph">
            {item.glyph}
          </span>
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  )
}

