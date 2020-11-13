import { useState, useEffect } from 'react'

const useFetch = (url, method = 'GET', info) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch(
      url,
      method === 'POST' && {
        method: method,
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(info),
      }
    )
    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, data }
}

export default useFetch
