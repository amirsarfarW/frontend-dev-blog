import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function HTMLFundamentals() {
  return (
    <RoadmapStepDetail
      title="HTML Fundamentals"
      description="Master the building blocks of the web with HTML5 and semantic markup."
      imageUrl="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
      topics={[
        "Document structure and basic tags",
        "Semantic HTML elements",
        "Forms and input types",
        "Tables and lists",
        "Multimedia elements (audio, video, canvas)",
        "Metadata and SEO basics",
        "Accessibility attributes",
        "HTML5 APIs (e.g., Geolocation, Web Storage)"
      ]}
      resources={[
        { title: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { title: "W3Schools HTML Tutorial", url: "https://www.w3schools.com/html/" },
        { title: "HTML5 Doctor", url: "http://html5doctor.com/" },
        { title: "Codecademy - Learn HTML", url: "https://www.codecademy.com/learn/learn-html" }
      ]}
    />
  )
}

