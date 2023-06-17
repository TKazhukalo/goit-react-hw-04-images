import React from "react";
import { InfinitySpin } from  'react-loader-spinner'
import {  LoaderAnimation } from "./Loader.styled";
 const Loader = () => {
   return (
     
  <LoaderAnimation> <InfinitySpin 
  width='200'
  color="#40ae3e" />
   { /*<MyLoader />*/}
       </LoaderAnimation>
    
    )
}

export default Loader;