import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  asChild: boolean
}

export function Button({ asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <>
      <Comp
        className={clsx(
          'bg-cyan-500 rounded font-semibold text-black px-3 py-4 hover:bg-cyan-300 transition-colors w-full h-full focus-within:ring-2 ring-white',
        )}
      >
        {children}
      </Comp>
    </>
  )
}
