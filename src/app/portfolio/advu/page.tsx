"use client";

import Card from "@/share/card";


const images = [
  "/image/work/advu/1.png",
 "/image/work/advu/2.png",
 "/image/work/advu/3.png",
 "/image/work/advu/4.png",
 "/image/work/advu/5.png",
 "/image/work/advu/6.png",
];

const data = {
  name: 'ADVU' , tool: 'Angular', work: 'Front End', web: 'https://github.com/panudet001/advu-client',
  detail: 'เว็บไซต์เกี่ยวกับการลงทุนในอสังหาริมทรัพย์',
  features : [
    {detail : 'การแสดงรายการการอสังหาริมทรัพย์'},
    {detail : 'การลงทุนอสังหาริมทรัพย์'},
    {detail : 'การโอนเงินเข้าระบบ'},
    {detail : 'ประวัติรายการธุรกรรม'},
  ],
  nextPage: '/portfolio/ketube'
};


export default function AdvuPage() {
  return (
    <Card data={data} images={images}></Card>

  
  )
}
