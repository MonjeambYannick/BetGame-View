export let GetCookie = () => {

    let cookies = document.cookie.split(';')

    let response = []

    cookies.forEach((obj) => {
        let data = obj.split('=')
        
        if(data) {
            response.push({name: data[0], value: data[1]})
        }
    })

    return response;
}

export let SetCookie = (name, value, expirestime) => {

    let expires = expirestime===undefined ? 3600 : expirestime 

    var now = new Date();
    now.setTime(now.getTime()+expires) // 1 day

    
    document.cookie = name + "=" + value + ";" + "expires=" + now.toUTCString() + ";"
}