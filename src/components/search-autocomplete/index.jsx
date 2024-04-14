import { useEffect, useState } from 'react'

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrorMsg] = useState(null)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchText, setSearchText] = useState('')

  async function fetchProducts() {
    try {
      setLoading(true)
      const response = await fetch('https://dummyjson.com/users?limit=50')
      const data = await response.json()
      setData(
        data.users.map((user) => `${user.firstName + ' ' + user.lastName}`)
      )
      setLoading(false)
    } catch (err) {
      setErrorMsg(err.message)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    const query = searchText.toLowerCase()
    if (query.length > 1) {
      const filteredUsers =
        data && data.length
          ? data.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : []
      setFilteredData(filteredUsers)
    } else setFilteredData([])
  }, [searchText, data])

  if (loading) return <p>Loading.. Please wait!</p>

  if (errMsg) return <p> Error: {errMsg}</p>

  return (
    <div className="search-autocomplete">
      <div className="search-field">
        <input
          value={searchText}
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>
      <div className="filtered-data">
        {filteredData && filteredData.length > 0
          ? filteredData.map((user) => <p>{user}</p>)
          : searchText.length > 1 && <p>No user found...</p>}
      </div>
    </div>
  )
}

export default SearchAutocomplete
