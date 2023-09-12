import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
 import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
//  import  {MdOutlineKeyboardBackspace} from 'react-icons/md'
import blog from '../images/blog-1.jpg'
import Container from '../components/Container';


const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
    <BreadCrumb  title= "Dynamic Blog Name"/>
    <Container class1='blog-wrapper home-wrapper-2 py-5'>

       
            <div className='row'>
                <div className='col-12'> 
                <div className='single-blog-card'>
                    <Link to="/blogs" className='d-flex align-items-center gap-10'>
                       {/* < MdOutlineKeyboardBackspace   className='fs-4'/> */}
              
                    Go back to Blogs</Link>
                    <h3 className='title'>
                        A Beautiful Sunday Morning Resistance
                    </h3>
                    <img src={blog} className='img-fluid w-100' alt="blog" />
                    <p> lorem ipsum emit constecuter  adisping amit. 
                        lorem ipsum emit constecuter  adisping amit.
                        lorem ipsum emit constecuter  adisping amit. 
                        lorem ipsum emit constecuter  adisping amit.
                </p>
                    </div>
                    </div>
                 
            </div>
        
    </Container>
    </>
  )
}

export default SingleBlog;