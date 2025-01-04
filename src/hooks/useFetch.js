import React, { useEffect, useState } from 'react'

export default function useFetch(url, defaultValue) {

    const [data, setData] = useState(defaultValue)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {  
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error('Network response incorrect');
                }
                const dataRes = await res.json()
                setData(dataRes)
                setError(null)
            } catch (err) {
                setError(err)
            }
            setIsLoading(false)
        }
        setIsLoading(true)
        fetchData()
    }, [])
    return { data, error, isLoading }
}
