import MainContent, { type Section } from './components/MainContent'
import { Navbar } from './components/Navbar'
import { useState } from 'react'

function App() {
  const [section, setSection] = useState<Section>('home')

  return (
    <>
      <Navbar section={section} setSection={setSection} />

      <main className="min-h-screen relative flex items-center justify-center px-[min(9vw,8rem)] py-16 overflow-hidden max-sm:min-h-auto max-sm:py-24 max-sm:px-4">
        <MainContent section={section} setSection={setSection} />
      </main>
    </>
  )
}


export default App
