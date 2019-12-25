import React from 'react';
import Preloader from "../common/Preloader/Preloader";

export const withSuspence = (Component) => {

   return (props) => {
       return <React.Suspense fallback={<div>...load</div>}>
           <Component {...props}/>
       </React.Suspense>
   }
}