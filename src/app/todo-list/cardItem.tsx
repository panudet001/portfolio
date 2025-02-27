
import React from 'react';

interface Item {
    type: string;
    name: string;
}

interface CardProps {
    name: string;
    data: Item[];
    onClickHandleBack: () => void;
    onClickCancelItem: (item: Item) => void;
}

const CardItem: React.FC<CardProps> = ({ name, data, onClickHandleBack, onClickCancelItem }) => {
    return (<>
        <div className='flex flex-col'>
            <div className='text-center text-lg p-2 bg-gray-200 font-bold'>
                {name}
            </div>
            <div className='border-2 flex flex-col p-2 h-[600px]' onClick={() => onClickHandleBack()}>
                {data.filter((item) => item.type === name).map((item, index) => (
                    <button key={index} type='button' onClick={(e) => { e.stopPropagation(); onClickCancelItem(item); }} className='py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>{item.name}</button>
                ))}
            </div>
        </div>
    </>)
}

export default CardItem;

