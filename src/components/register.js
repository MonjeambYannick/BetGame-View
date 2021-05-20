import {FETCH_POST} from './fetch-utils'


export function RegisterPage() 
{

    let register = async () => {
        let data = {
            username: document.getElementById('reg_username').value,
            password: document.getElementById('reg_password').value,
            email: document.getElementById('reg_email').value
        }
        console.log(data);

        let response =  await FETCH_POST('/auth/register', data).catch(err => {
            console.log("ERROR");
            return;
        })

        console.log(response);
    }

    return (
        <div className="login-box">
            <span>Register</span>
            <input id="reg_email" name="email" placeholder="E-Mail"/>
            <input id="reg_username" name="username" placeholder="Name"/>
            <input id="reg_password" name="password" placeholder="Passwort"/>
            <div className="btn-login btn-animated" onClick={register}>Registrieren</div>
        </div>
    )
}