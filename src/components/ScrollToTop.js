import React, { useEffect } from "react";
import { useLocation } from "@reach/router"; 

const ScrollToTop  = () => {

    const { pathname } = useLocation()
    useEffect(()=> 
    {
        scrollToBlogPost( pathname )
    }, [pathname])
  
    
    return ( 
        <div className="scroll-to-top" aria-label="Scroll To Top" id="scrolltotop" onClick={scrollToTop} onKeyDown={scrollToTop} role="button" tabIndex={0} ></div>
        );
        
}

const scrollToBlogPost = ( pathname) =>
{
    if(typeof window !== 'undefined')
    {           
        if( pathname === '/blog')
        {
            window.scrollTo({top:130, behavior:"smooth"})
        }
        else if( pathname.includes('/blog'))
        {           
            window.scrollTo({top:400, behavior:"smooth"})
        }
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