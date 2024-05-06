import { useEffect, useState } from 'react'

const Pagination = () => {
  const [productsData, setProductsData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = fetch('https://dummyjson.com/products?limit=100')
      const data = await (await response).json()
      if (data && data.products) setProductsData(data.products)
      setLoading(false)
      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (error) {
    return <p> Error Occured: {error}</p>
  }

  const handlePageSelction = (selectedPage) => {
    setPage(selectedPage)
  }

  return (
    <div>
      {loading ? (
        <p>Loading data....</p>
      ) : (
        <div
          style={{
            margin: '20px',
            padding: 0,
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {productsData.slice(page * 10 - 10, page * 10).map((item) => (
            <p
              key={item.id}
              style={{
                padding: '10px 20px',
                border: '1px solid black',
                width: '25%',
              }}
            >
              {item.title}
            </p>
          ))}
        </div>
      )}
      {productsData.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              cursor: 'pointer',
              border: '1px solid black',
              padding: '10px 15px',
              display: page===1 && 'none'
            }}
            onClick={() => handlePageSelction(page-1)}
          >
            ◀️
          </span>
          {[...Array(productsData.length / 10)].map((_, index) => (
            <span
              style={{
                cursor: 'pointer',
                border: '1px solid black',
                padding: '10px 15px',
                background: page === index + 1 && 'lightyellow',
              }}
              key={index}
              onClick={() => handlePageSelction(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          <span
            style={{
              cursor: 'pointer',
              border: '1px solid black',
              padding: '10px 15px',
              display: page ===10 && 'none'
            }}
            onClick={() => handlePageSelction(page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  )
}

export default Pagination
