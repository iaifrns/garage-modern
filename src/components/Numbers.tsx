import React from 'react'
import { useSpring, animated } from 'react-spring'

interface NumberComponentType {
    num: number,
    style: string
}

const Numbers: React.FC<NumberComponentType> = ({num, style}) => {

    const {number} = useSpring({
        from: {number: 0},
        number: num,
        delay: 200,
        config: {mass: 1, tension: 20, friction: 10}
    })

  return (
    <animated.div className={style}>{number.to((n)=>n.toFixed(0))}</animated.div>
  )
}

export default Numbers
