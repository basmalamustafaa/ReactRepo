import React, { useEffect, useState } from 'react'
import First from '../../assests/poert1.png'
import Second from '../../assests/port2.png'
import Third from '../../assests/port3.png'
import styles from '../Portifolio/Portifolio.module.css'
 import MyComponent from './modal'
 import MyComponen2t from './Modal2'
 import MyComponent3 from './Modal3'
export default function Portifolio() {
  
  const [showImage, setShowImage] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = (index) => {
    // Toggle the state to show/hide the image
    
    setShowImage(index)
    console.log("trueeee");
  };
  const handleClose = (index) => {
    // Toggle the state to show/hide the image
    setShowImage(null)
    console.log("false");
    
  };

  useEffect(() => {
    const handleClickOutsideModal = (e,index) => {
      if (e.target.classList.contains('modal') && showModal) {
        handleClose(index)
        setShowImage(null);
      }
    };

    window.addEventListener('click', handleClickOutsideModal);

    // Clean up the event listener when component is unmounted
    return () => {
      window.removeEventListener('click', handleClickOutsideModal);
    };
  }, [showModal]);
  
  

  return (
    <div  >
    
    
    <div className='position-relative'>
    <div className={styles.box3}>
          <p className=' text-uppercase fw-bolder fs-1 text-center 'style={{color:'#2c3e50',marginBottom:'0.6rem !important'}} >Portfolio component </p>
            <div className={styles.boxx}>
             <div className={` ms-3 ${styles.line}`}></div>
             <i className='fa-solid fa-star mx-3' style={{color:'#2c3e50'}}></i>
            <div className={` me-3 ${styles.line2}`}></div>
             </div>
             
      <div className="container pt-3">
        <div className="row g-5">
        
            <div className="col-md-6 col-lg-4 " > 
          <div id='1' className='position-relative overflow-hidden rounded-3'onClick={()=>handleClick(1)}   >
              <img src={First} className='w-100 rounded-3'alt='project3'  ></img>  
              <div className={styles.layer} >
                <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>     
            </div>
           
       <div>
        {showImage===1&&(
         <div className='modal-backdrop'> 
      <div className="modal bd-example-modal-lg " id='myModal' data-bs-backdrop="true" tabIndex="-1" role="dialog"  style={{ display: showModal ? 'block' : 'none'  } } 
       >
     <div className="modal-dialog modal-lg" role="document" >
       <div className="modal-content "style={{backgroundColor:'transparent',borderColor:'transparent'}}  >
         <div className="modal"  > 
           <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>handleClose(1)}></button>
         </div>
         <div className="modal-body w-100"  >
         <img src={First} className='w-100 rounded-3'alt='project3'  ></img>  
         </div>
       </div>
     </div>
   </div>
       </div>
        )}
         

        </div>

          </div>
            <div className="col-md-6 col-lg-4"> 
          <div id='2' className='position-relative overflow-hidden rounded-3'onClick={()=>handleClick(2)} >
              <img  src={Second} className='w-100 rounded-3'alt='project3' ></img>  
              <div className={styles.layer}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>        
            </div>
            {showImage===2&&(
        <div className='modal-backdrop'> 
        <div className="modal bd-example-modal-lg " id='myModal' data-bs-backdrop="true" tabIndex="-1" role="dialog"  style={{ display: showModal ? 'block' : 'none'  } } 
         >
       <div className="modal-dialog modal-lg" role="document" >
         <div className="modal-content "style={{backgroundColor:'transparent',borderColor:'transparent'}}  >
           <div className="modal"  > 
             <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>handleClose(1)}></button>
           </div>
           <div className="modal-body w-100"  >
           <img src={Second} className='w-100 rounded-3'alt='project3'  ></img>  
           </div>
         </div>
       </div>
     </div>
         </div>
        )}
           
          </div>
            <div id='3' className="col-md-6 col-lg-4"> 
          <div className='position-relative overflow-hidden rounded-3' onClick={()=>handleClick(3)}>
              <img src={Third} className='w-100 rounded-3'alt='project3'></img>  
              <div className={styles.layer}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>     
            </div>
            {showImage===3&&(
          <div className='modal-backdrop'> 
          <div className="modal bd-example-modal-lg " id='myModal' data-bs-backdrop="true" tabIndex="-1" role="dialog"  style={{ display: showModal ? 'block' : 'none'  } } 
           >
         <div className="modal-dialog modal-lg" role="document" >
           <div className="modal-content "style={{backgroundColor:'transparent',borderColor:'transparent'}}  >
             <div className="modal"  > 
               <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>handleClose(1)}></button>
             </div>
             <div className="modal-body w-100"  >
             <img src={Third} className='w-100 rounded-3'alt='project3'  ></img>  
             </div>
           </div>
         </div>
       </div>
           </div>
        )}
          </div>
            <div id='4' className="col-md-6 col-lg-4"> 
          <div className='position-relative overflow-hidden rounded-3' onClick={()=>handleClick(1)}>
              <img src={First} className='w-100 rounded-3'alt='project3'></img>  
              <div className={styles.layer}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>     
            </div>

            {showImage===1&&(
         <div> 
      <div className="modal bd-example-modal-lg " id='myModal' data-bs-backdrop="true" tabIndex="-1" role="dialog"  style={{ display: showModal ? 'block' : 'none'  } } 
       >
     <div className="modal-dialog modal-lg" role="document" >
       <div className="modal-content "style={{backgroundColor:'transparent',borderColor:'transparent'}}  >
         <div className="modal"  > 
           <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>handleClose(1)}></button>
         </div>
         <div className="modal-body w-100"  >
         <img src={First} className='w-100 rounded-3'alt='project3'  ></img>  
         </div>
       </div>
     </div>
   </div>
       </div>
        )}
           
          </div>
            <div id='5' className="col-md-6 col-lg-4"> 
          <div className='position-relative overflow-hidden rounded-3' onClick={()=>handleClick(2)}>
              <img src={Second} className='w-100 rounded-3'alt='project3'></img>  
              <div className={styles.layer}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>        
            </div>
            {showImage===2&&(
          <div> 
      <div className="modal bd-example-modal-lg " id='myModal' data-bs-backdrop="true" tabIndex="-1" role="dialog"  style={{ display: showModal ? 'block' : 'none'  } } 
       >
     <div className="modal-dialog modal-lg" role="document" >
       <div className="modal-content "style={{backgroundColor:'transparent',borderColor:'transparent'}}  >
         <div className="modal"  > 
           <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>handleClose(1)}></button>
         </div>
         <div className="modal-body w-100"  >
         <img src={Second} className='w-100 rounded-3'alt='project3'  ></img>  
         </div>
       </div>
     </div>
   </div>
       </div>
        )}
          </div>
            <div id='6' className="col-md-6 col-lg-4"> 
          <div className='position-relative overflow-hidden rounded-3' onClick={()=>handleClick(3)}>
              <img src={Third} className='w-100 rounded-3'alt='project3'></img>  
              <div className={styles.layer}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>     
            </div>
            {showImage===3&&(
          <div> 
          <div className="modal bd-example-modal-lg " id='myModal' data-bs-backdrop="true" tabIndex="-1" role="dialog"  style={{ display: showModal ? 'block' : 'none'  } } 
           >
         <div className="modal-dialog modal-lg" role="document" >
           <div className="modal-content "style={{backgroundColor:'transparent',borderColor:'transparent'}}  >
             <div className="modal"  > 
               <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>handleClose(1)}></button>
             </div>
             <div className="modal-body w-100"  >
             <img src={Third} className='w-100 rounded-3'alt='project3'  ></img>  
             </div>
           </div>
         </div>
       </div>
           </div>
        )}
          </div>
      
          
          </div>
       

      </div>
      
      
    </div>
    </div>
    </div>
  )
}
