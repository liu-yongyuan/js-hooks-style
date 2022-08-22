import { useDark, useToggle } from '@vueuse/core'

export const useMode = () => {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
  })

  const toggleDark = useToggle(isDark)

  function handleLightMode() {
    toggleDark(false)
  }

  function handleDarkMode() {
    toggleDark(true)
  }

  return {
    handleLightMode,
    handleDarkMode,
    toggleDark,
    isDark,
  }
}
