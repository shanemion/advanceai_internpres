import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, TrendingUp, Layers, Workflow, Database, Lightbulb, Code, Globe, Shield } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const Slide = ({ children, background = "bg-white" }) => (
  <div className={`w-[1024px] h-[576px] p-8 ${background} text-black overflow-hidden`}>
    {children}
  </div>
);

const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {children}
  </button>
);

const IconBox = ({ Icon, text }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg">
    <Icon size={48} className="mb-2 text-blue-500" />
    <p className="text-center text-sm">{text}</p>
  </div>
);

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const ocrPerformanceData = [
    { name: 'Before AIGC', accuracy: 95, time: 2 },
    { name: 'After AIGC', accuracy: 99, time: 1.5 },
  ];

  const aiApplications = [
    { name: 'Text Generation', value: 30 },
    { name: 'Image Processing', value: 25 },
    { name: 'Data Analysis', value: 20 },
    { name: 'Speech Recognition', value: 15 },
    { name: 'Other', value: 10 },
  ];

  const futureProjectionsData = [
    { year: 2024, value: 100 },
    { year: 2025, value: 150 },
    { year: 2026, value: 225 },
    { year: 2027, value: 340 },
    { year: 2028, value: 510 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const slides = [
    // Slide 1: Introduction
    <Slide key="intro" background="bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-4">AIGC: Revolutionizing Content Generation</h1>
      <h2 className="text-2xl text-white mb-8">Impact on Advance AI's OCR Annotation System</h2>
      <div className="flex justify-center items-center h-64">
        <IconBox Icon={Workflow} text="AI-Powered Workflow" />
        <IconBox Icon={TrendingUp} text="Improved Efficiency" />
        <IconBox Icon={Layers} text="Enhanced Accuracy" />
      </div>
      <p className="text-xl text-white mt-8">Presenter: Shane Mion</p>
    </Slide>,

    // Slide 2: What is AIGC?
    <Slide key="aigc-definition">
      <h2 className="text-3xl font-bold mb-8">What is AIGC?</h2>
      <div className="flex justify-between items-center h-96">
        <ul className="text-xl space-y-4 w-1/2">
          <li>Artificial Intelligence for Content Generation</li>
          <li>Creates, manipulates, enhances content</li>
          <li>Applies to text, images, video, data</li>
        </ul>
        <div className="w-1/2 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={aiApplications}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {aiApplications.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Slide>,

    // Slide 3: Our AIGC Project
    <Slide key="aigc-project">
      <h2 className="text-3xl font-bold mb-8">AI-Assisted OCR Annotation System</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Components:</h3>
          <ul className="text-lg space-y-2">
            <li>AI pre-annotation</li>
            <li>Intelligent interface</li>
            <li>Continuous learning</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Benefits:</h3>
          <ul className="text-lg space-y-2">
            <li>Reduced annotation time</li>
            <li>Improved accuracy</li>
            <li>Handles high volume</li>
            <li>ABS platform integration</li>
          </ul>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={ocrPerformanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="accuracy" fill="#8884d8" name="Accuracy (%)" />
          <Bar yAxisId="right" dataKey="time" fill="#82ca9d" name="Time (minutes)" />
        </BarChart>
      </ResponsiveContainer>
    </Slide>,

    // Slide 4: Expandability and Future Improvements
    <Slide key="future-improvements">
      <h2 className="text-3xl font-bold mb-8">Expandability & Future</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Current Design:</h3>
          <ul className="text-lg space-y-2">
            <li>Modular architecture</li>
            <li>Adaptable to other tasks</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Future Potential:</h3>
          <ul className="text-lg space-y-2">
            <li>Integration of advanced models (e.g., GPT-4)</li>
            <li>Specialized document handling</li>
            <li>Multi-language support</li>
          </ul>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={futureProjectionsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" name="Projected Growth" />
        </LineChart>
      </ResponsiveContainer>
    </Slide>,

    // Slide 5: Addressing Broader Challenges
    <Slide key="broader-challenges">
      <h2 className="text-3xl font-bold mb-8">Advance AI's Broader Challenges</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Enterprise Readiness:</h3>
          <ul className="text-lg space-y-2">
            <li>Enhanced support & service</li>
            <li>Improved DevOps & QA</li>
            <li>Reusable components</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Market Expansion:</h3>
          <ul className="text-lg space-y-2">
            <li>Quick API deployment</li>
            <li>Regulatory adaptation</li>
            <li>Cross-team alignment</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 space-x-8">
        <div className="flex flex-col items-center">
          <Code size={64} className="text-blue-500 mb-2" />
          <p className="text-center">Enterprise Solutions</p>
        </div>
        <div className="text-4xl font-bold">↔</div>
        <div className="flex flex-col items-center">
          <Globe size={64} className="text-green-500 mb-2" />
          <p className="text-center">Global Expansion</p>
        </div>
      </div>
    </Slide>,

    // Slide 6: Data-Driven Approach
    <Slide key="data-driven">
      <h2 className="text-3xl font-bold mb-8">Data-Driven Approach</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Data Sources:</h3>
          <ul className="text-lg space-y-2">
            <li>User interactions</li>
            <li>Error logs</li>
            <li>Regulatory data</li>
            <li>Customer feedback</li>
            <li>Transaction patterns</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">AIGC Applications:</h3>
          <ul className="text-lg space-y-2">
            <li>Behavior trend analysis</li>
            <li>Regulatory impact prediction</li>
            <li>New feature ideation</li>
            <li>Service optimization</li>
            <li>Fraud detection improvement</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Database size={64} className="text-blue-500 mr-4" />
        <TrendingUp size={64} className="text-green-500 mr-4" />
        <Lightbulb size={64} className="text-yellow-500" />
      </div>
    </Slide>,

    // Slide 7: Tech and Product-Led Business
    <Slide key="tech-product-led">
      <h2 className="text-3xl font-bold mb-8">Becoming Tech & Product-Led</h2>
      <div className="grid grid-cols-2 gap-8">
        <ul className="text-xl space-y-4">
          <li>Focus on core "KNOW" aspects of eKYC</li>
          <li>Drive product development with tech expertise</li>
          <li>Use AIGC to anticipate client needs</li>
          <li>Innovate proactively</li>
        </ul>
        <div className="flex flex-col items-center justify-center">
          <Shield size={100} className="text-blue-500 mb-4" />
          <Code size={100} className="text-green-500 mb-4" />
          <Lightbulb size={100} className="text-yellow-500" />
        </div>
      </div>
    </Slide>,

    // Slide 8: Conclusion
    <Slide key="conclusion" background="bg-gradient-to-r from-green-400 to-blue-500">
      <h2 className="text-3xl font-bold text-white mb-8">Conclusion</h2>
      <div className="grid grid-cols-2 gap-8">
        <ul className="text-xl text-white space-y-4">
          <li>AIGC transforms Advance AI processes</li>
          <li>Focus on quality and integration</li>
          <li>Thoughtful AI implementation</li>
          <li>Position as leaders in digital identity</li>
        </ul>
        <div className="flex flex-col items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="4" />
            <text x="100" y="100" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
              <tspan x="100" y="90">Digital Identity</tspan>
              <tspan x="100" y="110">Leadership</tspan>
            </text>
            <path d="M100 40 L100 70 M40 100 L70 100 M100 160 L100 130 M160 100 L130 100" stroke="white" strokeWidth="4" />
          </svg>
          <p className="text-2xl text-white font-bold mt-4">Questions?</p>
        </div>
      </div>
    </Slide>
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-[1024px] h-[576px] bg-white shadow-2xl rounded-lg overflow-hidden">
        {slides[currentSlide]}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <Button onClick={prevSlide}><ChevronLeft /></Button>
        <span className="text-xl font-bold">{currentSlide + 1} / {totalSlides}</span>
        <Button onClick={nextSlide}><ChevronRight /></Button>
      </div>
    </div>
  );
};

export default Presentation;