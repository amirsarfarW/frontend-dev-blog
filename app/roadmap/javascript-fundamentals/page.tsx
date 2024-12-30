import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function JavaScriptFundamentals() {
  return (
    <RoadmapStepDetail
      title="JavaScript Fundamentals"
      description="Add interactivity to your websites with JavaScript. Master the core concepts and modern ES6+ features."
      imageUrl="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      topics={[
        "Variables, data types, and operators",
        "Control structures (if/else, loops, switch)",
        "Functions and scope",
        "Objects and arrays",
        "DOM manipulation and events",
        "Asynchronous JavaScript (Promises, async/await)",
        "ES6+ features (arrow functions, destructuring, modules)",
        "Error handling and debugging",
        "Basic algorithms and data structures",
        "Functional programming concepts"
      ]}
      resources={[
        { title: "MDN Web Docs - JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { title: "JavaScript.info", url: "https://javascript.info/" },
        { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
        { title: "FreeCodeCamp - JavaScript Algorithms and Data Structures", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
        { title: "You Don't Know JS", url: "https://github.com/getify/You-Dont-Know-JS" }
      ]}
    />
  )
}

