'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const jobOpenings = [
  {
    title: 'Foundational Model Research Scientist (AGI/ASI)',
    department: 'Research & Development',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Lead the research and development of our next-generation AGI (Neura) and ASI (Curiosity) foundational models, pushing the boundaries of AI capabilities toward superintelligence.',
    requirements: [
      'PhD in AI, Machine Learning, Computer Science, or related quantitative field',
      '5+ years of experience in foundational model research and development',
      'Deep expertise in transformer architectures, attention mechanisms, and neural scaling laws',
      'Experience with multi-modal AI systems and cross-domain learning',
      'Proven track record of significant contributions to AI research (top-tier publications, open-source projects)',
      'Proficiency in Python, PyTorch/JAX, and distributed training frameworks',
      'Experience with high-performance computing, GPU clusters, and model parallelization',
      'Strong mathematical background in optimization, statistics, and information theory'
    ],
    skills: ['PyTorch', 'JAX', 'Transformers', 'CUDA', 'Distributed Training', 'Research', 'Mathematics']
  },
  {
    title: 'AI Safety & Alignment Research Lead',
    department: 'Safety & Ethics',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Establish and lead our AI safety and alignment research efforts, ensuring the responsible development of AGI/ASI systems that remain beneficial and aligned with human values.',
    requirements: [
      'PhD in AI Safety, Ethics, Philosophy, Cognitive Science, or related field',
      '5+ years of experience in AI alignment research, interpretability, or robust AI systems',
      'Deep understanding of AI existential risks and advanced safety techniques',
      'Experience with mechanistic interpretability, reward modeling, and constitutional AI',
      'Ability to translate complex safety concepts into actionable research and engineering practices',
      'Strong publication record in AI safety conferences (NeurIPS, ICML, ICLR, etc.)',
      'Excellent communication, leadership, and interdisciplinary collaboration skills',
      'Experience working with government agencies and AI policy organizations'
    ],
    skills: ['AI Safety', 'Interpretability', 'Ethics', 'Policy', 'Research', 'Leadership']
  },
  {
    title: 'Senior Quantum AI Research Scientist',
    department: 'Research & Development',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Pioneer the development of quantum-enhanced AI systems, exploring quantum machine learning algorithms and quantum-classical hybrid architectures for next-generation AI capabilities.',
    requirements: [
      'PhD in Quantum Computing, Quantum Information, Physics, or Computer Science',
      '4+ years of experience in quantum machine learning or quantum algorithms',
      'Deep understanding of quantum circuits, quantum error correction, and NISQ devices',
      'Experience with quantum programming frameworks (Qiskit, Cirq, PennyLane)',
      'Strong background in linear algebra, quantum mechanics, and information theory',
      'Experience with variational quantum algorithms and quantum neural networks',
      'Proficiency in Python and quantum simulation tools',
      'Publications in quantum computing or quantum machine learning venues'
    ],
    skills: ['Quantum Computing', 'Qiskit', 'Quantum ML', 'Physics', 'Linear Algebra', 'Python']
  },
  {
    title: 'Principal MLOps & Infrastructure Engineer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Design, build, and optimize the scalable ML infrastructure and deployment pipelines for our foundational AI models, enabling efficient research and productization at massive scale.',
    requirements: [
      'MS/PhD in Computer Science, Engineering, or related field',
      '7+ years of experience in ML engineering, with focus on large-scale infrastructure and MLOps',
      'Expertise in cloud platforms (AWS, Azure, GCP), containerization (Docker, Kubernetes), and distributed systems',
      'Experience with model serving frameworks (TensorRT, ONNX, Triton), monitoring, and A/B testing',
      'Strong programming skills in Python, Go, or Rust with production-grade ML systems experience',
      'Experience with CI/CD pipelines, infrastructure as code (Terraform, Ansible)',
      'Knowledge of GPU optimization, model quantization, and edge deployment',
      'Experience with data engineering tools and real-time streaming systems'
    ],
    skills: ['Kubernetes', 'AWS', 'MLOps', 'Python', 'Go', 'TensorRT', 'Infrastructure', 'DevOps']
  },
  {
    title: 'Senior AI Product Manager',
    department: 'Product & Strategy',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Drive the product strategy and roadmap for our AI models and platforms, working closely with research, engineering, and business teams to bring cutting-edge AI to market.',
    requirements: [
      'MBA or MS in Computer Science, Engineering, or related technical field',
      '5+ years of product management experience in AI/ML products or developer tools',
      'Deep understanding of AI model capabilities, limitations, and market applications',
      'Experience with API design, developer experience, and platform products',
      'Strong analytical skills with experience in product metrics and user research',
      'Excellent communication skills and ability to work with technical and non-technical stakeholders',
      'Experience with agile development methodologies and product management tools',
      'Background in B2B SaaS products and enterprise sales cycles'
    ],
    skills: ['Product Management', 'AI/ML', 'APIs', 'Strategy', 'Analytics', 'Agile', 'B2B SaaS']
  },
  {
    title: 'AI Ethics & Policy Researcher',
    department: 'Safety & Ethics',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Research and develop ethical frameworks and policy recommendations for responsible AI development, engaging with policymakers, academics, and industry leaders.',
    requirements: [
      'PhD in Ethics, Philosophy, Law, Public Policy, or related field',
      '3+ years of experience in AI ethics, technology policy, or related research',
      'Strong understanding of AI capabilities, risks, and societal implications',
      'Experience with regulatory frameworks and government relations',
      'Excellent writing and communication skills for academic and policy audiences',
      'Experience with stakeholder engagement and public speaking',
      'Knowledge of international AI governance and regulatory landscapes',
      'Publications in ethics, policy, or AI safety venues'
    ],
    skills: ['AI Ethics', 'Policy', 'Research', 'Writing', 'Stakeholder Management', 'Governance']
  },
  {
    title: 'Senior Full-Stack Engineer (AI Applications)',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Build and maintain user-facing applications and developer tools that showcase our AI capabilities, creating intuitive interfaces for complex AI systems.',
    requirements: [
      'BS/MS in Computer Science or related field',
      '5+ years of full-stack development experience with modern web technologies',
      'Proficiency in React, TypeScript, Node.js, and modern frontend frameworks',
      'Experience with AI/ML APIs, model integration, and real-time applications',
      'Strong understanding of web performance, security, and scalability',
      'Experience with cloud platforms and serverless architectures',
      'Knowledge of UI/UX principles and experience working with design teams',
      'Familiarity with AI model deployment and inference optimization'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'AI APIs', 'Cloud', 'UI/UX', 'Performance']
  },
  {
    title: 'AI Training Data Specialist',
    department: 'Data & Research',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Curate, process, and optimize training datasets for our foundational models, ensuring high-quality, diverse, and ethically sourced data for AI training.',
    requirements: [
      'MS in Computer Science, Data Science, Linguistics, or related field',
      '3+ years of experience in data curation, NLP, or machine learning',
      'Experience with large-scale data processing and distributed computing frameworks',
      'Strong programming skills in Python and data processing libraries (Pandas, Dask, Spark)',
      'Knowledge of data privacy, copyright, and ethical data sourcing practices',
      'Experience with text processing, tokenization, and data quality assessment',
      'Understanding of bias detection and mitigation in training datasets',
      'Familiarity with data versioning and experiment tracking tools'
    ],
    skills: ['Data Science', 'Python', 'NLP', 'Spark', 'Data Ethics', 'Data Processing']
  },
  {
    title: 'AI Business Development Manager',
    department: 'Business Development',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Drive strategic partnerships and enterprise sales for our AI models and platforms, working with Fortune 500 companies and government organizations.',
    requirements: [
      'MBA or BS in Business, Engineering, or related field',
      '5+ years of experience in B2B sales, business development, or partnerships',
      'Strong understanding of AI/ML technologies and enterprise use cases',
      'Experience selling to technical decision-makers and C-level executives',
      'Proven track record of closing large enterprise deals ($1M+ ARR)',
      'Excellent presentation and negotiation skills',
      'Experience with CRM systems and sales methodologies',
      'Network of contacts in enterprise technology or AI industry'
    ],
    skills: ['B2B Sales', 'Enterprise', 'AI/ML', 'Partnerships', 'CRM', 'Negotiation']
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
              Help us build the world&apos;s first AGI and shape the future of artificial intelligence.
              We&apos;re looking for passionate individuals who want to make a difference.
            </p>
          </div>

          {/* Culture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation First</h3>
                  <p className="text-gray-600">
                    We encourage creative thinking and bold ideas. Every team member has the opportunity to contribute to groundbreaking research and development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
                  <p className="text-gray-600">
                    We believe the best ideas come from diverse perspectives. Our global team collaborates across time zones and disciplines.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact-Driven</h3>
                  <p className="text-gray-600">
                    We&apos;re not just building AI—we&apos;re building AI that benefits humanity. Every project has the potential to change the world.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Learning</h3>
                  <p className="text-gray-600">
                    The AI field evolves rapidly, and so do we. We invest in your growth with learning opportunities and career development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Job Openings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">Open Positions</h2>
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
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

                    {job.skills && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

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
                  </CardContent>
                </Card>
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
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Don&apos;t See the Right Role?</h2>
            <p className="text-gray-600 mb-8">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
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
