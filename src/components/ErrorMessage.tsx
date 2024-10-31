import { PropsWithChildren } from 'react'

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p className='bg-red-500 text-center uppercase p-2 text-white font-bold'>
      {children}
    </p>
  )
}
