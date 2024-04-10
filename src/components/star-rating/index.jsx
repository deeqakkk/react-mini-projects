import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
const StarRating = ({ numOfStars = 5 }) => {
  const [rating, setRating] = useState(0)
  const [hovering, setHovering] = useState(0)

  function handleClick(getCurrentIndex) {
    return setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex) {
    return setHovering(getCurrentIndex)
  }

  function handleMouseLeave() {
    setHovering(rating)
  }
  return (
    <div className="star-rating">
      {
        [...Array(numOfStars)].map((_, index) => {
          index += 1
          return <FaStar
            key={index}
            onClick={() => { handleClick(index) }}
            onMouseOver={() => { handleMouseEnter(index) }}
            onMouseLeave={() => { handleMouseLeave(index) }}
            size={40}
            style={{
              color: index<= (hovering || rating) && 'gold'
            }}
          />
        })
      }
    </div>
  )
}

export default StarRating