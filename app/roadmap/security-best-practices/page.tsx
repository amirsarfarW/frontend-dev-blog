import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function SecurityBestPractices() {
  return (
    <RoadmapStepDetail
      title="Security Best Practices"
      description="Understand common web security vulnerabilities and how to prevent them."
      imageUrl="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      topics={[
        "Cross-Site Scripting (XSS) prevention",
        "Cross-Site Request Forgery (CSRF) protection",
        "Content Security Policy (CSP)",
        "HTTPS and secure cookies",
        "SQL injection prevention",
        "Authentication and authorization best practices",
        "Password hashing and salting",
        "API security",
        "Security headers",
        "Third-party library vulnerabilities and management"
      ]}
      resources={[
        { title: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/" },
        { title: "MDN Web Docs - Web security", url: "https://developer.mozilla.org/en-US/docs/Web/Security" },
        { title: "Google Web Fundamentals - Security", url: "https://developers.google.com/web/fundamentals/security" },
        { title: "FreeCodeCamp - Information Security Certification", url: "https://www.freecodecamp.org/learn/information-security/" },
        { title: "Snyk - Web Security Academy", url: "https://learn.snyk.io/lessons/" }
      ]}
    />
  )
}

