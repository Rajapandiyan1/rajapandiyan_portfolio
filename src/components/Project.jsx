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
    <div className='rounded-3' style={{ minHeight: '86vh', marginTop: '8vh', marginBottom: '5vh' }}>
      <div className="row ms-0 me-0 justify-content-sm-center justify-content-md-evenly">
        <div className="col-12 col-sm-10 col-md-4 col-lg-3 mt-5">
          <div className="card" style={{ width: '100%', minHeight: '300px' }}>
            <div className="card-img-top">
              <img src={ecom} className='img-fluid w-100' style={{ height: '200px' }} alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-tittle">
                E-commerce
              </h5>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor neque maxime totam eos deleniti eligendi blanditiis, iusto praesentium aspernatur similique modi rem illo. Unde voluptatibus amet aliquid quaerat vitae velit!
            </div>
            <h5 className="card-footer bg-warning mb-0 text-center">
              <a href="" className='text-decoration-none text-dark'>
                Project Link
              </a>
            </h5>
          </div>
        </div>
        
        <div className="col-12 col-sm-10 col-md-4 col-lg-3 mt-5">
          <div className="card" style={{ width: '100%', minHeight: '300px' }}>
            <div className="card-img-top">
              <img src={tea} className='img-fluid w-100' style={{ height: '200px' }} alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-tittle">
                Tea Shop
              </h5>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor neque maxime totam eos deleniti eligendi blanditiis, iusto praesentium aspernatur similique modi rem illo. Unde voluptatibus amet aliquid quaerat vitae velit!
            </div>
            <h5 className="card-footer bg-warning mb-0 text-center">
              <a href="" className='text-decoration-none text-dark'>
                Project Link
              </a>
            </h5>
          </div>
        </div>
        <div className="col-12 col-sm-10 col-md-4 col-lg-3 mt-5">
          <div className="card" style={{ width: '100%', minHeight: '300px' }}>
            <div className="card-img-top">
              <img src={gal} className='img-fluid w-100' style={{ height: '200px' }} alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-tittle">
                Gallery
              </h5>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor neque maxime totam eos deleniti eligendi blanditiis, iusto praesentium aspernatur similique modi rem illo. Unde voluptatibus amet aliquid quaerat vitae velit!
            </div>
            <h5 className="card-footer bg-warning mb-0 text-center">
              <a href="" className='text-decoration-none text-dark'>
                Project Link
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Project