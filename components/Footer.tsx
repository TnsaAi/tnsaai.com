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
          
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-sm leading-5 text-white/60">
              © TNSA - 2023 - Present (All Rights Reserved).
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}