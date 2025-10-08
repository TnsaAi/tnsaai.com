'use client'

import Link from 'next/link'

export default function NewsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              Transforming Government Services with Large Language Models.
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">AI Collaboration for the Public Good.</h2>
            <p className="text-xl text-gray-900 sm:text-2xl lg:text-3xl">
              A comprehensive look at how Large Language Models can revolutionize government services and public administration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Introduction: The Power of LLMs in Government</h3>
                <p className="text-gray-800 text-lg mb-4">
                  In an era where governments face complex challenges—from managing public health crises to optimizing infrastructure—artificial intelligence (AI) is emerging as a transformative tool. While Artificial General Intelligence (AGI) remains a futuristic dream, Large Language Models (LLMs) are already revolutionizing how governments interact with citizens, streamline operations, and deliver services.
                </p>
                <p className="text-gray-800 text-lg mb-4">
                  At TNSA AI, we believe that LLMs can be the bridge between government and the people, enabling smarter, faster, and more inclusive public services. This blog post explores how LLMs can be deployed in government schemes, with practical examples, benefits, and a roadmap for collaboration.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Are Large Language Models (LLMs)?</h3>
                <p className="text-gray-800 text-lg mb-4">
                  LLMs are AI models trained on vast amounts of text data to understand and generate human-like text. They excel at tasks like:
                </p>
                <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg mb-4">
                  <li><strong>Natural Language Understanding (NLU):</strong> Interpreting queries, documents, and conversations.</li>
                  <li><strong>Text Generation:</strong> Creating reports, summaries, and even policy proposals.</li>
                  <li><strong>Dialogue Management:</strong> Building chatbots and virtual assistants for public services.</li>
                </ul>
                <p className="text-gray-800 text-lg">
                  Unlike AGI, which aims to replicate human-like intelligence across all domains, LLMs are specialized for text-based tasks. This makes them ideal for government applications where data is primarily textual (e.g., forms, reports, citizen queries).
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why LLMs for Government Schemes?</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Efficiency in Public Services</h4>
                  <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
                    <li><strong>Automated Citizen Interaction:</strong> LLM-powered chatbots can handle 24/7 queries about tax forms, welfare benefits, or public transport.</li>
                    <li><strong>Document Processing:</strong> Automate the extraction of key information from government documents (e.g., medical records, contracts).</li>
                    <li><strong>Policy Analysis:</strong> Generate summaries of complex policies or draft responses to citizen feedback.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Improved Accessibility</h4>
                  <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
                    <li><strong>Multilingual Support:</strong> LLMs can translate and summarize information in multiple languages, ensuring inclusivity.</li>
                    <li><strong>Personalized Services:</strong> Tailor advice to citizens based on their needs (e.g., career guidance for students, healthcare recommendations).</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Cost Savings and Scalability</h4>
                  <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
                    <li>Reduce the need for human labor in repetitive tasks.</li>
                    <li>Scale services to handle large populations without proportional increases in cost.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">The NGen3 Series: Advanced AI Models for Government Schemes</h3>
                <p className="text-gray-800 text-lg mb-6">
                  At TNSA AI, we've developed specialized models that go beyond standard LLMs, offering enhanced capabilities for government use cases. Here's how NGen3.9 Pro, NGen3.9 Max, and NGen3.1 Pro Multimodal can transform public services:
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">1. NGen3.9 Pro: CoT Reasoning Models</h4>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">What is it?</h5>
                    <p className="text-gray-800 mb-4">The NGen3.9 Pro is a Chain of Thought (CoT) Reasoning Model designed to break down complex problems into logical steps, ensuring transparency and explainability.</p>
                    
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">Key Features:</h5>
                    <ul className="list-disc list-inside text-gray-800 space-y-1 mb-4">
                      <li><strong>Structured Decision-Making:</strong> Breaks down tasks into logical steps, making it easier for humans to understand and trust AI outputs.</li>
                      <li><strong>Policy Analysis:</strong> Analyzes public policy documents, identifies key points, and generates actionable insights.</li>
                      <li><strong>Predictive Analytics:</strong> Uses historical data to predict trends (e.g., healthcare demand, infrastructure needs) and recommend proactive measures.</li>
                    </ul>

                    <h5 className="text-lg font-semibold text-gray-900 mb-2">Use Case in Government:</h5>
                    <ul className="list-disc list-inside text-gray-800 space-y-1">
                      <li><strong>Healthcare Resource Allocation:</strong> Analyze patient data and historical trends to optimize hospital staffing and equipment distribution.</li>
                      <li><strong>Welfare Program Optimization:</strong> Evaluate eligibility criteria and adjust policies to reduce fraud and improve efficiency.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">2. NGen3.9 Max: Enhanced CoT Reasoning Models</h4>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">What is it?</h5>
                    <p className="text-gray-800 mb-4">The NGen3.9 Max is an advanced version of the CoT model, offering even greater reasoning capabilities for complex, high-stakes scenarios.</p>
                    
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">Key Features:</h5>
                    <ul className="list-disc list-inside text-gray-800 space-y-1 mb-4">
                      <li><strong>High-Volume Data Handling:</strong> Processes large volumes of data efficiently and accurately, making it ideal for analyzing massive datasets (e.g., census data, social media sentiment).</li>
                      <li><strong>Multimodal Analysis:</strong> Combines text, images, and audio data to provide more comprehensive insights.</li>
                      <li><strong>Decision Support:</strong> Provides real-time decision support based on the latest data, enhancing policy implementation and service delivery.</li>
                    </ul>

                    <h5 className="text-lg font-semibold text-gray-900 mb-2">Use Case in Government:</h5>
                    <ul className="list-disc list-inside text-gray-800 space-y-1">
                      <li><strong>Urban Planning:</strong> Analyze satellite images and social media to predict public sentiment and infrastructure needs, informing urban development plans.</li>
                      <li><strong>Public Safety:</strong> Use predictive analytics to identify high-risk areas and recommend interventions to prevent incidents.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">3. NGen3.1 Pro Multimodal Model</h4>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">What is it?</h5>
                    <p className="text-gray-800 mb-4">The NGen3.1 Pro Multimodal is a Multimodal Reasoning Model that processes multiple types of data, enhancing its ability to handle diverse information.</p>
                    
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">Key Features:</h5>
                    <ul className="list-disc list-inside text-gray-800 space-y-1 mb-4">
                      <li><strong>Text, Image, and Audio Integration:</strong> Combines text-based information with visual and audio data, providing a richer, more holistic view of the data.</li>
                      <li><strong>Multimodal Learning:</strong> Continuously learns from mixed data types, improving its ability to interpret complex, real-world scenarios.</li>
                      <li><strong>Multimodal Analysis:</strong> Facilitates the analysis of public opinion, sentiment analysis, and predictive analytics by integrating various data sources.</li>
                    </ul>

                    <h5 className="text-lg font-semibold text-gray-900 mb-2">Use Case in Government:</h5>
                    <ul className="list-disc list-inside text-gray-800 space-y-1">
                      <li><strong>Social Media Monitoring:</strong> Analyze public sentiment and feedback on social media platforms to improve public service delivery and address community concerns.</li>
                      <li><strong>Urban Planning:</strong> Use satellite images, social media data, and public opinion to create more effective urban planning and infrastructure projects.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of NGen3.9 Pro, NGen3.9 Max, and NGen3.1 Pro Multimodal Models</h3>
                <p className="text-gray-800 text-lg mb-4">These models offer significant benefits for government schemes:</p>
                <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
                  <li><strong>Enhanced Decision-Making:</strong> With CoT reasoning, policy analysis, and predictive analytics, governments can make more informed, data-driven decisions.</li>
                  <li><strong>Improved Accessibility:</strong> Multimodal models can enhance public services by providing better access to diverse data sources, ensuring inclusivity.</li>
                  <li><strong>Cost Savings and Efficiency:</strong> By automating document processing, resource allocation, and predictive analytics, these models can reduce costs and improve service delivery.</li>
                  <li><strong>Real-Time Insights:</strong> Multimodal models provide real-time decision support, allowing governments to adapt quickly to changing circumstances.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">NGen3 Series: A Comprehensive Solution for Government Schemes</h3>
                <p className="text-gray-800 text-lg">
                  By leveraging the advanced capabilities of the NGen3.9 Pro, NGen3.9 Max, and NGen3.1 Pro Multimodal models, TNSA AI can provide a comprehensive solution for government schemes. These models offer enhanced decision-making, improved accessibility, and cost savings, ultimately leading to more effective and innovative public services.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conclusion</h3>
                <p className="text-gray-800 text-lg mb-4">
                  In conclusion, the NGen3 Series of advanced AI models offers a powerful toolkit for governments to enhance public services. By leveraging CoT reasoning, multimodal analysis, and high-volume data handling, these models can provide real-time insights, improve decision-making, and reduce costs. With the right tools, governments can deliver more efficient, accessible, and innovative public services, empowering citizens and fostering a better future.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Call to Action</h3>
                <p className="text-gray-800 text-lg">
                  Ready to transform your government services with cutting-edge AI? Explore how TNSA AI's NGen3 Series can revolutionize public administration. Contact us today to learn more about how we can collaborate to build a smarter, more inclusive future.
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Topics</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Large Language Models in Government</li>
                    <li>• NGen3 Series Applications</li>
                    <li>• Public Service Automation</li>
                    <li>• AI for Policy Analysis</li>
                    <li>• Multimodal Government Solutions</li>
                  </ul>
                </div>
                
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact TNSA</h4>
                  <p className="text-gray-700 mb-4">Ready to transform your government services?</p>
                  <Link
                    href="/company/contact"
                    className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all w-full"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link
              href="/company/news"
              className="rounded-md bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-all"
            >
              View all news
            </Link>
            <Link
              href="/company/contact"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-all"
            >
              Contact TNSA AI
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
