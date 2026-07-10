import {
  Briefcase,
  ShoppingCart,
  Plane,
  Landmark,
  Wallet,
  Tags,
  UserCheck,
} from "lucide-react";

export const content = {
  es: {
    hero: {
      title: "CORPO TT SERVICES",
      subtitle1: "apoyo empresarial a distancia",
      subtitle2: "calidad y excelencia",
      description: "Ofrecemos una variedad de servicios de apoyo empresarial a distancia, destacándonos por nuestra filosofía de calidad y excelencia para la satisfacción del cliente.",
      button: "Nuestros Servicios",
    },
    quienesSomos: {
      title: "¿Quiénes Somos?",
      p1: "Corpott Services tiene como filosofía fundamental la calidad y excelencia en la ejecución de sus trabajos, buscando con esto la plena satisfacción del cliente. Por ello, brindamos soluciones adaptadas para resolver problemas de logística, asistencia remota, gestión de tesorería y contratación de personal temporal.",
    },
    about: {
      title: "Nuestra Visión y Misión",
      vision: {
        title: "Visión",
        description1: "Ser la empresa líder en servicios de apoyo empresarial a distancia, proporcionando personal calificado para las necesidades específicas de los clientes.",
      },
      mission: {
        title: "Misión",
        description1: "Proporcionar soluciones empresariales a distancia eficientes y sostenibles, mejorar la experiencia del cliente a través de un servicio de calidad y garantizar servicios de calidad con tiempos de respuesta expeditos.",
      },
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales para el apoyo empresarial a distancia.",
      list: [
        {
          icon: Briefcase,
          title: "Outsourcing a Distancia",
          description: "Servicio de operadores tecnológicos que simplifica la administración y contratación de personal, integrando un equipo especializado a su operación para ofrecer soporte y soluciones tecnológicas sin complicaciones administrativas.",
          image: "/images/outsourcing.webp",
          alt: "Servicio de operadores tecnológicos para simplificar la administración de personal."
        },
        {
          icon: ShoppingCart,
          title: "Gestión de Compras Remotas",
          description: "Nos encargamos de la selección de proveedores, negociación de precios y gestión de pedidos, asegurando la distribución eficiente y utilizando herramientas digitales para optimizar tiempos y costos.",
          image: "/images/sales-managment-corpott.webp",
          alt: "Gestión de compras remotas, desde la selección de proveedores hasta la distribución."
        },
        {
          icon: Plane,
          title: "Gestión de Reservas de Vuelos y Estadías",
          description: "Servicios de gestión de reservas nacionales e internacionales, coordinando detalles y usando plataformas avanzadas para encontrar las mejores opciones y precios.",
          image: "/images/flights-managment-corpott.webp",
          alt: "Gestión de reservas de vuelos y estadías, tanto nacionales como internacionales."
        },
        {
          icon: Landmark,
          title: "Soluciones Financieras de Tesorería",
          description: "Soluciones para optimizar la gestión del flujo de efectivo, encargándonos de la planificación, control y seguimiento de recursos financieros para maximizar la eficiencia y minimizar riesgos.",
          image: "/images/tesorería-corpott.webp",
          alt: "Soluciones financieras de tesorería para optimizar la gestión del flujo de efectivo."
        },
        {
          icon: Wallet,
          title: "Estructura de Pagos y Cobros en Multimoneda",
          description: "Servicio especializado para facilitar transacciones internacionales, optimizando el proceso, asegurando cumplimiento normativo y minimizando riesgos cambiarios.",
          image: "/images/currency-money-multi-wallet-corpott.webp",
          alt: "Servicio especializado para facilitar transacciones internacionales en múltiples monedas."
        },
        {
          icon: Tags,
          title: "Etiquetado de Datos para IA",
          description: "Nuestros servicios construyen una base sólida para modelos de IA de alto rendimiento, asignando etiquetas precisas a grandes volúmenes de datos para que los modelos reconozcan patrones y tomen decisiones más inteligentes.",
          image: "/images/ia-corpott.webp",
          alt: "Servicios de etiquetado de datos para modelos de inteligencia artificial de alto rendimiento."
        },
        {
          icon: UserCheck,
          title: "Personal Capacitado de Venezuela",
          description: "Ofrecemos personal capacitado sin las complications administrativas de la contratación, adaptándonos a sus necesidades para que pueda concentrarse en sus objectives principales.",
          image: "/images/team-corpott.webp",
          alt: "Personal capacitado de Venezuela para adaptarse a las necesidades de su empresa."
        },
      ],
    },
    clients: {
      title: "Nuestros Clientes",
      logos: [
        { src: "/images/clients/client-felix.png", alt: "Felix" },
        { src: "/images/clients/client-cb-pay.png", alt: "CB Pay", href: "https://www.cbpayapp.com/" },
        { src: "/images/clients/client-ock.png", alt: "Servicios Logisticos OCK", href: "https://grupoock.com/index.html" },
        { src: "/images/clients/client-abtrading.png", alt: "AB Trading America" },
      ]
    },
    contact: {
      title: "Contáctenos",
      subtitle: "Para más información, no dude en contactarnos.",
      links: [
        {
          title: "Ubicación",
          description: "Servicios a distancia",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
          href: "#",
        },
        {
          title: "Correo Electrónico",
          description: "corpottservices@gmail.com",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
          href: "mailto:corpottservices@gmail.com",
        },
      ],
    }
  },
  en: {
    hero: {
      title: "CORPO TT SERVICES",
      subtitle1: "remote business support",
      subtitle2: "quality and excellence",
      description: "We offer a variety of remote business support services, standing out for our philosophy of quality and excellence for client satisfaction.",
      button: "Our Services",
    },
    quienesSomos: {
      title: "Who We Are",
      p1: "Corpott Services' fundamental philosophy is quality and excellence in the execution of its work, seeking full client satisfaction. Therefore, we provide adapted solutions to solve problems in logistics, remote assistance, treasury management, and temporary staff hiring.",
    },
    about: {
      title: "Our Vision and Mission",
      vision: {
        title: "Vision",
        description1: "To be the leading company in remote business support services, providing qualified personnel for the specific needs of our clients.",
      },
      mission: {
        title: "Mission",
        description1: "To provide efficient and sustainable remote business solutions, enhance the client experience through quality service, and guarantee quality services with prompt response times.",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for remote business support.",
      list: [
        {
          icon: Briefcase,
          title: "Remote Outsourcing",
          description: "A technology operator service that simplifies personnel administration and hiring, integrating a specialized team into your operation to offer support and technological solutions without administrative complications.",
          image: "/images/outsourcing.webp",
          alt: "Technology operator service to simplify personnel administration."
        },
        {
          icon: ShoppingCart,
          title: "Remote Purchasing Management",
          description: "We handle supplier selection, price negotiation, and order management, ensuring efficient distribution and using digital tools to optimize time and costs.",
          image: "/images/sales-managment-corpott.webp",
          alt: "Remote purchasing management, from supplier selection to distribution."
        },
        {
          icon: Plane,
          title: "Flight and Accommodation Booking Management",
          description: "National and international booking management services, coordinating details and using advanced platforms to find the best options and prices.",
          image: "/images/flights-managment-corpott.webp",
          alt: "Management of national and international flight and accommodation bookings."
        },
        {
          icon: Landmark,
          title: "Treasury Financial Solutions",
          description: "Solutions to optimize cash flow management, handling the planning, control, and monitoring of financial resources to maximize efficiency and minimize risks.",
          image: "/images/tesorería-corpott.webp",
          alt: "Treasury financial solutions to optimize cash flow management."
        },
        {
          icon: Wallet,
          title: "Multi-currency Payment and Collection Structure",
          description: "A specialized service to facilitate international transactions, optimizing the process, ensuring regulatory compliance, and minimizing currency risks.",
          image: "/images/currency-money-multi-wallet-corpott.webp",
          alt: "Specialized service to facilitate international transactions in multiple currencies."
        },
        {
          icon: Tags,
          title: "Data Labeling for AI",
          description: "Our services build a solid foundation for high-performance AI models by assigning precise labels to large volumes of data, enabling the models to recognize patterns and make smarter decisions.",
          image: "/images/ia-corpott.webp",
          alt: "Data labeling services for high-performance artificial intelligence models."
        },
        {
          icon: UserCheck,
          title: "Trained Personnel from Venezuela",
          description: "We offer trained personnel without the administrative complications of hiring, adapting to your needs so you can focus on your main objectives.",
          image: "/images/team-corpott.webp",
          alt: "Trained personnel from Venezuela to adapt to your company's needs."
        },
      ],
    },
    clients: {
      title: "Our Clients",
      logos: [
        { src: "/images/clients/client-felix.png", alt: "Felix" },
        { src: "/images/clients/client-cb-pay.png", alt: "CB Pay", href: "https://www.cbpayapp.com/" },
        { src: "/images/clients/client-ock.png", alt: "Servicios Logisticos OCK", href: "https://grupoock.com/index.html" },
        { src: "/images/clients/client-abtrading.png", alt: "AB Trading America" },
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "For more information, do not hesitate to contact us.",
      links: [
        {
          title: "Location",
          description: "Remote services",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
          href: "#",
        },
        {
          title: "Email",
          description: "corpottservices@gmail.com",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
          href: "mailto:corpottservices@gmail.com",
        },
      ],
    },
  },
};

export type Language = keyof typeof content;
