import { useState } from "react"
import {TextInput} from './textInput'

interface SigninProps {
    onSubmit: (data: {email: string, password: string}) => void
}

export const Signin = ({onSubmit}: SigninProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!emailRegex.test(email)) {
            setEmailError('Invalid email format')
        }else{
            setEmailError('')
        }

        if(!passwordRegex.test(password)){
            setPasswordError('Password must be 8-20 characters long, contain at least one uppercase letter, one number and one special character')
        }else{
            setPasswordError('')
        }

        if(emailRegex.test(email) && passwordRegex.test(password)){
        onSubmit({email, password})
        }
    }
    return (
        <div>
            <h1>Sign In</h1>
            <form
            onSubmit={handleSubmit}
            >
                <div>
                    <TextInput
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    required={true}
                    onChange={(e)=> setEmail(e.target.value)}
                    error={emailError}
                    />
                </div>
                <div>
                    <TextInput
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    required={true}
                    onChange={(e)=> setPassword(e.target.value)}
                    error={passwordError}
                    />
                </div>
                <button className="button" type="submit">Sign in</button>
            </form>
        </div>
    )
}