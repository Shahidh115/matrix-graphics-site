import { useState, useEffect, useRef } from 'react'

const WA_NUMBER = '94777043334'
const BASE = `https://wa.me/${WA_NUMBER}`

export default function ServiceCard({ service, expanded, onToggle, onClose }) {
  const defaultMsg = `Hello Matrix Graphics, I am interested in ${service.name}. Please send me details, pricing and turnaround time.`
  const [message, setMessage] = useState(defaultMsg)
  const cleanMessage = message.trim() || defaultMsg
  const href = `${BASE}?text=${encodeURIComponent(cleanMessage)}`
  const cardRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (expanded && cardRef.current && !cardRef.current.contains(event.target)) {
        if (onClose) onClose()
      }
    }

    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [expanded, onClose])

  return (
    <article
      ref={cardRef}
      className="service-card flex flex-col gap-3 rounded-md border border-mgblack/10 bg-black/30 p-3 transition-shadow duration-200 hover:shadow-lg"
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onToggle()
      }}
      aria-expanded={expanded}
    >
      <div className="min-w-0 flex-1 text-left">
        <h3 className="text-sm font-bold text-mgnavy truncate">{service.name}</h3>
        <p className="mt-1 text-xs font-medium leading-5 text-mgmuted truncate">{service.desc}</p>
      </div>

      {expanded && (
        <div
          className="mt-2 w-full overflow-hidden rounded-md border border-mgyellow/25 bg-black/35 p-3 animate-in fade-in slide-in-from-top-2 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <label htmlFor={`inquiry-${service.id}`} className="text-sm font-bold text-mgnavy">
            Edit inquiry message
          </label>
          <textarea
            id={`inquiry-${service.id}`}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="inquiry-field mt-2 w-full text-sm"
            rows={3}
          />
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setMessage(defaultMsg)}
              className="inline-flex justify-center rounded-md border border-mgyellow/35 px-3 py-2 text-xs font-bold text-mgyellow transition duration-300 hover:bg-mgyellow hover:text-mgblack"
            >
              Reset message
            </button>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-md bg-mgyellow px-3 py-2 text-sm font-bold text-mgblack transition duration-200 hover:brightness-95"
            >
              Send on WhatsApp
            </a>
          </div>
        </div>
      )}
    </article>
  )
}
