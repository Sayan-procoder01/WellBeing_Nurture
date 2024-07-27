// public/js/scripts.js
/*document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/articles')
      .then(response => response.json())
      .then(data => {
        const articlesList = document.getElementById('articles-list');
        data.forEach(article => {
          const articleItem = document.createElement('li');
          articleItem.textContent = article.title;
          articlesList.appendChild(articleItem);
        });
      })
      .catch(error => console.error('Error fetching articles:', error));
  });*/
  

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('register-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
  
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
  
    fetch('/api/articles')
      .then(response => response.json())
      .then(data => {
        const articlesList = document.getElementById('articles-list');
        data.forEach(article => {
          const articleItem = document.createElement('li');
          articleItem.textContent = article.title;
          articlesList.appendChild(articleItem);
        });
      })
      .catch(error => console.error('Error fetching articles:', error));
  });
  