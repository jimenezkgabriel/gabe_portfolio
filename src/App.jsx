import React from 'react'
import { useState } from 'react'
import MainInput from './components/MainInput'
import About from './components/About'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <CssBaseline />
      <MainInput hasStarted={hasStarted} setHasStarted={setHasStarted} setShowAbout={setShowAbout} />
      <h1>{hasStarted ? "Started" : "Not Started"}</h1>
      {showAbout && <About />}
    </>
  )
}

export default App
