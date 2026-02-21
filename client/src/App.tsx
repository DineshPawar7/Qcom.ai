import React, { useState } from 'react';
import { 
  Activity, 
  Bot, 
  Mail, 
  Database, 
  CreditCard, 
  Bell, 
  Calendar,
  BarChart3,
  Menu,
  X,
  ChevronRight,
  Play,
  Pause,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Dummy data for demonstration
  const workflows = [
    { id: 1, name: 'Competitor Price Monitor', status: 'active', lastRun: '5 min ago', runs: 1243 },
    { id: 2, name: 'AI Review Analyzer', status: 'active', lastRun: '15 min ago', runs: 892 },
    { id: 3, name: 'Customer Alert System', status: 'paused', lastRun: '2 hours ago', runs: 456 },
    { id: 4, name: 'Daily Sales Report', status: 'active', lastRun: '1 hour ago', runs: 2341 },
  ];

  const recentScrapes = [
    { id: 1, source: 'amazon.com/product/123', status: 'success', dataPoints: 156, time: '2 min ago' },
    { id: 2, source: 'twitter.com/competitor', status: 'success', dataPoints: 89, time: '15 min ago' },
    { id: 3, source: 'instagram.com/brand', status: 'failed', dataPoints: 0, time: '1 hour ago' },
    { id: 4, source: 'news.tech/industry', status: 'success', dataPoints: 234, time: '3 hours ago' },
  ];

  const aiAnalyses = [
    { id: 1, type: 'Sentiment Analysis', result: '78% Positive', confidence: 'high', date: 'Today' },
    { id: 2, type: 'Competitor Pricing', result: '12% lower', confidence: 'high', date: 'Yesterday' },
    { id: 3, type: 'Trend Detection', result: '3 emerging', confidence: 'medium', date: '2 days ago' },
  ];

  const notifications = [
    { id: 1, message: 'Price drop detected on competitor A', type: 'alert', read: false },
    { id: 2, message: 'Weekly report ready for download', type: 'info', read: false },
    { id: 3, message: 'API usage limit at 80%', type: 'warning', read: true },
  ];

  const metrics = [
    { label: 'Active Workflows', value: '8', change: '+2', icon: Activity, color: 'bg-blue-500' },
    { label: 'Data Points', value: '234K', change: '+12%', icon: Database, color: 'bg-green-500' },
    { label: 'AI Analyses', value: '1,892', change: '+24%', icon: Bot, color: 'bg-purple-500' },
    { label: 'Notifications', value: '156', change: '+8', icon: Bell, color: 'bg-yellow-500' },
  ];

  const NavItem = ({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) => (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );

  const StatCard = ({ metric }: { metric: typeof metrics[0] }) => (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className={`${metric.color} p-3 rounded-lg bg-opacity-20`}>
          <metric.icon className={`${metric.color.replace('bg-', 'text-')}`} size={24} />
        </div>
        <span className="text-green-400 text-sm font-medium">{metric.change}</span>
      </div>
      <h3 className="text-gray-400 text-sm mb-1">{metric.label}</h3>
      <p className="text-white text-2xl font-bold">{metric.value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 border-r border-gray-700 transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold text-white">QCom.ai</h1>
          ) : (
            <Bot size={28} className="text-blue-400 mx-auto" />
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white p-1 rounded"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <div className="flex-1 py-4 space-y-1 px-3">
          <NavItem icon={Activity} label="Dashboard" active />
          <NavItem icon={Bot} label="Workflows" />
          <NavItem icon={Database} label="Scraping" />
          <NavItem icon={Mail} label="Email" />
          <NavItem icon={BarChart3} label="Analytics" />
          <NavItem icon={Calendar} label="Scheduler" />
          <NavItem icon={Bell} label="Alerts" />
          <NavItem icon={CreditCard} label="Billing" />
        </div>

        <div className="p-4 border-t border-gray-700">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">API Usage</div>
            <div className="h-2 bg-gray-600 rounded-full mb-2">
              <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
            </div>
            <div className="text-sm font-medium">75% used</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Dashboard Overview</h2>
            <div className="flex items-center gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                <Plus size={16} />
                New Workflow
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <StatCard key={index} metric={metric} />
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Workflows */}
            <div className="col-span-2 bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Active Workflows</h3>
                <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1">
                  View All <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="space-y-3">
                {workflows.map(workflow => (
                  <div key={workflow.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      {workflow.status === 'active' ? (
                        <Play size={16} className="text-green-400" />
                      ) : (
                        <Pause size={16} className="text-yellow-400" />
                      )}
                      <div>
                        <h4 className="font-medium text-sm">{workflow.name}</h4>
                        <p className="text-xs text-gray-400">Last run: {workflow.lastRun} • {workflow.runs} runs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-600 rounded">
                        <Edit size={14} className="text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-600 rounded">
                        <Trash2 size={14} className="text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="font-semibold mb-4">Recent Alerts</h3>
              <div className="space-y-3">
                {notifications.map(notif => (
                  <div key={notif.id} className={`p-3 rounded-lg ${notif.read ? 'bg-gray-700' : 'bg-gray-700 border-l-4 border-blue-500'}`}>
                    <p className="text-sm">{notif.message}</p>
                    <span className={`text-xs mt-1 inline-block px-2 py-1 rounded ${
                      notif.type === 'alert' ? 'bg-red-500 bg-opacity-20 text-red-400' : 
                      notif.type === 'warning' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' : 
                      'bg-blue-500 bg-opacity-20 text-blue-400'
                    }`}>
                      {notif.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Recent Scrapes */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="font-semibold mb-4">Recent Scrapes</h3>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-gray-400">
                    <th className="pb-2">Source</th>
                    <th className="pb-2">Data Points</th>
                    <th className="pb-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentScrapes.map(scrape => (
                    <tr key={scrape.id} className="border-t border-gray-700">
                      <td className="py-2 text-sm flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${scrape.status === 'success' ? 'bg-green-400' : 'bg-red-400'}`}></span>
                        {scrape.source}
                      </td>
                      <td className="py-2 text-sm">{scrape.dataPoints}</td>
                      <td className="py-2 text-sm text-gray-400">{scrape.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* AI Analysis */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="font-semibold mb-4">AI Analysis Results</h3>
              <div className="space-y-3">
                {aiAnalyses.map(analysis => (
                  <div key={analysis.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium">{analysis.type}</h4>
                      <p className="text-xs text-gray-400">Confidence: {analysis.confidence}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-400">{analysis.result}</p>
                      <p className="text-xs text-gray-400">{analysis.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;