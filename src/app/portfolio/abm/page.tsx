"use client";

import Card from '@/share/card';


const images = [
  "/image/work/abm/6.png",
 "/image/work/abm/2.png",
 "/image/work/abm/3.png",
 "/image/work/abm/4.png",
 "/image/work/abm/5.png",
];

const data = {
  name: 'Andaman Boat Master' , tool: 'Laravel', work: 'Front End', web: 'https://andamanwaveferry.com/',
  detail: 'เว็บซื้อตั๋วเรือออนไลน์ที่จะช่วยให้การเดินทางสะดวกขึ้นมาก เพราะไม่ต้องเสียเวลาไปต่อคิวหรือกังวลเรื่องตั๋วหมดเมื่อถึงท่าเรือ',
  features : [
    {detail : 'การแสดงรายการการเดินเรือ'},
    {detail : 'การค้นหาเที่ยวเรือ'},
    {detail : 'การชำระเงินออนไลน์'}
  ],
  nextPage: '/portfolio/coinPro'
};

export default function AbmPage() {
  return (
    <div>
      <Card data={data} images={images}></Card>
    </div>
  
  )
}
