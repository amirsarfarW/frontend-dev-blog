import RoadmapStepDetail from '../../components/RoadmapStepDetail'

export default function VersionControlGit() {
  return (
    <RoadmapStepDetail
      title="Version Control and Git"
      description="Learn to manage and track your code changes effectively with Git."
      imageUrl="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
      topics={[
        "Basic Git concepts (repository, commit, branch, merge)",
        "Setting up Git and creating a repository",
        "Basic Git commands (add, commit, push, pull)",
        "Branching and merging strategies",
        "Resolving merge conflicts",
        "Collaborative workflows (e.g., GitHub flow, GitLab flow)",
        "Pull requests and code reviews",
        "Git best practices and conventions",
        "Advanced Git features (rebasing, cherry-picking, reflog)",
        "Git hooks and automation"
      ]}
      resources={[
        { title: "Git Official Documentation", url: "https://git-scm.com/doc" },
        { title: "GitHub Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
        { title: "Atlassian Git Tutorial", url: "https://www.atlassian.com/git/tutorials" },
        { title: "Learn Git Branching (Interactive)", url: "https://learngitbranching.js.org/" },
        { title: "Pro Git Book", url: "https://git-scm.com/book/en/v2" }
      ]}
    />
  )
}

