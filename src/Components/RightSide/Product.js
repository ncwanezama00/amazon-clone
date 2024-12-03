import React from'react';
import "./RightSide.css"

function Product(props){
    return(
        <div className='product'>
         <div className='product_image'>
            <img src='https://ik.imagekit.io/amazon2020/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1732271840885'height="300px"/>
            </div>
         <div className='product_name'>
            New Apple iPhone 11 (64 GB)-Green
         </div>
         <div className='product_rating'>
            37,674
         </div>
         <div className='product_price'>
            R16 000
         </div>
        </div>

    )
}

export default Product;