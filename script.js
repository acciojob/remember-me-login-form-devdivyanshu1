//your JS code here. If required.
window.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkbox = document.getElementById('checkbox');
  const existingBtn = document.getElementById('existing');
  const form = document.getElementById('loginForm');

  // Check localStorage on page load
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingBtn.style.display = 'inline';
  }

  // Handle form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      existingBtn.style.display = 'inline';
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      existingBtn.style.display = 'none';
    }

    form.reset();
  });

  // Handle existing user login
  existingBtn.addEventListener('click', () => {
    const user = localStorage.getItem('username');
    if (user) {
      alert(`Logged in as ${user}`);
    }
  });
});
