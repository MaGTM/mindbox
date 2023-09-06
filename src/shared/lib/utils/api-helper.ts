import { v4 as uuidv4 } from 'uuid'

export const apiGetHelper = async <T>(name: string): Promise<T | null> => {
    return await new Promise((resolve) => {
        let data: T | null

        try {
            data = JSON.parse(localStorage.getItem(name) as string)
        } catch {
            data = null
        }

        setTimeout(() => {
            resolve(data)
        }, 300)
    })
}

export const apiPostHelper = async <T>(data: T) => {
    return await new Promise((resolve) => {
        const prevData = JSON.parse(localStorage.getItem('todos') ?? '[]')

        const formattedData = {
            ...data,
            id: uuidv4(),
        }

        prevData.push(formattedData)

        setTimeout(() => {
            localStorage.setItem('todos', JSON.stringify(prevData))
            resolve(true)
        }, 500)
    })
}
