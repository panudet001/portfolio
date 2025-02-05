
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const selectType = [
  { name: 'All' },
  { name: 'Laravel' },
  { name: 'Angular' },
  { name: 'Vue' },
]

const works = [
  { name: 'ABM' ,sub: 'ระบบซื้อตั๋วเรือออนไลน์' , img:'./image/awf.png', link:'/portfolio/abm' , type: 'Laravel'},
  { name: 'CoinPro' ,sub: 'ระบบนำเสนอบทความ และข้อมูลข่าวสาร', img:'./image/cp.png', link:'/portfolio/coinPro' , type: 'Angular'},
  { name: 'OTC' ,sub: 'ระบบเกี่ยวกับบริษัท OTC ', img:'./image/otc.png', link:'/portfolio/otc' , type: 'Angular'},
  { name: 'Cryptoprop' ,sub: 'ระบบเกี่ยวกับบริษัท Cryptoprop', img:'./image/cyp.png', link:'/portfolio/cryptoprop' , type: 'Vue'},
  { name: 'ADVU' ,sub: 'ระบบการลงทุนในอสังหาริมทรัพย์', img:'./image/advu.png', link:'/portfolio/advu' , type: 'Angular'},
  { name: 'Ketube' ,sub: 'ระบบร้องเพลงคาราโอเกะแบบออนไลน์', img:'./image/kt.png', link:'/portfolio/ketube' , type: 'Vue'},

]

const skills = [
  { name: 'Laravel' , link:'./image/skill/laravel.png' , height: '20'},
  { name: 'Angular' , link:'./image/skill/angular.png' , height: '20'},
  { name: 'Vue' , link:'./image/skill/vue.png' , height: '12'},
  { name: 'React' , link:'./image/skill/react.png' , height: '20'}
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [type, setType] = useState('All');
  const [work, setWork] = useState('');
  const [listWork , setWorks] = useState(works);

function filterType(val :string){
  setType(val);
  if(val === 'All'){
    setWorks(works)
  }else{
    setWorks(works.filter((work) => work.type === val))
  }
}

  return (
    <div> 
      {/* Body*/}
      <div id="home"></div>
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className='max-w-2xl'>
            <h1 className="text-5xl font-semibold tracking-tight">Panudet Prommate</h1>
            <p className="mt-4 text-lg">ตำแน่ง Front End Develop</p>
            <p className="mt-4 text-lg">ประสบการณ์การพัฒนาซอฟต์แวร์ 8 ปี ผมมุ่งมั่นที่จะนำทักษะและประสบการณ์ที่มีมาประยุกต์ใช้ เพื่อเติมเต็มและขับเคลื่อนองค์กรให้ก้าวหน้าไปพร้อมกัน</p>
            <div className='mt-4'>
            <a
                href="./resume.pdf"
                target="_blank"
                className="items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download CV
              </a>
            </div>
          </div>
          <img alt="" src='./image/banner.png' className="max-w-96 rounded-lg bg-white object-cover hidden lg:block md:block sm:hidden"/>
        </div>
      </div>
      <div id="portfolio"></div>
      <div className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className='max-w-2xl'>
            <h2 className="text-5xl font-semibold tracking-tight">Portfolio</h2>
          </div>
          <div className="inline-flex rounded-md gap-4" >
          {selectType.map((item) => (
                    <button   
                    key={item.name}
                    className={classNames(
                      type === item.name ? 'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'text-sm/6 font-semibold text-gray-900',
                    )}
                    onClick={()=>filterType(item.name)}>
                    {item.name}
            </button>
           ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {listWork.map((item) => (
            <Link href={item.link} key={item.name}>
              <div className='relative' key={item.name} onMouseEnter={() => setWork(item.name)} onMouseLeave={() => setWork('')}>
                <img alt="" src={item.img} className="w-full rounded-lg  object-cover border-2 border-black"/>
                <div 
                className={classNames(
                  work === item.name ? 'absolute w-full p-2 -mt-[120px]' : 'hidden',

                )}>
                  <div className='flex-col text-white bg-indigo-600 p-4 rounded-md h-24'>
                    <h4 className='font-semibold tracking-tight'>{item.name}</h4>
                    <p>{item.sub}</p>
                  </div>
                </div>
              </div>  
            </Link>
            
          ))}
          
          </div>
        </div>
      </div>
      <div id="skill"></div>
      <div className="mt-20 mb-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-5xl font-semibold tracking-tight">Skills</h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            { skills.map((item,index)=> (
                <img
                key = {index}
                alt={item?.name}
                src={item.link}
                className={`max-h-${item.height} w-full object-contain`}
                />
              ))
            }
          </div>
        </div>
      </div>
    
    </div>
  
  )
}
