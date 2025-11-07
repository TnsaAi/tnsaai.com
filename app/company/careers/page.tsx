'use client'

import Link from 'next/link'
import Image from 'next/image'

const jobs = [
  { title: 'AI Research Scientist', department: 'Research', location: 'Remote / Hybrid' },
  { title: 'ML Engineer', department: 'Engineering', location: 'Remote / Hybrid' },
  { title: 'AI Safety Researcher', department: 'Safety', location: 'Remote / Hybrid' },
  { title: 'Product Manager', department: 'Product', location: 'Remote / Hybrid' },
  { title: 'Full-Stack Engineer', department: 'Engineering', location: 'Remote / Hybrid' },
  { title: 'Data Scientist', department: 'Data', location: 'Remote / Hybrid' },
  { title: 'DevOps Engineer', department: 'Engineering', location: 'Remote / Hybrid' },
  { title: 'NLP Research Scientist', department: 'Research', location: 'Remote / Hybrid' },
  { title: 'Computer Vision Engineer', department: 'Engineering', location: 'Remote / Hybrid' },
  { title: 'AI Ethics Researcher', department: 'Safety', location: 'Remote / Hybrid' },
  { title: 'Backend Engineer', department: 'Engineering', location: 'Remote / Hybrid' },
  { title: 'Technical Writer', department: 'Documentation', location: 'Remote / Hybrid' },
  { title: 'Business Development Manager', department: 'Sales', location: 'Remote / Hybrid' },
  { title: 'UI/UX Designer', department: 'Design', location: 'Remote / Hybrid' },
  { title: 'Data Engineer', department: 'Data', location: 'Remote / Hybrid' }
]

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Company</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Careers</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-anniroenkae-3418400.jpg"
            alt="Careers"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Join Our Team.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Help us build the future of artificial intelligence. We're looking for passionate individuals who want to make a difference in advancing AI technology for humanity.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Why TNSA?</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Work on cutting-edge AI research and development</li>
              <li>Collaborate with world-class researchers and engineers</li>
              <li>Competitive compensation with equity options</li>
              <li>Flexible remote-first work environment</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Open Positions.</h2>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div key={index} className="border border-gray-200 rounded-[40px] p-6 hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.department} • {job.location}</p>
                    </div>
                    <Link 
                      href="mailto:careers@tnsaai.com" 
                      className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Apply
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="mailto:careers@tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              View All Openings →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
