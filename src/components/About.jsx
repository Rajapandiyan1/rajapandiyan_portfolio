import React from 'react'
import Html from './Image/Html.png'
import css from './Image/css.png'
import js from './Image/js.jpg'
import bootstrap from './Image/bootstrap.jpg'
import reactjs from './Image/Reactjs.png'
import { useEffect } from 'react'
import {motion} from 'framer-motion'
import AOS from 'aos'
import  'aos/dist/aos.css'
import pho from './Image/RAJA.jpg'
import git from './Image/git.png'

function About(props) {
  useEffect(()=>{
    AOS.init()
    props.message("about")
  })
  return (
    <>
    <div className="row me-0   p-0" style={{marginTop:'10vh'}}>
     <h1 style={{fontWeight:'900'}} className='col-12  ps-4' initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1}}>About me</h1>
    </div>
    <div className="row me-0 justify-content-center ">
      <div className="col-11 col-md-4 d-flex justify-content-center mt-3">
        <img src={pho} className='img-fluid' style={{height:'200px'}} alt="" />
      </div>
      <div className="col-11  col-md-8 mt-3 mt-md-0">
        <div className="row">
          <h1 className="col-12">
            I am Rajapandiyan
          </h1>
          <h2 className="col-12">
            React js Developer
          </h2>
          <h2 className="col-12">
            Fresher
          </h2>
          <div className="col-12">
          <i className="fa fa-map-marker me-2"></i><span>Pudukkotai</span>
          </div>
          <div className="col-12">
          </div>
          <div className="col-12">
            <i className='fa fa-graduation-cap me-2'></i><span>BBA</span>
           </div>
        </div>
        <div className="col-12">
          Pass - out : 2020 - 2023
        </div>
        <div className="col-12">
        Hello, I'm Rajapaniyan, a dedicated and aspiring front-end developer. My journey into the world of web development began with a fascination for creating visually appealing and interactive user experiences
        </div>
      </div>
    </div>
    <div className="row justify-contetnt-center me-0">
      <h1 className="col-11 ms-3" style={{fontWeight:'900'}}>
        Skills
      </h1>
    </div>
    <div className='row justify-content-evenly rounded-3 ms-0 me-0 ' style={{minHeight:'44vh'}}>
      <motion.div whileHover={{scale:1.1}} transition={{duration:0.3}} className='col-8 col-sm-6  col-md-4 col-lg-2  mt-4 d-flex justify-content-center align-items-center'>
      <div data-aos="fade-right" className="card" style={{width:'200px'}}>
          <div className="d-flex justify-content-center pt-2 card-img-top pb-2" style={{height:'180px'}}>
            <img src={Html}  className='img-fluid' alt="" />
          </div>
          <h5 className="card-footer bg-warning text-white text-center">
            HTML
          </h5>
        </div>
      </motion.div>
      <motion.div whileHover={{scale:1.1}} transition={{duration:0.3}} className='col-8 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
      <div className="card" data-aos="fade-right" style={{width:'200px'}}>
          <div className="d-flex justify-content-center pt-2 card-img-top pb-2" style={{height:'180px'}}>
            <img src={css}  className='img-fluid' alt="" />
          </div>
          <h5 className="card-footer bg-warning text-white text-center">
            CSS
          </h5>
        </div>
      </motion.div>

      <motion.div whileHover={{scale:1.1}} transition={{duration:0.3}} className='col-8 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
      <div className="card" data-aos="fade-right" style={{width:'200px'}}>
          <div className="d-flex justify-content-center pt-2 card-img-top pb-2" style={{height:'180px'}}>
            <img src={bootstrap}  className='img-fluid' alt="" />
          </div>
          <h5 className="card-footer bg-warning text-white text-center">
            BOOTSTRAP
          </h5>
        </div>
      </motion.div>
  
      <motion.div whileHover={{scale:1.1}} transition={{duration:0.3}} className='col-8 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
      <div className="card" data-aos="fade-right" style={{width:'200px'}}>
          <div className="d-flex justify-content-center pt-2 card-img-top pb-2" style={{height:'180px'}}>
            <img src={js}  className='img-fluid' alt="" />
          </div>
          <h5 className="card-footer bg-warning text-white text-center">
            JAVASCRIPT
          </h5>
        </div>
      </motion.div>
      <motion.div whileHover={{scale:1.1}} transition={{duration:0.3}} className='col-8 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
      <div className="card" data-aos="fade-right" style={{width:'200px'}}>
          <div className="d-flex justify-content-center pt-2 card-img-top pb-2" style={{height:'180px'}}>
            <img src={reactjs}  className='img-fluid' alt="" />
          </div>
          <h5 className="card-footer bg-warning text-white text-center">
            REACT JS
          </h5>
        </div>
      </motion.div>
  
      <motion.div whileHover={{scale:1.1}} transition={{duration:0.3}} className='col-8 col-sm-6 col-md-4 col-lg-2 mt-4 d-flex justify-content-center align-items-center'>
      <div className="card" data-aos="fade-right" style={{width:'200px'}}>
          <div className="d-flex justify-content-center pt-2 card-img-top pb-2" style={{height:'180px'}}>
            <img src={git}  className='img-fluid' alt="" />
          </div>
          <h5 className="card-footer bg-warning text-white text-center">
            Git and Git-Hub
          </h5>
        </div>
      </motion.div>
    </div>
    </>
    
  )
}

export default About