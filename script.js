// Portfolio JavaScript

console.log("Portfolio Started");

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when link is clicked
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form Validation and Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Success message
        alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
        
        // You can replace the above with actual form submission:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name, email, message })
        // }).then(response => response.json())
        //   .then(data => {
        //       alert('Message sent successfully!');
        //       contactForm.reset();
        //   })
        //   .catch(error => console.error('Error:', error));
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and sections
document.querySelectorAll('.project-card, .skill-category, .stat').forEach(el => {
    observer.observe(el);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// Update social links with actual URLs
function setupSocialLinks() {
    const socialLinks = {
        'GitHub': 'https://github.com/yourusername',
        'LinkedIn': 'https://linkedin.com/in/yourusername',
        'Twitter': 'https://twitter.com/yourusername',
        'Email': 'mailto:your.email@example.com'
    };
    
    // Uncomment and use when implementing:
    // document.querySelectorAll('.social-icon').forEach(link => {
    //     const title = link.getAttribute('title');
    //     if (socialLinks[title]) {
    //         link.href = socialLinks[title];
    //         link.target = '_blank';
    //     }
    // });
}

// Initialize
setupSocialLinks();

console.log('Portfolio initialized successfully!');