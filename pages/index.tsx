import Head from 'next/head'
import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react'

export default function Home() {
  const [scaleIndex, setScaleIndex] = useState(1)
  const sizes = ['scale-50', 'scale-100', 'scale-150']
  const colours = ['bg-yellow-400', 'bg-orange-500', 'bg-red-600']
  const boxShadows = ['shadow-sun-small', 'shadow-sun-medium', 'shadow-sun-large']
  const animations = ['animate-radiateSmall', 'animate-radiateMedium', 'animate-radiateLarge']

  return (
    <>
      <Head>
        <title>Roche Lobe Overflow</title>
        <meta name="description" content="A website that shows how the amount of material a black hole in a binary system can consume is affected by it's companion." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='relative h-screen bg-zinc-900'>
        <div className='md:hidden fixed top-0'>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="bg-white rounded-lg w-8 sm:w-12 m-2 aspect-square">
                ?
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className='bg-black z-20 fixed inset-0 opacity-75' />
              <Dialog.Content className='z-50 bg-zinc-900 w-11/12 h-fit p-6 rounded-2xl text-white flex flex-col gap-6 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col gap-2'>
                  <Dialog.Title className='font-bold'>Astro 101: Black Holes - Roche Lobes</Dialog.Title>
                  <Separator.Root className='border border-white rounded-lg' />
                    <Tabs.Root defaultValue='tab1'>
                      <Tabs.List className='flex justify-center mb-4'>
                        <Tabs.Trigger value="tab1" className='w-1/2 p-4 border-b font-semibold rdx-state-active:text-blue-500 rdx-state-active:border-blue-500'>Overview</Tabs.Trigger>
                        <Tabs.Trigger value="tab2" className='w-1/2 p-4 border-b font-semibold rdx-state-active:text-blue-500 rdx-state-active:border-blue-500'>Details</Tabs.Trigger>
                      </Tabs.List>
                      <Tabs.Content value="tab1">
                        <div className='flex flex-col gap-4'>
                          <Dialog.Description>This website aims to visually explain how the amount of material a black hole in a binary system can consume depends on its companion object.</Dialog.Description>
                          <Dialog.Description>This representation of a binary system maintains distance, but if the objects were to get closer, the roche lobes would shrink, allowing for easier overflow.</Dialog.Description>
                          <Dialog.Description><span className='font-bold text-blue-500'>The moving gray squares</span> represents the amount of material overflowing into the black hole&apos;s roche lobe. Keep in mind it is all chance that material makes it way over to the black hole; they could be knocked far away from both objects.</Dialog.Description>
                          <Dialog.Description><span className='font-bold text-blue-500'>Press the +/- buttons</span> to change the age of the star.</Dialog.Description>
                          <Dialog.Description>Created by <a href='https://khanguyen.dev/' target="_blank" rel="noreferrer" className='text-blue-500 underline'>Khang Nguyen</a> for the Creative Work assignment.</Dialog.Description>
                        </div>
                      </Tabs.Content>
                      <Tabs.Content value="tab2">
                        <div className='flex flex-col gap-4'>
                          <Dialog.Description>An object warps spacetime, resulting in a gravitational pull within certain limits. When two objects are close together, their gravitational auras pull on each other and create <span className='font-bold text-blue-500'>Roche Lobes</span>, the teardrop white outlines shown in the visuals.</Dialog.Description>
                          <Dialog.Description>Any material within a Roche Lobe is gravitationally bound to that object. In the representation, both the black hole and the star have their own Roche Lobe.</Dialog.Description>
                          <Dialog.Description><span className='font-bold text-blue-500'>Roche Lobe Overflow</span> describes the process where material moves outside of the companion&apos;s roche lobe, moves towards the black hole&apos;s roche lobe, and then is gravitationally bound to the black hole, eventually getting sucked in.</Dialog.Description>
                          <Dialog.Description>As stars get older, the swell up and become <span className='text-red-300'>red giants</span>, filling up their roche lobes and making it easier for material to overflow.</Dialog.Description>
                        </div>
                      </Tabs.Content>
                    </Tabs.Root>
                </div>
                <Dialog.Close asChild>
                  <button className="bg-white w-1/2 rounded-lg p-3 font-bold text-black">
                    Close
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        <div className='hidden md:flex flex-col absolute top-0 left-0 w-1/4 p-4 gap-2 text-white'>
          <p className='font-semibold'>Astro 101: Black Holes - Roche Lobes</p>
          <Separator.Root className='border border-white rounded-lg' />
          <div className='flex flex-col gap-4'>
            <p>This website aims to visually explain how the amount of material a black hole in a binary system can consume depends on its companion object.</p>
            <p>This representation of a binary system maintains distance, but if the objects were to get closer, the roche lobes would shrink, allowing for easier overflow.</p>
            <p><span className='font-bold text-blue-500'>Press the Increase/Decrease buttons</span> to change the age of the star, and see how that affects Roche Lobe Overflow.</p>
            <p>Created by <a href='https://khanguyen.dev/' target="_blank" rel="noreferrer" className='text-blue-500 underline hover:text-blue-400 transition-colors duration-300'>Khang Nguyen</a> for the Creative Work assignment.</p>
          </div>
        </div>
        <div className='hidden md:flex flex-col absolute top-0 right-0 w-1/4 p-4 gap-2 text-white'>
          <p className='font-semibold'>Details</p>
          <Separator.Root className='border border-white rounded-lg' />
          <div className='flex flex-col gap-4'>
            <p className='md:text-sm lg:text-base'>An object warps spacetime, resulting in a gravitational pull within certain limits. When two objects are close together, their gravitational auras pull on each other and create <span className='font-bold text-blue-500'>Roche Lobes</span>, the teardrop white outlines shown in the visuals.</p>
            <p className='md:text-sm lg:text-base'>Any material within a Roche Lobe is gravitationally bound to that object. In the representation, both the black hole and the star have their own Roche Lobe.</p>
            <p className='md:text-sm lg:text-base'><span className='font-bold text-blue-500'>Roche Lobe Overflow</span> describes the process where material moves outside of the companion&apos;s roche lobe, moves towards the black hole&apos;s roche lobe, and then is gravitationally bound to the black hole, eventually getting sucked in.</p>
            <p className='md:text-sm lg:text-base'>As stars get older, the swell up and become <span className='text-red-300'>red giants</span>, filling up their roche lobes and making it easier for material to overflow.</p>
          </div>
        </div>
        <div className='flex flex-col min-h-screen justify-center gap-8 items-center'>
          <div className='relative flex flex-col justify-center items-center gap-[98px]'>
            <div className={`relative w-60 h-60 border rounded-bl-[50%] rounded-tr-[50%] rounded-tl-[50%] rotate-45 border-white`}>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black w-12 h-12'/>
            </div>
            <div className='absolute z-10 w-32 h-48 flex items-center justify-around'>
              <div className='bg-gray-300 w-2 h-2 rounded-sm animate-flow'/>
            </div>
            {(scaleIndex === 1 || scaleIndex === 2) &&
              <div className='absolute z-10 w-28 h-48 flex items-center justify-around'>
                <div className='bg-gray-300 w-2 h-2 rounded-sm opacity-0 animate-flow2 animation-delay-300'/>
                <div className='bg-gray-300 w-2 h-2 rounded-sm opacity-0 animate-flow2 animation-delay-800'/>
                <div className='bg-gray-300 w-2 h-2 rounded-sm opacity-0 animate-flow2 animation-delay-500'/>
                <div className='bg-gray-300 w-2 h-2 rounded-sm opacity-0 animate-flow2 animation-delay-1100'/>
              </div>
            }
            {scaleIndex === 2 &&
              <div className='absolute z-10 w-16 h-12 flex items-center justify-around'>
                <div className='bg-gray-300 w-2 h-2 rounded-sm opacity-0 animate-flow3 animation-delay-600'/>
                <div className='bg-gray-300 w-2 h-2 rounded-sm opacity-0 animate-flow3 animation-delay-75'/>
                <div className='bg-gray-300 w-2 h-2 rounded-sm opacity-0 animate-flow3 animation-delay-1300'/>
                <div className='bg-gray-300 w-2 h-2 rounded-sm opacity-0 animate-flow3 animation-delay-2000'/>
                <div className='bg-gray-300 w-2 h-2 rounded-sm opacity-0 animate-flow3 animation-delay-3000'/>
                <div className='bg-gray-300 w-2 h-2 rounded-sm opacity-0 animate-flow3 animation-delay-1500'/>
              </div>
            }
            <div className={`relative w-60 h-60 border rounded-bl-[50%] rounded-br-[50%] rounded-tl-[50%] -rotate-45 border-white`}>
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-32 h-32 ${colours[scaleIndex]} ${sizes[scaleIndex]} ${boxShadows[scaleIndex]} ${animations[scaleIndex]} transition duration-300`}/>
            </div>
          </div>
          <div className='flex justify-center items-center gap-8'>
            <button className='bg-white rounded-lg p-4 font-bold hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300' onClick={() => setScaleIndex(scaleIndex - 1)} disabled={scaleIndex === 0}>- Star Age</button>
            <button className='bg-white rounded-lg p-4 font-bold hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300' onClick={() => setScaleIndex(scaleIndex + 1)} disabled={scaleIndex === 2}>+ Star Age</button>
          </div>
        </div>
      </div>

    </>
  )
}
