import React, { useEffect } from 'react'
import instace from './Axois/AxoisInstance';
import ecom from './Image/E-com.jpg'
import tea from './Image/tea.jpg'
import gal from './Image/gallery.jpg'
function Project(props) {
  useEffect(() => {

    instace.post(`/v1/accounts:lookup?key=AIzaSyDL5f22UyXyw2lqw4p9YQj6Kdl23VKPxQQ`, { idToken: localStorage.getItem('Token') }).then((data) => { console.log(data) }).catch((e) => { console.log(e) })
    props.message("project");
  }, [])
  return (
    <div className='rounded-3 justify-content-center row me-0 border' style={{ minHeight: '86vh', marginTop: '8vh', marginBottom: '5vh' }}>
     <div className="ps-5 mt-4 col-12">
      <h2>E - COMMERCE </h2>
     </div>
      <div className="col-8 col-sm-4 d-flex align-items-center">
<div className="card">
  
  <div className="card-img-top " >
    <img className='w-100 ratioa' src={ecom} alt="" />
  </div>
</div>
      </div>
      <div className="col-11 mt-3 mt-sm-0 col-sm-8 d-flex align-items-center">
        <p>
          <p>
Description:
Developed a feature-rich E-Commerce web application using React.js and Redux
          </p>
          <p>
1. **User Authentication:**- Designed and implemented a secure user
authentication system with login and register functionalities, ensuring a
personalized experience for each user.
          </p>
          <p>    
2. **Shopping Cart:**- Integrated an "Add to Cart" feature allowing users to easily
add products to their shopping cart for a streamlined shopping process.
          </p>
          <p>

3. **Order Management:**- Implemented a 'My Orders' section where users can
track their order history, view order details, and check the status of their
purchases.
          </p>
4. **Form Validation:**- Implemented robust form validation to enhance data
accuracy and user experience during registration and checkout processes.

<p>

5. **Toast Messages:**- Incorporated toast messages to provide real-time
feedback to users, enhancing the overall usability of the application.
</p>
        </p>
        
      </div>
      <div></div>
    <div className='d-flex justify-content-end pe-5 align-items-center'>
        Project - Link :   <button className="btn btn-success ms-3"><a href="" className='text-white text-decoration-none'>Link</a></button>
        </div>
    </div>

  )
}

export default Project