export type TeamMember = {
  name: string
  position: string
  avatar?: string 
  social: {
    facebook?: string
    whatsapp?: string
    instagram?: string
    email?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: 'INTEGRANTE 1',
    position: 'CARGO',
    avatar: '/images/projects/E-microondas.jpeg',
    social: {
      facebook: 'https://facebook.com/',
      whatsapp: 'https://wa.me/51999999999',
      instagram: 'https://instagram.com/',
      email: 'mailto:correo@empresa.com'
    }
  },
  {
    name: 'INTEGRANTE 2',
    position: 'CARGO',
    avatar: '/images/projects/E-microondas.jpeg',
    social: {
      facebook: 'https://facebook.com/',
      instagram: '#',
      email: '#'
    }
  },
  {
    name: 'INTEGRANTE 3',
    position: 'CARGO',
    avatar: '/images/projects/E-microondas.jpeg',
    social: {
      whatsapp: '#',
      instagram: '#'
    }
  },
  {
    name: 'INTEGRANTE 4',
    avatar: '/images/projects/E-microondas.jpeg',
    position: 'CARGO',
    social: {}
  },
]

export const useTeam = () => {
  return {
    teamMembers
  }
}
