"use client";

import Card from "@/share/card";


const images = [
  "/image/work/cp/1.png",
 "/image/work/cp/2.png",
 "/image/work/cp/3.png",
 "/image/work/cp/4.png",
 "/image/work/cp/5.png",
 "/image/work/cp/6.png",
];

const data = {
  name: 'Cryptoprop' , tool: 'Vue.js , Strapi', work: 'Full Stack', web: 'https://cryptoprop.co.th',
  detail: 'เว็บไซต์บริษัท Cryptoprop โดยภายในเว็บจะประกอบไปด้วยข้อมูลบริษัท ผลิตภัณฑ์ และข่าวสาร',
  features : [
    {detail : 'รายละเอียดเกี่ยวกับบริษัท'},
    {detail : 'การแสดงผลิตภัณฑ์ของบริษัท'},
    {detail : 'การแสดงบทความ และ ข่าวสาร'},
  ],
  nextPage: '/portfolio/advu'
};


export default function ApPage() {
  return (
    <Card data={data} images={images}></Card>

  )
}
