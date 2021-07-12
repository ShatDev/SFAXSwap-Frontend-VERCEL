import { MenuEntry } from '../../libraries/pancake-uikit/index'

const config: MenuEntry[] = [
  {
    label: 'Token Home',
    icon: 'HomeIcon',
    href: 'https://www.safemoonmax.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://sfaxs-wap-frontend.vercel.app/#/swap',
      },
    ],
  },

]

export default config
