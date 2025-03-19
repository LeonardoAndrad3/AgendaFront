const saveLocalStorage = (name, data) =>{

    console.log(data)
    localStorage.setItem(name, data)
    console.log(localStorage.getItem(name))
}

export {saveLocalStorage};