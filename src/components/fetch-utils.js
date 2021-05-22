import React from 'react';

import { BACKEND_HOST, BACKEND_PORT, } from '../config'

let createURL = (route) => {
    if (BACKEND_PORT == 80) {
        return BACKEND_HOST + route
    }
    return BACKEND_HOST + ":" + BACKEND_PORT + route
}

export let FETCH_GET_AUTHORIZED = async (route, token) => {

    let response = await fetch(createURL(route), { method: "GET", mode: "cors", headers: { authorization: token } })

    return await response.json()
}

export let FETCH_POST_AUTHORIZED = async (route, token, data) => {

    let response = await fetch(createURL(route), {
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

    let response = await fetch(createURL(route), { method: "GET", mode: "cors" })

    return await response.json()
}

export let FETCH_POST = async (route, data) => {

    let response = await fetch(createURL(route), {
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

