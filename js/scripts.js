document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    // Handle register form submission
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(registerForm);
            const userData = {
                username: formData.get('username'),
                email: formData.get('email'),
                password: formData.get('password')
            };

            try {
                const response = await fetch('/api/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Registration successful!');
                    window.location.href = 'login.html';
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const userData = {
                email: formData.get('email'),
                password: formData.get('password')
            };

            try {
                const response = await fetch('/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('token', data.token);
                    alert('Login successful!');
                    window.location.href = 'profile.html';
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }

    // Fetch articles
    async function fetchArticles() {
        try {
            const response = await fetch('/api/articles');
            const data = await response.json();

            if (response.ok) {
                const articlesList = document.getElementById('articles-list');
                data.articles.forEach(article => {
                    const li = document.createElement('li');
                    li.textContent = article.title;
                    articlesList.appendChild(li);
                });
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    if (document.getElementById('articles-list')) {
        fetchArticles();
    }
});
