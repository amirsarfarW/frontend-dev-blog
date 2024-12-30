import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function APIIntegration() {
  return (
    <RoadmapStepDetail
      title="API Integration and Asynchronous Programming"
      description="Learn how to connect your frontend to backend services and handle asynchronous operations."
      imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80"
      topics={[
        "RESTful API concepts",
        "GraphQL basics",
        "Fetch API for making HTTP requests",
        "Axios library for HTTP requests",
        "Promises and async/await",
        "Error handling in asynchronous code",
        "WebSockets for real-time communication",
        "Server-Sent Events (SSE)",
        "JWT authentication",
        "CORS and security considerations"
      ]}
      resources={[
        { title: "MDN Web Docs - Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
        { title: "Axios Documentation", url: "https://axios-http.com/docs/intro" },
        { title: "GraphQL Official Documentation", url: "https://graphql.org/learn/" },
        { title: "JavaScript.info - Promises, async/await", url: "https://javascript.info/async" },
        { title: "MDN Web Docs - WebSockets API", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" }
      ]}
    />
  )
}

