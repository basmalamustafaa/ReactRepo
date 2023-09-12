import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../assests/avataaars.svg'
import styles from './Home.module.css'
export default function Home() {
  return (
    <div >
        <div className={styles.box2} style={{backgroundColor:'#1abc9c'}}>
           
                <img src={Avatar} className={`mt-5 mb-3 py-3 ${styles.avatar}`} ></img>
                <p className='text-white text-uppercase fw-bolder fs-1 mx-5'>start framework </p>
                    <div className={styles.boxx}>
                    <div className={` ms-3 ${styles.line}`}></div>
                    <i className='fa-solid fa-star mx-3' style={{color:'white'}}></i>
                    <div className={` me-3 ${styles.line2}`}></div>
                    </div>
                    <div className='text-white fs-6  '>Graphic Artist - Web Designer - Illustrator</div>
        </div>
    </div>
  )
}
