import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import SectorPage from './pages/SectorPage'
import { sectors } from './data/sectors'

function ScrollReset(){ const { pathname } = useLocation(); useEffect(()=>window.scrollTo(0,0),[pathname]); return null }
export default function App(){ return <><ScrollReset/><AnimatePresence mode="wait"><Routes><Route path="/" element={<Home/>}/>{sectors.map(sector=><Route key={sector.slug} path={sector.slug} element={<SectorPage sector={sector}/>}/>)}</Routes></AnimatePresence></> }
