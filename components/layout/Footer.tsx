import Link from 'next/link'
import { Truck } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-6 w-6" />
              <span className="text-xl font-bold">HM International</span>
            </div>
            <p className="text-gray-400">
              Your trusted logistics partner for fast and reliable shipping solutions worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/track" className="hover:text-white transition-colors">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white transition-colors">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@hminternational.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>24/7 Support Available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HM International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

