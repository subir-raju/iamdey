import project1_img from "../assets/Airticket.png";
import project2_img from "../assets/Docket.png";
import project3_img from "../assets/InTrack.png";
// Import new InTrack images (assuming these are the filenames)
import intrack1 from "../assets/InTrack1.png";
import intrack2 from "../assets/InTrack2.png";
import intrack3 from "../assets/InTrack3.png";

const project_data1 = [
  {
    title: "InTrack",
    images: [project3_img, intrack1, intrack2, intrack3],
    description:
      "A web-based technology to help the garments industry to detect the defects in readymade garments. As a part of CSE499 (Senior Design Project) course, developed a prototype of a web-based technology that can help detecting the readymade garments manufacturing defects. The owner can easily keep track in all the information instantly.",
    technologies: [
      {
        name: "ReactJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "Axios",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      },
      {
        name: "Rabbit",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
      },
      {
        name: "Knex",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/knexjs/knexjs-original.svg",
      },
    ],
  },
  {
    title: "Docket",
    images: [project2_img],
    description:
      " A website to keep track and sharing movies, tv-shows, anime, games books. As a part of CSE299 (Junior Design Project) course, developed a website through which user can login and then keep track of movies, tv-shows, anime, games, and books user has watched/played/read or is watching/ playing/ reading or is planning to watch/play/read and post blogs.",
    technologies: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "Nodejs",
        icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      },
    ],
  },
  {
    title: "Air Ticket",
    images: [project1_img],
    description:
      " A website to search and book air ticket. As a part of CSE482 (Internet and Web Technology) course, designed and developed a website where user can register and then search for flight and on availability, user can book and pay for the ticket and a virtual ticket will be displayed with flight information on the screen.",
    technologies: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
    ],
  },

  {
    title: "Canteen Management",
    images: [],
    description:
      "At the beginining of my university life, started working with Java. I made a project using Java to order food from our university canteen and the system will print a digital receipt which is stored in a file. ",
    technologies: [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
    ],
  },
];

export default project_data1;
