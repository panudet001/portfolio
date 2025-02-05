

'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

interface Menu {
  name: string;
  href: string;
  current: boolean;
}


const menus : Menu[]  = [
  { name: 'Home', href: '/#home', current: true },
  { name: 'Portfolio', href: '/#portfolio', current: false },
  { name: 'Skills', href: '/#skill', current: false },
]

const Header =()=> {

  const [navigation , setNavigation] = useState<Menu[]>([])
  useEffect( ()=> {
    setNavigation(menus)
  }, [])

  const handleClick = (name: string) => {
    setNavigation((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );
  };

  const updateCurrent = (hash: string) => {
    if(hash === '/#home' || hash === '/#portfolio' || hash === '/#skill'){
      setNavigation((prev) =>
        prev.map((item) =>
          item.href === hash
            ? { ...item, current: true }
            : { ...item, current: false }
        )
      );
    } 
  };
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateCurrent('/' + window.location.hash); 
    }
  }, []);


  return (
    <>
       <div>
       {/* Header*/}
       <Disclosure as="nav" className="sticky top-0 shadow-md z-50 bg-gray-800">
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="flex shrink-0 items-center">
                      <div className="flex size-10 items-center justify-center">
                          <EnvelopeIcon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      <h1 className='text-balance text-1xl font-semibold text-white w-auto'>Panudet001a@gmail.com</h1>
                  </div>
                  <div className="flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                      <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                    </DisclosureButton>
                  </div>
                  <div className="flex-1 items-center justify-center hidden sm:items-stretch sm:justify-end sm:hidden lg:block md:block">
                    <div className="flex justify-end sm:ml-6 ">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={item.current ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                            onClick={() => handleClick(item.name)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={item.current ? 'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}
                      onClick={() => handleClick(item.name)}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </DisclosurePanel>
            </Disclosure>

    </div>
    </>
  
  )
}
export default Header