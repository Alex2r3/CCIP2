// app/composables/usePartners.ts

export type Partner = {
  image: string
  alt?: string
}

export type PartnerGroup = {
  title: string
  partners: Partner[]
}

const partnerGroups: PartnerGroup[] = [
  {
    title: 'Empresas con las que trabajamos',
    partners: [
      { image: '/images/partners/Z-LOGO-CISCO.png', alt: 'CISCO' },
      { image: '/images/partners/Z-LOGO-HP.png', alt: 'HP' },
      { image: '/images/partners/Z-LG-LOGO.png', alt: 'LG' },
      { image: '/images/partners/Z-LOGO-SAMSUNG.png', alt: 'Samsung' },
      { image: '/images/partners/Z-LOGO-HUAWEI.png', alt: 'HUAWEI' },
      { image: '/images/partners/Z-LOGO-CAMBIUM_NETWORKS.png', alt: 'CambiumNetworks' }
    ]
  },
  {
    title: 'Confían en nosotros',
    partners: [
      { image: '/images/partners/LOGO-EGASA.png', alt: 'EGASA' },
      { image: '/images/partners/LOGO-SEAL.png', alt: 'SEAL' },
      { image: '/images/partners/LOGO-YANAHUARA.png', alt: 'Yanahuara' },
      { image: '/images/partners/LOGO-STANTEC.png', alt: 'Stantec' },
      { image: '/images/partners/LOGO-AREQUIPA.png', alt: 'Arequipa' },
      { image: '/images/partners/LOGO-ZAFRANAL.png', alt: 'Zafranal' },
      { image: '/images/partners/LOGO-MURILLO.png', alt: 'Murillo' },
      { image: '/images/partners/LOGO-JBYR.png', alt: 'JBYR' }

    ]
  }
]

export const usePartners = () => {
  return {
    partnerGroups
  }
}
