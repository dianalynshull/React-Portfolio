import Project from '../components/Project';

const ProjectPortfolio = () => {
  const projects = [
    {
      title: 'Employee Generator',
      repo: 'https://github.com/dianalynshull/Team-Generator',
      link: 'https://github.com/dianalynshull/Team-Generator',
      img: './img/employee-generator.jpg'
    },
    {
      title: 'Pets Furever',
      repo: 'https://github.com/toveson/pets-furever',
      link: 'https://toveson.github.io/pets-furever',
      img: './img/pets-furever.png'
    },
    {
      title: 'AmalgaNation',
      repo: 'https://github.com/SydneyGoodwill/amalganation',
      link: 'https://fast-woodland-71053.herokuapp.com/',
      img: './img/amalganation.jpg'
    },
    {
      title: 'Figure Fanpage',
      repo: 'https://github.com/dianalynshull/prework-fanpage',
      link: 'https://dianalynshull.github.io/prework-fanpage',
      img: './img/figure-homepage.png'
    },
    {
      title: 'Weather Dashboard',
      repo: 'https://github.com/dianalynshull/Weather-Dashboard',
      link: 'https://dianalynshull.github.io/Weather-Dashboard',
      img: './img/weather-dashboard.png'
    },
    {
      title: 'Password Generator',
      repo: 'https://github.com/dianalynshull/Password-Generator',
      link: 'https://dianalynshull.github.io/Password-Generator',
      img: './img/password-generator.png'
    },
    {
      title: 'Daily Planner',
      repo: 'https://github.com/dianalynshull/Daily-Planner',
      link: 'https://dianalynshull.github.io/Daily-Planner',
      img: './img/password-generator.png'
    }
  ]
    return (
      <>
        <Project 
          projects = {projects}
        />
      </>
    )
}

export default ProjectPortfolio;
