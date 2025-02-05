"use client";


import Card from "@/share/card";


const images = [
  "/image/work/kt/1.png",
 "/image/work/kt/2.jpeg",
 "/image/work/kt/3.png",
 "/image/work/kt/4.png",
 "/image/work/kt/6.png",
];

const data = {
  name: 'Ketube' , tool: 'Vue.js', work: 'Front End', web: 'https://github.com/panudet001/ketube-client',
  detail: 'เว็บไซต์เกี่ยวกับการร้องเพลงคาราโอเกะแบบออนไลน์',
  features : [
    {detail : 'การแสดงรายการเพลง'},
    {detail : 'การฟังเพลง และร้องเพลงคาราโอเกะ'},
    {detail : 'การค้นหาเพลง'},
    {detail : 'ประวัติการฟังเพลง'},
  ],
  nextPage: '/portfolio/abm'
};


export default function KtPage() {

  return (
    <Card data={data} images={images}></Card>

  
  )
}
