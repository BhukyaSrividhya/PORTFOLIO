// Initialize particles.js background
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#3498db" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#3498db",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
        },
    },
    retina_detect: true,
});

// Mobile menu functionality
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});

// Smooth scrolling for navigation
document.querySelectorAll("nav a, .back-to-top").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth"
            });
            
            // Close mobile menu after clicking
            navMenu.classList.remove("active");
        }
    });
});

// Contact form handling
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
});

// Back to top button
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add("active");
    } else {
        backToTopButton.classList.remove("active");
    }
});

// Scroll animations
const fadeElements = document.querySelectorAll(".fade-in");
const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); // Initial check

// Header background on scroll
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 100) {
        header.style.backgroundColor = "rgba(44, 62, 80, 0.95)";
        header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    } else {
        header.style.backgroundColor = "rgba(44, 62, 80, 0.95)";
        header.style.boxShadow = "none";
    }
});

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});

// Project slider functionality
const projectsContainer = document.getElementById("projectsContainer");
const projectDots = document.querySelectorAll(".project-dot");
let currentProjectIndex = 0;

// Update active dot based on scroll
projectsContainer.addEventListener("scroll", function() {
    const scrollPosition = projectsContainer.scrollLeft;
    const projectWidth = projectsContainer.querySelector(".project-item").offsetWidth + 40;
    const newIndex = Math.round(scrollPosition / projectWidth);
    
    if (newIndex !== currentProjectIndex) {
        currentProjectIndex = newIndex;
        updateActiveDot();
    }
});

function updateActiveDot() {
    projectDots.forEach((dot, index) => {
        if (index === currentProjectIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

// Click on dots to navigate projects
projectDots.forEach(dot => {
    dot.addEventListener("click", function() {
        const index = parseInt(this.getAttribute("data-index"));
        const projectWidth = projectsContainer.querySelector(".project-item").offsetWidth + 40;
        projectsContainer.scrollTo({
            left: index * projectWidth,
            behavior: "smooth"
        });
    });
});

// Portfolio data
const portfolioData = {
    personalInfo: {
        name: "Bhukya Srividhya",
        title: "Computer Science Engineer",
        email: "srividhyarathod27@gmail.com",
        phone: "+91 98765 43210",
        location: "Nagpur, Maharashtra, India",
    },
    education: [
        {
            degree: "Bachelor of Technology",
            institution: "Visvesvaraya National Institute of Technology, Nagpur",
            field: "Computer Science and Engineering",
            achievements: [
                "Solved 150+ DSA problems",
                "Participated in Hackathons",
                "Member of Tolly Dance Club",
                "Event Organizer for AXIS Club",
            ],
        },
        {
            degree: "Intermediate Education",
            institution: "Sri Chaitanya Junior College",
            score: "96.8%",
            achievements: [
                "Secured category rank of 584 in All India JEE Mains exam",
            ],
        },
        {
            degree: "Secondary Education",
            institution: "Sri Chaitanya Techno School",
            score: "100%",
            achievements: [
                "Class Leader",
                "Stood first in 10th class",
                "First in Debate competition conducted among three districts",
            ],
        },
    ],
    skills: {
        programmingLanguages: ["C", "C++", "Python", "Core Java", "JavaScript"],
        webDevelopment: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        otherTechnologies: ["Data Structures", "Algorithms", "AI & Machine Learning", "Microprocessors", "Git"],
    },
    projects: [
        {
            name: "Smart Car Parking System",
            description: "Developed a CLI-based smart parking management system using B+ Trees for efficient storage and retrieval of vehicle and parking space records.",
            technologies: ["B+ Trees", "Linked Lists", "C++"],
            repository: "https://github.com/BhukyaSrividhya/parking-system-trees",
        },
        {
            name: "Heap Management System",
            description: "Developed a custom heap allocator in C using a statically allocated memory pool and a linked-list-based metadata structure.",
            technologies: ["C", "Structures", "Memory Management"],
            repository: "https://github.com/BhukyaSrividhya/HEAP-MANAGEMENT",
        },
        {
            name: "BigInt Data Type",
            description: "Developed a program to read 1024-bit integers and store them digit-wise in arrays with implemented arithmetic operations.",
            technologies: ["C", "Data Structures", "Arrays"],
            repository: "https://github.com/BhukyaSrividhya/BIGINT",
        },
        {
            name: "Sudoku Solver",
            description: "Interactive web-based Sudoku Solver using JavaScript, HTML, and CSS with backtracking algorithm implementation.",
            technologies: ["HTML", "CSS", "JavaScript", "Backtracking"],
            repository: "https://github.com/BhukyaSrividhya/Sudoko_solver",
        },
    ],
    awards: [
        {
            name: "JEE Mains Rank",
            description: "Secured category rank of 584 in All India JEE Mains exam",
        },
        {
            name: "10th Board Topper",
            description: "Stood first in 10th class with 100% score",
        },
        {
            name: "Debate Competition",
            description: "First prize in Debate competition conducted among three districts",
        },
    ],
};

console.log("Portfolio loaded successfully!");