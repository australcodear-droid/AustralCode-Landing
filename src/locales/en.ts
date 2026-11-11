export const en = {
  nav: { home: 'HOME', about: 'ABOUT', services: 'SERVICES', work: 'WORK', contact: 'CONTACT', menu: 'MENU' },
  hero: { studio: 'WEB DEVELOPMENT STUDIO', location: 'BUENOS AIRES / AR', title: ['WE BUILD', 'DIGITAL', 'SYSTEMS.'], description: 'We design and build digital products that move ideas forward.', talk: "LET'S TALK", south: '[ 001 / SOUTH ]', disciplines: 'STRATEGY / DESIGN / DEVELOPMENT' },
  about: { label: '#01 / ABOUT US', title: ['TECHNICAL', 'CLARITY.', 'HUMAN', 'COLLABORATION.'], copyOne: 'Austral Code is a compact team that brings strategy, design and development together to solve real problems.', copyTwo: 'We like simple systems, considered decisions and code that stays maintainable.' },
  services: { label: '#02 / CAPABILITIES', title: 'SERVICES', count: '04 SYSTEMS', items: [
    { number: '01', title: 'SPA', kicker: 'SINGLE PAGE APPLICATIONS', description: 'Fast, robust web products built with React and TypeScript.' },
    { number: '02', title: 'LANDING PAGES', kicker: 'CONVERSION-FOCUSED WEBSITES', description: 'Websites with a clear purpose: tell the story well, connect quickly and convert.' },
    { number: '03', title: 'E-COMMERCES', kicker: 'ONLINE COMMERCE', description: 'Thoughtful online stores built to match the pace of your business.' },
    { number: '04', title: 'CUSTOM SYSTEMS', kicker: 'CUSTOM MANAGEMENT', description: 'Tailored tools that bring inventory, operations and decisions into focus.' }
  ] },
  process: { label: '#03 / HOW WE WORK', title: ['FROM', 'IDEA TO', 'IMPACT.'], items: [
    { number: '01', title: 'DISCOVER', description: 'We understand the problem, context and opportunity.' }, { number: '02', title: 'DESIGN', description: 'We define the experience, system and visual direction.' }, { number: '03', title: 'BUILD', description: 'We build in short cycles with technical intent.' }, { number: '04', title: 'LAUNCH', description: 'We ship, measure and keep improving.' }
  ] },
  work: { label: '#04 / SELECTED', title: 'WORK', intro: 'Recent projects for brands and teams ready to move forward.', expand: 'OPEN PROJECT', collapse: 'CLOSE PROJECT', projects: [
    { number: '01', name: 'MATERIA', type: 'E-COMMERCE / 2026', description: 'Digital store for a contemporary objects brand. Catalogue, checkout and an editorial experience designed to convert.' },
    { number: '02', name: 'RUMBO', type: 'WEB PLATFORM / 2026', description: 'A planning platform for teams in motion, designed to organise workflows and share progress in real time.' },
    { number: '03', name: 'NORTE', type: 'BRAND SITE / 2026', description: 'Digital identity for a consultancy with a direct, clear presence, ready for its next launches.' }
  ] },
  cta: { label: '#05 / START SOMETHING', title: ['HAVE A', 'PROJECT', 'IN MIND?'], button: 'START A PROJECT' },
  contact: { label: '#06 / CONTACT', title: ["LET'S", 'TALK.'], intro: 'Have an idea? Tell us what you want to build.', fields: { name: 'NAME', email: 'EMAIL', message: 'MESSAGE', namePlaceholder: 'Your name', emailPlaceholder: 'Your email', messagePlaceholder: 'Tell us a little about it...' }, send: 'SEND MESSAGE', sending: 'SENDING...', success: 'MESSAGE READY — THANK YOU' },
  footer: { studio: 'WEB DEVELOPMENT STUDIO', location: ['BUENOS AIRES', 'ARGENTINA'], email: 'EMAIL', instagram: 'INSTAGRAM', copyright: '© 2026 AUSTRAL CODE — ALL SYSTEMS GO' }
} as const
