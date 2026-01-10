export type Project = {
  title: string
  image: string
    
}

const projects: Project[] = [
  {
    title: 'Mantenimientos MPA de cámaras de seguridad',
    image: '/images/projects/M-M-Camaras.jpg'
  },
  {
    title: 'PDB de equipos CLARO',
    image: '/images/projects/PDB-Claro.jpeg'
  },
  {
    title: 'Enlaces microondas',
    image: '/images/projects/E-microondas.jpeg'
  },
  {
    title: 'Trabajos CICSA',
    image: '/images/projects/T-CICSA-R.png'
  },
  {
    title: 'Proyecto PRONATEL',
    image: '/images/projects/P-PRONATEL.jpeg'
  },
  {
    title: 'Estudios de Factibilidad de Servicio',
    image: '/images/projects/EFS-B-Nacion.jpg'
  }
]

export const getAllProjects = () => projects
