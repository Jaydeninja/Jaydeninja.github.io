export const siteContent = {
  meta: {
    title: 'Jayden Ellul | Interactive CV',
    description: 'Interactive CV of Jayden Ellul, IT Multimedia student focused on front-end development and design.'
  },
  theme: {
    surfaceGradient: 'from-gray-950 via-red-950 to-gray-900',
    heroSphereColor: '#ef4444',
    particleColors: ['#ef4444', '#facc15', '#dc2626']
  },
  navigation: {
    brand: 'Jayden Ellul',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'contact', label: 'Contact' }
    ]
  },
  hero: {
    greeting: "Hello, I'm",
    displayName: 'Jayden',
    title: 'IT Multimedia Student',
    tagline: 'Building clean, engaging front-end experiences with simplicity and efficiency in mind.',
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'Contact Me', href: '#contact' }
  },
  about: {
    heading: 'About Me',
    paragraphs: [
      'I am Jayden Ellul, a 17-year-old IT Multimedia student at MCAST currently completing Advanced Diploma Level 4 (Year 2). I have been exploring coding and front-end design since getting my first personal computer in 2019.',
      'I enjoy combining design and development to deliver user-friendly interfaces. I am currently building practical experience in technical environments while growing as a front-end developer and creative problem solver.'
    ],
    quickFacts: {
      location: 'Kappara, Malta',
      yearsExperience: '1 year',
      workAuthorization: 'Authorized to work in Malta'
    },
    targetRoles: ['Front-End Development', 'Graphic Design', 'IT Repairs'],
    technologies: ['React', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Illustrator', 'Photoshop', 'Git']
  },
  skills: {
    heading: 'Skills & Expertise',
    categories: [
      {
        category: 'Frontend',
        skills: [
          { name: 'React', level: 35 },
          { name: 'JavaScript', level: 65 },
          { name: 'HTML', level: 70 },
          { name: 'CSS', level: 69 }
        ]
      },
      {
        category: 'Design & Graphics',
        skills: [
          { name: 'Adobe Illustrator', level: 70 },
          { name: 'Adobe Photoshop', level: 72 },
          { name: 'UI Styling', level: 54 },
          { name: 'Digital Media/Photography', level: 88 }
        ]
      },
      {
        category: 'Programming & Tools',
        skills: [
          { name: 'Java', level: 20 },
          { name: 'Python', level: 70 },
          { name: 'Node.js', level: 31 },
          { name: 'Git', level: 32 }
        ]
      }
    ]
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        company: 'APS',
        role: 'DevOps Officer',
        period: 'Feb - Oct',
        location: 'Hybrid',
        highlights: [
          'Supported day-to-day DevOps tasks in both on-site and remote environments.',
          'Collaborated with team members across technical and operational workflows.',
          'Built practical experience in process reliability, troubleshooting, and system support.'
        ]
      }
    ]
  },
  projects: {
    heading: 'Featured Projects',
    items: [
      {
        title: 'BeamMP',
        description: 'Community team work for BeamMP, with a move from PR/Media into Events & Moderation.',
        tech: ['Community Management', 'Events', 'Moderation'],
        contribution: 'Events & Moderation',
        outcome: 'Current role on the BeamMP team.',
        repoUrl: 'https://beammp.com/',
        liveUrl: '',
        gradient: 'from-orange-500 to-blue-500',
        primaryLinkType: 'website',
        primaryLinkLabel: 'Website'
      },
      {
        title: 'JaysIRacingToolbox',
        description: 'A mobile app that helps sim racers prepare before events with practical setup and comparison tools.',
        tech: ['Node.js', 'React', 'JavaScript', 'HTML', 'CSS'],
        contribution: 'Full-stack development, server setup, and visual design.',
        outcome: 'Currently under development.',
        liveUrl: '',
        repoUrl: 'https://github.com/jaydeninja/JaysIRacingToolbox',
        gradient: 'from-yellow-400 to-amber-500'
      },
      {
        title: 'Instagram Content Creation',
        description: 'Consistent automotive-focused posting and reel creation, building a style that highlights sim racing moments and visual storytelling.',
        tech: ['Content Creation', 'Reels', 'Short-Form Editing', 'Audience Growth'],
        contribution: 'Planning, editing, publishing, and brand consistency across posts.',
        outcome: 'Active profile',
        repoUrl: 'https://www.instagram.com/jaysimracing21/',
        liveUrl: '',
        gradient: 'from-pink-500 via-purple-500 to-orange-400',
        primaryLinkType: 'profile',
        primaryLinkLabel: 'Instagram'
      },
      {
        title: 'TradingPaints Liveries',
        description: 'Dedicated livery design work for the iRacing community, with a focus on clean sponsor placement, identity consistency, and race-ready visual polish.',
        tech: ['Livery Design', 'Graphic Design', 'Brand Identity', 'iRacing'],
        contribution: 'Designing and publishing custom liveries for community use and personal racing projects.',
        outcome: 'Ongoing uploads',
        repoUrl: 'https://www.tradingpaints.com/profile/1125849/Jayden-Ellul',
        liveUrl: '',
        gradient: 'from-blue-500 via-indigo-500 to-cyan-400',
        primaryLinkType: 'profile',
        primaryLinkLabel: 'TradingPaints'
      }
    ]
  },
  education: {
    heading: 'Education',
    items: [
      {
        institution: 'MCAST',
        degree: 'Advanced Diploma (Level 4)',
        period: 'Current',
        notes: 'IT Multimedia, Year 2'
      },
      {
        institution: 'Savio College Dingli',
        degree: 'Secondary School',
        period: 'Completed',
        notes: 'Completed secondary school education.'
      }
    ]
  },
  achievements: {
    heading: 'Achievements',
    items: [
      {
        title: 'RoboCup - 3rd Place',
        year: '2024',
        context: "International robotics league hosted in Italy; our team placed third against top university teams."
      }
    ]
  },
  contact: {
    heading: "Let's Work Together",
    subheading: 'I am open to opportunities in front-end development, graphic design, and IT support.',
    email: 'jaydenellul11@gmail.com',
    phone: '+356 79208468',
    showPhone: true,
    links: [
      {
        label: 'GitHub',
        handle: '@jaydeninja',
        href: 'https://github.com/jaydeninja',
        icon: 'GitHub'
      },
      {
        label: 'LinkedIn',
        handle: 'Jayden Ellul',
        href: 'https://www.linkedin.com/in/jayden-ellul-29bb46341/',
        icon: 'LinkedIn'
      }
    ]
  },
  footer: {
    text: 'Jayden Ellul. Built with React, Vite, Framer Motion, and Three.js.'
  }
}
