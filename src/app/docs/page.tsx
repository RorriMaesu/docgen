import Link from 'next/link';

export default function DocsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      
      <div className="max-w-4xl w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2">Installation</h3>
            <p className="mb-4">To install DocGen, run the following command:</p>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-x-auto mb-4">
              <code>npm install docgen</code>
            </pre>
            
            <h3 className="text-xl font-medium mb-2 mt-6">Basic Usage</h3>
            <p className="mb-4">Create a docs directory and add your markdown files:</p>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`
// Example structure
docs/
├── getting-started.md
├── api/
│   ├── authentication.md
│   └── endpoints.md
└── guides/
    ├── installation.md
    └── configuration.md
              `}</code>
            </pre>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-4">Create a docgen.config.js file in your project root:</p>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`
module.exports = {
  siteName: 'My Project Documentation',
  siteDescription: 'Comprehensive documentation for My Project',
  logo: '/path/to/logo.png',
  githubRepo: 'https://github.com/yourusername/myproject',
  features: {
    search: true,
    darkMode: true,
    tableOfContents: true,
    editOnGithub: true
  }
};
              `}</code>
            </pre>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
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
