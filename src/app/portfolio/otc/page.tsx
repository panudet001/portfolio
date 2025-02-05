"use client";

import Card from "@/share/card";


const images = [
  "/image/work/otc/1.png",
 "/image/work/otc/2.png",
 "/image/work/otc/3.png",
 "/image/work/otc/4.png",
 "/image/work/otc/5.png",
 "/image/work/otc/6.png",
];

const data = {
  name: 'OTC Exchange' , tool: 'Vue.js', work: 'Front End', web: 'https://otc-groups.com',
  detail: 'เว็บไซต์บริษัท OTC โดยภายในเว็บจะประกอบไปด้วยข้อมูลบริษัท ข่าวสาร และ เรตอัตราแลกเปลี่ยนเงินตรา',
  features : [
    {detail : 'รายละเอียดเกี่ยวกับบริษัท'},
    {detail : 'การแสดง อัตราแลกเปลี่ยนเงินตรา สำหรับสกุลเงินต่างๆ ในเเต่ละสาขา'},
    {detail : 'การแสดงบทความ และ ข่าวสาร'},
  ],
  nextPage: '/portfolio/cryptoprop'
};


export default function OtcPage() {

  return (
    <Card data={data} images={images}></Card>

  
  )
}
