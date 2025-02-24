// app.js

// Function to load an HTML snippet into a container
function loadComponent(containerId, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => console.error('Error loading component:', error));
  }
  
  // Load navbar and footer components
  loadComponent('navbar-placeholder', '../components/navbar.html');
  loadComponent('footer-placeholder', '../components/footer.html');
  
  // Initialize particles if particlesJS is available
  if (window.particlesJS) {
    particlesJS.load('particles-js', '../assets/scripts/particles-config.json', function() {
      console.log('Particles config loaded');
    });
  }
  