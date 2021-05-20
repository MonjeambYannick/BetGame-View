const BACKEND_HOST = 'https://betgame-server.herokuapp.com'
const BACKEND_PORT = 4000

export let FETCH_GET_AUTHORIZED = async (route, token) => {

    let response =  await fetch((BACKEND_HOST + ':' + BACKEND_PORT + route), {method: "GET", mode: "cors", headers: {authorization: token}})

    return await response.json()
}

export let FETCH_POST_AUTHORIZED = async (route, token, data) => {

    let response = await fetch((BACKEND_HOST + ':' + BACKEND_PORT + route), {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            authorization: token,
        },
        redirect: 'manual',
        body: JSON.stringify(data)
    })

    return await response.json()

}

export let FETCH_GET = async (route, data) => {
    
    let response =  await fetch((BACKEND_HOST + ':' + BACKEND_PORT + route), {method: "GET", mode: "cors"})

    return await response.json()
}

export let FETCH_POST = async (route, data) => {
 
    let response = await fetch((BACKEND_HOST + ':' + BACKEND_PORT + route), {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'manual',
        body: JSON.stringify(data)
    })
    return await response.json()

}

