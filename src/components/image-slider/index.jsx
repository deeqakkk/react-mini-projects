import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

const ImageSlider = ({ apiUrl, limit }) => {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [images, setImages] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)

  async function fetchImages(apiUrl) {
    try {
      setLoading(true)
      const response = await fetch(apiUrl)
      const data = await response.json()
      setImages(data)
      setLoading(false)
    } catch (err) {
      setErrorMsg(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages('https://picsum.photos/v2/list?limit=10')
  }, [])

  if (loading) {
    return <div> Currently Loading.... Please wait!!</div>
  }

  if (errorMsg) {
    return <div>Error Occured: {errorMsg} </div>
  }

  const handlePreviousImg = () => {
    setCurrentIdx(currentIdx === 0 ? images.length - 1 : currentIdx - 1)
  }

  const handleNextImg = () => {
    setCurrentIdx(currentIdx === images.length - 1 ? 0 : currentIdx + 1)
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePreviousImg}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imgItem, index) => (
            <img
              key={imgItem.id}
              alt={imgItem.download_url}
              src={imgItem.download_url}
              className={
                currentIdx === index
                  ? 'current-image'
                  : 'current-image hide-current-image'
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNextImg}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIdx(index)}
                className={
                  currentIdx === index
                    ? 'current-indicator'
                    : 'current-indicator inactive-indicator'
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  )
}

export default ImageSlider
