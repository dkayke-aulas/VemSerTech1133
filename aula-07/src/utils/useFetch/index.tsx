import { useCallback, useEffect, useState } from "react"

const useFetch = <Data, Error = unknown>(url: RequestInfo, blocked = false) => {
    const [data, setData] = useState<Data | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = useCallback(async () => {
        if(blocked) {
            return 
        }

        try {
            setIsLoading(true)
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
        }
        catch(err) {
            setError(err as Error)
        }
        finally {
            setIsLoading(false)
        }
        
    }, [blocked, url])

    useEffect(() => {
        fetchData()
    }, [fetchData, url])

    return {
        data,
        error,
        isLoading
    }
}

export { useFetch }