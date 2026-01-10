// app/composables/useServices.ts

export type SubService = {
  title: string
  description: string
  image: string
  link?: string // opcional si quieres un link de "ver más"
}

export type Service = {
  slug: string
  title: string
  description: string
  longDescription?: string
  image: string
  heroImage?: string
  subServices?: SubService[]
}

// Servicios con duplicados y subservicios
const services: Service[] = [
  {
    slug: 'telecomunicaciones',
    title: 'TELECOMUNICACIONES',
    description: 'La telecomunicación es hoy un pilar clave del desarrollo social y económico',
    longDescription:
      'La telecomunicación es esencial para el desarrollo social, económico y empresarial.',
    image: '/images/services/tele.jpeg',
    heroImage: '/images/services/tele.jpeg',
    subServices: [
      {
        title: 'FIBRA OPTICA',
        description: 'Ingeniería, construcción, instalación y mantenimiento',
        image: '/images/services/tele12.jpg'
      },
      {
        title: 'ANTENAS MOVILES (4G,5G)',
        description: 'Instalación, mantenimiento, auditorías y optimización',
        image: '/images/services/tele11.jpg'
      },
      {
        title: 'TORRES E INFRAESTRUCTURA DE COMUNICACIONES',
        description: 'Instalación, mantenimiento y desmontaje',
        image: '/images/services/tele13.jpeg'
      }
    ]
  },
  {
    slug: 'redes-telematica', 
    title: 'REDES Y TELEMATICA',
    description: 'Las redes informáticas transforman la comunicación entre empresas y personas.',
    longDescription:
      'Movilidad, banda ancha y seguridad impulsan la evolución digital.',
    image: '/images/services/redes.jpg',
    heroImage: '/images/services/redes.jpg',
    subServices: [
      {
        title: 'CABLEADO ESTRUCTURADO',
        description: 'Ingeniería, diseño, instalación, certificación',
        image: '/images/services/redes11.jpg'

      },
      {
        title: 'ROUTING AND SWITCHING',
        description: 'Diseño y supervisión de proyectos de construcción',
        image: '/images/services/redes12.jpg'

      },
      {
        title: 'CENTRALES TELEFONICAS',
        description: 'Diseño y supervisión de proyectos de construcción',
        image: '/images/services/redes13.jpeg'

      }
    ]
  },
  {
    slug: 'seguridad-electronica',
    title: 'SEGURIDAD ELECTRONICA Y VIDEO VIGILANCIA',
    description: 'Tecnología y experiencia para sistemas de seguridad confiables.',
    longDescription:
      'Un equipo especializado asegura instalación, evaluación y mantenimiento eficientes.',
    image: '/images/services/camara.jpeg',
    heroImage: '/images/services/camara.jpeg',
    subServices: [
      {
        title: 'VIDEO VIGILANCIA Y CCTV',
        description: 'Mantenimiento, Diseño, configuración, instalación',
        image: '/images/services/seg11.jpg'

      },
      {
        title: 'CENTRAL DE ALARMAS CONTRA INCENDIOS',
        description: 'instalaciones, mantenimiento ,diseño, configuración',
        image: '/images/services/seg13.jpg'

      },
      {
        title: 'SISTEMA DE AUTOMATIZACIÓN, CONTROL DE ACCESO Y DETECCION DE INTRUSOS',
        description: 'Ingeniería , mantenimiento, instalaciones, diseño',
        image: '/images/services/seg12.jpg'

      }
    ]
  },
  {
    slug: 'energia-electrica', 
    title: 'ENERGIA ELECTRICA',
    description: 'La electricidad es la base que permite operar, comunicar y hacer crecer a las empresas.',
    longDescription:
      'Energía confiable que alimenta el desarrollo tecnológico y operativo.',
    image: '/images/services/energia.jpg',
    heroImage: '/images/services/energia.jpg',
    subServices: [
      {
        title: 'SISTEMAS DE PUESTA A TIERRA Y PARARRAYOS',
        description: 'Mantenimiento, estudio, diseño, medición, certificación',
        image: '/images/services/energia11.jpg'

      },
      {
        title: 'AUTOMATIZACION Y CONTROL DE SUBESTACIONES Y PROCESO INDUSTRIALES',
        description: 'Instalaciones, diseño, programación, integración, pruebas, sistemas SCADA DCS',
        image: '/images/services/energia12.jpg'

      },
      {
        title: 'SISTEMAS ELECTRICOS DE POTENCIA',
        description: 'Diseño, medición, pruebas de potencia, resistencia entre otros',
        image: '/images/services/energia13.jpg'

      }
    ]
  }
]

/** Retorna todos los servicios */
export const getAllServices = (): Service[] => services

/** Retorna un servicio por slug (el primero que coincida) */
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(service => service.slug === slug)
