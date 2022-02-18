const projects = [
  {
    "title": "Landing page project",
    "description": "responsive landing page project for a sunnyside by frontendmentor.io",
    "image_path": "resources/sunnyside-logos/sunnyside-logos_white.png",
    "links": [
      "https://github.com/M4thez",
      "https://google.com"
    ]
  },
  {
    "title": "Balldontlie",
    "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Debitis et culpa sequi suscipit similique laborum nisi quaerat voluptas earum deleniti exercitationem mollitia tempore dolore repellat magni corrupti quae, impedit animi at vel amet aperiam quisquam? Dolore rerum nulla architecto non!",
    "image_path": "resources/sunnyside-logos/sunnyside-logos.jpeg",
    "links": [
      "https://github.com/M4thez",
      "https://google.com"
    ]

  },
  {
    "title": "Nasa model viewer",
    "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Debitis et culpa sequi suscipit similique laborum nisi quaerat voluptas earum deleniti exercitationem mollitia tempore dolore repellat magni corrupti quae, impedit animi at vel amet aperiam quisquam? Dolore rerum nulla architecto non!",
    "image_path": "resources/sunnyside-logos/sunnyside-logos.jpeg",
    "links": [
      "https://github.com/M4thez",
      "https://google.com"
    ]

  },
  {
    "title": "Launch countdown timer",
    "description": "blalblalbal",
    "image_path": "resources/sunnyside-logos/sunnyside-logos.jpeg",
    "links": [
      "https://github.com/M4thez",
      "https://google.com"
    ]

  },
  {
    "title": "JS Tabs",
    "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Debitis et culpa sequi suscipit similique",
    "image_path": "",
    "links": [
      "https://github.com/M4thez",
      "https://google.com"
    ]

  },
  {
    "title": "JS Tabs",
    "description": "baasfd",
    "image_path": "",
    "links": [
      "https://github.com/M4thez",
      "https://google.com"
    ]

  }
]

function renderProjects() {
  let html = ''
  projects.forEach(project => {
    const htmlSegment = `<div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <ul>
        <li><a href="${project.links[0]}">Repository</a></li>
        <li><a href="${project.links[1]}">Live site</a></li>
      </ul>
    </div>`

    html += htmlSegment
  })
  const container = document.querySelector('#projects__cards')
  container.innerHTML = html
}
renderProjects()
