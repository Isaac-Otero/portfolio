const githubIcon = new URL('../assets/github_icon.png', import.meta.url).href;
const linkedinIcon = new URL('../assets/linkedin_icon.png', import.meta.url).href;
const emailIcon = new URL('../assets/email_icon.png', import.meta.url).href;
const SOCIAL_PROFILES = [
    {
      id: 1,
      link: 'https://github.com/Isaac-Otero',
      image: githubIcon
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/isaac-otero/',
      image: linkedinIcon
    },
    {
      id: 3,
      link: 'mailto:isaacotero100@gmail.com',
      image: emailIcon
    }
  ];
  
  export default SOCIAL_PROFILES;
  
