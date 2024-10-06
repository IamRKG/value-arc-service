import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function ContactInfo() {
  return (
    <div className="text-white space-y-4">
      <div className="flex items-center">
        <FaMapMarkerAlt className="mr-3 text-xl text-amber-400" />
        <p>123 Main St, City, Country</p>
      </div>
      <div className="flex items-center">
        <FaPhone className="mr-3 text-xl text-amber-400" />
        <p>+1 (123) 456-7890</p>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="mr-3 text-xl text-amber-400" />
        <p>contact@example.com</p>
      </div>
    </div>
  )
}