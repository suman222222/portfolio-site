# Suman's Student Portfolio

A personal portfolio website for a 1st year Computing student showcasing learning journey, projects, and skills in Java, Python, and web development.

## About This Portfolio

This is my personal portfolio as a 1st year Computing student from Nepal. I'm passionate about learning programming and building projects to strengthen my skills. The portfolio showcases my journey from beginner to aspiring developer.

## Current Learning Focus

- **Java Programming**: Object-oriented programming, basic applications
- **Python**: Fundamentals, problem-solving, simple applications
- **Web Development**: HTML, CSS, JavaScript basics
- **Version Control**: Git and GitHub basics

## Featured Projects

### Student Grade Calculator (Java)
A console application that calculates student grades and GPA based on marks entered.

### Personal Portfolio Website (HTML/CSS/JS)
This responsive portfolio website with modern design and interactive elements.

### Python Number Guessing Game
An interactive game with difficulty levels and score tracking.

### Simple Calculator App (Web)
Basic calculator with HTML, CSS, and JavaScript.

### To-Do List Application (JavaScript)
Task management app with local storage functionality.

### Basic Banking System (Java)
Simple banking simulation with account management features.

## Skills Currently Learning

### Programming Languages
- Java (OOP concepts, basic applications)
- Python (fundamentals, scripting)
- C (basic programming concepts)

### Web Technologies
- HTML5 (structure and semantics)
- CSS3 (styling, responsive design)
- JavaScript (DOM manipulation, basic interactivity)

### Tools & Concepts
- Git & GitHub (version control)
- VS Code (development environment)
- Problem-solving algorithms
- Basic software development principles

## Learning Goals

- Master fundamental programming concepts
- Build more complex applications
- Learn modern web development frameworks
- Contribute to open-source projects
- Collaborate with other developers

## Contact

I'm always open to:
- Learning opportunities
- Student collaborations
- Code review and feedback
- Sharing knowledge with peers

Feel free to reach out if you'd like to connect, collaborate on projects, or discuss programming concepts!

✨ **Modern Design**
- Clean, professional layout with gradient accents
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional color scheme and typography

📱 **Responsive Layout**
- Mobile-first approach
- Hamburger menu for mobile navigation
- Adaptive grid layouts
- Touch-friendly interface

⚡ **Interactive Elements**
- Smooth scrolling navigation
- Mobile menu toggle
- Form validation
- Scroll animations
- Hover effects on cards and buttons

🎨 **Sections**
- **Navigation Bar** - Sticky navigation with mobile menu
- **Hero Section** - Eye-catching introduction
- **About** - Personal bio with statistics
- **Projects** - Featured project showcase
- **Skills** - Technical skills organized by category
- **Contact** - Contact form and social links
- **Footer** - Copyright information

## Project Structure

```
portfolio-site/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # Interactive functionality
├── README.md           # Documentation
└── assets/             # Images and other assets (optional)
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **Responsive Design** - Mobile-first approach

## Features in Detail

### Navigation
- Sticky navbar that stays visible while scrolling
- Mobile hamburger menu that toggles on small screens
- Smooth scrolling to sections
- Active state indicators (ready to implement)

### Form Handling
- Contact form with validation
- Email format verification
- User feedback on submission
- Ready to integrate with backend services

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions throughout
- Scroll-triggered animations using Intersection Observer API

## Customization

### Update Personal Information
1. Edit the hero section title and subtitle
2. Update about section with your bio
3. Modify project cards with your work
4. Update skills sections with your expertise

### Update Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... other variables */
}
```

### Add Social Links
Update the social links in `script.js` with your actual profiles:
```javascript
const socialLinks = {
    'GitHub': 'https://github.com/suman222222',
    'LinkedIn': 'https://www.linkedin.com/in/suman-kapri-11846039a',
    'Twitter': '',
    'Email': 'kaprisuman222@example.com'
};
```

### Connect Contact Form
Replace the form submission handler in `script.js` with your backend endpoint:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight: No external dependencies
- Fast loading: Optimized CSS and minimal JavaScript
- SEO-friendly: Semantic HTML structure
- Accessible: ARIA labels and semantic elements

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project filtering by technology
- [ ] Backend integration for contact form
- [ ] Image optimization and lazy loading
- [ ] PDF resume download
- [ ] Google Analytics integration

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content with your information
4. Update social links and contact information
5. Deploy to hosting platform (GitHub Pages, Netlify, Vercel, etc.)

## Deployment

### GitHub Pages
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
Then enable GitHub Pages in repository settings.

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty for static sites)
3. Publish directory: (root directory)

### Vercel
1. Import project from GitHub
2. Deploy automatically

## License

Free to use and modify for personal projects.

## Contact

For inquiries, please use the contact form on the website or reach out via:
- Email: your.email@example.com
- LinkedIn: Your LinkedIn profile
- GitHub: Your GitHub profile

---

**Built with ❤️ by Suman**