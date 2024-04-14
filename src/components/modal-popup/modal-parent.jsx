import { useState } from 'react'
import './style.css'
import ModalBody from './modal-child'

const Modal = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="modal-container">
      {!open && (
        <button onClick={() => setOpen(true)}>Click here to open</button>
      )}
      {open && (
        <div className="modal-parent">
          <div className="modal-header">
            <p>this is modal footer</p>
            <span onClick={() => setOpen(false)}>X</span>
          </div>
          <div className="modal-body">
            <ModalBody
              childData={
                <>
                  <p>test</p>
                 <h1>This can be anything!!</h1>
                </>
              }
            />
          </div>
          <div className="modal-footer">this is modal footer</div>
        </div>
      )}
    </div>
  )
}

export default Modal
