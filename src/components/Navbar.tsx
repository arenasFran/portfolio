import { IoHomeOutline, IoHome } from 'react-icons/io5'
import { GrProjects } from 'react-icons/gr'
import { FiBriefcase, FiMail } from 'react-icons/fi'
import { type Dispatch, type ReactNode, type SetStateAction } from 'react'
import { type Section } from './MainContent'

const navItems: Array<{ id: Section; label: string; glyph: ReactNode; glyphActive: ReactNode }> = [
    { id: 'home', label: 'Home', glyph: <IoHomeOutline />, glyphActive: <IoHome /> },
    { id: 'projects', label: 'Projects', glyph: <GrProjects />, glyphActive: <GrProjects /> },
    { id: 'experience', label: 'Experience', glyph: <FiBriefcase />, glyphActive: <FiBriefcase /> },
    { id: 'contact', label: 'Contact', glyph: <FiMail />, glyphActive: <FiMail /> },
]

type NavbarProps = {
    section: Section
    setSection: Dispatch<SetStateAction<Section>>
}

export const Navbar = ({ section, setSection }: NavbarProps) => {
  return (
    <aside className="fixed right-0 top-0 z-20 h-screen w-[min(108px,22vw)] border-l border-line flex flex-col justify-center gap-6 p-4 bg-gradient-to-b from-transparent to-white/[0.16] max-lg:w-24 max-sm:fixed max-sm:bottom-0 max-sm:top-auto max-sm:right-0 max-sm:left-0 max-sm:w-full max-sm:h-[72px] max-sm:border-l-0 max-sm:border-t max-sm:flex-row max-sm:justify-around max-sm:gap-0 max-sm:bg-paper-deep" aria-label="Section links">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`bg-transparent border-0 cursor-pointer font-inherit no-underline grid justify-items-center gap-1.5 text-[0.9rem] font-medium transition-all duration-200 relative ${section === item.id ? 'text-accent' : 'text-muted hover:text-ink'}`}
          onClick={() => setSection(item.id)}
          aria-current={section === item.id ? 'page' : undefined}
        >
          {section === item.id && (
            <span className="absolute left-[-1rem] top-[10%] w-[3px] h-[80%] bg-accent rounded-[4px] max-sm:left-[12%] max-sm:top-[-7px] max-sm:w-[76%] max-sm:h-[3px]" />
          )}
          <span aria-hidden="true" className="text-xl transition-transform duration-200">{section === item.id ? item.glyphActive : item.glyph}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  )
}

