import React from 'react'
import styles from '../Home/Home.module.css'
export default function About() {
  return (
    <div >
     
    <div className={styles.box2} style={{backgroundColor:'#1abc9c'}}>

            <p className='text-white text-uppercase fw-bolder fs-1 text-center  '>about component </p>

                <div className={styles.boxx}>
                <div className={` ms-3 ${styles.line}`}></div>
                <i className='fa-solid fa-star mx-3' style={{color:'white'}}></i>
                <div className={` me-3 ${styles.line2}`}></div>
                </div>
                <div className='container'>
                  <div className="row">
                    <div className="col-md-6 ps-md-5">
                      <p className='text-white fw-bold' >Freelancer is a free bootstrap theme 
                created by Route. The download includes the complete source files including HTML, 
                CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6 pe-5 fw-bold" >
                      <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files 
                        including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization..</p>
                    </div>
                    
                  </div>
                </div>
    
    </div>
  </div>
  )
}
