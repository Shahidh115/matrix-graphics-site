import whatsappIcon from '../assets/social/whatsapp.svg'

const WA_NUMBER = '94777043334'
const BASE = `https://wa.me/${WA_NUMBER}`

export default function WhatsAppButton({ message }) {
  const defaultMsg = 'Hello Matrix Graphics, I would like to enquire about your printing services.'
  const href = `${BASE}?text=${encodeURIComponent(message || defaultMsg)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Matrix Graphics on WhatsApp"
      className="fixed bottom-6 right-4 z-50 rounded-full bg-white p-0.5 shadow-[0_12px_28px_rgba(0,0,0,0.32)] ring-2 ring-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)] md:bottom-8 md:right-8"
    >
      <img src={whatsappIcon} alt="" className="h-14 w-14" />
    </a>
  )
}
