'use client'

import { Suspense, useState } from 'react'
import {
  ModuleSection,
  HeroSection,
  CallToActionSection,
  FrequentQuestions,
  Footer,
} from '../components'
import Loading from '../loading'
import { modules } from '../utils'
import Image from 'next/image'
import Link from 'next/link'

// export default async function Home() {
//   return (
//     <Suspense fallback={<Loading />}>
//       <div className='flex flex-col items-center'>
//         {modules.map((section, index) => {
//           return (
//             <GenericSection
//               key={index}
//               sectionName={section.sectionName}
//               title={section.title}
//               subtitle={section.subtitle}
//               color={section.color}
//               features={section.features}
//               gradientColor={section.gradientColor}
//               image={section.image}
//             />
//           )
//         })}
//       </div>
//       <Footer />
//     </Suspense>
//   )
// }

export default function Modules() {
  const [flipped, setFlipped] = useState(false);

  return (

    <Suspense fallback={<Loading />}>
      <div className='flex flex-col items-center py-10'>
        <label className="inline-flex items-center cursor-pointer transition-transform transform hover:scale-110">
          <input type="checkbox" value="" className="sr-only peer" 
            checked={flipped}
            onChange={() => setFlipped(!flipped)}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600 "></div>
          {/* <Link className="transition duration-300 ease-in-out hover:scale-150 z-50" href="https://www.communeai.org/" target="_blank"><p className='text-white'>powered by
            <Image
              width={60}
              height={60}
              className="cursor-pointer relative ml-4"
              alt="ComHub - the hub for commune ai modules"
              src="/comai-webp.webp"
              unoptimized

            />
          </p>
          </Link> */}
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ">Try Me!</span>

        </label>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 w-full'>
          {modules.map((module, index) => {
            return (
              <ModuleSection
                key={index}
                sectionName={module.sectionName}
                title={module.title}
                subtitle={module.subtitle}
                url={module.url}
                color={module.color}
                gradientColor={module.gradientColor}
                image={module.image}
                flipped={flipped}
                validatorKey={module.validatorKey}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </Suspense>
  )
}
