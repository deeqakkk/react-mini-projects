import { useEffect, useState } from 'react'
import './style.css'

const ScrollIndicator = ({
  apiURL = 'https://dummyjson.com/products?limit=100',
}) => {
  const [data, setData] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)
  const [scrollHeight, setScrollHeight] = useState(0)

  async function fetchProducts(apiURL) {
    try {
      setLoading(true)
      const response = await fetch(apiURL)
      const responseData = await response.json()
      setData(responseData.products)
      setLoading(false)
    } catch (err) {
      setErrorMsg(err.message)
      setLoading(false)
    }
  }

  function handleScroll() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    setScrollHeight(Math.floor((howMuchScrolled / height) * 100) + 1)
  }

  useEffect(() => {
    fetchProducts(apiURL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiURL])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  })

  if (loading) return <p>Still loading... Please wait!</p>

  if (errorMsg) return <p>Error : {errorMsg}</p>

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="outer-bar">
          <div
            className="inner-bar"
            style={{
              width: `${scrollHeight}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => (
              <p
                key={item.id}
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  margin: '10px 20px',
                }}
              >
                {item.title}
              </p>
            ))
          : 'No data available'}
      </div>
    </div>
  )
}

export default ScrollIndicator
