import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router"; 

const ScrollToTop  = () => {

    const [visible, setVisible] = useState(false)
    const { pathname } = useLocation()
    // const scrollValue
    useEffect(()=> 
    {
        scrollToBlogPost( pathname )
        setVisible(true)
        // if(typeof window !== 'undefined')
        // {            
        //     scrollValue = window.scrollY
        //     if( scrollValue > 50 )
        //         setVisible(true)
        //     else
        //         setVisible(false)
        // }
    }, [pathname])

    if(!visible)
    {
        return false
    }
    else
    {
        return ( 
            <button className="scroll-to-top" id="scrolltotop" onClick={scrollToTop} ></button>
         );
    }    
}

const scrollToBlogPost = ( pathname) =>
{
    if(typeof window !== 'undefined' && pathname !=="/" && pathname !=="/about")
    {           
        window.scrollTo({top:400, behavior:"smooth"})
    }
}

const scrollToTop = () => 
{
    if(typeof window !== 'undefined')
    {
      window.scrollTo({top:0, behavior:"smooth"})
    }
    
}
 
export default ScrollToTop;