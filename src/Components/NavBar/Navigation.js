import React, { Component} from 'react';
import "./NavBar.css"
class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = { }
    }
    render(){
        return(
            <div>
         <div className="NavBar_Component">

           
            <div className="NavBar_logo"></div>
            <div className='NavBar_locator'>
            <div className="NavBar_locatorImage"></div>
            <div className='NavBar_location'>Johannesburg</div>
        </div> 
<div className='NavBar_Searchcomponent'>
    <div>
        <select className='NavBar_dropdown'>
            <option value="All">All</option>
            <option value="Books">Books</option>
            <option value="Beauty">Beauty</option>
            <option value="Baby">Baby</option>
            <option value="Alexa">Alexa</option>

        </select>
    </div>
    <div>
        <input type="text" className='NavBar_Searchbar'/>
    </div>
    <div className='NavBar_Seachbardiv'>
        <div className='NavBar_Seachicon'/>
        <div/>


    </div>
</div>
<div className='NavBar_text NavBar_signin'>
    <div style={{fontSize:"14px"}}>Hello, Sign in</div>
    <div style={{fontWeight:"bold"}}>Accounts&List</div>
    <div></div>
    </div>
<div className='NavBar_text NavBar_returns'>
    <div style={{fontSize:"14px"}}>Returns</div> 
    <div style={{fontWeight:"bold"}}>& Order</div>
    </div>
<div className='NavBar_text NavBar_cart'>
    <div src=""className='cart_image'></div>
    <div className='cart_item'>0</div>
    <div className='NavBar_text_cart' >Cart</div>
    </div> 
    

         </div>
         <div className='NavBar_footer'>
            <div className='NavBar_footer_text'>Best seller</div>
            <div className='NavBar_footer_text'>Mobile</div>
            <div className='NavBar_footer_text'>Amozon pay</div>
            <div className='NavBar_footer_text'>Fashion</div>
            <div className='NavBar_footer_text'>Electronics</div>
            <div className='NavBar_footer_text'>Prime</div>
            <div className='NavBar_footer_text'>New Release</div>
            <div className='NavBar_footer_text'>Customer services</div>
            <div className='NavBar_footer_text'>Computer</div>
            <div className='NavBar_footer_text'>home & kitchen</div>
         </div>
         
</div>
        );
    }  
}

export default NavBar;