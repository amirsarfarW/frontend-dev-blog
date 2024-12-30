import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function WebAccessibility() {
  return (
    <RoadmapStepDetail
      title="Web Accessibility (A11y)"
      description="Make your websites usable by as many people as possible, including those with disabilities."
      imageUrl="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      topics={[
        "WCAG guidelines and levels of conformance",
        "Semantic HTML and its importance in accessibility",
        "ARIA attributes and when to use them",
        "Keyboard navigation and focus management",
        "Color contrast and color blindness considerations",
        "Accessible forms and form validation",
        "Screen reader compatibility",
        "Accessibility testing tools and techniques",
        "Creating accessible data visualizations",
        "Legal requirements for web accessibility"
      ]}
      resources={[
        { title: "MDN Web Docs - Accessibility", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility" },
        { title: "Web Accessibility Initiative (WAI) - Introduction to Web Accessibility", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
        { title: "A11Y Project", url: "https://www.a11yproject.com/" },
        { title: "WebAIM - Web Accessibility In Mind", url: "https://webaim.org/" },
        { title: "Deque University - Web Accessibility", url: "https://dequeuniversity.com/curriculum/courses/web-accessibility" }
      ]}
    />
  )
}

