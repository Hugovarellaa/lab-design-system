import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function TextInput({ ...rest }: TextInputProps) {
  return (
    <input className='py-4 px-3 rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400' {...rest} />
  )
}