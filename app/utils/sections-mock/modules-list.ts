import { gradientSectionColors, gradientModuleColors } from './gradientSectionColors'
import { namespacesFeatures } from './namespaces-features'

function getRandomGradientColor() {
  const colors = Object.values(gradientModuleColors);
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const gradientColor = getRandomGradientColor();

export const modules = [
  // {
  //   sectionName: 'comhub',
  //   title: 'ComHub',
  //   subtitle: 'The hub for Commune Ai modules',
  //   color: 'bg-blue-400/[0.03]',
  //   gradientColor: gradientModuleColors.violet,
  //   image: '/comhub.png',
  //   url: 'https://communeai.app/',
  //   validatorKey: "5EJ9AUpSGafWeagdP5nwc5AwcYBkagYSZyx2BmLKWJrGBZUZ",
  // },
  {
    sectionName: 'comai',
    title: 'CommuneAi',
    subtitle: 'CommuneAI homepage',
    color: 'bg-blue-400/[0.03]',
    gradientColor: gradientModuleColors.violet,
    image: '/comhub.png',
    url: 'https://communeai.org/',
    validatorKey: "5EJ9AUpSGafWeagdP5nwc5AwcYBkagYSZyx2BmLKWJrGBZUZ",
  },
  {
    sectionName: 'comstats',
    title: 'ComStats',
    subtitle: 'All statistics of Commune Ai in one place',
    color: 'bg-blue-400/[0.03]',
    gradientColor: gradientModuleColors.violet,
    image: '/comstats.webp',
    url: 'https://comstats.org/',
    validatorKey: "5H9YPS9FJX6nbFXkm9zVhoySJBX9RRfWF36abisNz5Ps9YaX",
  },
  {
    sectionName: 'comchat',
    title: 'ComChat',
    subtitle: 'LLM GPT aggregator built on Commune Ai',
    color: 'bg-blue-400/[0.03]',
    gradientColor: gradientModuleColors.violet,
    image: '/comchat.webp',
    url: 'https://comchat.io/',
    validatorKey: "5D4o6H19z6ctWjS9HzxBpMxqhuzCCCsgXk49AqXGPUqZEpRt",

  },
  {
    sectionName: 'comswap',
    title: 'ComSwap',
    subtitle: '$COMAI trading platform',
    color: 'bg-blue-400/[0.03]',
    gradientColor: gradientModuleColors.violet,
    image: '/comswap.webp',
    url: 'https://comswap.io/',
    validatorKey: "5CXiWwsS76H2vwroWu4SvdAS3kxprb7aFtqWLxxZC5FNhYri",

  },
]






// [
//   {
//       "name": "ComChat",
//       "url": "https://comchat.io/",
//       "image": "https://comchat.io/icons/favicon-32x32.png",
//       "description": "LLM GPT aggregator built on Commune Ai",
//       "validatorKey": "5D4o6H19z6ctWjS9HzxBpMxqhuzCCCsgXk49AqXGPUqZEpRt",
//       "verified": true,
//       "tags": ["chat","GPT","Ai"],
//       "disabled": false


//   },
//   {
//       "name": "ComSwap.io",
//       "url": "https://comswap.io/",
//       "image": "https://comswap.io/static/media/logo.0eafc56c200101eecb87.png",
//       "description": "$COMAI trading platform",
//       "validatorKey": "5CXiWwsS76H2vwroWu4SvdAS3kxprb7aFtqWLxxZC5FNhYri",
//       "verified": true,
//       "tags": ["staking", "wallet"],
//       "disabled": false

//   },
//   {
//       "name": "ComWallet by ComSwap",
//       "url": "https://comwallet.io/",
//       "image": "https://comwallet.io/logo.svg",
//       "description": "Non-custodial wallet for $COMAI",
//       "validatorKey": "5CXiWwsS76H2vwroWu4SvdAS3kxprb7aFtqWLxxZC5FNhYri",
//       "verified": true,
//       "tags": ["staking", "wallet"],
//       "disabled": false

//   },
//   {
//       "name": "ComBridge by ComSwap",
//       "url": "https://bridge.comwallet.io/",
//       "image": "/images/combridge-logo.png",
//       "description": "$COMAI bridge to Ethereum (ETH) Mainnet",
//       "validatorKey": "5CXiWwsS76H2vwroWu4SvdAS3kxprb7aFtqWLxxZC5FNhYri",
//       "verified": true,
//       "tags": ["bridge", "wallet"],
//       "disabled": false

//   },
//   {
//       "name": "Coming Soon",
//       "url": "https://communeai.org/",
//       "image": "/images/comai-webp.webp",
//       "description": "coming soon",
//       "validatorKey": "vali::unknown",
//       "verified": false,
//       "tags": ["docs", "whitepaper"],
//       "disabled": true

//   },
//   {
//       "name": "Coming Soon",
//       "url": "https://comscanner.vercel.app/",
//       "image": "/images/comai-webp.webp",
//       "description": "coming soon",
//       "validatorKey": "vali::unknown",
//       "verified": false,
//       "tags": ["wallet", "predictions","transactions", "explorer"],
//       "disabled": true

//   }

// ]