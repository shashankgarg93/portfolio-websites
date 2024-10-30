AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/jpmorganchase.svg",
    place: "JP Morgan Chase, Mumbai",
    time: "(Aug, 2023 - present)",
    desp: "<li>S.E in Trade & Risk Team with best in class solutions for trade and risk management.</li> <li>Developed, maintained and supported multiple core solutions for regulatory reporting of APAC trades</li> <li>Lead the migration of 2000+ feeds from on-prem setup to AWS infrastructure</li>",
  },
  {
    title: "Software Development Engineer",
    cardImage: "assets/images/experience-page/tsp.svg",
    place: "The Software Practice, Singapore",
    time: "(Oct, 2022 - Aug, 2023)",
    desp: "<li>Worked on creating Singapore Land Authority system and addressing bugs in the existing system.</li><li>Developed using Razorpages(.NET)</li>",
  },
  {
    title: "Backend Development Intern",
    cardImage: "assets/images/experience-page/betterhalf.jpeg",
    place: "Betterhalf.ai, Bengaluru",
    time: "(Aug, 2022 - Oct, 2022)",
    desp: "<li><Betterhalf.ai is a matrimony platform with AI Matchmaking</li><li>Designing, documenting and implementing efficient API endpoints with Django Rest</li>",
  },
  {
    title: "Full-stack Software Engineering Intern",
    cardImage: "assets/images/experience-page/borneo.jpeg",
    place: "Borneo, Bengaluru",
    time: "(Jun, 2022 - Aug, 2022)",
    desp: "<li>Borneo is a real-time data security and privacy observability platform</li><li>Helped to fix vulnerabilities on AWS ECR images and leveraged AWS Cost explorer to manage the cost</li>",
  },
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/experience-page/jpmorganchase.svg",
    place: "JP Morgan Chase, Bengaluru",
    time: "(Jan, 2022 - Jun, 2022)",
    desp: "<li>Part of team managing a data lake platform</li><li></li>Deployed the project to cloud using Kubernetes.</li><li>Set up a CI/CD pipeline, load-balancer, distributed cache, logging(Splunk) system for the same.</li>",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  
  {
    title: "Code for Good 2022",
    subtitle: "Winner",
    image: "assets/images/experience-page/jpmorganchase.svg",
    desp: "Tech for Social Good hackathons bring together change makers and non-profit organizations to solve real-world problems",
    href: "https://careers.jpmorgan.com/us/en/students/programs/tfsg-hackathons",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
