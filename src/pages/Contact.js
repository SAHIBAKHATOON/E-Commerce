import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
//  import { IoMdHome} from 'react-icons/io'
import {BsFillTelephoneFill} from "react-icons/bs";
 import {MdEmail} from 'react-icons/md'
import {BsInfoCircle} from "react-icons/bs";
import Container from '../components/Container';
const Contact = () => {
  return (
   <>
    <Meta title={"Contact Us"} />
    <BreadCrumb  title="Contact Us"/>
    <Container class1='contact wrapper py-5 home-wrapper-2'>
     
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7129.754674245835!2d84.047679239784!3d26.684405243317627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39939631e435fa81%3A0x4cd88fd1d49ad41!2sFazilnagar%2C%20Uttar%20Pradesh%20274401!5e0!3m2!1sen!2sin!4v1693992209219!5m2!1sen!2sin" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className='col-12 mb-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
            <div>
              <h3 className='contact-title mb-4'>Contact</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='text' className='form-control'placeholder='Name' />
                </div>
                <div>
                  <input type='email' className='form-control' placeholder='E-mail'/>
                </div>
                <div>
                  <input type='tel' className='form-control'placeholder='Mobile Number' />
                </div>
                <div>
                  <textarea className='w-100 form-control' name="" id="" cols="30" rows="4" placeholder='Comments'></textarea>
                </div>
                <div>
                  <button className='button border-0'>Submit</button>
                </div>
              </form>
            </div>
            <div>
            <h3 className='contact-title mb-4'>Get in to touch</h3>
            <div className='near'>
              <ul className='ps-0'>
                <li className='mb-3 d-flex gap-15 align-items-center'> 
                  {/* <  IoMdHome className='fs-5'/> */}
                  <address className='mb-0'>Hmo:277 , Near village Fazilnagar , Kushinagar, </address>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                <BsFillTelephoneFill className='fs-5'/>
                <a href='tel: +91 4736493828'>+91 4736493828</a>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                < MdEmail className='fs-5'/>
                <a href='mailto: abc@gmail.com'>abc@gmail.com</a>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <BsInfoCircle className='fs-5'/>
                  <p className='mb-0'>Monday - Friday 10AM - 8 PM</p>
                </li>
              </ul>
            </div>
            </div>
            </div>
          </div>
        </div>
      
    </Container>
   </>
  )
}

export default Contact