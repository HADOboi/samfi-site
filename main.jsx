import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import App from './App'
import './styles/index.css'

function Root() {
  useEffect(() => window.scrollTo(0, 0), [])
  return <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}><HashRouter><App /></HashRouter></ReactLenis>
}
createRoot(document.getElementById('root')).render(<Root />)
