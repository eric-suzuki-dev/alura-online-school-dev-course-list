'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2 style={{ color: 'white' }}>Something went wrong!</h2>
    </div>
  )
}