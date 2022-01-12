//constants
import { white } from "../../constants/constants";

//effects
import { motion, useAnimation } from "framer-motion"

//function
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

export default function Title({title}) {
    const {ref, inView} = useInView({threshold: 0.2})
    const animation = useAnimation()

    useEffect(() => {
        if(inView) {
            animation.start({
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .3
                }
            })
        }
        if(!inView) {
            animation.start({
                scale: .8,
                opacity: 0
            })
        }
    },[inView])

    return(
        <motion.h1 
            ref={ref}
            animate={animation}
            style={{
                fontSize: '3rem', 
                color: white,
                maxWidth: '610px'
            }}
        >
            {title}
        </motion.h1>
    )
}