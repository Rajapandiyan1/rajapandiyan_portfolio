import React, { useState } from 'react'
import { useEffect } from 'react'
import emailjs from 'emailjs-com'
import {motion} from 'framer-motion'
function Contact(props) {
  let [data,setData]=useState({to_name:'',message:'',email:''});
let [suc,setsuc]=useState(false)
let [err,seterr]=useState(false)
  useEffect(()=>{
    props.message("contact");
  })
 async function sub(params) {
  let clone=data;
  
  setData({to_name:'',message:'',email:''})
   await emailjs.init('pJdjQkbV3aLx7enpa');
   await emailjs.send('service_cut4955','template_wd4krr7',clone).then((data)=>{if(data.status==200){setsuc(true)}else{
    seterr(true)
   }}).catch((e)=>{console.log(e)})
   setTimeout(() => {
    setsuc(false)
    seterr(false)
   }, 5000);
  }
  return (
    <div className='ms-0 me-0 ps-md-5 pt-md-5' style={{minHeight:'86vh',marginTop:'10vh'}}>
      <div className="row me-0 justify-content-center align-items-center">
{suc && <div className='col-12 alert alert-dismissible alert-success me-4'>
  <div className="btn-close" onClick={()=>{setsuc(false)}}>
    </div>
    send mail successfully</div>}
    {err && <div className='col-12 alert alert-dismissible alert-success me-4'>
  <div className="btn-close" onClick={()=>{seterr(false)}}>
    </div>
    send mail successfully</div>}
        <div className="col-12 mt-3 mt-md-0">
        <div  className=' col-12 ps-5  h1 fw-6'>Contact Us</div>
        </div>
      </div>

    <div className="row me-0 ms-0 justify-content-between align-items-center">
<div className="col-md-4 order-2">
<div className="row justify-content-around mt-4 mb-3 align-items-center">
  <a href='mailto:rajapandiyan1163@gmail.com' className="text-dark col-md-12 col-5 mt-md-4 mb-md-2 text-decoration-none icon"><i className="fa fa-envelope text-warning me-2 icon"></i> <span>  Mail</span></a>

  <a href='#' className="text-dark col-md-12 col-5 mt-md-4 mb-md-2 text-decoration-none icon"><i className="fa fa-linkedin text-warning me-2 "></i><span>LinkedIn</span></a>

  <a href='https://github.com/Rajapandiyan1' className="text-dark col-md-12 col-5 mt-md-4 mb-md-2 text-decoration-none icon"><i className="fa fa-github text-warning me-2 "></i><span>Git hub</span></a>

  <a href='https://www.instagram.com/raja_pandiyan_444?igsh=OGQ5ZDc2ODk2ZA==' className="text-dark fw-5 col-md-12 col-5 mt-md-4 mb-md-2  text-decoration-none icon"><i className="fa fa-instagram me-2 text-warning icon"></i><span>Instagram</span></a>
</div>
</div>
      <div className="col-md-8 order-1">
<div className="row justify-content-center ">
     
    <i className="fa-li fa fa-square"></i>
      <div className="col-11 form-group"><label className='form-check-label mt-3 fw-6'>Name</label></div>
      <div className="col-11"><input type="text" value={data.to_name} placeholder='Enter Your Name' onChange={(e)=>{setData((prev)=>{return {...prev,to_name:e.target.value}})}} className='form-control mt-3'/></div>
      <div className="col-11"><label className='form-check-label mt-3' htmlFor="">Email</label></div>
      <div className="col-11"><input type="email" value={data.email} onChange={(e)=>{setData((prev)=>{return {...prev,email
        :e.target.value}})}} className='form-control mt-3' /></div>
      <div className="col-11"><label className='form-check-label mt-3' htmlFor="">Message</label></div>
      <div className="col-11"><textarea name="" placeholder='Enter the Message' value={data.message} onChange={(e)=>{setData((prev)=>{return {...prev,message:e.target.value}})}} className='form-control mt-3' id="" cols="3"></textarea></div>
      <div className="col-11 d-flex justify-content-end"><button className="btn btn-primary mt-3" onClick={()=>{sub()}}>Submit</button></div>
 
</div>
      </div>
      </div>
    </div>
  )
}

export default Contact