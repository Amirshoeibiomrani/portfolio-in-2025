"use client"

import { useScrollProgress } from "@/hooks/useScrollProgress"

// hooks


// variants
const variants = {
    hidden: {opacity:0},
    enter: {opacity: 1}
}

const template=({children})=> {
    const completion = useScrollProgress()
  return (
    <div>template</div>
  )
}

export default template