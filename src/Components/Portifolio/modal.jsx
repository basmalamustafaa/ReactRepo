import React, { useState } from 'react';
import First from '../../assests/poert1.png'
import Second from '../../assests/port2.png'
import Third from '../../assests/port3.png'
const MyComponent = () => {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="modal" tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header"> 
              <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={toggleModal}></button>
            </div>
            <div className="modal-body">
            <img src={First} className='w-100 rounded-3'alt='project3'  ></img>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
