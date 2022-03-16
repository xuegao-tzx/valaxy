import { valaxyConfigRef, valaxyConfigSymbol } from '~/composables/config'
import type { UserModule } from '~/types'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ app }) => {
  app.provide(valaxyConfigSymbol, valaxyConfigRef.value)
}
