import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold">About <span className='hover:text-primary'> Orion AI </span></h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover the inspiration behind Open AI and our vision for the future.
                    </p>
                </header>

                {/* Content Section */}
                <section className="space-y-12">
                    {/* Section 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                            <p className="text-gray-600">
                                At Open AI, our mission is to harness the power of artificial intelligence to provide innovative and
                                scalable solutions that empower businesses and individuals alike. We aim to simplify complex AI
                                technologies and make them accessible to everyone.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            {/* You can add an image here */}
                            <img
                                src="/mission.avif"
                                alt="AI Vision"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                            <p className="text-gray-600">
                                We believe in a future where AI-driven solutions are at the core of every successful venture, helping
                                people to be more creative, productive, and innovative. Open AI strives to be a leading force in this
                                evolution by offering easy-to-use tools that democratize AI for all.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            {/* Another image can go here */}
                            <img
                                src="/vision.webp"
                                alt="Our Vision"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-4">Join Us on Our Journey</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We invite you to join us in our quest to unlock the potential of artificial intelligence. Whether you're
                            a developer, business owner, or tech enthusiast, Open AI is your go-to platform for cutting-edge AI
                            solutions.
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <a href="/dashboard">
                        <Button className="px-6 py-3 rounded-full shadow-lg bg-primary text-white">
                            Go to Dashboard
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
