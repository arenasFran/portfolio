import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type ExperienceItem = {
  role: string
  company: string
  date: string
  description: string
  technologies?: string[]
  current?: boolean
}

const experiences: ExperienceItem[] = [
  {
    role: 'IT Technician Intern',
    company: 'Intendencia de Colonia',
    date: 'Jan 2026 - Present',
    description: 'Providing technical support and maintenance for internal systems, assisting with troubleshooting, hardware setup, and ensuring smooth day-to-day IT operations.',
    technologies: ['Hardware', 'Networking', 'Windows', 'Technical Support'],
    current: true,
  },
  {
    role: 'Frontend Developer',
    company: 'Centro Viena (Client Project)',
    date: 'Mar 2026',
    description: 'Developed a product catalog web application with a focus on performance and usability, simulating an e-commerce experience without checkout by integrating direct WhatsApp contact for inquiries.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
  },
]

const itemMotion = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
}

const dotMotion = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}


export const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.9', 'end 0.25'],
  })

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="w-[min(760px,calc(100%-2rem))] mx-auto px-4 py-8 sm:px-0" aria-label="Experience timeline">
      <header className="text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Selected experience</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2.6rem,5vw,4rem)] font-normal leading-none text-ink">
          Experience
        </h1>
      </header>

      <div ref={timelineRef} className="relative mt-14">
        <div className="absolute left-[0.45rem] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
        <motion.div
          aria-hidden="true"
          className="absolute left-[0.45rem] top-2 w-px origin-top bg-accent/70"
          style={{ scaleY: prefersReducedMotion ? 1 : lineProgress }}
        />

        <div className="space-y-7 sm:space-y-8">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              className="group relative pl-10 sm:pl-12"
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView={prefersReducedMotion ? undefined : 'visible'}
              variants={itemMotion}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.current && !prefersReducedMotion && (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-6 z-[5] size-[0.7rem] rounded-full border border-[#4CAF7D]/60"
                  animate={{ scale: [1, 1.85], opacity: [0.45, 0] }}
                  transition={{ duration: 1.8, ease: 'easeOut', repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.2 }}
                />
              )}

              <motion.span
                aria-hidden="true"
                className={`absolute left-0 top-6 z-10 size-[0.7rem] rounded-full border shadow-[0_0_0_6px_rgba(191,123,47,0.05)] transition-[transform,box-shadow] duration-200 group-hover:scale-[1.18] group-hover:shadow-[0_0_0_8px_rgba(191,123,47,0.1)] ${item.current ? 'border-[#4CAF7D] bg-[#4CAF7D]' : 'border-accent/35 bg-paper'}`}
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView={prefersReducedMotion ? undefined : 'visible'}
                variants={dotMotion}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.4, delay: index * 0.12 + 0.04, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.div
                className="border-b border-line/70 pb-7 pr-1 transition-[transform,border-color] duration-250 group-hover:border-accent/45"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <div className="flex flex-col items-start gap-1.5">
                  <h2 className="m-0 font-[family-name:var(--font-display)] text-[clamp(1.55rem,2.8vw,1.9rem)] font-normal leading-tight text-ink transition-colors duration-200 group-hover:text-[#211813]">
                    {item.role}
                  </h2>
                  <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.11em] text-muted/75 transition-colors duration-200 group-hover:text-muted">
                    <span className={`size-1.5 rounded-full ${item.current ? 'bg-[#4CAF7D]' : 'bg-[#b7b7b7]'}`} />
                    {item.date}
                  </span>
                </div>

                <p className="mt-1 text-[15px] font-semibold text-accent/90 transition-colors duration-200 group-hover:text-accent">
                  {item.company}
                </p>

                <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.72] text-muted">
                  {item.description}
                </p>

                {item.technologies && item.technologies.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1" aria-label="Technologies used">
                    {item.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-white/60 px-2.5 py-1 text-[13px] font-medium text-muted"
                      >
                        <span aria-hidden="true" className="size-1 rounded-full bg-accent/70" />
                        {technology}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}