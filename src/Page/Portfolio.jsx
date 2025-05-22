
import { Github, Instagram, Linkedin, ExternalLink, Code, Layers, PenTool, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import image from "../lib/download.png"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Background grid */}
      {/* <div className="fixed inset-0 bg-black z-[-1]">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
      </div> */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Creative Developer & Designer
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Building innovative digital experiences with clean code and creative design solutions.
            </p>
            <div className="flex gap-4">
              <Button  className="rounded-full bg-white text-white hover:bg-gray-200">
                View Projects
              </Button>
              <Button className="rounded-full bg-white text-white hover:bg-gray-200">Contact Me</Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/arkapaal" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/arka-pal-b4a672285/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/arkagivesafcuk/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

        </section>

        {/* About Section */}
        <section id="about" className="bg-white/5 w-1/2 righ-0 rounded-xl p-6   backdrop-blur-sm">

          <h2 className="text-3xl  font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-gray-300">
                I'm a passionate developer and designer with expertise in creating immersive digital experiences. With a
                background in both front-end development and UI/UX design, I bring a unique perspective to every
                project.
              </p>
              <p className="text-gray-300">
                My approach combines technical precision with creative problem-solving, resulting in solutions that are
                both functional and visually compelling.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1 bg-gradient-to-b from-white to-transparent rounded-full"></div>
                  <div>
                    <h4 className="font-medium">Senior Developer</h4>
                    <p className="text-sm text-gray-400">2021 - Present</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1 bg-gradient-to-b from-white to-transparent rounded-full"></div>
                  <div>
                    <h4 className="font-medium">UI/UX Designer</h4>
                    <p className="text-sm text-gray-400">2018 - 2021</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1 bg-gradient-to-b from-white to-transparent rounded-full"></div>
                  <div>
                    <h4 className="font-medium">Frontend Developer</h4>
                    <p className="text-sm text-gray-400">2016 - 2018</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Code className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-400 mb-4">React, Next.js, TypeScript, Node.js</p>
              <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                <div className="bg-white h-full rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <PenTool className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Language</h3>
              <p className="text-gray-400 mb-4">Figma, Adobe XD, Illustrator, Spline</p>
              <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                <div className="bg-white h-full rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Layers className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Other</h3>
              <p className="text-gray-400 mb-4">Blender, Three.js, Spline, WebGL</p>
              <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                <div className="bg-white h-full rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Cpu className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Core</h3>
              <p className="text-gray-400 mb-4">TensorFlow, OpenAI API, ML Models</p>
              <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                <div className="bg-white h-full rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </section>

         {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            A selection of my recent work, showcasing web applications, design systems, and creative experiments.
          </p>

          <div className="grid grid-cols-1 gap-16">
            {/* Project 1 */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-px w-8 bg-white/50"></div>
                      <span className="text-sm font-medium text-white/70">Featured Project</span>
                    </div>
                    <h3 className="text-2xl font-bold">Minimal Dashboard</h3>
                    <p className="text-gray-400">
                      A comprehensive analytics dashboard with real-time data visualization, user management, and
                      customizable widgets. Built with React, TypeScript, and D3.js.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">React</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">TypeScript</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">D3.js</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">Tailwind CSS</span>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl order-1 md:order-2 h-[300px] md:h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <img
                    src={image}
                    alt="Dashboard Project"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-xl h-[300px] md:h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <img
                    src={image}
                    alt="E-commerce Project"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-px w-8 bg-white/50"></div>
                      <span className="text-sm font-medium text-white/70">Client Project</span>
                    </div>
                    <h3 className="text-2xl font-bold">E-commerce Platform</h3>
                    <p className="text-gray-400">
                      A modern e-commerce platform with advanced filtering, user authentication, payment processing, and
                      order management. Built with Next.js and Stripe.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">Next.js</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">Stripe</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">Prisma</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">PostgreSQL</span>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Github className="w-4 h-4 mr-2" />
                        Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-px w-8 bg-white/50"></div>
                      <span className="text-sm font-medium text-white/70">Personal Project</span>
                    </div>
                    <h3 className="text-2xl font-bold">AI Content Generator</h3>
                    <p className="text-gray-400">
                      An AI-powered application that generates custom content for various purposes including blog posts,
                      social media, and marketing copy. Integrates with OpenAI's API.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">React</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">Node.js</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">OpenAI API</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">Express</span>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl order-1 md:order-2 h-[300px] md:h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <img
                    src={image}
                    alt="AI Content Generator"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects Grid */}
          {/* <div className="mt-20">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold">More Projects</h3>
              <Button variant="link" className="text-white/70 hover:text-white">
                View All Projects <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((project) => (
                <div
                  key={project}
                  className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Folder className="w-6 h-6" />
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="text-white/60 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-white/60 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                    Mini Project {project}
                  </h4>
                  <p className="text-gray-400 mb-6 text-sm">
                    A brief description of this smaller project, highlighting key features and technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                    <span className="text-xs text-white/60">React</span>
                    <span className="text-xs text-white/60">•</span>
                    <span className="text-xs text-white/60">TypeScript</span>
                    <span className="text-xs text-white/60">•</span>
                    <span className="text-xs text-white/60">Tailwind</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <p className="text-gray-300">
                  Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5" />
                    <span>hello@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5" />
                    <span>linkedin.com/in/username</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5" />
                    <span>github.com/username</span>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-black hover:bg-gray-200">Send Message</Button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Portfolio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
