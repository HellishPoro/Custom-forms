import React from 'react';
import '../App.css'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    error?: string;
    required?: boolean;
    className?: string;
    id?: string;

}

export const TextInput: React.FC<TextInputProps>= ({label, error, required, id, className = '', ...props})=>{
    return (
        <div className='textInput-container'>
            {label &&(
                <label htmlFor={id} className={`textInput-label ${className}`}>
                {label}
                {required && '*'}
            </label>
            )}
            <input id={id} {...props} className={`textInput ${error ? 'error' : ''} ${className}`}/>
            {error && <span className="error-message">{error}</span>}
        </div>
    )
}