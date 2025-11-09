'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Company</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Contact</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-anniroenkae-4175054.jpg"
            alt="Contact"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Get in Touch.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We&apos;re here to help with your AI needs and answer any questions about our products and services.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Contact Information.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>General Inquiries: sales@tnsaai.com</li>
              <li>Enterprise Sales: sales@tnsaai.com</li>
              <li>Technical Support: support@tnsaai.com</li>
              <li>Location: Hyderabad, India</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Office Hours.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Monday - Friday: 9:00 AM - 6:00 PM IST
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="mailto:sales@tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Email Us →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
