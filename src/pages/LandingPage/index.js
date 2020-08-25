import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'

import './styles.css'

import logo from '../../assets/logo.png'

function LandingPage() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [url, setUrl] = useState("")

    const responseGoogle = (response) => {
        setName(response.profileObj.name)
        setEmail(response.profileObj.email)
        setUrl(response.profileObj.imageUrl)

    }

    return (
        <div className="content">

            <h1>Login com Google</h1>

            <GoogleLogin
                clientId="84037829716-bsml4p84h8fue6bl5h9m4dhhr2sq4q3l.apps.googleusercontent.com"
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="googleButton">
                        <img className="logoDoGoogle" src={logo} alt="Logo do Google" />
                        Login
                    </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <div className="data">
                {url ? (<img src={url} alt={name} />) : null}
                {name ? (<h2>Bem vindo, {name}</h2>) : (<h2> É necessário fazer o login...</h2>)}
                <p>{email}</p>
            </div>
        </div>
    )

}

export default LandingPage