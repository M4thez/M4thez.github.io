const projects = [
  {
    "title": "Sunnyside agency landing page",
    "description": "landing page project",
    "image_path": "resources/sunnyside-logos/sunnyside-logos_white.png"
  },
  {
    "title": "Balldontlie",
    "description": "Vue rest api project",
    "image_path": "resources/sunnyside-logos/sunnyside-logos.jpeg"
  },
  {
    "title": "Nasa model viewer",
    "description": "Vue rest api project",
    "image_path": "resources/sunnyside-logos/sunnyside-logos.jpeg"
  },
  {
    "title": "Launch countdown timer",
    "description": "blalblalbal",
    "image_path": "resources/sunnyside-logos/sunnyside-logos.jpeg"
  }
]

function renderProjects() {
  let html = ''
  projects.forEach(project => {
    const htmlSegment = `<div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>`

    html += htmlSegment
  })
  const container = document.querySelector('#projects__collection')
  container.innerHTML = html
}
renderProjects()
