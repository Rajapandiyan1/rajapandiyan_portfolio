import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
    let [val,setvalue]=useState({home:'nav-link  text-white',about:'nav-link  text-white',project:'nav-link  text-white',contact:'nav-link  text-white'})
    useEffect(()=>{
        if(props.message=="home"){
            setvalue({home:'nav-link text-warning ps-1',about:'nav-link  text-white',project:'nav-link  text-white',contact:'nav-link  text-white'})
        }
        else if(props.message=="about"){
            setvalue({about:'nav-link text-warning ps-1',home:'nav-link  text-white',project:'nav-link  text-white',contact:'nav-link  text-white'})
        }
        else if(props.message == "project"){
            setvalue({home:'nav-link  text-white',about:'nav-link  text-white',project:'nav-link text-warning ps-1',contact:'nav-link  text-white'})  
        }
        else if(props.message == "contact"){
            setvalue({home:'nav-link  text-white',about:'nav-link  text-white',project:'nav-link  text-white',contact:'nav-link text-warning ps-1'})  
        }
    },[props.message])
    return (
        // <div className='row'>
        <div className='col-12  ps-0 pe-0 m-0
        ' style={{ minHeight: '10vh' }}>
            <div className="navbar bg-dark mt-0 navbar-expand-md" data-bs-theme="dark">
                <h4 className="navabar-brand text-white ms-3"><span className='text-warning'>D</span>eveloper</h4>
                <div className="navbar-toggler me-3">
                    <div className="navbar-toggler-icon text-warning" data-bs-toggle='collapse' data-bs-target="#nav"></div>
                </div>
                <div className="collapse navbar-collapse" id='nav'>
                    <h4 className="navbar-nav ms-sm-auto ms-1 me-1 justify-content-center">
 <div className='nav-item me-md-1'>
 <Link to='/' className={val.home+' ps-1 '}>Home</Link>
</div> 
 <div className='nav-item me-md-1'><Link to='/about' className={val.about+' ps-1'}><span></span>About</Link>
</div>
<div className='nav-item me-md-1'> <Link to='/project' className={val.project+' ps-1 '}>Project</Link>
</div>
<div className='nav-item me-md-1'><Link to='/contact' className={val.contact+' ps-1 '}>Contact</Link>
</div> 
                    </h4>
                </div>

            </div>
        </div>
        // </div>
    )
}

export default Navbar