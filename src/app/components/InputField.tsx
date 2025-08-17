'use client'

import { useState } from "react";

interface InputFieldProps {
  value?: string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  label?: string; 
  placeholder?: string; 
  helperText?: string; 
  errorMessage?: string; 
  disabled?: boolean; 
  invalid?: boolean;
  loading?:boolean; 
  variant?: 'filled' | 'outlined' | 'ghost'; 
  size?: 'sm' | 'md' | 'lg' ;
}


const InputField: React.FC<InputFieldProps>  = ({
    value, onChange, label, placeholder, helperText, errorMessage,disabled, invalid,loading, variant='ghost', size='sm'
}) => {
  
  const [inputType, setInputType] = useState<string>('password');
  
  const sizeClasses = {
    sm: "min-w-[200px] text-sm px-2 py-1",
    md: "min-w-[400px] text-base px-3 py-2",
    lg: "min-w-[600px] text-lg px-4 py-3",
  };

  const variantClasses = {
    filled: "bg-gray-100 border border-transparent",
    outlined: "border border-gray-300",
    ghost: "bg-transparent border border-transparent",
  };
  
  const togglePassword = () => {

        if(inputType == 'text') {
          setInputType('password');
        } else {
          setInputType('text');
        }
  }
  
  const handleClear = () => {
  onChange?.({
    target: { value: "" },
  } as React.ChangeEvent<HTMLInputElement>);
};

  return (

    <div className='w-[50%] flex flex-col gap-6 items-center text-2xl p-2 border-2 border-amber-400 rounded-2xl'>
        <label>{label}</label>
        <input        
        className={`${variantClasses[variant]}
                    ${sizeClasses[size]}
                    ${invalid ? "border-red-500" : ""}
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                    ${loading ? "animate-pulse" : ""} 
                    maxW-full`}        
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}                 
          />
        {invalid && <p>{errorMessage}</p>}
        {!invalid && <p>{helperText}</p>}
        <div className="flex flex-row gap-4">        
        <button 
        className="text-lg border-2 border-amber-700 p-2 rounded-md hover:bg-amber-600 cursor-pointer"
        onClick={togglePassword} type="button">Toggle</button>
        <button 
        className="text-lg border-2 border-amber-700 p-2 rounded-md hover:bg-amber-600 cursor-pointer"
        onClick={handleClear} type="button">Clear</button>
        </div>
    </div>
  )
}

export default InputField
