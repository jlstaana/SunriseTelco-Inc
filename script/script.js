
document.addEventListener('DOMContentLoaded', function() {
    
    const ctaButton = document.getElementById("cta");
    if (ctaButton) {
        ctaButton.addEventListener("click", function() {
            alert("Welcome to Sunrise Telecom! Let's get you connected.");
        });
    }


    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');

            const icon = navToggle.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }


    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav && nav.contains(event.target);
        const isClickOnToggle = navToggle && navToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && nav && nav.classList.contains('active')) {
            nav.classList.remove('active');

            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonials.forEach(t => t.style.display = 'none');
            testimonials[index].style.display = 'flex';
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }

        // Show first testimonial and start autoplay
        showTestimonial(0);
        setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
    }
});