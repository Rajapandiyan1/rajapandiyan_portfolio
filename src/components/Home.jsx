import React, { useEffect } from 'react'
import Rajapandiyan from './Image/RAJA.jpg'
import {Link} from 'react-router-dom'
import './App.css'
import {motion} from 'framer-motion'
function Home(props) {
  useEffect(()=>{
    props.message("home")
  })
  return (
    <div id='home' className='row justify-content-center  ms-0 me-0 p-0' style={{ minHeight: '95vh',marginTop:'5vh' }}>
      <div className="col-md-8 d-flex justify-content-center align-items-center p-sm-5 col-12 order-md-1 order-2" >
        <div className="intro" style={{minHeight:'400px',width:'850px'}}>
          <div className="row justify-content-center align-items-center" style={{minHeight:'400px'}}>
            <div className="col-sm-11 ">
            <motion.div initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1}} className='intro text-center text-md-start'>Rajapandiyan</motion.div>
            </div>
            <div className="col-sm-11">
    <motion.div initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1}} className='intro text-center text-md-start'>Front End Developer</motion.div>

            </div>
            <div className="col-sm-11">
            <motion.div initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1}} className='intro text-center text-md-start'>I`am Fresher</motion.div>

            </div>
            <div className="col-sm-11 d-flex justify-content-center justify-content-md-start">
            <motion.button initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1}} className='intro btn btn-warning ms-5 ms-sm-0 '>             
         <Link to='/contact' className='text-white text-decoration-none h5'>Contact Us</Link></motion.button>

            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-center  justify-content-center col-8 order-md-1 order-1 image" >
        <div className="profile mt-5 mt-sm-0" style={{width:'300px'}}>
        <motion.img initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1}} className='img-fluid border rounded-3' src={Rajapandiyan} alt="profile" ></motion.img>
        {/* <img className='img-fluid border rounded-3' src={Rajapandiyan} alt="u" /> */}
        </div>
      </div>
    </div>


  )
}

export default Home