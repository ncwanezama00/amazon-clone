import React from'react';
import "./RightSide.css"
import Product from './Product';

function RightSidePanel(props){
    return(
        <div className='RightSide_main'>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         
        </div>
    )
}

export default RightSidePanel;