import Link from "next/link"
import { useState } from "react";


interface Work {
    name: string;
    tool: string;
    work: string;
    web: string;
    detail: string;
    features : Features[];
    nextPage: string;
}

interface Features {
    detail: string;
}

interface CardProps {
    data: Work;
    images: string[];
  }


const Card: React.FC<CardProps>  =({data ,images})=> {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
    return (
        <div >
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              {data.name}
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-gray-500">
                เครื่องมือ : {data.tool}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
              งานที่รับผิดชอบ : {data.work}
              </div>
            </div>
          </div>
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span>
          {data.web && (
            <Link
            href={data.web}
            target='_blank'
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {data.name === 'ADVU' || data.name === 'Ketube' ? 'Go to github' : 'Go to website'}
          
          </Link>
          )}
      
        </span>
        </div>
        </div>    
      </div>    

      
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden mt-10">
      {/* Slider */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full max-h-[625px] flex-shrink-0 object-cover object-top z-20"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
      </div>
      <div className="mt-10 mb-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:pr-4">
              
              <h2 className="text-2xl	 font-bold text-gray-900 sm:truncate sm:tracking-tight">
              เกี่ยวกับเว็บไซต์</h2>
                <p className="mt-6 text-xl/8 text-gray-700">
                {data.detail}
                </p>
             
            
          </div>
          <div className="lg:pr-4 mt-10">
              <h2 className="text-2xl	 font-bold text-gray-900 sm:truncate sm:tracking-tight">
              ฟีเจอร์สำคัญ</h2>
              <div className="mt-6">
                {data.features.map((item, index) => (
                  <p className="text-xl/8 text-gray-700" key={index}> 
                   - {item.detail}
                  </p>
                ))}
          
          </div>
          </div>
      </div>
      <div className="mt-10 mb-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className='flex justify-between items-center text-white bg-indigo-600 p-4 rounded-md h-24'>
          <Link href='/'>
          <h2 className="text-2xl	 font-bold  sm:truncate sm:tracking-tight">
          Home
          </h2>
          </Link>
          <Link href={data.nextPage}>
          <h2 className="text-2xl	 font-bold  sm:truncate sm:tracking-tight">
            Next Portfolio <span aria-hidden="true">→</span>
            </h2>
          </Link>
      </div>
      </div>
       
    </div>
    )
}

export default Card
