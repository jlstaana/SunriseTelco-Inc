document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(element => {
        const filePath = element.getAttribute('data-include');
        
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(content => {
                element.innerHTML = content;
                // Execute any scripts in the included content
                element.querySelectorAll('script').forEach(script => {
                    eval(script.textContent);
                });
            })
            .catch(error => {
                console.error('Error loading component:', filePath, error);
                element.innerHTML = `<p>Error loading component. Please try again later.</p>`;
            });
    });
});
