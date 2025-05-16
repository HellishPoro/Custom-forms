import { useState } from "react"
import {TextInput} from '../ui/TextInput'
import {EMAIL_REGEX, PASSWORD_REGEX} from '../constants/regexConstants'

interface SigninProps {
    onSubmit: (data: {email: string, password: string}) => void
}

export const Signin = ({onSubmit}: SigninProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!EMAIL_REGEX.test(email)) {
            setEmailError('Invalid email format')
        }else{
            setEmailError('')
        }

        if(!PASSWORD_REGEX.test(password)){
            setPasswordError('Password must be 8-20 characters long, contain at least one uppercase letter, one number and one special character')
        }else{
            setPasswordError('')
        }

        if(EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)){
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