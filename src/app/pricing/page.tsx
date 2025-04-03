import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Pricing</h1>
      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Tier */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">Free</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">For individuals and small projects</p>
          <div className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal">/month</span></div>
          
          <ul className="mb-8 flex-grow">
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Markdown to HTML conversion
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Basic syntax highlighting
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Responsive design
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              GitHub Pages deployment
            </li>
          </ul>
          
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors">
            Get Started
          </button>
        </div>
        
        {/* Pro Tier */}
        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-md border-2 border-blue-500 flex flex-col relative transform scale-105">
          <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-lg rounded-tr-lg text-sm font-medium">
            POPULAR
          </div>
          <h2 className="text-2xl font-semibold mb-2">Pro</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">For teams and growing projects</p>
          <div className="text-4xl font-bold mb-6">$19<span className="text-lg font-normal">/month</span></div>
          
          <ul className="mb-8 flex-grow">
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Everything in Free
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Advanced themes
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Search functionality
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Custom domain support
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Basic analytics
            </li>
          </ul>
          
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors">
            Subscribe Now
          </button>
        </div>
        
        {/* Enterprise Tier */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">For large organizations</p>
          <div className="text-4xl font-bold mb-6">$49<span className="text-lg font-normal">/month</span></div>
          
          <ul className="mb-8 flex-grow">
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Everything in Pro
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Versioned documentation
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Advanced analytics
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Priority support
            </li>
            <li className="mb-2 flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Custom integrations
            </li>
          </ul>
          
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
      
      <div className="mt-12">
        <Link 
          href="/"
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
