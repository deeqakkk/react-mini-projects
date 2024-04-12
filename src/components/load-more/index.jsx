import { useEffect, useState } from 'react'

const LoadMore = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)
  const [count, setCount] = useState(0)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      )
      const result = await response.json()
      if (result && result.products && result.products.length) {
        setProducts([...products, ...result.products])
        setLoading(false)
      }
    } catch (err) {
      setErrorMsg(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  if (loading) {
    return <div> Data is being fetched... Please wait!</div>
  }

  if (errorMsg) {
    return <div> Error: {errorMsg}</div>
  }

  const isDisabled = products.length === 100 ? true : false

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {products && products.length
          ? products.map((item) => (
              <div
                style={{
                  border: '1px solid black',
                  margin: '10px',
                  padding: '10px',
                  width: '25%',
                  textAlign: 'center',
                }}
              >
                <img
                  src={item?.thumbnail}
                  alt="dummy"
                  height={100}
                  width={100}
                />
                <p key={item.title}>
                  {item.id}. {item?.title}
                </p>
              </div>
            ))
          : 'No data available'}
      </div>
      <button
        style={{
          padding: '10px 20px',
          margin: '10px',
        }}
        onClick={() => setCount(count + 1)}
        disabled={isDisabled}
      >
        {isDisabled ? 'No more data available' : 'Load More'}
      </button>
    </>
  )
}

export default LoadMore
