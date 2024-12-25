/* eslint-disable */
import Link from 'next/link'
import { Youtube, Facebook, Rss, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-sm ">
      {/* Top Section - Darker blue */}
      <div className="bg-[#24354E] text-white px-6 py-8 lg:px-[12em]">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Lists Section */}
          <div className="grid md:grid-cols-2 gap-x-16 mb-8">
            <div>
              <h2 className="text-base font-semibold mb-3">Upcoming Mobiles:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">iQOO Z9 Turbo</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">vivo X200 Pro Mini</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">Infinix Hot 50 Pro Plus</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">Xiaomi 15 Pro</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">vivo V40 Lite</Link>
                </div>
                <div>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">Nubia Red Magic 10 Pro Plus</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">Sony Xperia 1 VI</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">Infinix Hot 40 Pro</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">POCO F6 Pro</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">vivo X100 Ultra</Link>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold mb-3">Recently Added Mobiles:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">vivo Y29 5G</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">Lava Blaze Duo</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">POCO M7 Pro 256GB</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">vivo X200 512GB</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">realme Note 60x</Link>
                </div>
                <div>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">Honor GT</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">Lava Blaze Duo 8GB RAM</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">realme Neo 7</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">POCO M7 Pro</Link>
                  <Link href="#" className="block py-1 text-gray-300 hover:text-white">realme 14x 8GB RAM</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-8 text-gray-300 text-sm">
            <p className="mb-3">
              MySmartPrice is a gadget research destination where we help users to find the best products at the best price for product categories like mobiles, laptops, electronics, TVs, home appliances, audio products etc.
            </p>
            <p className="font-semibold mb-2 text-white">We have the following features and tools on our site to make the research experience better:</p>
            <div className="space-y-3">
              <p>
                <span className="text-white font-semibold">Videos:</span> Prefer watching a video for a mobile review? Check out our YouTube channel. We shoot product videos in Hindi and English for our users.
              </p>
              <p>
                <span className="text-white font-semibold">Reviews and Expert Score:</span> We are the go-to-destination for mobile reviews. Our experts test and score popular mobiles on various parameters like design, display, camera, value for money, and much more. Based on this we derive the Expert Score for a mobile which helps users to objectively compare and select mobiles.
              </p>
              <p>
                <span className="text-white font-semibold">Price Comparison:</span> We cover prices from all the top online retailers like Amazon, Flipkart, Paytm, Tata CLiQ etc, and show it along with applicable offers and coupons so that users can get the best price for the product.
              </p>
              <p>
                <span className="text-white font-semibold">Upcoming Products:</span> We constantly look for information on upcoming products on the certification and other similar sites, and keep our database and section for upcoming products updated at all times. For many of these products, we are the first ones among all tech news sites to cover them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Lighter blue */}
      <div className="bg-[#152133] text-white px-6 py-8 lg:px-[12em]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Quick Links:</h3>
              <div className="flex flex-wrap gap-x-3 text-xs text-gray-300">
                <Link href="#" className="hover:text-white">Contact us</Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="hover:text-white">About us</Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="hover:text-white">Purpose</Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="hover:text-white">Advertise</Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="hover:text-white">Privacy</Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="hover:text-white">Terms</Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="hover:text-white">FAQ</Link>
              </div>
            </div>

            {/* Download App */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Download Our App</h3>
              <Link href="#" className="inline-block">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-8"
                />
              </Link>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Youtube size={16} />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Facebook size={16} />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Twitter size={16} />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Rss size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex justify-between items-center border-t border-gray-700 mt-6 pt-6">
            <div className="flex items-center gap-2">
              <img src="/placeholder.svg?height=24&width=120" alt="MySmartPrice" className="h-6" />
            </div>
            <div className="text-xs text-gray-400">
              © MSP Digital Media Private Limited
              <span className="ml-2">Made with ❤️ in 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

