// auth.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically send a request to your backend
        console.log('Logging in with', username, password);
        
        // For demo purposes, redirect to dashboard on login
        window.location.href = 'dashboard.html';
      });
    }
  });
  