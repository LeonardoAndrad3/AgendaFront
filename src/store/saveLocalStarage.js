const saveLocalStorage = async (name, data) =>{
    new Promise((resolve, reject)=>{
        resolve(
            setTimeout(()=>{
                localStorage.setItem(name, data)
            }, "500")
        )
    })
}

export {saveLocalStorage};