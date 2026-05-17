import { Link } from 'react-router-dom'
import facebookIcon from '../assets/social/facebook.svg'
import instagramIcon from '../assets/social/instagram.svg'
import tiktokIcon from '../assets/social/tiktok.svg'

const socialLinks = [
  { label: 'Facebook', icon: facebookIcon, href: 'https://web.facebook.com/profile.php?id=61568915770760' },
  { label: 'Instagram', icon: instagramIcon, href: 'https://www.instagram.com/matrixgraphics.lk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { label: 'TikTok', icon: tiktokIcon, href: 'https://www.tiktok.com/' }
]

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-mgyellow/10 bg-[#080808] text-white">
      <div className="container grid grid-cols-1 gap-7 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-bold text-mgyellow">Matrix Graphics</h3>
          <p className="text-sm font-semibold text-white">Your Printing Solutions</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-white">99D, Yatiyanthota Road, Seethawaka, Avissawella, Sri Lanka</p>
          <p className="mt-2 text-sm font-semibold text-white">Phone: <a href="tel:+94777043334" className="transition duration-300 text-mgyellow hover:brightness-90">+94 777 04 3334</a></p>
          <p className="text-sm font-semibold text-white">Email: <a href="mailto:info@matrixgraphics.lk" className="transition duration-300 text-mgyellow hover:brightness-90">info@matrixgraphics.lk</a></p>
        </div>

        <div>
          <h4 className="font-semibold text-mgyellow">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="transition duration-300 hover:text-mgyellow" to="/">Home</Link></li>
            <li><Link className="transition duration-300 hover:text-mgyellow" to="/services">Services</Link></li>
            <li><Link className="transition duration-300 hover:text-mgyellow" to="/gallery">Gallery</Link></li>
            <li><Link className="transition duration-300 hover:text-mgyellow" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-mgyellow">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 p-1.5 transition duration-300 hover:bg-white/20 hover:scale-110">
                <img src={item.icon} alt="" className="h-full w-full object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black">
        <div className="container flex flex-col gap-1 py-4 text-xs font-semibold text-white sm:text-sm md:flex-row md:justify-between">
          <div>(c) {new Date().getFullYear()} Matrix Graphics. All rights reserved.</div>
          <div>Designed with care for premium print services</div>
        </div>
      </div>
    </footer>
  )
}
