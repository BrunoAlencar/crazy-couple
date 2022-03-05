import React, { SetStateAction, useState } from "react"
import {useNavigate} from 'react-router-dom'

export const LoginPage = () => {
    const [secret, setSecret] = useState('')
    const navigate = useNavigate()

    const handleSecret = (event:   React.ChangeEvent<HTMLInputElement>) => {
        setSecret(event.target.value)
    }

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        console.log('Change page')
        navigate("/upload")   
    }

    return (
        <>
            <h1>Login</h1>
            <div>    
                <label htmlFor="code">Enter secret code bellow</label>
                <br />
                <input type="password" onChange={handleSecret} placeholder="Secret" />
                <br />
                <button onClick={handleSubmit}>Let's dale (submit)</button>
            </div>
            {secret}
        </>
    )
}