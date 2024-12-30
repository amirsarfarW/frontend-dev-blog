import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function WebPerformance() {
  return (
    <RoadmapStepDetail
      title="Web Performance Optimization"
      description="Learn techniques to make your websites fast and efficient."
      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      topics={[
        "Performance metrics (Core Web Vitals)",
        "Lighthouse and other performance measurement tools",
        "Code splitting and lazy loading",
        "Caching strategies",
        "Image and asset optimization",
        "Critical rendering path optimization",
        "Minimizing and optimizing CSS",
        "JavaScript performance optimization",
        "Server-side rendering and static site generation for performance",
        "Performance budgets"
      ]}
      resources={[
        { title: "Web.dev - Learn Core Web Vitals", url: "https://web.dev/learn-core-web-vitals/" },
        { title: "Google Developers - Measure Performance with Lighthouse", url: "https://developers.google.com/web/tools/lighthouse" },
        { title: "MDN Web Docs - Lazy loading", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading" },
        { title: "web.dev - Optimize your JavaScript", url: "https://web.dev/fast/#optimize-your-javascript" },
        { title: "Smashing Magazine - Front-End Performance Checklist", url: "https://www.smashingmagazine.com/2021/01/front-end-performance-checklist-2021-pdf-pages/" }
      ]}
    />
  )
}

