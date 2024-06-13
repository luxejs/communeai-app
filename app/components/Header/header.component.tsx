'use client'
import Image from 'next/image'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { links } from '@/app/utils'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

// polkadot 
import {
  FaSpinner,
  FaWallet
} from "react-icons/fa"
import { FaSackDollar } from "react-icons/fa6";
import { usePolkadot } from "@/app/wallet/context"
import { truncateWalletAddress } from "@/app/wallet/utils"

type THeaderLinkProps = {
  href: string
  target?: string
  icon: string
  alt: string
  className?: string
}

const HeaderLink = ({
  href,
  target = '_blank',
  icon,
  alt,
  className = '',
}: THeaderLinkProps) => (
  <Link href={href} target={target} className={className}>
    <Image src={icon} width={25} height={25} alt={alt} />
  </Link>
)

const navigation = [
  { name: 'Docs', href: links.docs, external: true },
  { name: 'Home', href: links.home, external: false },
  { name: 'Modules', href: links.modules, external: false },

]

export const Header = () => {
  const { isInitialized, handleConnect, selectedAccount, balance } = usePolkadot()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const commonButtonClass = 'flex min-w-14 items-center justify-center rounded-2xl text-white p-1.5 hover:bg-gray-100/[0.15]'

  return (
    <>
      {/* MOBILE MENU - MODAL */}
      <div className={`h-full w-full backdrop-blur-sm absolute z-50 ${mobileMenuOpen ? 'visible' : 'hidden'} lg:hidden animate-menu-fade`} onClick={toggleMobileMenu} >
        <nav className={`h-full w-full fixed z-50`}>
          <div className='bg-gray-800 h-auto min-w-1/4 w-[70%] sm:w-[40%] sticky top-3 right-3 ml-auto z-[50] p-5 rounded-lg'>
            <button type='button' className={`${commonButtonClass} h-8 w-8 rounded-lg absolute right-0 top-0 m-5`} onClick={toggleMobileMenu}>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flow-root'>
              <div className='-my-6 divide-y space-y-4 divide-gray-400/20'>
                <div className='ml-2 mt-6 space-y-2'>
                  {navigation.map(({ name, href, external }) => (
                    <Link key={name} href={href} target={external ? '_blank' : '_self'} className='-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-100 w-[90%] hover:bg-gray-400/10 hover:backdrop-blur-sm'>
                      {name}
                    </Link>
                  ))}
                </div>
                <div className='py-6 flex space-x-3'>
                  <HeaderLink href={links.github} icon='/github-icon-white.svg' alt="Commune's Github Link" className={`${commonButtonClass}`} />
                  <HeaderLink href={links.discord} icon='/discord-icon-white.svg' alt="Commune's Discord Link" className={commonButtonClass} />
                  <HeaderLink href={links.x} icon='/x-icon-white.svg' alt="Commune X/Twitter" className={commonButtonClass} />
                  <HeaderLink href={links.telegram} icon='/telegram-icon-white.svg' alt="Commune X/Twitter" className={commonButtonClass} />

                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* NAVBAR */}
      <header className={`z-40 sticky top-0 flex flex-none w-full border-b border-gray-50/[0.06] backdrop-blur transition-colors duration-500`}>
        <nav className={`p-4 px-6 mx-auto grid w-full grid-flow-col grid-cols-3 items-center justify-between`} aria-label='Global'>
          <div className="flex items-center col-span-1">
            <Link href={links.home} className={`flex items-center ${commonButtonClass}`}>
              <span className='sr-only'>Commune AI</span>
              <Image src={'/comhub.png'} width={45} height={45} alt='commune logo' priority className='mr-[3px]' />
            </Link>
            <div className="h-10 border-l border-gray-300 mx-4"></div>

            <div className='hidden justify-start lg:flex'>
              <HeaderLink href={links.github} icon='/github-icon-white.svg' alt="Commune's Github Link" className={commonButtonClass} />
              <HeaderLink href={links.discord} icon='/discord-icon-white.svg' alt="Commune's Discord Link" className={commonButtonClass} />
              <HeaderLink href={links.x} icon='/x-icon-white.svg' alt="Commune X/Twitter" className={commonButtonClass} />
              <HeaderLink href={links.telegram} icon='/telegram-icon-white.svg' alt="Commune X/Twitter" className={commonButtonClass} />
            </div>
          </div>
          <div className='hidden justify-center lg:flex lg:gap-x-12'>
            {navigation.map(({ name, href, external }) => (
              <Link key={name} href={href} target={external ? '_blank' : '_self'} className='text-sm font-semibold leading-6 text-gray-100 hover:text-gray-400'>
                {name}
              </Link>
            ))}
          </div>

          <div className='col-span-3 lg:hidden '>
            <button type='button' className={`${commonButtonClass} -m-2.5`} onClick={toggleMobileMenu}>
              <span className='sr-only'>Open main menu</span>
              <EllipsisVerticalIcon className='h-6 w-6' aria-hidden='true' />
              <p className="text-md">socials</p>

            </button>
          </div>
          {!isInitialized &&
            <button className='flex items-center justify-center disabled'>

              <FaSpinner className="flex animate-spin text-white" />
            </button>
          }

          {isInitialized && (
            <>
              {selectedAccount ? (
                // <div className="relative flex items-center rounded-full shadow py-2">
                <button className={`${commonButtonClass}`} onClick={handleConnect}>
                  <div className="flex items-center">
                    <FaWallet size={24} className="text-white" />
                    <span className="ml-2 font-mono text-white">
                      {truncateWalletAddress(selectedAccount.address)}
                    </span>
                  </div>
                  <div className="h-10 border-l border-gray-300 mx-4"></div>
                  <div className="flex items-center">
                  <FaSackDollar size={20} className="text-white" />
                    {balance !== undefined && (
                    <span className="ml-2 font-mono text-white">
                    {balance.toFixed(2).toString()} COMAI
                    </span>
                    )}
                  </div>
                </button>

                // </div>
              ) : (
                <button onClick={handleConnect} disabled={!isInitialized} 
                className={`${commonButtonClass}
                w-full rounded-xl bg-gradient-to-r text-white py-2 px-4 shadow-lg hover:from-indigo-600 hover:to-pink-600 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed

                `}
                >
                  <Image
                    width={35}
                    height={35}
                    className="cursor-pointer"
                    alt="Connect PolkadotJS Wallet"
                    src="/polkadotjs.png"
                  />
                  <span className="hidden md:block"><p>&nbsp; connect wallet</p></span>

                </button>
              )}
            </>
          )}
        </nav>
      </header>
    </>
  )
}