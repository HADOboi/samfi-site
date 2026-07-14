import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Reveal({children, className=''}){const ref=useRef();useLayoutEffect(()=>{const ctx=gsap.context(()=>gsap.fromTo(ref.current,{opacity:0,y:28},{opacity:1,y:0,duration:.85,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 88%'}}),ref);return()=>ctx.revert()},[]);return <div ref={ref} className={className}>{children}</div>}
