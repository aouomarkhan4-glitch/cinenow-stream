document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const formError = document.getElementById('formError');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const nameInput = document.getElementById('signup-name').value;
            const emailInput = document.getElementById('signup-email').value;
            const passwordInput = document.getElementById('signup-password').value;
            const confirmPasswordInput = document.getElementById('signup-confirm-password').value;
            
            let errorMessage = '';

            if (nameInput.length === 0 || nameInput.length > 14) {
                errorMessage = 'Name must be between 1 and 14 characters.';
            } 
            
            else if (!emailInput.endsWith('@gmail.com')) {
                errorMessage = 'Email must end with @gmail.com.';
            } 
            
            else if (passwordInput.length !== 8) {
                errorMessage = 'Password must be exactly 8 characters or digits.';
            } 
            
            else if (passwordInput !== confirmPasswordInput) {
                errorMessage = 'Passwords do not match.';
            }

            if (errorMessage) {
                formError.textContent = '❌ Error: ' + errorMessage;
                formError.style.color = '#E50914';
            } else {
                formError.textContent = '✅ Success! Redirecting...';
                formError.style.color = '#00FF00'; 

                setTimeout(() => {
                    window.location.href = 'welcome.html';
                }, 1000); 
            }
        });
    }

    if (loginForm) {
         loginForm.addEventListener('submit', (e) => {
             e.preventDefault();
             
             formError.textContent = '✅ Login Successful! Redirecting...';
             formError.style.color = '#00FF00';
             setTimeout(() => {
                window.location.href = 'welcome.html';
             }, 1000); 
         });
    }
});