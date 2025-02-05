"use client";
import Card from "@/share/card";


const images = [
  "/image/work/coin/1.png",
 "/image/work/coin/2.png",
 "/image/work/coin/3.png",
 "/image/work/coin/4.png",
 "/image/work/coin/5.png",
 "/image/work/coin/6.png",
];

const data = {
  name: 'Coin Pro' , tool: 'Angular', work: 'Front End', web: '',
  detail: 'เว็บไซต์เกี่ยวกับการนำเสนอบทความ และข้อมูลข่าวสาร',
  features : [
    {detail : 'การแสดงรายการข่าวสาร และบทความ'},
    {detail : 'การแบ่งหมวดหมู่ข่าวสาร และบทความ'},
  ],
  nextPage: '/portfolio/otc'
};


export default function CoinPage() {

  return (
    <Card data={data} images={images}></Card>

  )
}
