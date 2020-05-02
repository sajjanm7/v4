module.exports = {
  siteTitle: 'Sajjan Kumar M | Tech Geek',
  siteDescription:
    'Sajjan Kumar is a Tech Geek based in Hyderabad, India who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Sajjan Kumar, Sajjan, Sajjan Kumar M, 	sajjanm7, Operations Lead,software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'http://sajjan.info',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-162764714-1',
  googleVerification: '',
  name: 'Sajjan Kumar M',
  location: 'Hyderabad, India',
  email: 'sajjan434@gmail.com',
  github: 'https://github.com/sajjanm7',
  twitterHandle: '@sajjanm7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sajjanm7',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sajjankumarm',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/sajjan',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sajjanm7',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sajjanm7',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
