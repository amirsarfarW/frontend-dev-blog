import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function FrontendFrameworks() {
  return (
    <RoadmapStepDetail
      title="Frontend Frameworks"
      description="Master a popular frontend framework to build complex applications efficiently."
      imageUrl="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      topics={[
        "React fundamentals (components, props, state)",
        "React hooks (useState, useEffect, useContext, etc.)",
        "State management (Redux, MobX, Recoil)",
        "Routing in React (React Router)",
        "Server-side rendering (Next.js)",
        "Static site generation (Gatsby)",
        "Component libraries (Material-UI, Chakra UI)",
        "Testing React applications",
        "Performance optimization in React",
        "Advanced React patterns"
      ]}
      resources={[
        { title: "React Official Documentation", url: "https://reactjs.org/docs/getting-started.html" },
        { title: "Redux Documentation", url: "https://redux.js.org/introduction/getting-started" },
        { title: "Next.js Documentation", url: "https://nextjs.org/docs" },
        { title: "React Router Documentation", url: "https://reactrouter.com/web/guides/quick-start" },
        { title: "Testing React Apps (Jest & React Testing Library)", url: "https://jestjs.io/docs/tutorial-react" }
      ]}
    />
  )
}

