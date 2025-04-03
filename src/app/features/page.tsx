import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Features</h1>
      
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Markdown to HTML Conversion</h2>
          <p>Transform your markdown files into beautiful HTML documentation with syntax highlighting and more.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Syntax Highlighting</h2>
          <p>Automatic code syntax highlighting for multiple programming languages using Prism.js.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Responsive Design</h2>
          <p>Mobile-friendly documentation that looks great on all devices, from phones to desktops.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Search Functionality</h2>
          <p>Built-in search to help users find content quickly across your entire documentation.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Customizable Themes</h2>
          <p>Choose from various themes to match your brand or create your own custom theme.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Navigation Generation</h2>
          <p>Automatically generate navigation based on your content structure and frontmatter.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">GitHub Pages Integration</h2>
          <p>Seamless deployment to GitHub Pages with automatic builds via GitHub Actions.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Versioned Documentation</h2>
          <p>Support for multiple versions of your documentation to match your software releases.</p>
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
