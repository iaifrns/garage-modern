import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

interface NumberComponentType {
    num: number,
    style: string
}

const Numbers: React.FC<NumberComponentType> = ({num, style}) => {

    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.5})

    const {number} = useSpring({
        from: {number: 0},
        number: inView ? num : 0,
        delay: 200,
        config: {mass: 1, tension: 20, friction: 10}
    })

  return (
    <animated.div ref={ref} className={style}>{number.to((n)=>n.toFixed(0))}</animated.div>
  )
}

export default Numbers
