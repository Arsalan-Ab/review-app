export function SaveLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value)
}

export function DeleteFromLocalStorage(key: string) {
    localStorage.removeItem(key)
}

