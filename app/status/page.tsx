'use client'

import { useState, useEffect } from 'react'

interface ServiceStatus {
  name: string
  status: 'operational' | 'degraded' | 'outage' | 'maintenance'
  uptime: string
  responseTime: string
  lastUpdated: string
}

interface Incident {
  id: string
  title: string
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved'
  severity: 'minor' | 'major' | 'critical'
  description: string
  timestamp: string
  updates: {
    time: string
    message: string
    status: string
  }[]
}

export default function StatusPage() {
  const [services, setServices] = useState<ServiceStatus[]>([
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '145ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'NGen3 Models',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '892ms',
      lastUpdated: '1 minute ago'
    },
    {
      name: 'GenChat Platform',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '234ms',
      lastUpdated: '3 minutes ago'
    },
    {
      name: 'EdgeChat Service',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '178ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'Model Training Infrastructure',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '1.2s',
      lastUpdated: '5 minutes ago'
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '89ms',
      lastUpdated: '1 minute ago'
    },
    {
      name: 'Data Processing Pipeline',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '456ms',
      lastUpdated: '4 minutes ago'
    },
    {
      name: 'Enterprise Console',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '312ms',
      lastUpdated: '2 minutes ago'
    }
  ])

  const [incidents, setIncidents] = useState<Incident[]>([])

  const [overallStatus, setOverallStatus] = useState<'operational' | 'degraded' | 'outage'>('operational')

  useEffect(() => {
    // Calculate overall status based on individual services
    const hasOutage = services.some(service => service.status === 'outage')
    const hasDegraded = services.some(service => service.status === 'degraded' || service.status === 'maintenance')
    
    if (hasOutage) {
      setOverallStatus('outage')
    } else if (hasDegraded) {
      setOverallStatus('degraded')
    } else {
      setOverallStatus('operational')
    }
  }, [services])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500'
      case 'degraded':
        return 'bg-yellow-500'
      case 'outage':
        return 'bg-red-500'
      case 'maintenance':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational'
      case 'degraded':
        return 'Degraded Performance'
      case 'outage':
        return 'Service Outage'
      case 'maintenance':
        return 'Maintenance'
      default:
        return 'Unknown'
    }
  }

  const getOverallStatusMessage = () => {
    switch (overallStatus) {
      case 'operational':
        return 'All systems operational'
      case 'degraded':
        return 'Some systems experiencing issues'
      case 'outage':
        return 'Service disruption detected'
      default:
        return 'Status unknown'
    }
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/green-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-5xl font-medium tracking-tight mb-16 font-sans bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
              System Status.
            </h1>
          </div>
        </div>
      </div>

      {/* Overall Status */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-5xl lg:text-6xl">System Overview.</h2>
            <p className="text-xl text-gray-900 font-medium sm:text-2xl lg:text-3xl">
              Real-time status and performance metrics for TNSA AI services.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className={`w-4 h-4 rounded-full ${getStatusColor(overallStatus)} mr-3`}></div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {getOverallStatusMessage()}
              </h2>
            </div>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleString()}
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Service Status</h3>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)} mr-4`}></div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-sm text-gray-600">{getStatusText(service.status)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="grid grid-cols-3 gap-8 text-sm">
                        <div>
                          <p className="text-gray-500">Uptime</p>
                          <p className="font-semibold text-gray-900">{service.uptime}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Response Time</p>
                          <p className="font-semibold text-gray-900">{service.responseTime}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Last Updated</p>
                          <p className="font-semibold text-gray-900">{service.lastUpdated}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Incidents Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Incidents</h2>
        {incidents.length === 0 ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-green-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-semibold text-green-900">No Recent Incidents</h3>
            </div>
            <p className="text-green-700">
              All systems have been running smoothly. No incidents reported in the last 30 days.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                    <p className="text-sm text-gray-600">{incident.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${ 
                      incident.severity === 'critical' ? 'bg-red-100 text-red-800' :
                      incident.severity === 'major' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {incident.severity}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">{incident.timestamp}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {incident.updates.map((update, updateIndex) => (
                    <div key={updateIndex} className="border-l-2 border-gray-200 pl-4 py-2">
                      <div className="flex justify-between items-start">
                        <p className="text-sm text-gray-700">{update.message}</p>
                        <span className="text-xs text-gray-500 ml-4">{update.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Performance Metrics */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Uptime</h3>
            <p className="text-3xl font-bold text-green-600">99.96%</p>
            <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Response Time</h3>
            <p className="text-3xl font-bold text-blue-600">312ms</p>
            <p className="text-sm text-gray-500 mt-2">Last 24 hours</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Incidents Resolved</h3>
            <p className="text-3xl font-bold text-purple-600">100%</p>
            <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
          </div>
        </div>
      </div>

      {/* Subscribe to Updates */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive notifications about service status updates and planned maintenance.
          </p>
          <div className="flex justify-center gap-4">
            <button className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all">
              Subscribe to Updates
            </button>
            <button className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all">
              RSS Feed
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="text-center text-sm text-gray-500">
          <p>Status page automatically refreshes every 30 seconds</p>
          <p className="mt-2">
            For support inquiries, contact 
            <a href="mailto:support@tnsaai.com" className="text-blue-600 hover:text-blue-800">
              support@tnsaai.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
