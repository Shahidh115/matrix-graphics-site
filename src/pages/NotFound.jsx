import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Matrix Graphics'
  }, [])

  return (
    <div className="container py-16 text-center sm:py-24">
      <h1 className="text-5xl font-black text-mgnavy sm:text-6xl">404</h1>
      <p className="mt-4 text-base font-medium text-mgnavy/85 sm:text-lg">This page does not exist.</p>
      <div className="mt-6">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}
