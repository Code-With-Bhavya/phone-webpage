/* eslint-disable */
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function MobileLinks() {
  const priceLinks = [
    { title: 'Samsung Mobile Price', href: '#' },
    { title: 'Mi Mobile Price', href: '#' },
    { title: 'Vivo Mobile Price', href: '#' },
    { title: 'Oppo Mobile Price', href: '#' },
    { title: 'Realme Mobile Price', href: '#' },
    { title: 'Mi 4G Mobiles', href: '#' },
    { title: 'Mobile under 6000', href: '#' },
    { title: 'Best Phone Under 12000', href: '#' },
    { title: 'Nokia Mobile Price', href: '#' },
    { title: 'Apple Mobile Price', href: '#' },
    { title: 'Mobile Phone Under 7000', href: '#' },
    { title: 'Best Phone Under 9000', href: '#' },
    { title: 'Best Phone Under 8000', href: '#' },
    { title: 'Mi Mobiles Under 7000', href: '#' },
    { title: 'Mi Phone Under 7000', href: '#' },
  ]

  const popularPhones = [
    { title: 'Xiaomi Redmi Note 14 Pro+ 5G', href: '#' },
    { title: 'Xiaomi Redmi Note 13 Pro', href: '#' },
    { title: 'vivo T3x', href: '#' },
    { title: 'Samsung Galaxy A35 5G', href: '#' },
    { title: 'Moto G85', href: '#' },
    { title: 'realme GT 7 Pro', href: '#' },
    { title: 'vivo V40 Pro', href: '#' },
    { title: 'OPPO F27 Pro Plus', href: '#' },
    { title: 'Samsung Galaxy S23 FE 5G', href: '#' },
    { title: 'OnePlus 12R', href: '#' },
    { title: 'Motorola Edge 50 Fusion', href: '#' },
    { title: 'Samsung Galaxy A55 5G', href: '#' },
    { title: 'Motorola Edge 50 Pro 5G', href: '#' },
    { title: 'realme 12 Pro', href: '#' },
    { title: 'OPPO Find X8 Pro', href: '#' },
    { title: 'Xiaomi Redmi A4', href: '#' },
    { title: 'realme 13 Pro Plus', href: '#' },
    { title: 'Infinix GT 20 Pro 5G', href: '#' },
    { title: 'POCO M6 Pro 5G', href: '#' },
    { title: 'vivo V30', href: '#' },
  ]

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <div>
        <h2 className="text-[#37474F] font-medium text-lg mb-4">Popular Mobile Price Lists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {priceLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className="flex items-center gap-1 text-sm text-[#37474F] hover:text-[#1a73e8]"
            >
              <ChevronRight className="w-4 h-4" />
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[#37474F] font-medium text-lg mb-4">Popular Mobiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {popularPhones.map((phone, index) => (
            <Link 
              key={index}
              href={phone.href}
              className="flex items-center gap-1 text-sm text-[#37474F] hover:text-[#1a73e8]"
            >
              <ChevronRight className="w-4 h-4" />
              <span>{phone.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

