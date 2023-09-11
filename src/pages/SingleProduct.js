import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
 import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {IoGitCompareOutline} from 'react-icons/io5';
import  {BsFillSuitHeartFill} from 'react-icons/bs'
import Container from '../components/Container';
 
const SingleProduct = () => {
  const props = {
    width: 400, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
  };
   
    const copyToClipboard = (text) => {
      console.log('text', text)
      var textField = document.createElement('textarea')
      textField.innerText = text
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
    }
  return (
  
    <>
       <Meta title={"Product Name"} />
    <BreadCrumb  title= "Product Name"/>
    <Container class1='main-product-wrapper py-5 home-wrapper-2'>
      
        <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                <ReactImageZoom {...props} />
                </div>
              </div>
              <div className='other-product-images d-flex flex-wrap gap-15'>
              <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt='watch' className='img-fluid'/>
              </div>
              <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt='watch' className='img-fluid'/>
              </div>
              <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt='watch' className='img-fluid'/>
              </div>
              <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt='watch' className='img-fluid' />
              </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
              <h3 className='title'>Kids Headphones Bulk 10 packs Multi Colored For students</h3>
                </div>
                <div className=' py-3'>
                  <p className='price'>$ 100.00</p>
                  <div className='d-flex align-items-center gap-10'>
                  <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"
                    />
                    <p className='mb-0 t-review'> ( 2 Reviews )</p>
                  </div>
                  <a className="review-btn" href='#review'>Write a Review</a>
                </div>
                <div className='border-bottom py-3'>
                  <div className='d-flex  gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type :</h3> 
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex  gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand :</h3> 
                    <p className='product-data'>Havels</p>
                  </div>
                  <div className='d-flex  gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Category :</h3>
                     <p className='product-data'>watch</p>
                  </div>
                  <div className='d-flex  gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tags :</h3> 
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex  gap-10 align-items-center mt-2 mb-3'>
                    <h3 className='product-heading'>Availability :</h3> 
                    <p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex  gap-10  flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Availability :</h3> 
                    <p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex  gap-10  flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Size :</h3> 
                   <div className='d-flex flex-wrap gap-15'>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                   </div>
                  </div>
                  <div className='d-flex align-items-center gap-15  flex-column mt-2 mb-3'>
                    <h3 className='product-heading'> Color :</h3> 
                    <Color />
                  </div>
                  <div className='d-flex  gap-10  flex-row mt-2 mb-3'>
                    <h3 className='product-heading'>Quantity :</h3> 
                    <div>
                <input type='number' name=""style={{width: "50px"}} min={1} max={10} className='form-control' id="" />
                    </div>
                    <div className='d-flex align-items-center gap-30 ms-5'>
                    <button className='button border-0' type='submit'>ADD TO CART</button>
                                <button className="button signup">Buy it Now</button> 
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                  <div>
                 <a href=''>< IoGitCompareOutline className="fs-5 me-2"/>Add to compare</a>
                  </div>
                  <div>
                 <a href=''><  BsFillSuitHeartFill className="fs-5 me-2"/>Add to wishlist</a>
                  </div>
                  </div>
                  <div className='d-flex flex-column gap-10   my-3'>
                    <h3 className='product-heading'> Shipping & Returns</h3> 
                    <p className='product-data'>Free shipping and returns available on all orders! <br /> We ship 
                    all US domestic orders within <b>5-10 bussiness days!</b></p>
                  </div>
                  <div className='d-flex  gap-10 align-items-center my-3'>
                    <h3 className='product-heading'>  Product Link</h3> 
                  <a href='javascript:void(0);' onClick={() =>{
                  copyToClipboard(
                    "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  )
                  }}>
                   Copy Product Link
                  </a>
                  </div>

                </div>
              </div>
            </div>
        </div>
    
    </Container>
     
    <Container class1='description-wrapper py-5 home-wrapper-2'>
     
        <div className='row'>
            <div className='col-12'>
            <h4>Description</h4>
             <div className='bg-white p-3'>
            
              <p >lorem ipsum emit constecuter  adisping amit. 
                        lorem ipsum emit constecuter  adisping amit.
                        lorem ipsum emit constecuter  adisping amit. 
                        lorem ipsum emit constecuter  adisping amit.
                        lorem ipsum emit constecuter  adisping amit.
                        </p>
             </div>
            </div>
        </div>
       
      </Container>
     
    <Container  class1='reviews-wrapper  home-wrapper-2'>
    
        <div className='row'>
            <div className='col-12'>
              <h3 id="review">Reviews</h3>
           <div className='review-inner-wrapper'>
           <div className='review-head d-flex justify-content-between align-items-end'>
            <div>
              <h4  className='mb-2'>Customer Reviews</h4>
            <div className='d-flex align-items-center gap-12'>
            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"
                    />
                    <p className='mb-0'>Based on 2 reviews</p>
            </div>
            </div>
            
            
             <a href=""> write a review</a>                
            </div>
            <div  className='review-form py-4'>
              <h4>Write a Review</h4>
            <form action='' className='d-flex flex-column gap-15'>
               <div>
               <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700"
                    />
               </div>
                <div>
                  <textarea className='w-100 form-control' name="" id="" cols="30" rows="4" placeholder='Comments'></textarea>
                </div>
                <div className='d-flex justify-content-end'>
                  <button className='button border-0'>Submit Review</button>
                </div>
              </form>
            </div>
            <div className='reviews mt-4'>
              <div className='review'>
              <div className='d-flex gap-10 align-items-center'>
                <h6 className='mb-0'>Sahiba</h6>
                <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"
                    />
              </div>
                    <p>lorem ipsum emit constecuter  adisping amit. 
                        lorem ipsum emit constecuter  adisping amit.
                        lorem ipsum emit constecuter  adisping amit. 
                        lorem ipsum emit constecuter  adisping amit.
                        lorem ipsum emit constecuter  adisping amit.
                        </p>
              </div>
            </div>
           </div>
            </div>
        </div>
      
    </Container>
    <Container class1='popular-wrapper py-5 home-wrapper-2'>
    
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div> 
        </div>
        <div className='row'>
        <ProductCard />
         
      </div>
       
 
    </Container>
    </>
  )
}

export default SingleProduct