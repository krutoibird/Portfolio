document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.getElementById('navbar-container');

  if (navbarContainer) {
    navbarContainer.innerHTML = `
    <div class="nav">
      <a href="index.html"><button>Home</button></a>
      <a href="admissions.html"><button>Admissions</button></a>
      <a href="teachers.html"><button>Staff</button></a>
      <a href="projects.html"><button>Projects</button></a>
    </div>`
  }
});
