import MainContent, { type Section } from './components/MainContent'
import { Navbar } from './components/Navbar'
import { useState } from 'react'

function App() {
  const [section, setSection] = useState<Section>('home')

  return (
    <>
      <Navbar section={section} setSection={setSection} />

      <main className="portfolio-shell">
        <MainContent section={section} />
      </main>
    </>
  )
}


export default App
