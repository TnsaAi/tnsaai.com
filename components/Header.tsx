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
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-center gap-2 sm:gap-3">
        <nav className="bg-white shadow-sm border border-gray-100 flex items-center justify-center w-20 h-12 sm:w-28 sm:h-[60px] rounded-full sm:rounded-[40px]">
          <Link href="/">
            <Image src="/TNSA.svg" alt="TNSA" width={60} height={30} className="w-10 sm:w-[60px]" />
          </Link>
        </nav>

        <nav className="hidden lg:flex bg-white shadow-sm border border-gray-100" style={{width: '594px', height: '60px', borderRadius: '40px', padding: '5px 7px'}}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center" style={{gap: '17px', paddingLeft: '50px'}}>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-black hover:text-gray-600">
                  {item.name}
                </Link>
              ))}
            </div>
            <Link href="https://platform.tnsaai.com" className="flex items-center justify-center text-sm text-white bg-black hover:bg-gray-900" style={{width: '102px', height: '50px', borderRadius: '40px'}}>
              Login
            </Link>
          </div>
        </nav>

        <button type="button" className="lg:hidden bg-white rounded-full p-2 sm:p-3 shadow-sm border border-gray-100" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
          <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-72 bg-white p-6 shadow-xl overflow-y-auto">
            <div className="flex justify-end mb-8">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Close menu">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-base font-medium text-gray-900 hover:text-gray-600 py-2" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <Link href="https://platform.tnsaai.com" className="mt-4 px-6 py-3 text-sm font-medium text-white bg-black rounded-full text-center hover:bg-gray-900" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
