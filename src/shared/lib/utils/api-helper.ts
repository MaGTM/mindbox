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
