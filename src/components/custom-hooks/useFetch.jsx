import { useEffect, useState } from 'react'
export default function useFetch({ url, options = {} }) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  async function fetchData(url) {
    setLoading(true)
    try {
      const response = await fetch(url, { ...options })
      if (!response.ok) throw new Error(response.statusText)
      const data = await response.json()

      if (data) {
        setData(data)
      }
      setErrorMsg(null)
      setLoading(false)
    } catch (err) {
      setErrorMsg(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { data, errorMsg, loading }
}
