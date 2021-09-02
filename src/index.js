import { html, nothing, render } from "lit-html";
import { until } from "lit-html/directives/until.js";

import json from "./data.json";

const API_KEY = "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";

console.log(json);

const fetchOptions = {
  method: "GET",
  headers: {
    Authorization: `Token ${API_KEY}`,
    "Content-Type": "application/json",
  },
};

const myStudies = [
  {
    title: "Técnico Superior en A.S.I.R",
    pla: "UNED - 2019/2021",
    data: [
      "Muy buenas calificaciones. MH(Planificación Administración de Redes y Administración y Gestión BBDD)",
      "Virtualización, Active Directory, HTML/CSS, PHP, MySQL, MongoDB...",
    ],
  },
  {
    title: "Grado en Psicología y Estudios de Posgrado",
    pla: "Univ. de Valencia - 2013/2018",
    data: [
      "Técnicas de trabajo en grupo, liderazgo y desarrollo de habilidades interpersonales",
      "Máster en Psicol. Clínica",
      "Máster en Criminología",
    ],
  },
];

const myJobs = [
  {
    title: "Admin. de Sistemas",
    pla: "Ayun. de Altura - 2020",
    data: [
      "Active Directory(A.D)",
      "Implantación y Desarrollo de Aplicaciones Web",
      "Windows Server 2019, Windows 10, Linux(Debian, Arch)...",
      "Mantenimiento de Servidores.",
      "HelpDesk AnyDesk",
      "Mantenimiento y Reparación de equipos",
    ],
  },
  {
    title: "Profesor IT",
    pla: "Ayun. de Altura - 2019/20",
    data: [
      "Primeros Pasos en Programación (Scratch)",
      "Construyendo tu primer sitio Web (HTML/CSS/JS)",
      "Ofimática para todos (Word/Excel)",
      "Empezando con el Hellow World(Python)",
    ],
  },
  {
    title: "Empleado de Almacén",
    pla: "Altura Impulsa - 2020",
    data: [
      "Desarrollo de CRUD para Stock (PHP/SQL))",
      "Implantación de Aplicación",
      "Trabajo de Almacén",
      "Ofimática y Logística",
    ],
  },
];

const mySkills = [
  {
    title: "FrontEnd",
    skills: [
      "JavaScript EM6",
      "ReactJS",
      "Angular",
      "HTML5/CSS3",
      "SASS",
      "JQuery",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Flask",
      "Django",
      "API RESTful",
      "Node(Express)",
      "MySQL",
      "mongoDB",
      "Bash",
      "Apache/Nginx",
    ],
  },
  {
    title: "Other",
    skills: ["Git", "GitHub", "VSCode", "Slack"],
  },
];

const dataUs = (data) => html`
  <h4>${data.title}</h4>
  <h5 style="color:gray; margin-top:.2rem">${data.pla}</h5>
  <!-- list the data inside data -->
  <ul style="margin: 1rem">
    ${data.data.map(
      (item) => html`
        <li
          style="margin:.1rem;font-size:${data.data.length > 3
            ? ".9rem"
            : nothing}"
        >
          ${item}
        </li>
      `
    )}
  </ul>
`;

const dataSkills = (data) => html`
  <h4 style="padding:.5rem">${data.title}</h4>
  <p>
    ${data.skills.map((item, index) => {
      return html`
        <span
          style=" font-weight:bold; color:${index % 2 === 1
            ? "black"
            : "#a4b4c4"}"
          class="skill"
          >${item}
        </span>
      `;
    })}
  </p>
`;

let indexInfo = 0;
const randomInfo = () => {
  const randomNote = document.getElementById("randomNote");
  const randomInfo = [
    "Me encanta desarrollar en los dos lados de la ecuación, tanto FrontEnd 🖥️  como BackEnd 🧰 . La cuestión es construir cosas.",
    "Busco un lugar donde desarrollar mis habilidades, construir una carrera y convertirme en un mejor profesional 🧰.",
    "Me encanta compartir lo que sé, siempre he tenido un poco de alma de profesor ✏️.",
    "Siempre estoy aprendiendo, ampliando mis conocimientos y habilidades.🧑🏻‍🎓",
    html`Mi lenguaje favorito es Python 🐍 <br />
      Aunque mi otro amor es JavaScript 🤓`,
    html`Me gusta cualquier tipo de música 🎶 y la lectura 📚`,
    "Pasé un año en el extranjero 🇷🇴 donde me comunicaba en inglés 🇬🇧 con gente de todo el mundo.",
  ];

  render(
    html`
      <h3 style="margin-top:1rem; text-align:center">
        ${randomInfo[indexInfo]}
      </h3>
    `,
    randomNote
  );
  indexInfo++;
  if (indexInfo === randomInfo.length) {
    indexInfo = 0;
  }
};

const objDataLeft = [
  {
    title: "Sobre mi",
    text: "Soy Técnico IT y Desarollador Web. Con experiencia en el Mantenimiento de Servidores, Help Desk y Desarrollo e Implantación de Aplicaciones Web. Mis puntos fuertes son la resolución de problemas,  comunicación con el usuario e implantación de nuevas tecnologías. ",
  },
  {
    title: "Mis Estudios",
    text: myStudies.map((study) => dataUs(study)),
  },
  {
    title: html`<button @click=${randomInfo} class="button-random">
      Descubre más sobre mí
    </button>`,
    text: html`<div id="randomNote">
      <h3 style="margin-top:1rem; text-align:center">
        Pasé un año en el extranjero 🇷🇴 donde me comunicaba en inglés 🇬🇧 con
        gente de todo el mundo.
      </h3>
    </div>`,
  },
];

const objDataRight = [
  {
    title: "Carrera Profesional",
    text: myJobs.map((study) => dataUs(study)),
  },
  {
    title: "Mis Conocimientos",
    text: mySkills.map((skill) => dataSkills(skill)),
  },
];

const card = (data) => html`
  <div class="card">
    <!-- make a div for the content and the title -->
    <div class="card__content">
      <h3 class="card__title">${data.title}</h3>
      <p class="card__text">${data.text}</p>
    </div>
  </div>
`;

const home = () => html`
  <div class="home">
    <div class="home__left">
      <div class="home__user">
        <img class="home__img" src="assets/me.jpeg" alt="me" />
        <div class="home__user-info">
          <h1 class="home__user-name">Miguel López</h1>
          <br />
          <!-- make a container for my job -->
          <h2 class="home__user-job">Web Developer</h2>
          <h2 class="home__user-job">IT Technician</h2>
        </div>
      </div>
      <div class="home__hidden">Hola 👋🏻</div>
      <ul class="home__contact">
        <h4 style="color:#ff914d">Contact Me:</h4>

        <li class="home__contact-item">
          <i class="fas fa-envelope"></i>
          <span>
            <a href="mailto:mick.altura@gmail.com">mick.altura@gmail.com </a>
          </span>
        </li>

        <!-- add the github -->
        <li class="home__contact-item">
          <i class="fab fa-github"></i>
          <span>
            <a href="https://github.com/emelcd">@emelcd</a>
          </span>
        </li>
        <!-- make a link for linkedin -->
        <li class="home__contact-item">
          <i class="fab fa-linkedin"></i>
          <span>
            <a href="https://www.linkedin.com/in/miguel-l%C3%B3pez-7821131b9/">
              Miguel López
            </a>
          </span>
        </li>
        <li class="home__contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>
            <a
              href="https://www.google.com/maps/place/Valencia/@39.4743283,-0.3552049,16.75z/data=!4m5!3m4!1s0xd604f4cf0efb06f:0xb4a351011f7f1d39!8m2!3d39.4699075!4d-0.3762881"
            >
              46201, Valencia, España
            </a>
          </span>
        </li>
      </ul>
    </div>
    <div class="home__right">
      <div>${objDataLeft.map((data) => card(data))}</div>
      <div>${objDataRight.map((data) => card(data))}</div>
    </div>
  </div>
`;

const langItem = (url) => {
  let size = 0;
  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      let x = Object.keys(data).forEach((key) => {
        size += data[key];
        return data[key];
      });
      console.log(x);
    })
    .catch((error) => console.log(error));
};

const repos = (data) => html`
  <div class="repo">
    <div class="card">
      <div class="card__user">
        <img class="card__user-img" src="${data.owner.avatar_url}" alt="user" />
      </div>
      <div class="card__content">
        <h4 class="card__title">
          ${data.name}
          ${data.private ? html`<i class="fas fa-lock"></i>` : nothing}
        </h4>
        <p class="card__text">${data.description}</p>
      </div>
      <div class="repo__contents">
        ${data.contents.map((d) => {
          return d.type === "dir"
            ? html`
                <a href="${d.html_url}" class="repo__content-item">
                  <i class="fas fa-folder"></i>
                  <span>${d.name}</span>
                </a>
                <br />
              `
            : html`
                <a href="${d.html_url}" class="repo__content-item">
                  <i class="fas fa-file"></i>
                  <span>${d.name}</span>
                </a>
                <br />
              `;
        })}
      </div>

      <!-- card footer -->
      <div class="card__footer">
        <div class="card__footer-item">
          <i class="fas fa-star"></i>
          <span>${data.stargazers_count}</span>
        </div>
        <div class="card__footer-item">
          <i class="fas fa-code-branch"></i>
          <span>${data.forks_count}</span>
        </div>
      </div>
      <div class="card__langs">
        ${Object.keys(data.languages).map((key) => {
          return html`
            <span class="card__lang">
              <span>${key}</span>
            </span>
          `;
        })}
        </div>


    </div>
  </div>
`;

const about = () => {
  let url = "https://api.github.com/search/repositories?q=user:emelcd";
  const content = document.getElementById("content");
  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      render(
        html`
          <h1 class="title__repo">Projects</h1>
          <div class="repo-container">${json.map((repo) => repos(repo))}</div>
        `,
        content
      );
    })
    .catch((error) => console.log(error));
};

const contact = () => html`
  <h1>Contact</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  </p>
`;

const handleTabs = (e) => {
  console.log(e.target.textContent.trim());
  let tab = e.target.textContent.trim();
  render(
    until(
      html` ${tab === "CV"
        ? home()
        : tab === "PROJECTS"
        ? about()
        : contact()}`,
      html`ECO`
    ),
    document.getElementById("content")
  );
};

const header = () => html`
  <header class="header">
    <!-- make a logo -->
    <div class="header__logo">
      <img class="header__img" src="assets/tourist.png" alt="logo" />
    </div>
    <nav class="header__nav">
      <ul @click=${handleTabs} class="header__nav-list">
        <li class="header__nav-item">
          <a href="#" class="header__nav-link">CV</a>
        </li>
        <li class="header__nav-item">
          <a href="#" class="header__nav-link">PROJECTS</a>
        </li>
        <li class="header__nav-item">
          <a href="#" class="header__nav-link">Contact</a>
        </li>
      </ul>
    </nav>
    <div class="header__menu">
      <i
        @mouseover=${(e) => {
          render(
            html`
              <ul class="dropdown__list">
                <li class="dropdown__item">My profile</li>
                <li class="dropdown__item">My account</li>
                <li class="dropdown__item">Logout</li>
              </ul>
            `,
            document.getElementById("dropdown")
          );
        }}
        @click=${(e) => {
          render(
            html`
              <ul class="dropdown__list">
                <li class="dropdown__item">My profile</li>
                <li class="dropdown__item">My account</li>
                <li class="dropdown__item">Logout</li>
              </ul>
            `,
            document.getElementById("dropdown")
          );
        }}
        class="fas fa-bars header__menu-icon "
      ></i>
    </div>
    <div id="dropdown" class="dropdown"></div>
  </header>
`;

const app = () => html`
  ${header()}
  <main id="content">${about()}</main>
`;

render(app(), document.body);

document.body.addEventListener("click", () => {
  render(nothing, document.getElementById("dropdown"));
});

about();
