document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const formProps = Object.fromEntries(formData);

        try {
            // Add your form submission logic here
            console.log('Form submitted:', formProps);
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        } catch (error) {
            console.error('Error:', error);
            showNotification('Failed to send message. Please try again.', 'error');
        }
    });

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
});
