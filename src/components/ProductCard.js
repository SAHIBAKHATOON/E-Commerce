import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link,useLocation } from 'react-router-dom';
import prodCompare from '../images/prodcompare.svg';
import wish from'../images/wish.svg';
import watch from '../images/watch.jpg';
import watch2 from '../images/smart-watches.avif';
import addcart  from '../images/add-cart.svg';
import view from '../images/view.svg'




const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
  
  return (
   <>
    <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link  
         to={ `${
            location.pathname = "/"
            ? "/product/:id"
            :location.pathname == "/product/:id"
            ? "product/1"
            : ":id"
         }
         `}
         className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
              <button className='border-0 bg-transparent'>
              <img src={wish} alt='wishlist' />
              </button>
            </div>
            <div className='product-image'>
                <img src={watch} className='img-fluid' alt='product-image' />
                <img src={watch2} className='img-fluid'  alt='product-image' />
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphone bulk 10 pack multi colored for students
                </h5>
                <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                     vero explicabo cum a sed voluptates, qui eos provident illum ipsam 
                     repudiandae praesentium adipisci, nisi iusto officia doloremque minima
                      laborum eligendi.
                    </p>
                <p className='price'>$100.00</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                    <img src={prodCompare} alt='compare' />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt='view' />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt='addcart' />
                    </button>
                </div>
            </div>
        </Link>
         </div>
         <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link 
       to={ `${
        location.pathname = "/"
        ? "/product/:id"
        :location.pathname == "/product/:id"
        ? "product/1"
        : ":id"
     }
     `}
        className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
              <button className='border-0 bg-transparent'>
              <img src={wish} alt='wishlist' />
              </button>
            </div>
            <div className='product-image'>
                <img src={watch} className='img-fluid' alt='product-image' />
                <img src={watch2} className='img-fluid'  alt='product-image' />
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphone bulk 10 pack multi colored for students
                </h5>
                <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"
                    />
                     <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                     vero explicabo cum a sed voluptates, qui eos provident illum ipsam 
                     repudiandae praesentium adipisci, nisi iusto officia doloremque minima
                      laborum eligendi.
                    </p>
                <p className='price'>$100.00</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                    <img src={prodCompare} alt='compare' />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt='view' />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt='addcart' />
                    </button>
                </div>
            </div>
        </Link>
         </div>
   </>
  )
}

export default ProductCard