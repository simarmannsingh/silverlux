import React, { useEffect, useState } from "react";
// import { useWindowScroll } from 'react-use'

const ScrollToTop  = () => {

    const [visible, setVisible] = useState(false)
    // const { y:pageYOffset } = useWindowScroll()
    
    useEffect(()=> {
        if(pageYOffset > 400){
        setVisible(true)
        }      
        else{
        setVisible(false)
        }     
    }, [pageYOffset])

    if(!visible){
        return false
    }

    return ( 
        <button className="scroll-to-top" id="scrolltotop" onClick={scrollToTop} ></button>
     );
}

const scrollToTop = () => {  
    window.scrollTo({top:0, behavior:"smooth"})    
  }
 
export default ScrollToTop;