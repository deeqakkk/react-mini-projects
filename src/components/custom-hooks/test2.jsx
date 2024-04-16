import { useRef, useState } from 'react'
import useOutsideClick from './useOutsideClick'

const UseOutsideClick = () => {
  const ref = useRef()
  useOutsideClick(ref, () => setShowContent(false))
  const [showContent, setShowContent] = useState(false)
  return (
    <div className="outside-container">
      {showContent ? (
        <div
          ref={ref}
          style={{
            border: '1px solid red',
            alignItems: 'center',
            margin: '10px',
            padding: '10px',
          }}
        >
          <h1>This is a random content</h1>
          <p>Please click outside this containter to close this</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  )
}

export default UseOutsideClick
