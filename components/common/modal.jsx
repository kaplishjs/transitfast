import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  React.useEffect(()=>{
    setIsModalOpen(isOpen);
  }, [isOpen])

  // Render the modal if it's open
  console.log('isModalOpen', isOpen);
  if (!isModalOpen) {
    return null;
  }

  return (
    <>
<div class={`modal fade common_modal show`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content border-0">
     
   {children}

    </div>
  </div>
</div>
    </>

  );
};

export default Modal;
