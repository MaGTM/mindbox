import { useEffect, useState } from 'react'

export const useIsFirst = () => {
    const [isFirst, setIsFirst] = useState(true)

    useEffect(() => {
        setIsFirst(false)
    }, [])

    return isFirst
}
