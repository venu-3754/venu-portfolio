export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  status: string;
  statusColor: string;
  tags: string[];
  links: ProjectLink;
}

export const projects: Project[] = [
  {
    title: 'Ecommerce Forever',
    description:
      'A full-stack e-commerce website built using the MERN stack. Features user authentication, product management, a shopping cart, admin dashboard, and secure payments via Stripe and Razorpay. Fully responsive and deployed on Vercel. Built with React, Node.js, Express, and MongoDB for a seamless shopping experience.',
    image: '/images/projects/Ecommerce_Image.png',
    status: 'Ecommerce Project',
    statusColor: 'bg-cyber-green',
    tags: ['React', 'Redux', 'React Router', 'Node.js', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/venu-3754/Ecommerce-Forever',
      demo: 'https://forever-bay.vercel.app/',
    },
  },
  {
    title: 'Web Application Security Testing',
    description:
      'Ethical SQL injection testing on an open-source lab app (Linux) using Burp Suite, found and validated injection points and produced remediation guidance (parameterized queries, input validation). Testing confined to an authorized environment.',
    image: '/images/projects/Burp_Image.png',
    status: 'SQL Injection & XSS',
    statusColor: 'bg-cyber-cyan',
    tags: ['Web Security', 'Penetration Testing', 'BurpSuite', 'XSS', 'SQL Injection', 'Vulnerabilities'],
    links: {
      github: 'https://github.com/venu-3754/Web-Application-Security-Testing',
    },
  },
  {
    title: 'Amazon Front-End Clone',
    description:
      'Built an Amazon-inspired e-commerce frontend to practice and strengthen web development concepts. The project replicates core UI features of Amazon, including product listings, navigation bar, search functionality, and responsive design. Focused on improving skills in layout structuring, component design, and state management.',
    image: '/images/projects/Amazon_Image.png',
    status: 'FrontEnd Practice Project',
    statusColor: 'bg-cyber-green',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'GitHub Pages'],
    links: {
      github: 'https://github.com/venu-3754/Amazon-Front-End-Clone',
      demo: 'https://venu-3754.github.io/Amazon-Front-End-Clone/',
    },
  },
  {
    title: 'House Price Prediction System',
    description:
      'Developed a machine learning-based web application that predicts house prices based on key factors like location, area, number of rooms, and amenities. The system uses regression models to analyze housing datasets and provides accurate real-time predictions through an interactive user interface.',
    image: '/images/projects/ML_Image.png',
    status: 'Machine Learning Project',
    statusColor: 'bg-cyber-green',
    tags: ['Python', 'Machine Learning', 'Numpy', 'Scikit-learn', 'Pandas', 'MatplotLib', 'Jupyter Notebook'],
    links: {
      github: 'https://github.com/venu-3754/House-Price-Prediction-System',
    },
  },
  {
    title: 'Travel Partner',
    description:
      'A simple Travel Management app built using HTML, CSS, JavaScript, and React. Where customers can see my travel services and our travel prices with plans. Customers can rate and review previous reviews from our testimonials section.',
    image: '/images/projects/Travel_Image.jpg',
    status: 'Travel Planner Project',
    statusColor: 'bg-cyber-green',
    tags: ['HTML', 'CSS', 'JS', 'React.js', 'Bootstrap'],
    links: {
      github: 'https://github.com/venu-3754/Travel-Partner',
      demo: 'https://yourtravelpartner.vercel.app/',
    },
  },
  {
    title: 'Weather Forecasting App',
    description:
      'A simple web-based weather app built using HTML, CSS, JavaScript, and Python. It fetches real-time weather data through a Weather API and displays temperature, humidity, wind speed, and conditions for any searched city. The interface is lightweight, responsive, and updates instantly based on user input, providing an easy and fast way to check current weather and forecasts.',
    image: '/images/projects/Weather_Image.png',
    status: 'Weather Forecasting Project',
    statusColor: 'bg-cyber-green',
    tags: ['Python', 'Flask', 'Weather API', 'HTML', 'CSS', 'JS'],
    links: {
      github: 'https://github.com/venu-3754/Weather_App',
      demo: 'https://venu-3754.github.io/Weather_App/',
    },
  },
];
