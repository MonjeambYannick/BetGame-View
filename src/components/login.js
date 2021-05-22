import { useState } from 'react'

import { GetCookie, SetCookie } from './cookie-utils'

import { FETCH_POST } from './fetch-utils'

export function LoginPage(props) {

    const [error, seterror] = useState(0);

    let login = async () => {
        let data = {
            email: document.getElementById('log_email').value,
            password: document.getElementById('log_password').value
        }
        console.log(data);

        let response = await FETCH_POST('/auth/login', data).catch(err => {
            console.log("ERROR");
            return;
        })

        console.log(response);

        if (response.status == 200) {
            seterror(0)

            SetCookie("token", response.token, 36000 * 60)

            props.callback({ loggedin: true, token: response.token })
        } else {
            seterror(1)
        }

    }

    return (
        <div className={"login-box"}>
            <span>Login</span>
            <input id="log_email" name="email" placeholder="E-Mail" />
            <input id="log_password" name="password" placeholder="Passwort" />
            {
                error == 1 ? (<div className="error-box">
                    Wrong Name or Password
                </div>) : ""
            }
            <div className="btn-login btn-animated" onClick={login}>
                Login
            </div>

        </div>
    )
}