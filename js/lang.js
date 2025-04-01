document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            navHistory: "History",
            navExperience: "Experience",
            navLinks: "Links",
            navSkills: "Skills",
            heroTitle: "Frontend Developer",
            heroParagraph: "I am a frontend developer with experience in creating optimized and accessible web interfaces. I specialize in precise layout, reusable component development and web performance optimization. I have worked with technologies such as HTML, CSS, JavaScript and CMS such as Adobe Experience Manager, WordPress and Drupal. I am passionate about transforming designs into interactive and functional experiences, ensuring that every detail meets modern standards. I'm always looking for new opportunities to keep growing and honing my skills.",
            experienceTitle: "Experience",
            skillsTitle: "My Skills",
            skillsTitles: [
                "Performance & Accessibility",
                "Pixel Perfect UI",
                "Componentization in Vue.js"
            ],
            skillsDescriptions: [
                "Optimizing code and resources, I improve load speed and web accessibility for a better user experience.",
                "I transform designs into responsive and detail-oriented interfaces, ensuring consistency across all devices.",
                "I build reusable and efficient components, maintaining clean and scalable code in Vue.js."
            ],
            testimonyTitle: [
                "My First Steps in the Kitchen",
                "The Awakening of a New Curiosity",
                "The Leap into the IT World",
                "The Fusion of Two Passions"
            ],
            testimonyText: [
                "My journey began in the kitchen, a place full of passion and creativity. For years, I worked as a cook, learning the importance of precision, teamwork, and the ability to adapt to constant challenges. The kitchen taught me to be detail-oriented, to strive for perfection in every dish, and to face high-pressure situations with calm.",
                "Throughout my career in the kitchen, I always had a latent curiosity about technology and the digital tools we use every day. I started exploring the world of web development as a hobby, learning HTML, CSS, and JavaScript on my own. I discovered that, much like in cooking, development requires a mix of creativity, logic, and technique.",
                "I decided to take the leap into the tech world and turn my passion for development into a career. My first job in technology was as a Web Builder, where I was able to apply my skills in layout and design to create digital experiences for companies like Nestlé and Coca-Cola. The transition was challenging, but also incredibly rewarding. Learning new technologies and tackling complex projects allowed me to grow rapidly.",
                "Today, as a frontend developer, I continue to apply the lessons I learned in the kitchen: attention to detail, patience, and the constant pursuit of improvement. Instead of creating delicious dishes, I now build efficient and accessible web interfaces. My career has evolved, but the passion for what I do remains the same, and I continue to learn and grow in this fascinating world of web development."
            ],
            experienceTitle: "Experience",
            bannerTitle: "Banner Developer",
            frontendTitle: "Frontend Developer",
            webBuilderTitle: "Web Builder",
            animations: "Animations",
            work: "My works",
            linksTitle: "My links",
            githubTitle: "GitHub",
            githubText: "Here you can see all my projects",
            linkedinTitle: "LinkedIn",
            linkedinText: "Here is my profile",
            cvTitle: "Resume",
            cvText: "Download my resume here",
        },
        es: {
            navHistory: "Historia",
            navExperience: "Experiencia",
            navLinks: "Links",
            //navSkills: "Habilidades",
            heroTitle: "Desarrollador Frontend",
            heroParagraph: "Soy desarrollador frontend con experiencia en la creación de interfaces web optimizadas y accesibles. Me especializo en maquetado preciso, desarrollo de componentes reutilizables y optimización del rendimiento en la web. He trabajado con tecnologías como HTML, CSS, JavaScript y CMS como Adobe Experience Manager, WordPress y Drupal. Me apasiona transformar diseños en experiencias interactivas y funcionales, asegurando que cada detalle cumpla con los estándares modernos. Siempre estoy buscando nuevas oportunidades para seguir creciendo y perfeccionando mis habilidades.",
            experienceTitle: "Experiencia",
            //skillsTitle: "Mis habilidades",
            skillsTitles: [
                "Performance & Accesibilidad",
                "Pixel Perfect UI",
                "Componentización en Vue.js"
            ],
            skillsDescriptions: [
                "Optimizando código y recursos, mejoro la velocidad de carga y la accesibilidad web para una mejor experiencia de usuario.",
                "Transformo diseños en interfaces responsivas y fieles al detalle, garantizando coherencia en todos los dispositivos.",
                "onstruyo componentes reutilizables y eficientes, manteniendo código limpio y escalable en Vue.js."
            ],
            testimonyTitle: ["Mis primeros pasos en la cocina",
                "El despertar de una nueva curiosidad",
                "El salto al mundo IT",
                "La fusión de dos pasiones"
            ],
            testimonyText: ["Mi viaje comenzó en la cocina, un entorno lleno de pasión y creatividad. Durante años trabajé como cocinero, aprendiendo la importancia de la precisión, el trabajo en equipo y la capacidad de adaptarme a los desafíos constantes. La cocina me enseñó a ser detallista, a buscar la perfección en cada plato y a enfrentarme a situaciones de presión con calma.",
                "A lo largo de mi carrera en la cocina, siempre tuve una curiosidad latente por la tecnología y las herramientas digitales que utilizamos todos los días. Empecé a explorar el mundo del desarrollo web como un pasatiempo, aprendiendo por mi cuenta HTML, CSS y JavaScript. Descubrí que, al igual que en la cocina, el desarrollo requiere una mezcla de creatividad, lógica y técnica.",
                "Decidí dar el salto al mundo de la tecnología y hacer de mi pasión por el desarrollo una carrera. Mi primer trabajo en tecnología fue como Web Builder, donde pude aplicar mis habilidades de maquetado y diseño para crear experiencias digitales para empresas como Nestlé y Coca-Cola. La transición fue desafiante, pero también increíblemente gratificante. Aprender nuevas tecnologías y enfrentarme a proyectos complejos me permitió crecer rápidamente.",
                "Hoy, como desarrollador frontend, sigo aplicando las lecciones que aprendí en la cocina: la atención al detalle, la paciencia y la búsqueda constante de mejora. En lugar de crear platos deliciosos, ahora construyo interfaces web eficientes y accesibles. Mi carrera ha evolucionado, pero la pasión por lo que hago sigue siendo la misma, y continúo aprendiendo y creciendo en este fascinante mundo del desarrollo web."
            ],
            experienceTitle: "Experiencia",
            bannerTitle: "Banner Developer",
            frontendTitle: "Desarrollador Frontend",
            webBuilderTitle: "Web Builder",
            animations: "Animacion",
            work: "Mis trabajos",
            linksTitle: "Mis links",
            githubTitle: "GitHub",
            githubText: "Aca podes ver todos mis proyectos",
            linkedinTitle: "LinkedIn",
            linkedinText: "Aca mi perfil",
            cvTitle: "CV",
            cvText: "Aca descarga mi curriculum",
        }
    };

    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    document.getElementById("language-switch").addEventListener("change", (event) => {
        const language = event.target.value;
        localStorage.setItem("selectedLanguage", language);
        updateLanguage(language);
    });

    const elementsToTranslate = {
        navHistory: document.querySelector(".nav__items a[href='#historia']"),
        navExperience: document.querySelector(".nav__items a[href='#experiencia']"),
        navLinks: document.querySelector(".nav__items a[href='#links']"),
        navSkills: document.querySelector(".nav__items a[href='#skills']"),
        heroTitle: document.querySelector(".hero__title"),
        heroParagraph: document.querySelector(".hero__paragraph"),
        experienceTitle: document.querySelector("#experiencia .subtitle"),
        skillsTitle: document.querySelector("#skills .subtitle"),
        bannerTitle: document.querySelector(".experience__element:nth-child(1) .experience__experience"),
        frontendTitle: document.querySelector(".experience__element:nth-child(2) .experience__experience"),
        webBuilderTitle: document.querySelector(".experience__element:nth-child(3) .experience__experience"),
        workLinks: document.querySelectorAll(".experience__cta"),
    };

    function updateLanguage(lang) {
        const titles = translations[lang].testimonyTitle;
        const texts = translations[lang].testimonyText;
        const skillTitles = translations[lang].skillsTitles;
        const skillsDescriptions = translations[lang].skillsDescriptions;

        document.querySelectorAll(".testimony__body").forEach((section, index) => {
            const titleElement = section.querySelector(".subtitle");
            const textElement = section.querySelector(".testimony__review");

            if (titleElement && titles[index]) {
                titleElement.textContent = titles[index];
            }
            if (textElement && texts[index]) {
                textElement.textContent = texts[index];
            }
        });

        // Traducir los títulos y contenidos de las preguntas de skills
        document.querySelectorAll(".questions__padding").forEach((questionSection, index) => {
            const titleElement = questionSection.querySelector(".questions__title");
            const contentElement = questionSection.querySelector(".questions__show");

            if (titleElement && skillTitles[index]) {
                titleElement.textContent = skillTitles[index];
            }
            if (contentElement && skillsDescriptions[index]) {
                contentElement.textContent = skillsDescriptions[index];
            }

            // Asegurar la clase para mantener la visibilidad después de la traducción
            if (questionSection.classList.contains('questions__padding--add')) {
                contentElement.classList.add('questions__show--open');
                contentElement.style.height = `${contentElement.scrollHeight}px`;
            } else {
                contentElement.classList.remove('questions__show--open');
                contentElement.style.height = '0px';
            }
        });

        // Traducir otros elementos normalmente
        Object.keys(elementsToTranslate).forEach((key) => {
            const element = elementsToTranslate[key];

            if (!element) return;

            switch (key) {
                case "skillsTitle":
                    const skillsSubtitle = document.querySelector("#skills .subtitle");
                    if (skillsSubtitle) {
                        skillsSubtitle.textContent = translations[lang][key];
                    }
                    break;

                case "linksTitle":
                    const linksSubtitle = document.querySelector("#links .subtitle");
                    if (linksSubtitle) {
                        linksSubtitle.textContent = translations[lang][key];
                    }
                    break;

                case "workLinks":
                    element.forEach(link => {
                        if (link) {
                            link.textContent = translations[lang].work;
                        }
                    });
                    break;

                case "animations":
                    document.querySelectorAll(".experience__features").forEach(item => {
                        if (item) {
                            item.textContent = translations[lang].animations;
                        }
                    });
                    break;

                default:
                    if (element) {
                        element.textContent = translations[lang][key];
                    }
                    break;
            }
        });

        // Traducir los elementos dentro de "Mis links"
        const aboutItems = document.querySelectorAll("#links .about__icons");
        const linkTranslations = [
            { titleKey: 'githubTitle', textKey: 'githubText' },
            { titleKey: 'linkedinTitle', textKey: 'linkedinText' },
            { titleKey: 'cvTitle', textKey: 'cvText' }
        ];

        aboutItems.forEach((item, index) => {
            if (linkTranslations[index]) {
                const titleElement = item.querySelector(".about__title");
                const paragraphElement = item.querySelector(".about__paragrah");
                if (titleElement) titleElement.textContent = translations[lang][linkTranslations[index].titleKey];
                if (paragraphElement) paragraphElement.textContent = translations[lang][linkTranslations[index].textKey];
            }
        });
    }

    // Cargar el idioma guardado
    const savedLanguage = localStorage.getItem("selectedLanguage") || "es";
    document.getElementById("language-switch").value = savedLanguage;
    updateLanguage(savedLanguage);
});