import React from 'react'
import {useState} from 'react'

// scripts
import {GetCookie, SetCookie} from './components/cookie-utils'

// Imports
import {View} from './components/groups/view'
import {Settings} from './components/settings'
import {Pages} from './components/Pages'
import {MenuBar, MenuItem} from './components/MenuBar'
import {LoginPage} from './components/login'
import { RegisterPage } from './components/register'

// CSS
import './style/theme.css'
import './style/MenuBar.css'
import './style/layout.css'
import './style/login-register.css'

import {FETCH_GET_AUTHORIZED} from './components/fetch-utils'

let getcookie = (callback) => {
    let cookies = GetCookie() 
    let token = 0
    cookies.forEach((cookie) => {
        if (cookie.name === "token") {
            token = cookie.value
        }
    })
    return{loggedin: (token!=0), token: token}
}

function App() {

    const [state, setstate] = useState(1);
    const [auth, setauth] = useState(getcookie)

    if(auth.loggedin === true) {
        return (
            <div className="content">
                <MenuBar id={state} callback={setstate}>
                    <MenuItem id={1}>
                        <i className="fi-rr-home"></i>
                    </MenuItem>
                    <MenuItem id={2}>
                        <i className="fi-rr-settings"></i>
                    </MenuItem>

                </MenuBar>
                <Pages id={state}>
                    <View id={1} token={auth.token}/>
                    

                    <div id={2}>
                        Page 2
                    </div>
                </Pages>
            </div>    
        );
    } else {
        return (
            <div className="loginpage">
                <LoginPage callback={setauth}/>
                <RegisterPage callback={setauth}/>
            </div>
        )
    }
}

export default App;
