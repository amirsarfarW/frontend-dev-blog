import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function FrontendBuildTools() {
  return (
    <RoadmapStepDetail
      title="Frontend Build Tools"
      description="Learn tools that improve your development workflow and optimize your code."
      imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
      topics={[
        "Package managers (npm, Yarn)",
        "Module bundlers (Webpack, Rollup, Parcel)",
        "Task runners (Gulp, npm scripts)",
        "Transpilers and compilers (Babel, TypeScript)",
        "CSS preprocessors (Sass, Less, PostCSS)",
        "Code linters and formatters (ESLint, Prettier)",
        "Build optimization techniques",
        "Hot module replacement (HMR)",
        "Asset optimization (minification, compression)",
        "Environment-specific builds"
      ]}
      resources={[
        { title: "npm Documentation", url: "https://docs.npmjs.com/" },
        { title: "Webpack Documentation", url: "https://webpack.js.org/concepts/" },
        { title: "Babel Documentation", url: "https://babeljs.io/docs/en/" },
        { title: "TypeScript Documentation", url: "https://www.typescriptlang.org/docs/" },
        { title: "ESLint Documentation", url: "https://eslint.org/" },
        { title: "Sass Documentation", url: "https://sass-lang.com/documentation" },
        { title: "Gulp Documentation", url: "https://gulpjs.com/docs/en/getting-started/quick-start" }
      ]}
    />
  )
}

