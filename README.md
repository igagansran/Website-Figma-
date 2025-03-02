# Personal Portfolio Website

## ⚠️ Important Notice

**Warning:** To use the EmailJS functionality, you must replace the existing EmailJS keys with your own credentials. While EmailJS offers a free tier that's quick to set up, using someone else's credentials could compromise both security and functionality. Please take a moment to create your own EmailJS account and update the credentials accordingly.

## Overview

This repository contains the source code for my personal portfolio website. It's a modern, responsive platform designed to showcase my professional journey, featuring my projects, skills, and experience. The website combines clean design with smooth animations to create an engaging user experience.

## Features

- **Responsive Design:** Fully optimized for all devices and screen sizes
- **Interactive Sections:**
  - Home: Personal introduction and professional overview
  - Projects: Showcase of key works with detailed descriptions
  - Resume: Comprehensive professional background
  - Contact: EmailJS-powered contact form
- **Modern Technologies:** Built with current web standards
- **Smooth Animations:** GSAP-powered transitions and effects
- **Cross-browser Compatible:** Tested across major browsers

## Technology Stack

- **Core Technologies:**
  - HTML5
  - CSS3 (with Tailwind CSS)
  - JavaScript (ES6+)
- **Design Tools:**
  - Figma (Custom design)
- **Libraries & Frameworks:**
  - GSAP (GreenSock Animation Platform)
  - EmailJS
- **Hosting:**
  - GoDaddy

## Project Structure

```
portfolio-website/
├── assets/           # Images and media files
├── css/             # Stylesheet files
│   ├── style.css    # Main styles
│   ├── animations.css
│   └── responsive.css
├── js/              # JavaScript files
├── index.html       # Main HTML document
└── README.md        # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of web development
- Git (for version control)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/igagansran/Website-Figma-.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Website-Figma-
   ```

3. Open `index.html` in your preferred browser to view the website locally.

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Replace the existing EmailJS credentials in the code with your own:
   ```javascript
   // Update these values in your JavaScript file
   emailjs.init("YOUR_USER_ID");
   ```

## Deployment

The website is currently deployed using GitHub Pages and can be accessed at:
[https://igagansran.github.io/Website-Figma-/](https://igagansran.github.io/Website-Figma-/)

## Contributing

While this is a personal portfolio, suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## Contact

- **Email:** igagansran@gmail.com
- **LinkedIn:** [Gagan Deep Singh](https://www.linkedin.com/in/gagan-deep-singh-28929b1b2)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped improve this portfolio
- Special thanks to the GSAP and EmailJS teams for their excellent documentation
- Inspiration from various portfolio designs across the web

---

Made with ❤️ by Gagan Deep Singh
