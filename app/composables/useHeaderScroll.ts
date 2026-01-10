import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export type SectionId =
  | 'home'
  | 'services'
  | 'projects'
  | 'contact'
  | 'about'

export function useHeaderScroll() {
  const route = useRoute()
  const router = useRouter()

  const headerRef = ref<HTMLElement | null>(null)
  const activeSection = ref<SectionId>('home')

  const isHome = computed(() => route.path === '/')

  /* ===== Scroll to section ===== */
  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id)
    if (!el) return

    const headerHeight = headerRef.value?.offsetHeight ?? 0
    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      8

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })

    activeSection.value = id
  }

  /* ===== Navegación ===== */
  const goToSection = (id: SectionId) => {
    if (isHome.value) {
      scrollToSection(id)
    } else {
      router.push({
        path: '/',
        state: { scrollTo: id }
      })
    }
  }

  /* ===== Scroll Spy (subrayado estable) ===== */
  const handleScroll = () => {
    if (!isHome.value) return

    const sections: SectionId[] = [
      'home',
      'services',
      'projects',
      'contact'
    ]

    const headerHeight = headerRef.value?.offsetHeight ?? 0
    const scrollPos = window.scrollY + headerHeight + 20

    let current: SectionId = 'home'

    for (const id of sections) {
      const el = document.getElementById(id)
      if (!el) continue

      if (scrollPos >= el.offsetTop) {
        current = id
      }
    }

    activeSection.value = current
  }

  /* ===== Al montar ===== */
  onMounted(() => {
    // scroll desde páginas internas (sin query)
    const target = history.state?.scrollTo as SectionId | undefined

    if (target && isHome.value) {
      setTimeout(() => {
        scrollToSection(target)
        history.replaceState({}, '')
      }, 80)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    headerRef,
    activeSection,
    goToSection
  }
}
