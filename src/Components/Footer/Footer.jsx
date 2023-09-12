import React from 'react'
import styles from'./Footer.module.css'

export default function Footer() {
    const Facebook = () => {
        return  (
         <div className={styles.icons}>
          <i className="fa-brands fa-facebook  mx-1 icon" style={{color:'#ffffff'}} ></i>
          </div>
        );
      }
    const LinkedIn = () => {
        return (
          <div className={styles.icons}>
          <i className="fa-brands fa-linkedin-in  fa-white mx-1 icon" style={{color:'#ffffff'}} ></i>
          </div>
        );
      }
    const Twitter = () => {
        return (
          <div className={styles.icons}>
          <i className='fa-brands fa-twitter   mx-1  icon' style={{color:'#ffffff' ,marginTop:'1rem'}} ></i>
          </div>
        );
      }
    const Web = () => {
        return (
          <div className={styles.icons}>

          <i className="fa-solid fa-globe mx-1 icon" style={{color:'#ffffff'}} ></i>
          </div>
        );
      }
  
  return (
    < >

   
    <footer  style={{backgroundColor:'#2c3e50',padding:'71px'}}>
        <div className="container">
    <div className="row">
       <div className="col mt-4 ">
         <div className='text-white text-uppercase fw-bolder fs-3 mb-2 '>Location</div>
         <p className='text-white text-uppercase mb-2 fs-6'>2215 John Daniel Drive</p>
         <p className='text-white text-uppercase  fs-6' style={{marginBottom:'1rem'}}>Clark, MO 65243</p>
    </div>
       <div className="col mt-4 ">
       <div className='text-white text-uppercase fw-bolder fs-3 mb-2 '>Around The web</div>
         <div >
            <Facebook></Facebook>
            <Twitter></Twitter>
            <LinkedIn></LinkedIn>
            <Web></Web>
         </div>
    </div>
       <div className="col mt-4 ">
       <div className='text-white text-uppercase fw-bolder fs-3 mb-2'>About freelancer</div>
         <p className='text-white ' style={{marginBottom:'1rem'}}>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
</div>
</div>

    </footer>
    <div className={styles.copy}  style={{backgroundColor:'#1a252f'}}>
    <p className={styles.copy} > Copyright © Your Website 2021</p>
    </div>
    </>
    
  )
}
