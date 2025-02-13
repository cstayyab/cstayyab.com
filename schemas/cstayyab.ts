import type { Person, WithContext, ProfilePage } from 'schema-dts';

export const cstayyab: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    identifier: 'cstayyab',
    name: 'Muhammad Tayyab Sheikh',
    givenName: 'Muhammad Tayyab',
    familyName: 'Sheikh',
    honorificPrefix: 'Mr.',
    email: 'mailto:me@cstayyab.com',
    additionalName: 'CS Tayyab',
    alternateName: 'CSTayyab',
    nationality: 'Pakistan',
    birthDate: '1998-02-19',
    url: 'https://cstayyab.com',
    image: 'https://apna.link/CSTayyabAvatar',
    jobTitle: 'Software Engineer',
    alumniOf: {
      "@type": "EducationalOrganization",
      "name": "COMSATS University Islamabad",
      "url": "https://www.comsats.edu.pk/"
    },
    brand: {
      "@type": 'Organization',
      name: 'Apna.Link',
      logo: 'https://apna.link/favicon.ico',
      founder: 'Muhammad Tayyab Sheikh',
      url: 'https://apna.link',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'ThePrimeFit',
      url: 'https://primefit.ae',
    },
    knowsAbout: [
      "Node.js",
      "React",
      "React Native",
      "Python",
      "JavaScript",
      "TypeScript",
      "API Development",
      "Express.js",
      "RabbitMQ",
      "PostgreSQL"
    ],
    sameAs: [
      "https://linkedin.com/in/CSTayyab",
      "https://github.com/CSTayyab",
      "https://twitter.com/CSTayyab",
      "https://x.com/CSTayyab",
      "https://instagram.com/CSTayyab",
      "https://facebook.com/CSTayyab",
      "https://stackoverflow.com/users/7337013/cstayyab"
    ],
    description: 'Software Engineer who is passionate about creating seamless experiences across web and mobile platforms. Specializing in React, React Native, Node.js, and cloud technologies.',
    knowsLanguage: [
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en",
        // "proficiencyLevel": "Fluent"
      },
      {
        "@type": "Language",
        "name": "Urdu",
        "alternateName": "ur",
        // "proficiencyLevel": "Native"
      },
      {
        "@type": "Language",
        "name": "Spanish",
        "alternateName": "es",
        // "proficiencyLevel": "Basic"
      }
    ],
    gender: 'Male',
  
  }