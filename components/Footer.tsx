import Link from 'next/link'
import Image from 'next/image'

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'AI Safety', href: '/safety' },
    { name: 'Contact', href: '/company/contact' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/company/careers' },
  ],
  resources: [
    { name: 'Docs →', href: 'https://api.tnsaai.com/docs' },
    { name: 'Status', href: '/status' },
  ],
  legal: [
    { name: 'Terms', href: '/t&c/terms-of-service' },
    { name: 'Privacy', href: '/privacy/policy' },
    { name: 'Security', href: '/security/protocols' },
  ],
  models: [
    { name: 'NGen4 Atom Chat', href: '/models/ngen4-atom-chat' },
    { name: 'NGen- 3.1 Pro', href: '/models/ngen3.1-pro' },
    { name: 'NGen- 3.9', href: '/models/ngen3-max' },
    { name: 'NGen- 3.0', href: '/models/ngen3-10b' },
    { name: 'NGen- 2.0', href: '/models/ngen2-170m' },
    { name: 'NGen- 1.0', href: '/models/ngen1' },
    { name: 'IGen - 1.0', href: '/models/igen1-nano' },
    { name: 'VGen- 0.1', href: '/models/agent' },
    { name: 'Stellar - 2', href: '/models/stellar-large' },
    { name: 'AGen* Q', href: '/models/agent-star' },
  ],
  products: [
    { name: 'API →', href: 'https://api.tnsaai.com' },
    { name: 'GensChat →', href: '/products/genchat' },
    { name: 'EdgeChat', href: '/products/edgechat' },
    { name: 'Enterprise Models', href: '/enterprises' },
    { name: 'Developers', href: '/developers' },
  ],
}

export default function Footer() {
  return (
    <div className="bg-white p-1">
      <footer 
        className="relative rounded-3xl overflow-hidden border border-gray-200"
        style={{
          backgroundImage: 'url(/pink-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Tagline Image Overlay */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10" style={{ top: '64px' }}>
          <Image
            src="/tagline.png"
            alt="TNSA - Building Now for the Future"
            width={800}
            height={120}
            className="opacity-90"
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8" style={{ paddingTop: '256px' }}>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white mb-6">Company</h3>
              <ul role="list" className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-white/80 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white mb-6">Resources</h3>
              <ul role="list" className="space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-white/80 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white mb-6">Legal</h3>
              <ul role="list" className="space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-white/80 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white mb-6">Models</h3>
              <ul role="list" className="space-y-4">
                {navigation.models.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-white/80 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white mb-6">Products</h3>
              <ul role="list" className="space-y-4">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-white/80 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/20 flex justify-between items-center">
            <p className="text-sm leading-5 text-white/60">
              © TNSA - 2023 - Present (All Rights Reserved).
            </p>
            <div className="flex space-x-6">
              <a href="https://twitter.com/tnsaai" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/tnsa" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}