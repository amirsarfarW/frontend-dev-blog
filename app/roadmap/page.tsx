import RoadmapItem from '../components/RoadmapItem'
import Link from 'next/link'
import Image from 'next/image'

export default function Roadmap() {
  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4 rounded-lg shadow-xl">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Frontend Development Roadmap</h1>
          <p className="text-xl">Your comprehensive guide to mastering frontend web development</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <RoadmapItem
          title="1. HTML Fundamentals"
          description="Start with the building blocks of the web. Learn HTML5 and semantic markup."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="HTML5 semantic markup and document structure"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>Document structure</li>
            <li>Tags and attributes</li>
            <li>Forms and validation</li>
            <li>Accessibility best practices</li>
          </ul>
          <Link href="/roadmap/html-fundamentals" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about HTML Fundamentals →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="2. CSS Essentials"
          description="Style your HTML with CSS. Learn layout techniques and responsive design."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="CSS styling, layout techniques, and responsive design"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>Selectors and specificity</li>
            <li>Box model and layout</li>
            <li>Flexbox and Grid</li>
            <li>Media queries and responsive design</li>
            <li>CSS preprocessors (Sass or Less)</li>
          </ul>
          <Link href="/roadmap/css-essentials" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about CSS Essentials →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="3. JavaScript Fundamentals"
          description="Add interactivity to your websites with JavaScript."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="JavaScript fundamentals: variables, DOM manipulation, events"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>Variables, data types, and functions</li>
            <li>DOM manipulation</li>
            <li>Events and event handling</li>
            <li>Asynchronous JavaScript (Promises, async/await)</li>
            <li>ES6+ features</li>
          </ul>
          <Link href="/roadmap/javascript-fundamentals" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about JavaScript Fundamentals →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="4. Version Control and Git"
          description="Learn to manage and track your code changes effectively."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
            alt="Version control using Git: branching, merging, and collaboration"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>Basic Git commands</li>
            <li>Branching and merging</li>
            <li>Collaborative workflows (e.g., GitHub flow)</li>
            <li>Pull requests and code reviews</li>
          </ul>
          <Link href="/roadmap/version-control-git" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about Version Control and Git →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="5. Responsive Web Design"
          description="Create websites that work well on all devices and screen sizes."
        >
          <Image
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Responsive Design"
            width={300}
            height={200}
            className="rounded-lg mb-4"
            priority={true}
          />
          <ul className="list-disc list-inside">
            <li>Mobile-first approach</li>
            <li>Fluid layouts and flexible images</li>
            <li>CSS frameworks (e.g., Bootstrap, Tailwind)</li>
            <li>Progressive enhancement and graceful degradation</li>
          </ul>
          <Link href="/roadmap/responsive-web-design" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about Responsive Web Design →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="6. Frontend Build Tools"
          description="Learn tools that improve your development workflow and optimize your code."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            alt="Frontend build tools: npm, Webpack, Babel, and more"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>Package managers (npm, Yarn)</li>
            <li>Module bundlers (Webpack, Rollup)</li>
            <li>Task runners (Gulp, npm scripts)</li>
            <li>Transpilers and compilers (Babel, TypeScript)</li>
          </ul>
          <Link href="/roadmap/frontend-build-tools" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about Frontend Build Tools →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="7. Frontend Frameworks"
          description="Master a popular frontend framework to build complex applications efficiently."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Popular frontend frameworks like React, Vue, or Angular"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>React ecosystem</li>
            <li>State management (Redux, MobX, Recoil)</li>
            <li>Routing (React Router)</li>
            <li>Server-side rendering and static site generation</li>
          </ul>
          <Link href="/roadmap/frontend-frameworks" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about Frontend Frameworks →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="8. API Integration and Asynchronous Programming"
          description="Learn how to connect your frontend to backend services and handle asynchronous operations."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80"
            alt="API integration using Fetch API or Axios, handling asynchronous operations"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>RESTful APIs and GraphQL</li>
            <li>Fetch API and Axios</li>
            <li>WebSockets for real-time communication</li>
            <li>Error handling and loading states</li>
          </ul>
          <Link href="/roadmap/api-integration" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about API Integration →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="9. Testing and Debugging"
          description="Ensure your code works as expected and learn to find and fix issues efficiently."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1516321318423-425f8271989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Testing and debugging techniques and tools"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>Unit testing (Jest, Mocha)</li>
            <li>Integration testing</li>
            <li>End-to-end testing (Cypress, Selenium)</li>
            <li>Debugging tools and techniques</li>
          </ul>
          <Link href="/roadmap/testing-debugging" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about Testing and Debugging →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="10. Web Performance Optimization"
          description="Learn techniques to make your websites fast and efficient."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Web performance optimization techniques"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>Performance metrics and measurement</li>
            <li>Code splitting and lazy loading</li>
            <li>Caching strategies</li>
            <li>Image and asset optimization</li>
          </ul>
          <Link href="/roadmap/web-performance" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about Web Performance Optimization →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="11. Web Accessibility (A11y)"
          description="Make your websites usable by as many people as possible, including those with disabilities."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Web accessibility (A11y): WCAG guidelines, semantic HTML, ARIA attributes"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>WCAG guidelines</li>
            <li>Semantic HTML and ARIA attributes</li>
            <li>Keyboard navigation and focus management</li>
            <li>Accessibility testing tools</li>
          </ul>
          <Link href="/roadmap/web-accessibility" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about Web Accessibility →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="12. Security Best Practices"
          description="Understand common web security vulnerabilities and how to prevent them."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Web security best practices: XSS, CSRF, CSP, HTTPS"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>Cross-Site Scripting (XSS) prevention</li>
            <li>Cross-Site Request Forgery (CSRF) protection</li>
            <li>Content Security Policy (CSP)</li>
            <li>HTTPS and secure cookies</li>
          </ul>
          <Link href="/roadmap/security-best-practices" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about Security Best Practices →
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="13. Deployment and DevOps Basics"
          description="Learn how to deploy your frontend applications and understand basic DevOps concepts."
        >
          <Image
            priority={true}
            src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Deployment and DevOps basics: CI/CD, Docker, hosting"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside">
            <li>Static site hosting (Netlify, Vercel)</li>
            <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
            <li>Containerization basics (Docker)</li>
            <li>Monitoring and error tracking</li>
          </ul>
          <Link href="/roadmap/deployment-devops" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Learn more about Deployment and DevOps →
          </Link>
        </RoadmapItem>

        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg mt-8">
          <h3 className="font-bold">Continuous Learning</h3>
          <p>Remember, frontend development is an ever-evolving field. Stay updated with the latest trends, attend conferences, participate in online communities, and never stop building projects!</p>
        </div>
      </section>
    </div>
  )
}

