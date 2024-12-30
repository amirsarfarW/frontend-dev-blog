import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function CSSEssentials() {
  return (
    <RoadmapStepDetail
      title="CSS Essentials"
      description="Style your HTML with CSS. Master layout techniques and responsive design."
      imageUrl="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      topics={[
        "Selectors and specificity",
        "Box model and layout",
        "Flexbox and Grid",
        "Responsive design and media queries",
        "CSS animations and transitions",
        "CSS variables (custom properties)",
        "CSS preprocessors (Sass or Less)",
        "CSS methodologies (BEM, SMACSS, OOCSS)",
        "CSS-in-JS and CSS Modules"
      ]}
      resources={[
        { title: "MDN Web Docs - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { title: "CSS-Tricks", url: "https://css-tricks.com/" },
        { title: "Flexbox Froggy", url: "https://flexboxfroggy.com/" },
        { title: "Grid Garden", url: "https://cssgridgarden.com/" },
        { title: "Sass Documentation", url: "https://sass-lang.com/documentation" }
      ]}
    />
  )
}

