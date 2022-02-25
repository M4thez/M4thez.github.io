const projects = [
  {
    "title": "Landing page project",
    "description": "Responsive landing page project for a fictional company based on a challenge by <a href='https://frontendmentor.io'>frontendmentor.io</a>.<br><br>The site is responsive for all commonly used screen sizes and also includes custom hover states for interactive elements.",
    "image_path": "resources/sunnyside-logos/sunnyside_black.png",
    "links":
    {
      "repo": "https://github.com/M4thez/sunnyside-landing-page",
      "live": "https://m4thez.github.io/sunnyside-landing-page"
    }

  },
  {
    "title": "Balldontlie",
    "description": "Single Page Application made in Vue 3.<br><br>The app uses <a href='https://balldontlie.io'>balldontlie API</a> to get information about players and their stats. It's also fully dockerized with its' image available on Docker Hub.",
    "image_path": "resources/balldontlie-logos/balldontlie_black.png",
    "links":
    {
      "repo": "https://github.com/M4thez/balldontlie",
      "live": "https://m4thez.github.io/balldontlie"
    }


  },
  {
    "title": "Nasa model viewer",
    "description": "Website with 3D models shared by the official NASA repository.<br><br>It's mostly a proof of concept on sharing 3D models on the web using my own solution. The viewer is made in Three.js (JavaScript library for working with 3D objects on the Web) and it's bundled with Vite.",
    "image_path": "resources/nasa model viewer-logos/nasa_black.png",
    "links":
    {
      "repo": "https://github.com/M4thez/nasa-website",
      "live": "https://m4thez.github.io/nasa-website"
    }


  },
  {
    "title": "Launch countdown timer",
    "description": "Countdown timer project based on a challenge by <a href='https://frontendmentor.io'>frontendmentor.io</a>.<br><br>The project is displaying a fully animated live countdown timer that ticks down every second to a specific time.",
    "image_path": "resources/launch countdown-logos/launch_black.png",
    "links":
    {
      "repo": "https://github.com/M4thez/launch-countdown-timer",
      "live": "https://m4thez.github.io/launch-countdown-timer"
    }


  },
  {
    "title": "JS Tabs",
    "description": "Simple Single Page Application project made for a University exercise.<br><br>It consists of some interactive challenges that gave me some training in basic JavaScript coding.",
    "image_path": "resources/js-tabs-logos/js-tabs_black.png",
    "links":
    {
      "repo": "https://github.com/M4thez/js-tabs",
      "live": "https://m4thez.github.io/js-tabs"
    }


  }
]

function renderProjects() {
  let html = ''
  projects.forEach(project => {
    const htmlSegment = `<div class="projects__just-card">
      <a href="${project.links.live}"><img src="${project.image_path}" /></a>
      <div class="projects__text">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul class="projects__text--links">
          <li><a href="${project.links.repo}">Repository</a></li>
          <li><a href="${project.links.live}">Live</a></li>
        </ul>
      </div>
    </div>`
    html += htmlSegment
  })
  const container = document.querySelector('#projects__cards')
  container.innerHTML = html
}
renderProjects()
