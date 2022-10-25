/* eslint-disable prettier/prettier */
import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 w-full py-3 px-4 rounded bg-gray-800  focus-within:ring-2 ring-cyan-300 ">
      {children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'


export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput({ ...rest }: TextInputProps) {
  return (
    <input {...rest} className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none h-12' />
  )
}
TextInputInput.displayName = 'TextInput.Input'



export interface TextInputIconProps {
  children: ReactNode

}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400' >
      {children}
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInput.Icon'

export const TextInput = {
  TextInputRoot,
  TextInputInput,
  TextInputIcon
}