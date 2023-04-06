import { computed } from 'vue'

export const SIDEBAR_WIDTH = 80
export const TOOLBAR_HEIGHT = 55

export const sidebarWidth = computed(
  () => `${SIDEBAR_WIDTH}px`
)

export const toolbarHeight = computed(
  () => `${TOOLBAR_HEIGHT}px`
)
