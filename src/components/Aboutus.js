import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";



export default function Aboutus ()  {
    const { ref } = useWebAnimations({

        keyframes: [
                    { transform: "translateX(25px)" },
                    { transform: "translateX(40px)" }
                    ],
        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });

   
      return (
        <div style={{backgroundColor: "gray", backgroundSize:"100%", height:"925px"}}>
       
          
          <div ref={ref} style={{ width: "100px", height: "50px", alignItems: "center", top:"280px", position: "absolute"}}>
            <href  color="white">About us</href>
          </div>


   
        </div>
      );

      
};