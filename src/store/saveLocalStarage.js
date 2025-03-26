const saveLocalStorage = async (name, data) =>{
    new Promise((resolve, reject)=>{
        resolve(
                localStorage.setItem(name, data)
        )
    })
}

export {saveLocalStorage};