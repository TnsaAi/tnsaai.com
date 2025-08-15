'use client'

import Link from 'next/link'

const jobOpenings = [
  {
    title: 'Foundational Model Research Scientist (Neura/Curiosity)',
    department: 'Research & Development',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead the research and development of our next-generation AGI (Neura) and ASI (Curiosity) foundational models, pushing the boundaries of AI capabilities.',
    requirements: [
      'PhD in AI, Machine Learning, or related quantitative field',
      '5+ years of experience in foundational model research and development',
      'Deep expertise in large language models, neural networks, and advanced AI architectures',
      'Proven track record of significant contributions to AI research (publications, open-source projects)',
      'Proficiency in Python and deep learning frameworks (PyTorch, TensorFlow)',
      'Experience with high-performance computing and distributed training'
    ]
  },
  {
    title: 'AI Safety & Alignment Lead',
    department: 'Safety & Ethics',
    location: 'Remote',
    type: 'Full-time',
    description: 'Establish and lead our AI safety and alignment research efforts, ensuring the responsible and beneficial development of advanced AI systems.',
    requirements: [
      'PhD in AI Safety, Ethics, Philosophy, or related field',
      '5+ years of experience in AI alignment research, interpretability, or robust AI',
      'Strong understanding of potential AI risks and mitigation strategies',
      'Ability to translate complex safety concepts into actionable research and engineering practices',
      'Excellent communication, leadership, and interdisciplinary collaboration skills'
    ]
  },
  {
    title: 'Senior AI Marketing & Growth Specialist',
    department: 'Marketing & Business Development',
    location: 'Remote',
    type: 'Full-time',
    description: "Develop and execute comprehensive marketing strategies to drive awareness, adoption, and growth for TNSA's foundational AI models and products.",
    requirements: [
      "Bachelor's degree in Marketing, Business, or a related field",
      '5+ years of experience in B2B tech marketing, with a focus on AI/ML products',
      'Proven track record of successful product launches and growth campaigns',
      'Strong understanding of the AI landscape, market trends, and competitive analysis',
      'Excellent communication, content creation, and digital marketing skills'
    ]
  },
  {
    title: 'Principal ML Engineer (Infrastructure & Deployment)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design, build, and optimize the scalable ML infrastructure and deployment pipelines for our foundational AI models, enabling efficient research and productization.',
    requirements: [
      'MS/PhD in Computer Science, Engineering, or related field',
      '7+ years of experience in ML engineering, with a focus on infrastructure and MLOps',
      'Expertise in cloud platforms (AWS, Azure, GCP), containerization (Docker, Kubernetes), and distributed systems',
      'Strong programming skills in Python and experience with production-grade ML systems',
      'Experience with model serving, monitoring, and performance optimization'
    ]
  }
]

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Attractive salary packages with equity options and performance bonuses.'
  },
  {
    title: 'Flexible Work Environment',
    description: 'Remote-first culture with flexible hours and work-life balance.'
  },
  {
    title: 'Learning & Development',
    description: 'Continuous learning opportunities, conference attendance, and skill development programs.'
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs for you and your family.'
  },
  {
    title: 'Innovation Time',
    description: 'Dedicated time for personal projects and research initiatives.'
  },
  {
    title: 'Global Team',
    description: 'Work with talented individuals from around the world on cutting-edge AI projects.'
  }
]

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/purple-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Careers.
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Mission Statement */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Join the AI Revolution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us build the world's first AGI and shape the future of artificial intelligence. 
              We're looking for passionate individuals who want to make a difference.
            </p>
          </div>

          {/* Culture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation First</h3>
                <p className="text-gray-600">
                  We encourage creative thinking and bold ideas. Every team member has the opportunity to contribute to groundbreaking research and development.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  We believe the best ideas come from diverse perspectives. Our global team collaborates across time zones and disciplines.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact-Driven</h3>
                <p className="text-gray-600">
                  We're not just building AI—we're building AI that benefits humanity. Every project has the potential to change the world.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Learning</h3>
                <p className="text-gray-600">
                  The AI field evolves rapidly, and so do we. We invest in your growth with learning opportunities and career development.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Job Openings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Open Positions</h2>
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600">{job.department}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {job.type}
                      </span>
                      <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/company/careers/apply?position=${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
                <p className="text-gray-600">Submit your application with resume and cover letter</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Review</h3>
                <p className="text-gray-600">Our team reviews your application and experience</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
                <p className="text-gray-600">Technical and cultural fit interviews</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Join</h3>
                <p className="text-gray-600">Welcome to the TNSA AI team!</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Don't See the Right Role?</h2>
            <p className="text-gray-600 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              href="/company/contact"
              className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
