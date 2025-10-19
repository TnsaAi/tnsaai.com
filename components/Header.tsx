'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Models', href: '/models' },
  { name: 'Research', href: '/research' },
  { name: 'Products', href: '/products' },
  { name: 'Company', href: '/company' },
  { name: 'Resources', href: '/developers' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6">
      <nav className="mx-auto max-w-6xl">
        <div className="bg-white/20 backdrop-blur-md rounded-full px-8 py-4 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image
                  src="/tnsa-logo.png"
                  alt="TNSA AI"
                  width={24}
                  height={24}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              <Link
                href="https://platform.tnsaai.com"
                className="px-6 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-all"
              >
                Try API
              </Link>
              <Link
                href="https://chat.tnsaai.com"
                className="px-6 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-all"
              >
                GensChat
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900 hover:text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm border-l border-white/20">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src="/tnsa-logo.png"
                    alt="TNSA AI"
                    width={24}
                    height={24}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              <button
                type="button"
                className="text-white/90 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <Link
                    href="https://platform.tnsaai.com"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/10"
                  >
                    Try API
                  </Link>
                  <Link
                    href="/products/genchat"
                    className="block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                  >
                    GenGChat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
