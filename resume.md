# Resume

<div id="resume"></div>

<script>
const resumeData = {
  name: "AHMAD KUBAGUS SUBKHI",
  title: "SOFTWARE DEVELOPER",
  contact: {
    location: "Semarang",
    email: "kubagus.@outlook.co.id",
    website: "kubagus.pages.dev"
  },
  summary: "Highly motivated and detail-oriented with a strong academic background in Artificial Intelligence, Machine Learning, and Full-Stack Web Development. Experienced in developing responsive and scalable web applications for real-world clients and small businesses, delivering practical and user-focused solutions. Adept at translating complex problems into effective software solutions, with a passion for continuous improvement and staying current with emerging technologies. Strong collaboration and communication skills, with the ability to work effectively in multidisciplinary teams. Eager to contribute to innovative software projects and grow professionally in a dynamic and fast-paced environment.",
  experience: [
    {
      title: "Web Developer Intern",
      company: "Yayasan Terbesar Yogyakarta",
      date: "Mar 2024 - Jun 2024",
      description: [
        "Developed and customized a dynamic WordPress-based website to showcase programs and improve stakeholder communication.",
        "Integrated SEO best practices and analytics tools, resulting in a 20% increase in organic traffic and better visibility in local search results.",
        "Recovered the website from a hacking incident and implemented firewall protection to enhance system security."
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Dsarea",
      date: "Nov 2023 - Feb 2024",
      description: [
        "Designed, developed, and maintained the main website dsarea.id and all of its subdomains.",
        "Implemented responsive UI/UX design and optimized backend processes, realizing a 12% improvement in page load speed and 15% increase in user engagement.",
        "Configured custom domain email services to enhance professional communication and branding."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Muhammadiyah Semarang University",
      date: "2021-2025 (expected)",
      description: "Currently pursuing a Bachelor's degree in Informatics with a concentration in Artificial Intelligence and Web Development."
    },
    {
      degree: "Senior High School - Mathematics and Natural Sciences",
      institution: "SMA Negeri 2 Pemalang",
      date: "2018-2021",
      description: "Focused on science and mathematics, which laid the foundation for analytical thinking and problem-solving skills."
    }
  ],
  skills: {
    "Frameworks & CMS": ["Laravel (Intermediate)", "React (Intermediate)", ". Flask (Intermediate)", "Wordpress (Advanced)"],
    "Progrramming Language": ["Javascript (Advanced)", "PHP (Advanced)", "Python (Intermdiate)", "Typescript (Interemdiate)"],
    "Databases": ["MySQL", "Postgre SQL", "SQLite"],
    "Tools": ["Git", "Docker", "Excel", "Word", "Powerpoint"]
  },
  languages: "Indonesian (Fluent), English (Proficient)"
};

function renderResume() {
  const resumeContainer = document.getElementById('resume');
  let html = `
    <h1>${resumeData.name}</h1>
    <h2>${resumeData.title}</h2>
    <p>${resumeData.contact.location} | <a href="mailto:${resumeData.contact.email}">${resumeData.contact.email}</a> | <a href="http://${resumeData.contact.website}" target="_blank">${resumeData.contact.website}</a></p>
    
    <hr>
    
    <h3>SUMMARY</h3>
    <p>${resumeData.summary}</p>
    
    <hr>
    
    <h3>EXPERIENCE</h3>
  `;
  
  resumeData.experience.forEach(exp => {
    html += `
      <h4>${exp.title}, ${exp.company}</h4>
      <p><em>${exp.date}</em></p>
      <ul>
    `;
    exp.description.forEach(item => {
      html += `<li>${item}</li>`;
    });
    html += `</ul>`;
  });
  
  html += `
    <hr>
    
    <h3>EDUCATION</h3>
  `;
  
  resumeData.education.forEach(edu => {
    html += `
      <h4>${edu.degree}</h4>
      <p><strong>${edu.institution}</strong> | ${edu.date}</p>
      <p>${edu.description}</p>
    `;
  });
  
  html += `
    <hr>
    
    <h3>SKILLS</h3>
  `;
  
  for (const category in resumeData.skills) {
    html += `
      <h4>${category}</h4>
      <ul>
    `;
    resumeData.skills[category].forEach(skill => {
      html += `<li>${skill}</li>`;
    });
    html += `</ul>`;
  }
  
  html += `
    <hr>
    
    <h3>LANGUAGES</h3>
    <p>${resumeData.languages}</p>
  `;
  
  resumeContainer.innerHTML = html;
}

renderResume();
</script>