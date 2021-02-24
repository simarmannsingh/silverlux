import { useEffect } from "react";
import { useLocation } from "@reach/router"; 

const ScrollToTop  = () => {

    // const [visible, setVisible] = useState(false)
    const { pathname } = useLocation()
    // const { y:pageYOffset } = useWindowScroll()
    
    useEffect(()=> {
        // if(pageYOffset > 400){
        // setVisible(true)
        // }      
        // else{
        // setVisible(false)
        // } 
        if(typeof window !== 'undefined' && pathname !=="/" && pathname !=="/about")
        {
            window.scrollTo({top:400, behavior:"smooth"})
        }
    }, [pathname])

    return null

//     if(!visible){
//         return false
//     }

//     return ( 
//         <button className="scroll-to-top" id="scrolltotop" onClick={scrollToTop} ></button>
//      );
}

// const scrollToTop = () => {  
//     window.scrollTo({top:0, behavior:"smooth"}) 
//   }
 
export default ScrollToTop;