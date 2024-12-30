import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function ResponsiveWebDesign() {
  return (
    <RoadmapStepDetail
      title="Responsive Web Design"
      description="Create websites that work well on all devices and screen sizes."
      imageUrl="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80"
      topics={[
        "Principles of responsive design",
        "Mobile-first approach",
        "Fluid layouts and flexible images",
        "CSS media queries",
        "Responsive typography",
        "Responsive images and videos",
        "CSS frameworks for responsive design (e.g., Bootstrap, Tailwind)",
        "Responsive navigation patterns",
        "Progressive enhancement and graceful degradation",
        "Testing responsive designs"
      ]}
      resources={[
        { title: "MDN Web Docs - Responsive design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
        { title: "Responsive Web Design Fundamentals (Udacity)", url: "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893" },
        { title: "A List Apart - Responsive Web Design", url: "https://alistapart.com/article/responsive-web-design/" },
        { title: "CSS-Tricks - A Complete Guide to CSS Media Queries", url: "https://css-tricks.com/a-complete-guide-to-css-media-queries/" },
        { title: "Smashing Magazine - Responsive Web Design Guidelines and Tutorials", url: "https://www.smashingmagazine.com/category/responsive-web-design/" }
      ]}
    />
  )
}

