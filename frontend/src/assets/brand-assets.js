// =============================================================================
// BRAND ASSETS — punto único para todos los imports de imágenes.
// =============================================================================

import heroBg      from './brand/hero.jpg'
import logo        from './brand/logo.jpg'
import imgTops     from './products/tops.jpg'
import imgTejidos  from './products/tejidos.jpg'
import imgBano     from './products/bano.jpg'
import imgEditorial from './products/tops.jpg'

export { heroBg, logo, imgEditorial }

// Mapeado por slug — debe coincidir con categoriesSection.items en brand.config.js
export const categoryImages = {
  tops:    imgTops,
  tejidos: imgTejidos,
  bano:    imgBano,
  buzos:   heroBg,
}
