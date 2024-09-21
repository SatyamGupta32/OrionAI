import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Platform Features</h1>
          <p className="mt-4 text-lg text-gray-500">
            Explore all the tools and features we provide to enhance your experience.
          </p>
        </header>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">AI-Powered Tools</h2>
            <p className="text-gray-600">
              Leverage the power of AI to automate and streamline your workflow with OpenAI’s advanced capabilities.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Customizable Dashboards</h2>
            <p className="text-gray-600">
              Create and manage custom dashboards tailored to your specific needs with our flexible tools.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Analytics & Insights</h2>
            <p className="text-gray-600">
              Get detailed analytics and insights to make data-driven decisions and track your progress.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <a href="/dashboard">
            <Button className="px-6 py-3 bg-white text-black rounded-full shadow-lg hover:bg-primary hover:text-white">
              Go to Dashboard
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
