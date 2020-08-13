
import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
  

export default function BottomNav ()  {
    const classes = useStyles();
     
    const { ref} = useWebAnimations({

        keyframes: [
                    { transform: "translateX(-10px)" },
                    { transform: "translateX(80px)" }
                    ],
        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });
      return (
            <div ref={ref} style={{ top:"850px", position: "absolute", left: "40%", fontSize: "32px"}}>
                <div className={classes.root} >

                
                

                </div>
            </div>
      );
};