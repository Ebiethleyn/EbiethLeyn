// Data for projects
const projects = [
  {
    title: "Project 1",
    description: "This is a description of project 1.",
    image: "assets/img/ebieth.jpg",
    link: "https://ebiethleyn.github.io/homestaysafira/"
  },
  {
    title: "Project 2",
    description: "This is a description of project 2.",
    image: "assets/project2.jpg",
    link: "https://example.com/project2"
  },
  {
    title: "Project 3",
    description: "This is a description of project 3.",
    image: "assets/project3.jpg",
    link: "https://example.com/project3"
  }
];

// Function to render projects
function renderProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach(project => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.link}" class="btn btn-primary" target="_blank">Visit Project</a>
        </div>
      </div>
    `;

    projectList.appendChild(col);
  });
}

// Initialize projects on page load
document.addEventListener("DOMContentLoaded", renderProjects);
