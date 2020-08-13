import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";



export default function Contactus ()  {
    const { ref } = useWebAnimations({

        keyframes: [
                    { transform: "translateX(25px)" },
                    { transform: "translateX(20px)" }
                    ],
        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });

   
      return (
        <div style={{backgroundColor: "gray", backgroundSize:"100%", height:"925px"}}>
       
          
          <div ref={ref} style={{ width: "100px", height: "50px", alignItems: "center", top:"350px", position: "absolute" ,fontSize: "16px"}}>
            <href  aria-current="page" class="nav__link w-nav-link w--current">Contact us</href>
          </div>


   
        </div>
      );

      
};