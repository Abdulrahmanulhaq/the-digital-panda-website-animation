import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import Home1 from './Home1'; 
import Aboutus from './Aboutus'; 
import Contactus from './Contactus'; 
import Wedeliver from './Wedeliver';

import Panda1 from './Panda1';
import Mailicon from './Mailicon'; 
 



import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function Animation1 ()  {
    const classes = useStyles();
    const { ref} = useWebAnimations({

        keyframes: [
                    { transform: "translateX(25px)" },
                    { transform: "translateX(40px)" }
                    ],
        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });

   
      return (
        <div style={{backgroundColor: "white", backgroundSize:"100%", height:"100%"}}>
           
          <div ref={ref} style={{ width: "100px", height: "50px", alignItems: "center", top:"200px", position: "absolute",fontSize: "21px"}}>
            
          </div>                  
         
          <Panda1 /> 
          <Home1 /> 
          <Aboutus /> 
          <Contactus   /> 
          <Wedeliver   /> 
          <Mailicon />
         
  
        

          <div className={classes.root} style={{ top:"478px", position: "absolute", left:"180px"}}>

            <Button variant="outlined" color="secondary">
              Check out our Work
            </Button>

          </div>

          <div ref={ref} style={{ width: "600px", height: "10px", alignItems: "right", top:"600px", position: "absolute", left: "13%", fontSize: "12px"}}>

            <h1 animated="true" class="heading--intro" color="red">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Ullamcorper sit amet risus nullam eget felis eget. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. In aliquam sem fringilla ut morbi tincidunt augue interdum. Placerat vestibulum lectus mauris ultrices. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Tellus pellentesque eu tincidunt tortor aliquam. Vitae turpis massa sed elementum tempus. Nibh cras pulvinar mattis nunc. Sed lectus vestibulum mattis ullamcorper velit sed. Pellentesque habitant morbi tristique senectus et netus et.

A iaculis at erat pellentesque adipiscing commodo. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Cursus risus at ultrices mi tempus imperdiet nulla. Aliquet porttitor lacus luctus accumsan. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Eu mi bibendum neque egestas congue quisque. Ornare massa eget egestas purus viverra accumsan in nisl. Purus in mollis nunc sed id semper risus in. Volutpat diam ut venenatis tellus in metus. Accumsan tortor posuere ac ut consequat. Sagittis purus sit amet volutpat consequat mauris nunc congue. Non pulvinar neque laoreet suspendisse interdum. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Ante metus dictum at tempor commodo. Orci phasellus egestas tellus rutrum.

Nec ullamcorper sit amet risus. A erat nam at lectus urna duis convallis convallis tellus. Hac habitasse platea dictumst vestibulum. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Varius duis at consectetur lorem donec massa sapien faucibus. Ornare lectus sit amet est. Viverra accumsan in nisl nisi scelerisque eu ultrices. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Odio aenean sed adipiscing diam donec adipiscing tristique. Fermentum leo vel orci porta non. Proin libero nunc consequat interdum varius. Accumsan in nisl nisi scelerisque eu ultrices vitae. Auctor augue mauris augue neque gravida. Pulvinar elementum integer enim neque volutpat ac. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Elit ullamcorper dignissim cras tincidunt lobortis.

Quam nulla porttitor massa id neque aliquam vestibulum morbi. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. At imperdiet dui accumsan sit amet. Et leo duis ut diam quam. Sagittis orci a scelerisque purus semper eget duis at tellus. Vulputate ut pharetra sit amet aliquam. Feugiat pretium nibh ipsum consequat. Blandit aliquam etiam erat velit scelerisque in dictum non. Ridiculus mus mauris vitae ultricies leo integer malesuada. Iaculis at erat pellentesque adipiscing. Lacinia at quis risus sed vulputate odio. Pretium nibh ipsum consequat nisl vel pretium lectus. Adipiscing vitae proin sagittis nisl rhoncus. Eu consequat ac felis donec. Enim blandit volutpat maecenas volutpat blandit aliquam. Luctus accumsan tortor posuere ac ut consequat. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. At urna condimentum mattis pellentesque id nibh tortor id aliquet.

Sit amet est placerat in. Scelerisque purus semper eget duis at tellus at urna. Ut ornare lectus sit amet est. Nisl pretium fusce id velit ut. Risus sed vulputate odio ut. Sapien pellentesque habitant morbi tristique senectus. Dignissim sodales ut eu sem integer vitae justo eget magna. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Sagittis purus sit amet volutpat. Enim nunc faucibus a pellentesque sit amet porttitor. In nibh mauris cursus mattis molestie a iaculis at. Nisl suscipit adipiscing bibendum est ultricies integer.

Vel pretium lectus quam id leo in vitae turpis massa. Amet consectetur adipiscing elit pellentesque. Tellus elementum sagittis vitae et leo duis ut diam. Felis imperdiet proin fermentum leo vel orci. Tempus egestas sed sed risus pretium. Aliquet sagittis id consectetur purus ut. Massa enim nec dui nunc mattis enim ut. Posuere urna nec tincidunt praesent semper feugiat nibh. Quis blandit turpis cursus in. Nisl condimentum id venenatis a.

Et ligula ullamcorper malesuada proin libero nunc. Viverra vitae congue eu consequat ac felis donec. Augue interdum velit euismod in pellentesque massa placerat duis. Sapien eget mi proin sed libero enim sed. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Donec adipiscing tristique risus nec. Purus sit amet luctus venenatis. Et malesuada fames ac turpis egestas sed tempus urna et. Tincidunt tortor aliquam nulla facilisi cras fermentum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Diam sit amet nisl suscipit adipiscing bibendum est. Pellentesque sit amet porttitor eget dolor morbi. Sed libero enim sed faucibus turpis in. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Pellentesque adipiscing commodo elit at. Mattis molestie a iaculis at erat pellentesque adipiscing commodo.

Sit amet nisl purus in mollis. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ullamcorper dignissim cras tincidunt lobortis feugiat. Volutpat odio facilisis mauris sit amet massa vitae tortor. At tempor commodo ullamcorper a. Morbi tristique senectus et netus et malesuada. Est placerat in egestas erat imperdiet sed. Eu mi bibendum neque egestas. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet nisl purus in mollis nunc. Justo laoreet sit amet cursus sit amet dictum sit. Eget duis at tellus at urna condimentum mattis pellentesque id. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Nec feugiat nisl pretium fusce id. In est ante in nibh.

Mauris rhoncus aenean vel elit scelerisque mauris. Hac habitasse platea dictumst quisque. Egestas sed sed risus pretium quam vulputate. Ultrices gravida dictum fusce ut placerat orci. Risus in hendrerit gravida rutrum. Tellus in metus vulputate eu scelerisque. Ut aliquam purus sit amet. Nec dui nunc mattis enim ut tellus. Malesuada nunc vel risus commodo viverra maecenas. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Egestas sed sed risus pretium quam vulputate. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Vitae semper quis lectus nulla at. At risus viverra adipiscing at in tellus. Volutpat est velit egestas dui id ornare arcu odio. Libero justo laoreet sit amet cursus.

Est ullamcorper eget nulla facilisi etiam dignissim diam. Arcu risus quis varius quam quisque id diam. Fusce ut placerat orci nulla pellentesque dignissim. Nulla malesuada pellentesque elit eget. Volutpat ac tincidunt vitae semper. Tortor aliquam nulla facilisi cras fermentum. Facilisi cras fermentum odio eu feugiat pretium nibh. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Tristique magna sit amet purus gravida quis blandit turpis. Arcu cursus euismod quis viverra nibh cras pulvinar. Eleifend quam adipiscing vitae proin sagittis. Pharetra massa massa ultricies mi quis hendrerit dolor. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Est ultricies integer quis auctor elit sed vulputate. Amet tellus cras adipiscing enim eu turpis. Turpis egestas sed tempus urna et pharetra. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. A diam maecenas sed enim ut sem viverra aliquet. Facilisis volutpat est velit egestas dui.

Magna eget est lorem ipsum dolor sit amet. Neque convallis a cras semper. Duis at consectetur lorem donec massa sapien faucibus et molestie. Tempus iaculis urna id volutpat lacus. Pellentesque nec nam aliquam sem et tortor consequat id. Massa sapien faucibus et molestie ac feugiat sed. Malesuada fames ac turpis egestas maecenas pharetra convallis. In cursus turpis massa tincidunt. Enim neque volutpat ac tincidunt vitae semper. Aliquam vestibulum morbi blandit cursus risus. Consectetur a erat nam at. Ut aliquam purus sit amet luctus venenatis. Enim facilisis gravida neque convallis a cras semper auctor neque. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Pellentesque habitant morbi tristique senectus et. Malesuada pellentesque elit eget gravida cum sociis. Lectus quam id leo in vitae turpis massa sed. Sed risus pretium quam vulputate dignissim suspendisse in est. Viverra aliquet eget sit amet tellus.

Sit amet mattis vulputate enim nulla aliquet porttitor. Suspendisse sed nisi lacus sed viverra. Pulvinar pellentesque habitant morbi tristique. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Sed libero enim sed faucibus turpis in eu. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Sapien eget mi proin sed libero enim sed faucibus turpis. Nibh tortor id aliquet lectus proin. Sit amet aliquam id diam maecenas ultricies mi eget. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Mauris nunc congue nisi vitae.

Ipsum dolor sit amet consectetur adipiscing. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Egestas diam in arcu cursus euismod quis. Id volutpat lacus laoreet non curabitur gravida arcu ac. Ullamcorper eget nulla facilisi etiam. Mi quis hendrerit dolor magna eget est lorem ipsum. Sem et tortor consequat id porta nibh. Mi quis hendrerit dolor magna eget est lorem. Duis ut diam quam nulla porttitor massa id neque. Vel risus commodo viverra maecenas. Venenatis cras sed felis eget velit aliquet sagittis. Lobortis feugiat vivamus at augue eget arcu. Sagittis vitae et leo duis ut diam quam nulla. In nisl nisi scelerisque eu ultrices vitae. Ipsum nunc aliquet bibendum enim. Odio tempor orci dapibus ultrices. Nunc mattis enim ut tellus. Duis convallis convallis tellus id. Tempus egestas sed sed risus. Diam volutpat commodo sed egestas egestas fringilla phasellus.

Volutpat sed cras ornare arcu dui vivamus. Massa sapien faucibus et molestie ac feugiat. Non nisi est sit amet facilisis magna. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Maecenas pharetra convallis posuere morbi leo. Integer quis auctor elit sed vulputate. Sit amet mattis vulputate enim nulla aliquet. Sed arcu non odio euismod lacinia at. Tincidunt id aliquet risus feugiat in ante. Massa ultricies mi quis hendrerit dolor magna. Feugiat sed lectus vestibulum mattis ullamcorper. Quam pellentesque nec nam aliquam sem et tortor consequat. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra.

Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Arcu cursus vitae congue mauris rhoncus. Quam nulla porttitor massa id neque. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis commodo odio aenean sed. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu lobortis elementum nibh tellus molestie nunc. Consectetur adipiscing elit pellentesque habitant morbi tristique. Adipiscing elit ut aliquam purus sit. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. In nisl nisi scelerisque eu ultrices vitae auctor. Justo donec enim diam vulputate ut. Praesent elementum facilisis leo vel fringilla est. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Velit scelerisque in dictum non consectetur a. Morbi enim nunc faucibus a pellentesque sit amet porttitor.

Justo eget magna fermentum iaculis eu non diam. Diam vel quam elementum pulvinar. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Praesent elementum facilisis leo vel fringilla. Adipiscing vitae proin sagittis nisl rhoncus mattis. Diam ut venenatis tellus in metus vulputate eu. Sed odio morbi quis commodo odio aenean sed adipiscing. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Commodo quis imperdiet massa tincidunt nunc. Ipsum suspendisse ultrices gravida dictum. Venenatis tellus in metus vulputate eu scelerisque felis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.

A diam sollicitudin tempor id eu nisl. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Tortor pretium viverra suspendisse potenti. Suscipit tellus mauris a diam. Lectus mauris ultrices eros in cursus. Volutpat commodo sed egestas egestas fringilla. Tristique magna sit amet purus gravida quis blandit turpis. Lacinia at quis risus sed. Diam quam nulla porttitor massa id neque. Fermentum et sollicitudin ac orci phasellus egestas. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Nec feugiat nisl pretium fusce. Leo urna molestie at elementum eu facilisis sed. Amet consectetur adipiscing elit duis. Morbi tincidunt ornare massa eget. Vestibulum morbi blandit cursus risus.

Sit amet volutpat consequat mauris nunc congue nisi vitae. Purus in massa tempor nec feugiat nisl pretium fusce id. Sit amet venenatis urna cursus eget. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Risus commodo viverra maecenas accumsan lacus vel facilisis. Dignissim convallis aenean et tortor at. Cursus metus aliquam eleifend mi in nulla posuere. Molestie at elementum eu facilisis sed odio morbi quis commodo. Sit amet risus nullam eget felis. Viverra adipiscing at in tellus integer feugiat scelerisque. Pellentesque elit eget gravida cum sociis natoque. Tristique senectus et netus et malesuada fames. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sed tempus urna et pharetra pharetra. Sed nisi lacus sed viverra. Pretium viverra suspendisse potenti nullam ac tortor. At quis risus sed vulputate odio ut enim. Egestas sed tempus urna et pharetra. Nisl rhoncus mattis rhoncus urna neque. Nec feugiat in fermentum posuere urna nec tincidunt.

Viverra ipsum nunc aliquet bibendum enim facilisis. Mauris a diam maecenas sed enim ut sem viverra aliquet. Quisque egestas diam in arcu cursus euismod quis viverra. Non tellus orci ac auctor augue. Id ornare arcu odio ut sem nulla pharetra diam. Urna nec tincidunt praesent semper feugiat. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Placerat vestibulum lectus mauris ultrices eros in. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Dui nunc mattis enim ut. Egestas pretium aenean pharetra magna. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Lobortis elementum nibh tellus molestie nunc. Ullamcorper a lacus vestibulum sed arcu non odio euismod.

Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Mattis enim ut tellus elementum sagittis vitae et. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Cras pulvinar mattis nunc sed blandit libero. Quis ipsum suspendisse ultrices gravida dictum. Metus aliquam eleifend mi in nulla posuere sollicitudin. In eu mi bibendum neque egestas congue quisque. Turpis in eu mi bibendum. Enim sed faucibus turpis in eu mi bibendum neque egestas.</h1>
          </div>
       


        </div>
      );

      
};

//        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "steps(10,end)" },
//        timing: { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in" },
//                    { transform: "translateX(0px)" , background: "red"},
//      { transform: "translateX(500px)", background: "green" }