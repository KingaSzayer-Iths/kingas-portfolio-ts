import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['sv', 'en', 'pl'],
    fallbackLng: 'sv',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    }
  });



export default i18n;


// import i18n from 'i18next'
// import { initReactI18next } from 'react-i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
// import HttpApi from 'i18next-http-backend'

// // Språkresurser
// const resources = {
//   sv: {
//     translation: {
//       title: 'KINGA SZAYER',
//       role: 'Frontend-utvecklare',
//       intro: 'Jag är en frontend-utvecklare med en passion för att skapa moderna, stilrena och användarvänliga webbapplikationer. ag lär mig snabbt och är ständigt nyfiken på att bredda mina kunskaper och färdigheter. Mitt mål är att bidra med kreativitet och teknisk expertis till ett team för att skapa välgjorda och innovativa lösningar.',
//       skillsTitle: 'Mina erfarenheter'
//     }
//   },
//   en: {
//     translation: {
//       title: 'KINGA SZAYER',
//       role: 'Frontend Developer',
//       intro: "I’m a frontend developer with a passion for creating modern, clean and user-friendly web applications. I’m a fast learner and always curious to expand my skills and knowledge. My goal is to contribute with creativity and technical expertise to a team to build high-quality and innovative solutions.",
//       skillsTitle: 'My Skills'
//     }
//   }
// };

// i18n
//     .use(HttpApi)
//     .use(LanguageDetector) // Identifierar språket från webbläsaren
//     .use(initReactI18next) // Kopplar ihop med React
//     .init({
//         resources,
//         fallbackLng: 'sv', // Standard om inget språk hittas
//         supportedLngs: ['sv', 'en']
//         debug: true
//         interpolation: {
//             escapeValue: false // React sköter säkerheten
//     }
//         backend: {
//             loadPath: '/locales/{{lng}}/translation.json',
//       }
//   });

// export default i18n;