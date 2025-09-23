// Data resume yang diambil dari CV
const resumeData = {
  [cite_start]name: "AHMAD KUBAGUS SUBKHI", // [cite: 1]
  [cite_start]title: "SOFTWARE DEVELOPER", // [cite: 2]
  contact: {
    [cite_start]location: "Semarang", // [cite: 3]
    [cite_start]email: "kubagus.@outlook.co.id", // [cite: 3]
    [cite_start]website: "kubagus.pages.dev" // [cite: 3]
  },
  [cite_start]summary: "Highly motivated and detail-oriented with a strong academic background in Artificial Intelligence, Machine Learning, and Full-Stack Web Development. [cite: 5] [cite_start]Experienced in developing responsive and scalable web applications for real-world clients and small businesses, delivering practical and user-focused solutions. [cite: 6] [cite_start]Adept at translating complex problems into effective software solutions, with a passion for continuous improvement and staying current with emerging technologies. [cite: 7] [cite_start]Strong collaboration and communication skills, with the ability to work effectively in multidisciplinary teams. [cite: 8] [cite_start]Eager to contribute to innovative software projects and grow professionally in a dynamic and fast-paced environment. [cite: 9]",
  experience: [
    {
      [cite_start]title: "Web Developer Intern", // [cite: 11]
      [cite_start]company: "Yayasan Terbesar Yogyakarta", // [cite: 11]
      [cite_start]date: "Mar 2024 - Jun 2024", // [cite: 12]
      description: [
        [cite_start]"Developed and customized a dynamic WordPress-based website to showcase programs and improve stakeholder communication. [cite: 13]",
        [cite_start]"Integrated SEO best practices and analytics tools, resulting in a 20% increase in organic traffic and better visibility in local search results. [cite: 14]",
        [cite_start]"Recovered the website from a hacking incident and implemented firewall protection to enhance system security. [cite: 15]"
      ]
    },
    {
      [cite_start]title: "Freelance Web Developer", // [cite: 16]
      [cite_start]company: "Dsarea", // [cite: 16]
      [cite_start]date: "Nov 2023 - Feb 2024", // [cite: 17]
      description: [
        [cite_start]"Designed, developed, and maintained the main website dsarea.id and all of its subdomains. [cite: 18]",
        [cite_start]"Implemented responsive UI/UX design and optimized backend processes, realizing a 12% improvement in page load speed and 15% increase in user engagement. [cite: 19]",
        [cite_start]"Configured custom domain email services to enhance professional communication and branding. [cite: 20]"
      ]
    }
  ],
  education: [
    {
      [cite_start]degree: "Bachelor of Computer Science", // [cite: 22]
      [cite_start]institution: "Muhammadiyah Semarang University", // [cite: 23]
      [cite_start]date: "2021-2025 (expected)", // [cite: 24]
      [cite_start]description: "Currently pursuing a Bachelor's degree in Informatics with a concentration in Artificial Intelligence and Web Development. [cite: 25]"
    },
    {
      [cite_start]degree: "Senior High School - Mathematics and Natural Sciences", // [cite: 26]
      [cite_start]institution: "SMA Negeri 2 Pemalang", // [cite: 27]
      [cite_start]date: "2018-2021", // [cite: 28]
      [cite_start]description: "Focused on science and mathematics, which laid the foundation for analytical thinking and problem-solving skills. [cite: 29]"
    }
  ],
  skills: {
    [cite_start]"Frameworks & CMS": ["Laravel (Intermediate) [cite: 32][cite_start]", "React (Intermediate) [cite: 33][cite_start]", "Flask (Intermediate) [cite: 34][cite_start]", "Wordpress (Advanced) [cite: 35]"],
    [cite_start]"Programming Language": ["Javascript (Advanced) [cite: 40][cite_start]", "PHP (Advanced) [cite: 43][cite_start]", "Python (Intermediate) [cite: 46][cite_start]", "Typescript (Intermediate) [cite: 49]"],
    [cite_start]"Databases": ["MySQL [cite: 41][cite_start]", "PostgreSQL [cite: 44][cite_start]", "SQLite [cite: 47]"],
    [cite_start]"Tools": ["Git [cite: 42][cite_start]", "Docker [cite: 45][cite_start]", "Excel [cite: 48][cite_start]", "Word [cite: 50][cite_start]", "Powerpoint [cite: 51]"]
  },
  [cite_start]languages: "Indonesian (Fluent), English (Proficient). [cite: 52]"
};

// Fungsi untuk merender data resume ke dalam HTML
function renderResume() {
  const resumeContainer = document.getElementById('resume-container');
  if (!resumeContainer) return;

  let html = `
    <header>
      <h1>${resumeData.name}</h1>
      <h2>${resumeData.title}</h2>
      <p>${resumeData.contact.location} | <a href="mailto:${resumeData.contact.email}">${resumeData.contact.email}</a> | <a href="http://${resumeData.contact.website}" target="_blank">${resumeData.contact.website}</a></p>
    </header>
    <hr>
  `;

  // Bagian Summary
  html += `
    <section>
      <h3>SUMMARY</h3>
      <p>${resumeData.summary}</p>
    </section>
    <hr>
  `;

  // Bagian Experience
  html += `
    <section>
      <h3>EXPERIENCE</h3>
  `;
  resumeData.experience.forEach(exp => {
    html += `
      <h4>${exp.title}, ${exp.company}</h4>
      <p><em>${exp.date}</em></p>
      <ul>
        ${exp.description.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  });
  html += `</section><hr>`;

  // Bagian Education
  html += `
    <section>
      <h3>EDUCATION</h3>
  `;
  resumeData.education.forEach(edu => {
    html += `
      <h4>${edu.degree}</h4>
      <p><strong>${edu.institution}</strong> | ${edu.date}</p>
      <p>${edu.description}</p>
    `;
  });
  html += `</section><hr>`;

  // Bagian Skills
  html += `
    <section>
      <h3>SKILLS</h3>
  `;
  for (const category in resumeData.skills) {
    html += `
      <h4>${category}</h4>
      <ul>
        ${resumeData.skills[category].map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    `;
  }
  html += `</section><hr>`;

  // Bagian Languages
  html += `
    <section>
      <h3>LANGUAGES</h3>
      <p>${resumeData.languages}</p>
    </section>
  `;

  resumeContainer.innerHTML = html;
}

// Menjalankan fungsi renderResume setelah semua konten halaman dimuat
document.addEventListener('DOMContentLoaded', renderResume);