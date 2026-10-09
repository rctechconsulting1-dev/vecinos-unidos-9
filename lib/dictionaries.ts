import type { Locale } from "./site";

type Phone = {
  id: string;
  title: string;
  agency: string;
  number: string;
  tel: string;
  lead: string;
  examples: string[];
};

const es = {
  meta: {
    title: "Vecinos del Distrito 9 · Recursos para Sur Central",
    description:
      "Números de la Ciudad, cómo reportar problemas al 311 y consejos para que su reporte no se cierre sin resolver. Para vecinos del Distrito 9 de Los Ángeles.",
  },
  nav: { phones: "Números", report: "Cómo reportar", switchLabel: "English", switchAria: "Ver esta página en inglés" },
  hero: {
    kicker: "Sur Central · Los Ángeles",
    title: "Vecinos del Distrito 9",
    lead: "Recursos, números de la Ciudad y noticias de su cuadra. Aquí le ayudamos a saber a quién llamar y cómo lograr que su reporte se resuelva.",
    ctaPrimary: "Ver los números",
    ctaGroup: "Únase al grupo de Facebook",
    ctaPage: "Síganos en Facebook",
  },
  emergency: {
    title: "¿Peligro o emergencia?",
    body: "Llame al 911 de inmediato. Los números de esta página son para problemas que no son emergencias.",
  },
  phones: {
    heading: "Números que todo vecino debe tener",
    sub: "Guárdelos en su teléfono y compártalos con su familia y vecinos.",
    call: "Llamar",
  },
  phoneList: [
    {
      id: "parking",
      title: "Control de estacionamiento",
      agency: "LADOT",
      number: "213-485-4184",
      tel: "+12134854184",
      lead: "Llame si hay:",
      examples: [
        "Un carro bloqueando su entrada",
        "Carros en zona roja o frente a un hidrante",
        "Carros en doble fila",
        "Un carro o RV en el mismo lugar por más de 72 horas",
      ],
    },
    {
      id: "bulky",
      title: "Basura grande, recogida GRATIS",
      agency: "LA Sanitation",
      number: "1-800-773-2489",
      tel: "+18007732489",
      lead: "Llame para:",
      examples: [
        "Colchones y sofás",
        "Refrigeradores, estufas y otros aparatos",
        "Muebles viejos",
        "Basura tirada en la banqueta",
      ],
    },
    {
      id: "police",
      title: "Policía (no emergencia)",
      agency: "LAPD",
      number: "1-877-275-5273",
      tel: "+18772755273",
      lead: "Llame para:",
      examples: [
        "Ruido o fiestas a altas horas de la noche",
        "Vandalismo que ya ocurrió",
        "Actividad sospechosa sin peligro inmediato",
      ],
    },
    {
      id: "311",
      title: "Otros servicios de la Ciudad",
      agency: "MyLA311",
      number: "311",
      tel: "311",
      lead: "Llame o use la app para:",
      examples: [
        "Luces de la calle dañadas",
        "Baches y banquetas rotas",
        "Grafiti",
        "Animales muertos en la calle",
        "Árboles caídos",
      ],
    },
  ] satisfies Phone[],
  app311: {
    title: "¿Prefiere usar el teléfono celular?",
    body: "Con la app MyLA311 puede reportar con foto y ubicación, y ver el estado de su caso.",
    cta: "Abrir MyLA311",
    outside: "Desde fuera de la Ciudad, marque 213-473-3231.",
  },
  report: {
    heading: "Cómo lograr que su reporte se resuelva",
    sub: "Muchos casos se cierran aunque el problema siga ahí. Estos pasos ayudan.",
    steps: [
      {
        title: "Pida y guarde su número de caso",
        body: "Siempre pida el número de caso cuando llame al 311, o guárdelo de la app. Sin ese número es difícil dar seguimiento.",
      },
      {
        title: "Tome una foto",
        body: "Su teléfono guarda la fecha, la hora y el lugar. Si cierran el caso y el problema sigue, la foto es su prueba.",
      },
      {
        title: "Pida un reporte de “Servicio no completado”",
        body: "Si cerraron su caso y la basura o el problema sigue ahí, llame al 311, dé el número de caso original y diga que no se completó el servicio.",
      },
      {
        title: "Edificios de 5 o más unidades",
        body: "Muchos edificios grandes tienen un recolector privado de recycLA, no LA Sanitation. Si su caso se cierra una y otra vez, pida al 311 que lo envíe al recolector de recycLA de ese edificio.",
      },
      {
        title: "Lleve una lista",
        body: "Anote cada caso cerrado: número, fecha y foto. Una lista así, enviada a la oficina del Distrito 9, es difícil de ignorar.",
      },
    ],
  },
  share: {
    heading: "Comparta esta página",
    body: "Entre más vecinos reporten, más difícil es que nos ignoren.",
    whatsapp: "Compartir por WhatsApp",
    text: "Números útiles para vecinos del Distrito 9 (Los Ángeles):",
  },
  footer: {
    about:
      "Vecinos del Distrito 9 es un grupo comunitario independiente. No somos parte de la Ciudad de Los Ángeles ni de ninguna campaña política.",
    verify: "Los números pueden cambiar. Si alguno no funciona, avísenos en el grupo.",
    page: "Página de Facebook",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: "District 9 Neighbors · Resources for South Central",
    description:
      "City phone numbers, how to report problems to 311, and tips to keep your report from being closed unresolved. For neighbors in Los Angeles Council District 9.",
  },
  nav: { phones: "Numbers", report: "How to report", switchLabel: "Español", switchAria: "Ver esta página en español" },
  hero: {
    kicker: "South Central · Los Angeles",
    title: "District 9 Neighbors",
    lead: "Resources, City phone numbers, and news from your block. We help you know who to call and how to get your report resolved.",
    ctaPrimary: "See the numbers",
    ctaGroup: "Join the Facebook group",
    ctaPage: "Follow us on Facebook",
  },
  emergency: {
    title: "Danger or emergency?",
    body: "Call 911 right away. The numbers on this page are for non-emergency problems.",
  },
  phones: {
    heading: "Numbers every neighbor should have",
    sub: "Save them in your phone and share them with your family and neighbors.",
    call: "Call",
  },
  phoneList: [
    {
      id: "parking",
      title: "Parking enforcement",
      agency: "LADOT",
      number: "213-485-4184",
      tel: "+12134854184",
      lead: "Call if there is:",
      examples: [
        "A car blocking your driveway",
        "Cars in a red zone or in front of a hydrant",
        "Double-parked cars",
        "A car or RV in the same spot for more than 72 hours",
      ],
    },
    {
      id: "bulky",
      title: "Bulky item pickup, FREE",
      agency: "LA Sanitation",
      number: "1-800-773-2489",
      tel: "+18007732489",
      lead: "Call for:",
      examples: [
        "Mattresses and couches",
        "Refrigerators, stoves, and other appliances",
        "Old furniture",
        "Trash dumped on the sidewalk",
      ],
    },
    {
      id: "police",
      title: "Police (non-emergency)",
      agency: "LAPD",
      number: "1-877-275-5273",
      tel: "+18772755273",
      lead: "Call for:",
      examples: [
        "Loud noise or parties late at night",
        "Vandalism that already happened",
        "Suspicious activity with no immediate danger",
      ],
    },
    {
      id: "311",
      title: "Other City services",
      agency: "MyLA311",
      number: "311",
      tel: "311",
      lead: "Call or use the app for:",
      examples: [
        "Broken streetlights",
        "Potholes and broken sidewalks",
        "Graffiti",
        "Dead animals in the street",
        "Fallen trees",
      ],
    },
  ],
  app311: {
    title: "Rather use your phone?",
    body: "With the MyLA311 app you can report with a photo and location, and check the status of your case.",
    cta: "Open MyLA311",
    outside: "From outside the City, dial 213-473-3231.",
  },
  report: {
    heading: "How to get your report resolved",
    sub: "Many cases get closed even when the problem is still there. These steps help.",
    steps: [
      {
        title: "Ask for and save your case number",
        body: "Always ask for the case number when you call 311, or save it from the app. Without it, following up is hard.",
      },
      {
        title: "Take a photo",
        body: "Your phone records the date, time, and location. If the case is closed and the problem is still there, the photo is your proof.",
      },
      {
        title: "Ask for a “Service Not Complete” report",
        body: "If your case was closed and the trash or problem is still there, call 311, give the original case number, and say the service was not completed.",
      },
      {
        title: "Buildings with 5 or more units",
        body: "Many larger buildings are served by a private recycLA hauler, not LA Sanitation. If your case keeps getting closed, ask 311 to send it to that building's recycLA hauler.",
      },
      {
        title: "Keep a list",
        body: "Write down every closed case: number, date, and photo. A list like that, sent to the District 9 office, is hard to ignore.",
      },
    ],
  },
  share: {
    heading: "Share this page",
    body: "The more neighbors report, the harder it is to ignore us.",
    whatsapp: "Share on WhatsApp",
    text: "Useful numbers for District 9 neighbors (Los Angeles):",
  },
  footer: {
    about:
      "District 9 Neighbors is an independent community group. We are not part of the City of Los Angeles or any political campaign.",
    verify: "Numbers can change. If one doesn't work, let us know in the group.",
    page: "Facebook Page",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
