import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";



export default function Home1 ()  {
    const { ref } = useWebAnimations({

        keyframes: [
                    { transform: "translateX(25px)" },
                    { transform: "translateX(58px)" }
                    ],
        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });

   
      return (
        <div style={{backgroundColor: "gray", backgroundSize:"100%", height:"925px"}}>
       
          
          <div ref={ref} style={{ width: "100px", height: "50px", alignItems: "center", top:"200px", position: "absolute",fontSize: "20px"}}>
            <href  aria-current="page"  >Works</href>
          </div>


   
        </div>
      );

      
};