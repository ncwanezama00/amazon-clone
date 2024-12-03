import React from'react';
import "./LeftSide.css"

function LeftSidePanel(props){
    return(
        <div className='LeftSize_main'>
          <div className='LeftSide_header'>
            Brand
          </div>
          <div className='LeftSide_brandname'>
            <label className='brandname'>
              <input type='checkbox' value="Apple"/>Apple
            </label>
            <label className='brandname'>
              <input type='checkbox' value="Samsung"/>Sumsang
            </label>
            <label className='brandname'>
              <input type='checkbox' value="Xiaomi"/>Xiaomi
            </label>
          </div>

        </div>
    )
}

export default LeftSidePanel;