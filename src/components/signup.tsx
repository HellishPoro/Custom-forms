import React, {useState} from "react";
import { IconAt } from "@tabler/icons-react";
import {TextInput} from './textInput'

interface SignupProps {
    onSubmit: (values: {
        name: string;
        nickname: string;
        email: string;
        gender: string;
        password: string;
    }) => void;
}

export const Signup: React.FC<SignupProps> = ({ onSubmit }: SignupProps) => {
    const [name,  setName] = useState('')
    const [nickname, setNickename] = useState('')
    const [email, setEmail] = useState('')
    const [gender,  setGender] = useState('male')
    const [password,  setPassword] = useState('')
    const [confirmPassword,  setConfirmPassword] = useState('')

    const [error, setError] = useState<{[key: string]: string}>({})

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

    const validate = ()=>{
        const newErrors = {} as { [key: string]: string }

        if(!name.trim()) return setError({name: 'Имя не может быть пустым'})
        if(!nickname.trim()) return setError({nickname: 'Ник не может быть пустым'})
        if(!email.trim()) return setError({email: 'Email не может быть пустым'})
        if(!emailRegex.test(email)) return setError({email: 'Некорректный email'})
        if(!password.trim()) return setError({password: 'Пароль не может быть пустым'})
        if(!passwordRegex.test(password)) return setError({password: 'Пароль должен содержать от 8 до 20 символов, хотя бы одну заглавную букву, одну цифру и один специальный символ'})
        if(password !== confirmPassword) return setError({confirmPassword: 'Пароли не совпадают'})

        setError(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(!validate()) return;

        onSubmit({ name, nickname, email, gender, password })
    }

    return(
        <form onSubmit={handleSubmit}>
            <TextInput
            className="signup"
            label="Имя"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder="Имя"
            required={true}
            error={error.name}
            />
            <TextInput
            className="signup"
            label="Ник"
            placeholder="Ник"
            value={nickname}
            onChange={(e)=> setNickename(e.target.value)}
            required={true}
            error={error.nickname}
            icon={<IconAt size='0.8rem'/>}
            />
            <TextInput
            className="signup"
            placeholder="email"
            label="email"
            value={email}
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            required={true}
            error={error.email}
            />

            <div>
                <span className="span-sex">Пол</span>
                <label className="radio">
                    <input 
                    type="radio" 
                    name="sex"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e)=> setGender(e.target.value)}
                    />
                    Мужской
                </label>
                <label className="radio">
                    <input 
                    type="radio" 
                    name="sex"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e)=> setGender(e.target.value)}
                    />
                    Женский
                </label>
            </div>

            <TextInput
            className="signup"
            label="Пароль"
            value={password}
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Пароль"
            required={true}
            error={error.password}
            />
            <TextInput
            className="signup"
            label="Подтверждение пароля"
            value={confirmPassword}
            placeholder="Подтверждение пароля"
            type="password"
            onChange={(e)=> setConfirmPassword(e.target.value)}
            required={false}
            error={error.confirmPassword}
            />

            <div className="button-box">
                <button className="button" type="submit">Зарегистрироваться</button>
            </div>
        </form>
    )
}