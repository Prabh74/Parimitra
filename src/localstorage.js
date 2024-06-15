function setThemeLocalStorage(value) {
    window.localStorage.setItem("isDark", value)
}

function getThemeLocalStorage() {
    return window.localStorage.getItem("isDark")
}

export { setThemeLocalStorage, getThemeLocalStorage }