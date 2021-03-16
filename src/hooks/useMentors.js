import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { API_URL } from '../lib/API'

const useMentors = () => {
  const { token } = useSelector((state) => state.auth)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getMentors = () => {
    const fetchData = async () => {
      const response = await fetch(
        `${API_URL}/users/mentors?Authorization=${token}`,
        {
          method: 'GET',
        }
      )
      const { content } = await response.json()
      setData(content)
      setLoading(false)
    }

    useEffect(() => {
      fetchData()
    }, [])

    return { loading, data }
  }

  const getFavoritesMentors = () => {
    const fetchData = async () => {
      const response = await fetch(
        `${API_URL}/users/mentors?option=favorite&Authorization=${token}`,
        {
          method: 'GET',
        }
      )
      const { content } = await response.json()
      setData(content)
      setLoading(false)
    }

    useEffect(() => {
      fetchData()
    }, [])

    return { loading, data }
  }

  return { getMentors, getFavoritesMentors }
}

export default useMentors
