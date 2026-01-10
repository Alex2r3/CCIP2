export type Social = {
  facebook?: string
  whatsapp?: string
  instagram?: string
  email?: string
}

const companySocial: Social = {
  facebook: 'https://facebook.com',
  whatsapp: 'https://wa.me/51999999999',
  instagram: 'https://instagram.com',
  email: 'mailto:contacto@empresa.com'
}

export const useCompanySocial = () => {
  return {
    companySocial
  }
}
