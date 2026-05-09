const GF_LANGUAGES = ["pt","en","es"];
const DEFAULT_LANG = "pt";
const translations = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.products": "Produtos",
    "nav.engineering": "Engenharia",
    "nav.contact": "Contato",
    "nav.register": "Cadastro",
    "hero.badge": "ENGENHARIA INDUSTRIAL AVANÇADA",
    "hero.title": "Green Farms desenvolve soluções industriais sob medida para biotecnologia, farmacêutica e agro.",
    "hero.subtitle": "Pesquisa aplicada, engenharia de precisão e automação premium para plantas piloto, bioprocessos e equipamentos especiais em inox.",
    "hero.ctaContact": "Contato Premium",
    "hero.ctaWhatsApp": "WhatsApp",
    "hero.focus": "Precissão técnica, bioprocessos e inovação industrial",
    "transform.label": "Transformando necessidades em soluções sob medida",
    "transform.title": "Projetos industriais personalizados com alto padrão técnico",
    "transform.text": "A GREEN FARMS entrega engenharia aplicada para processos CIP, peças especiais em inox, plantas piloto, bioprocessos e sistemas integrados com controle robusto.",
    "transform.item1.title": "Peças especiais em inox",
    "transform.item1.text": "Componentes de alta resistência com fidelidade dimensional e acabamento premium.",
    "transform.item2.title": "Equipamentos personalizados",
    "transform.item2.text": "Soluções sob medida para processos industriais complexos, com integração total.",
    "transform.item3.title": "Bioprocessos inteligentes",
    "transform.item3.text": "Desenvolvimento de plantas piloto e automação adaptada para operações sofisticadas.",
    "transform.item4.title": "Sistemas integrados",
    "transform.item4.text": "Integração de equipamentos, controles e desenvolvimento estratégico para robustez.",
    "statement.one": "Inovação contínua",
    "statement.oneText": "Projetos que combinam engenharia e pesquisa para avanços industriais disruptivos.",
    "statement.two": "Engenharia de precisão",
    "statement.twoText": "Controle dimensional rigoroso e componentes premium para processos sensíveis.",
    "statement.three": "Soluções sob medida",
    "statement.threeText": "Cada projeto nasce da necessidade técnica com alta confiabilidade.",
    "footer.trust": "GREEN FARMS | Engenharia e biotecnologia industrial",
    "footer.description": "Presença premium no agro, farmacêutico, alimentício e biotecnológico com soluções industriais sob medida.",
    "footer.contact": "Contato",
    "footer.about": "Sobre",
    "footer.products": "Produtos",
    "about.heroTitle": "A engenharia que transforma processos industriais",
    "about.heroText": "Nós somos uma equipe líder em P&D industrial, desenvolvendo soluções para agro, farmacêutico, alimentício e biotech.",
    "about.feature1.title": "Pesquisa aplicada",
    "about.feature1.text": "Aplicamos ciência e dados para otimizar processos e reduzir variabilidade industrial.",
    "about.feature2.title": "Engenharia de precisão",
    "about.feature2.text": "Peças e sistemas desenvolvidos com critérios técnicos de excelência.",
    "about.feature3.title": "Plantas piloto de alto padrão",
    "about.feature3.text": "Projetos de pequena escala com replicabilidade industrial e desempenho comprovado.",
    "about.concept.title": "Viemos para inovar e permanecer",
    "about.concept.subtitle": "Transformação tecnológica com visão de longo prazo",
    "about.concept.text": "A GREEN FARMS une engenharia, automação e sustentabilidade para criar soluções industriais duradouras.",
    "about.mission.title": "Missão",
    "about.mission.text": "Desenvolver peças em inox, equipamentos e componentes personalizados para as indústrias alimentícia, farmacêutica e biotecnológica, utilizando engenharia de precisão, tecnologia avançada e materiais premium para garantir durabilidade, segurança e excelência operacional.",
    "about.vision.title": "Visão",
    "about.vision.text": "Ser referência em soluções industriais sob medida e equipamentos em aço inox, reconhecida pela inovação, qualidade, eficiência produtiva e tecnologias avançadas.",
    "about.values.title": "Valores",
    "about.value1": "Inovação",
    "about.value2": "Tecnologia",
    "about.value3": "Qualidade",
    "about.value4": "Precisão",
    "about.value5": "Materiais premium",
    "about.value6": "Soluções personalizadas",
    "about.value7": "Proximidade com o cliente",
    "about.value8": "Responsabilidade ambiental",
    "about.value9": "Ética",
    "about.value10": "Transparência",
    "about.value11": "Confiança de longo prazo",
    "products.heroTitle": "Produtos industriais projetados para performance premium",
    "products.heroText": "Conheça a primeira solução Green Farms para processos CIP, com foco em eficiência, limpeza e redução de consumo.",
    "product.title": "CABEÇOTES ROTATIVOS (SPRAY BALLS) GREEN FARMS",
    "product.subtitle": "Rotação 3D 360° para higienização industrial de alto padrão",
    "product.description": "Cabeçotes rotativos para processos CIP que eliminam pontos cegos, reduzem água, químicos e tempo de limpeza. Desenvolvidos em aço inox de alta resistência e com controle preciso.",
    "product.feature1": "Aço inox de alta resistência",
    "product.feature2": "Rotação 3D 360°",
    "product.feature3": "Pressão ajustável e controle preciso",
    "product.feature4": "Modelos customizáveis",
    "product.feature5": "Limpeza eficiente na primeira aplicação",
    "product.feature6": "Redução de recursos e ciclo operacional",
    "products.applicationsTitle": "Aplicações",
    "product.app1": "Alimentícia",
    "product.app2": "Farmacêutica",
    "product.app3": "Biotecnológica",
    "product.app4": "Química",
    "engineering.heroTitle": "Engenharia de processos para projetos industriais complexos",
    "engineering.heroText": "Desenvolvemos soluções tecnológicas para automação, melhoria de processos e plantas piloto com segurança e robustez.",
    "engineering.section1.title": "Soluções de automação industrial",
    "engineering.section1.text": "Projetos com controle integrado, monitoramento em tempo real e desempenho confiável para ambientes críticos.",
    "engineering.section2.title": "Desenvolvimento sob medida",
    "engineering.section2.text": "Equipamentos e componentes customizados para atender o desafio técnico de cada cliente.",
    "engineering.section3.title": "Excelência em materiais premium",
    "engineering.section3.text": "Aço inox, superfícies técnicas e acabamentos que respeitam normas sanitárias e industriais.",
    "contact.heroTitle": "Converse com a equipe Green Farms",
    "contact.heroText": "Nós estamos prontos para desenvolver sua próxima solução industrial sob medida.",
    "contact.addressLabel": "Endereço",
    "contact.addressLine1": "Avenida 5, 154 – Centro",
    "contact.addressLine2": "Orlândia – São Paulo | CEP: 14620-027",
    "contact.whatsappLabel": "WhatsApp",
    "contact.emailLabel": "E-mail",
    "contact.formTitle": "Solicite uma reunião técnica",
    "contact.formIntro": "Compartilhe os detalhes do seu desafio e nossa equipe de engenharia irá retornar com proposta.",
    "contact.name": "Nome completo",
    "contact.company": "Empresa / unidade",
    "contact.email": "E-mail profissional",
    "contact.phone": "Telefone / WhatsApp",
    "contact.message": "Descreva seu projeto ou desafio industrial",
    "contact.submit": "Enviar mensagem",
    "contact.mapTitle": "Localização operações Green Farms",
    "register.heroTitle": "Cadastre sua empresa para projetos estratégicos",
    "register.heroText": "Acesse nossa estrutura de P&D industrial, desenvolvimento de bioprocessos e engenharia de precisão.",
    "register.formTitle": "Cadastro de cliente",
    "register.formIntro": "Forneça os dados iniciais para agendarmos uma avaliação técnica dedicada.",
    "register.company": "Nome da empresa",
    "register.industry": "Segmento principal",
    "register.challenge": "Desafio atual",
    "register.requirements": "Requisitos do projeto",
    "register.message": "Observações adicionais",
    "register.submit": "Enviar cadastro"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.engineering": "Engineering",
    "nav.contact": "Contact",
    "nav.register": "Register",
    "hero.badge": "ADVANCED INDUSTRIAL ENGINEERING",
    "hero.title": "Green Farms delivers tailored industrial solutions for biotech, pharmaceutical and agro sectors.",
    "hero.subtitle": "Applied research, precision engineering and premium automation for pilot plants, bioprocesses and custom stainless steel equipment.",
    "hero.ctaContact": "Premium Contact",
    "hero.ctaWhatsApp": "WhatsApp",
    "hero.focus": "Technical precision, bioprocess and industrial innovation",
    "transform.label": "Turning needs into tailored solutions",
    "transform.title": "Custom industrial projects with premium technical standards",
    "transform.text": "GREEN FARMS delivers applied engineering for CIP processes, custom stainless steel parts, pilot plants, bioprocesses and integrated systems with robust control.",
    "transform.item1.title": "Custom stainless components",
    "transform.item1.text": "High-strength parts with dimensional fidelity and premium finish.",
    "transform.item2.title": "Tailored equipment",
    "transform.item2.text": "Bespoke solutions for complex industrial processes with full integration.",
    "transform.item3.title": "Intelligent bioprocesses",
    "transform.item3.text": "Pilot plant development and automation adapted for advanced operations.",
    "transform.item4.title": "Integrated systems",
    "transform.item4.text": "Equipment, controls and strategic design combined for industrial robustness.",
    "statement.one": "Continuous innovation",
    "statement.oneText": "Projects that combine engineering and research for disruptive industrial advances.",
    "statement.two": "Precision engineering",
    "statement.twoText": "Rigorous dimensional control and premium components for sensitive processes.",
    "statement.three": "Tailored solutions",
    "statement.threeText": "Every project starts from technical demands with high reliability.",
    "footer.trust": "GREEN FARMS | Industrial engineering and biotech",
    "footer.description": "Premium presence in agro, pharmaceutical, food and biotech with tailored industrial solutions.",
    "footer.contact": "Contact",
    "footer.about": "About",
    "footer.products": "Products",
    "about.heroTitle": "Engineering that transforms industrial processes",
    "about.heroText": "We are a leading industrial R&D team, creating solutions for agro, pharmaceutical, food and biotech sectors.",
    "about.feature1.title": "Applied research",
    "about.feature1.text": "We use science and data to optimize processes and reduce industrial variability.",
    "about.feature2.title": "Precision engineering",
    "about.feature2.text": "Parts and systems designed with technical excellence criteria.",
    "about.feature3.title": "High standard pilot plants",
    "about.feature3.text": "Small-scale projects with industrial replicability and proven performance.",
    "about.concept.title": "We are here to innovate and last",
    "about.concept.subtitle": "Technological transformation with long-term vision",
    "about.concept.text": "GREEN FARMS combines engineering, automation and sustainability to build enduring industrial solutions.",
    "about.mission.title": "Mission",
    "about.mission.text": "Develop customized stainless steel parts, equipment and components for food, pharmaceutical and biotech industries using precision engineering, advanced technology and premium materials to ensure durability, safety and operational excellence.",
    "about.vision.title": "Vision",
    "about.vision.text": "Be recognized as a reference in tailored industrial solutions and stainless steel equipment for innovation, quality, productive efficiency and advanced technologies.",
    "about.values.title": "Values",
    "about.value1": "Innovation",
    "about.value2": "Technology",
    "about.value3": "Quality",
    "about.value4": "Precision",
    "about.value5": "Premium materials",
    "about.value6": "Tailored solutions",
    "about.value7": "Customer proximity",
    "about.value8": "Environmental responsibility",
    "about.value9": "Ethics",
    "about.value10": "Transparency",
    "about.value11": "Long-term trust",
    "products.heroTitle": "Industrial products engineered for premium performance",
    "products.heroText": "Discover Green Farms’ first solution for CIP processes, focused on efficiency, cleaning and resource reduction.",
    "product.title": "GREEN FARMS ROTARY SPRAY BALLS",
    "product.subtitle": "360° 3D rotation for high-standard industrial sanitization",
    "product.description": "Rotary spray balls for CIP processes that eliminate blind spots, reduce water, chemicals and cleaning time. Developed in high-strength stainless steel with precise control.",
    "product.feature1": "High-strength stainless steel",
    "product.feature2": "360° 3D rotation",
    "product.feature3": "Adjustable pressure and precise control",
    "product.feature4": "Customizable models",
    "product.feature5": "First-pass cleaning efficiency",
    "product.feature6": "Resource and cycle reduction",
    "products.applicationsTitle": "Applications",
    "product.app1": "Food",
    "product.app2": "Pharmaceutical",
    "product.app3": "Biotech",
    "product.app4": "Chemical",
    "engineering.heroTitle": "Process engineering for complex industrial projects",
    "engineering.heroText": "We develop technological solutions for automation, process improvement and pilot plants with safety and robustness.",
    "engineering.section1.title": "Industrial automation solutions",
    "engineering.section1.text": "Designs with integrated control, real-time monitoring and reliable performance for critical environments.",
    "engineering.section2.title": "Custom development",
    "engineering.section2.text": "Equipment and components tailored to meet each client’s technical challenge.",
    "engineering.section3.title": "Premium materials excellence",
    "engineering.section3.text": "Stainless steel, engineered surfaces and finishes that meet sanitary and industrial standards.",
    "contact.heroTitle": "Speak with the Green Farms team",
    "contact.heroText": "We are ready to develop your next tailored industrial solution.",
    "contact.addressLabel": "Address",
    "contact.addressLine1": "Avenida 5, 154 – Centro",
    "contact.addressLine2": "Orlândia – São Paulo | ZIP: 14620-027",
    "contact.whatsappLabel": "WhatsApp",
    "contact.emailLabel": "Email",
    "contact.formTitle": "Request a technical meeting",
    "contact.formIntro": "Share your challenge and our engineering team will return with a proposal.",
    "contact.name": "Full name",
    "contact.company": "Company / unit",
    "contact.email": "Professional email",
    "contact.phone": "Phone / WhatsApp",
    "contact.message": "Describe your industrial project or challenge",
    "contact.submit": "Send message",
    "contact.mapTitle": "Green Farms operations location",
    "register.heroTitle": "Register your company for strategic projects",
    "register.heroText": "Access our industrial R&D, bioprocess development and precision engineering structure.",
    "register.formTitle": "Client registration",
    "register.formIntro": "Provide initial details so we can schedule a dedicated technical assessment.",
    "register.company": "Company name",
    "register.industry": "Primary industry",
    "register.challenge": "Current challenge",
    "register.requirements": "Project requirements",
    "register.message": "Additional notes",
    "register.submit": "Submit registration"
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre",
    "nav.products": "Productos",
    "nav.engineering": "Ingeniería",
    "nav.contact": "Contacto",
    "nav.register": "Registro",
    "hero.badge": "INGENIERÍA INDUSTRIAL AVANZADA",
    "hero.title": "Green Farms ofrece soluciones industriales a medida para biotecnología, farmacéutico y agro.",
    "hero.subtitle": "Investigación aplicada, ingeniería de precisión y automatización premium para plantas piloto, bioprocesos y equipos especiales en inox.",
    "hero.ctaContact": "Contacto Premium",
    "hero.ctaWhatsApp": "WhatsApp",
    "hero.focus": "Precisión técnica, bioprocesos e innovación industrial",
    "transform.label": "Transformando necesidades en soluciones a medida",
    "transform.title": "Proyectos industriales personalizados con alto estándar técnico",
    "transform.text": "GREEN FARMS brinda ingeniería aplicada para procesos CIP, piezas especiales en inox, plantas piloto, bioprocesos y sistemas integrados con control robusto.",
    "transform.item1.title": "Piezas especiales en inox",
    "transform.item1.text": "Componentes de alta resistencia con fidelidad dimensional y acabado premium.",
    "transform.item2.title": "Equipos personalizados",
    "transform.item2.text": "Soluciones a medida para procesos industriales complejos, con integración total.",
    "transform.item3.title": "Bioprocesos inteligentes",
    "transform.item3.text": "Desarrollo de plantas piloto y automatización adaptada para operaciones avanzadas.",
    "transform.item4.title": "Sistemas integrados",
    "transform.item4.text": "Equipos, controles y diseño estratégico combinados para robustez industrial.",
    "statement.one": "Innovación continua",
    "statement.oneText": "Proyectos que combinan ingeniería e investigación para avances industriales disruptivos.",
    "statement.two": "Ingeniería de precisión",
    "statement.twoText": "Control dimensional riguroso y componentes premium para procesos sensibles.",
    "statement.three": "Soluciones a medida",
    "statement.threeText": "Cada proyecto comienza desde la demanda técnica con alta confiabilidad.",
    "footer.trust": "GREEN FARMS | Ingeniería industrial y biotecnología",
    "footer.description": "Presencia premium en agro, farmacéutico, alimenticio y biotecnológico con soluciones industriales a medida.",
    "footer.contact": "Contacto",
    "footer.about": "Sobre",
    "footer.products": "Productos",
    "about.heroTitle": "La ingeniería que transforma procesos industriales",
    "about.heroText": "Somos un equipo líder en I+D industrial, creando soluciones para agro, farmacéutico, alimenticio y biotech.",
    "about.feature1.title": "Investigación aplicada",
    "about.feature1.text": "Aplicamos ciencia y datos para optimizar procesos y reducir variabilidad industrial.",
    "about.feature2.title": "Ingeniería de precisión",
    "about.feature2.text": "Piezas y sistemas diseñados con criterios técnicos de excelencia.",
    "about.feature3.title": "Plantas piloto de alto estándar",
    "about.feature3.text": "Proyectos a pequeña escala con replicabilidad industrial y rendimiento comprobado.",
    "about.concept.title": "Venimos para innovar y permanecer",
    "about.concept.subtitle": "Transformación tecnológica con visión de largo plazo",
    "about.concept.text": "GREEN FARMS combina ingeniería, automatización y sostenibilidad para construir soluciones industriales duraderas.",
    "about.mission.title": "Misión",
    "about.mission.text": "Desarrollar piezas en inox, equipos y componentes personalizados para las industrias alimenticia, farmacéutica y biotecnológica, utilizando ingeniería de precisión, tecnología avanzada y materiales premium para garantizar durabilidad, seguridad y excelencia operativa.",
    "about.vision.title": "Visión",
    "about.vision.text": "Ser referencia en soluciones industriales a medida y equipos en acero inoxidable, reconocida por innovación, calidad, eficiencia productiva y tecnologías avanzadas.",
    "about.values.title": "Valores",
    "about.value1": "Innovación",
    "about.value2": "Tecnología",
    "about.value3": "Calidad",
    "about.value4": "Precisión",
    "about.value5": "Materiales premium",
    "about.value6": "Soluciones personalizadas",
    "about.value7": "Cercanía al cliente",
    "about.value8": "Responsabilidad ambiental",
    "about.value9": "Ética",
    "about.value10": "Transparencia",
    "about.value11": "Confianza a largo plazo",
    "products.heroTitle": "Productos industriales diseñados para rendimiento premium",
    "products.heroText": "Conoce la primera solución Green Farms para procesos CIP, enfocada en eficiencia, limpieza y reducción de recursos.",
    "product.title": "BOQUILLAS ROTATIVAS GREEN FARMS",
    "product.subtitle": "Rotación 3D 360° para sanitización industrial de alto nivel",
    "product.description": "Boquillas rotativas para procesos CIP que eliminan puntos ciegos, reducen agua, químicos y tiempo de limpieza. Desarrolladas en acero inoxidable de alta resistencia con control preciso.",
    "product.feature1": "Acero inoxidable de alta resistencia",
    "product.feature2": "Rotación 3D 360°",
    "product.feature3": "Presión ajustable y control preciso",
    "product.feature4": "Modelos personalizables",
    "product.feature5": "Limpieza eficiente en la primera aplicación",
    "product.feature6": "Reducción de recursos y ciclo operativo",
    "products.applicationsTitle": "Aplicaciones",
    "product.app1": "Alimenticia",
    "product.app2": "Farmacéutica",
    "product.app3": "Biotecnológica",
    "product.app4": "Química",
    "engineering.heroTitle": "Ingeniería de procesos para proyectos industriales complejos",
    "engineering.heroText": "Desarrollamos soluciones tecnológicas para automatización, mejora de procesos y plantas piloto con seguridad y robustez.",
    "engineering.section1.title": "Soluciones de automatización industrial",
    "engineering.section1.text": "Diseños con control integrado, monitoreo en tiempo real y rendimiento confiable para ambientes críticos.",
    "engineering.section2.title": "Desarrollo a medida",
    "engineering.section2.text": "Equipos y componentes adaptados a cada desafío técnico del cliente.",
    "engineering.section3.title": "Excelencia en materiales premium",
    "engineering.section3.text": "Acero inoxidable, superficies técnicas y acabados que cumplen normas sanitarias e industriales.",
    "contact.heroTitle": "Hable con el equipo Green Farms",
    "contact.heroText": "Estamos listos para desarrollar su próxima solución industrial a medida.",
    "contact.addressLabel": "Dirección",
    "contact.addressLine1": "Avenida 5, 154 – Centro",
    "contact.addressLine2": "Orlândia – São Paulo | CEP: 14620-027",
    "contact.whatsappLabel": "WhatsApp",
    "contact.emailLabel": "Correo",
    "contact.formTitle": "Solicite una reunión técnica",
    "contact.formIntro": "Comparta su desafío y nuestro equipo de ingeniería le enviará una propuesta.",
    "contact.name": "Nombre completo",
    "contact.company": "Empresa / unidad",
    "contact.email": "Correo profesional",
    "contact.phone": "Teléfono / WhatsApp",
    "contact.message": "Describa su proyecto industrial o desafío",
    "contact.submit": "Enviar mensaje",
    "contact.mapTitle": "Ubicación de operaciones Green Farms",
    "register.heroTitle": "Registre su empresa para proyectos estratégicos",
    "register.heroText": "Acceda a nuestra estructura de I+D industrial, desarrollo de bioprocesos y ingeniería de precisión.",
    "register.formTitle": "Registro de cliente",
    "register.formIntro": "Proporcione datos iniciales para agendar una evaluación técnica dedicada.",
    "register.company": "Nombre de la empresa",
    "register.industry": "Sector principal",
    "register.challenge": "Desafío actual",
    "register.requirements": "Requisitos del proyecto",
    "register.message": "Notas adicionales",
    "register.submit": "Enviar registro"
  }
};

function getPreferredLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get("lang");
  const storedLang = localStorage.getItem("gf-lang");
  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  let lang = queryLang || storedLang || browserLang;
  if (!GF_LANGUAGES.includes(lang)) {
    lang = GF_LANGUAGES.includes(browserLang) ? browserLang : DEFAULT_LANG;
  }
  localStorage.setItem("gf-lang", lang);
  return lang;
}

function translatePage() {
  const lang = getPreferredLanguage();
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en";
  const pageTranslation = translations[lang] || translations[DEFAULT_LANG];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = pageTranslation[key];
    if (!translation) {
      return;
    }

    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      element.placeholder = translation;
    } else {
      element.textContent = translation;
    }
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    link.classList.toggle("active", link.getAttribute("href") === currentPath);
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get("lang") !== lang) {
    params.set("lang", lang);
    const newSearch = params.toString();
    history.replaceState(null, "", `${window.location.pathname}?${newSearch}`);
  }
}

function setLanguage(lang) {
  if (!GF_LANGUAGES.includes(lang)) {
    return;
  }
  localStorage.setItem("gf-lang", lang);
  translatePage();
}

function setupLanguageSwitcher() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

function setupMobileNav() {
  const toggle = document.querySelector("[data-toggle='nav']");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const expanded = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", expanded);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setupLanguageSwitcher();
  setupMobileNav();
  translatePage();
});
