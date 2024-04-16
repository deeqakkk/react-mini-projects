import useFetch from './useFetch'

const TestFun = () => {
  const { data, errorMsg, loading } = useFetch({
    url: 'https://dummyjson.com/products?limit=100',
  })

  if (loading) return <h1> Loading...</h1>

  if (errorMsg) return <h1> Error: {errorMsg}</h1>
  return (
    <div className="test-container">
      <h1> Test useFetch() hook</h1>
      {data && data?.products
        ? data.products.map((item) => <p key={item.key}>{item.title}</p>)
        : 'No Data'}
    </div>
  )
}
export default TestFun
