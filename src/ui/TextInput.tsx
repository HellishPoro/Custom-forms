import React from 'react';
import '../App.css'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    error?: string;
    required?: boolean;
    className?: string;
    id?: string;
    icon?: React.ReactNode;
}

export const TextInput: React.FC<TextInputProps>= ({label, error, required, id, className = '', icon, ...props})=>{
    return (
        <div className='textInput-container'>
            {label &&(
                <label htmlFor={id} className={`textInput-label ${className}`}>
                {label}
                {required && '*'}
            </label>
            )}
            <div className="textInput-wrapper">
                {icon && <span className="input-icon">{icon}</span>}
                <input
                    id={id}
                    {...props}
                    className={`textInput ${error ? 'error' : ''} ${icon ? 'with-icon' : ''} ${className}`}
                />
            </div>  
                {error && <span className="error-message">{error}</span>}
        </div>
    )
}