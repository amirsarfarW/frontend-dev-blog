import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function TestingDebugging() {
  return (
    <RoadmapStepDetail
      title="Testing and Debugging"
      description="Ensure your code works as expected and learn to find and fix issues efficiently."
      imageUrl="https://images.unsplash.com/photo-1516321318423-425f8271989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      topics={[
        "Types of testing (unit, integration, end-to-end)",
        "Jest testing framework",
        "React Testing Library",
        "Cypress for end-to-end testing",
        "Test-Driven Development (TDD)",
        "Mocking and stubbing",
        "Debugging tools in browsers",
        "Chrome DevTools for debugging",
        "Error tracking and logging",
        "Performance profiling"
      ]}
      resources={[
        { title: "Jest Documentation", url: "https://jestjs.io/docs/getting-started" },
        { title: "React Testing Library Documentation", url: "https://testing-library.com/docs/react-testing-library/intro/" },
        { title: "Cypress Documentation", url: "https://docs.cypress.io/guides/overview/why-cypress" },
        { title: "Chrome DevTools Documentation", url: "https://developer.chrome.com/docs/devtools/" },
        { title: "MDN Web Docs - Debugging JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Debugging" }
      ]}
    />
  )
}

