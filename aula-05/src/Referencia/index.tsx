import { useEffect, useRef } from 'react'

const Referencia = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        console.log(refDiv)
        refDiv.current!.style.background = "red"
    }, [])

    return <div ref={refDiv}>Referencia</div>
}

export { Referencia }
