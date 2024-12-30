import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function DeploymentDevOps() {
  return (
    <RoadmapStepDetail
      title="Deployment and DevOps Basics"
      description="Learn how to deploy your frontend applications and understand basic DevOps concepts."
      imageUrl="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      topics={[
        "Static site hosting (Netlify, Vercel, GitHub Pages)",
        "Continuous Integration (CI) concepts",
        "Continuous Deployment (CD) concepts",
        "Setting up CI/CD pipelines",
        "Containerization basics with Docker",
        "Cloud platforms overview (AWS, Google Cloud, Azure)",
        "Environment variables and configuration management",
        "Monitoring and logging for frontend applications",
        "Error tracking and reporting",
        "Basic server management and SSH"
      ]}
      resources={[
        { title: "Netlify Documentation", url: "https://docs.netlify.com/" },
        { title: "Vercel Documentation", url: "https://vercel.com/docs" },
        { title: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
        { title: "Docker Get Started Guide", url: "https://docs.docker.com/get-started/" },
        { title: "FreeCodeCamp - DevOps Basics", url: "https://www.freecodecamp.org/news/devops-prerequisites-course/" }
      ]}
    />
  )
}

