import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 to-white ">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-6 bg-primary">
        <div className="text-3xl font-bold text-white">Open AI</div>
        <ul className="space-x-6 text-white text-xl hidden lg:flex">
          <li><a href="/feature">Features</a></li>
          <li><a href="/dashboard/billing">Pricing</a></li>
          <li><a href="/about">Docs</a></li>
        </ul>
        <div>
          <a href="/dashboard" className="text-white">Dashboard →</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="text-center min-h-[calc(100vh-84px)] flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold text-black">
          Open AI
        </h1>
        <p className="mt-6 text-lg text-gray-500">
          Discover the power of AI, explore the dashboard, and learn more about our services.
        </p>
        <div className="mt-8 flex space-x-4 justify-center">
          <a href="/dashboard">
            <Button className="px-6 py-3 bg-primary text-white rounded-full shadow-lg ">Go to Dashboard</Button>
          </a>
          <a href="/about">
            <Button className="px-6 py-3 bg-transparent border border-sm text-black rounded-full hover:bg-primary hover:text-white">Learn more →</Button>
          </a>
        </div>
      </main>
    </div>
  );
}
