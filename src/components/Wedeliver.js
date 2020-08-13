import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";



export default function Wedeliver ()  {
    const { ref } = useWebAnimations();

   
      return (
        <div style={{backgroundColor: "gray", backgroundSize:"100%", height:"925px"}}>
       
          
          <div ref={ref} style={{ width: "600px", height: "10px", alignItems: "right", top:"60px", position: "absolute", left: "13%", fontSize: "32px"}}>

            <h1 animated="true" class="heading--intro" color="red">We deliver digital products &amp; strategies that help you grow</h1>
          </div>


   
        </div>
      );

      
};