'use client'
import React, { useState, useEffect } from 'react';
import CardItem from './cardItem';
import Link from 'next/link';

interface Item {
    type: string;
    name: string;
}

const data: Item[] = [
    {
        type: 'Fruit',
        name: 'Apple',
    },
    {
        type: 'Vegetable',
        name: 'Broccoli',
    },
    {
        type: 'Vegetable',
        name: 'Mushroom',
    },
    {
        type: 'Fruit',
        name: 'Banana',
    },
    {
        type: 'Vegetable',
        name: 'Tomato',
    },
    {
        type: 'Fruit',
        name: 'Orange',
    },
    {
        type: 'Fruit',
        name: 'Mango',
    },
    {
        type: 'Fruit',
        name: 'Pineapple',
    },
    {
        type: 'Vegetable',
        name: 'Cucumber',
    },
    {
        type: 'Fruit',
        name: 'Watermelon',
    },
    {
        type: 'Vegetable',
        name: 'Carrot',
    },
]

const TodoList = () => {

    const [items, setItem] = useState<Item[]>(data)
    const [newItems, setNewItem] = useState<Item[]>([])
    const [time, setTime] = useState<number>(0);
    const [lockBtn, setLockBtn] = useState<boolean>(true);

    const selectItem = (item: Item) => {
        setTime((prevTime) => {
            if (lockBtn && prevTime === 0 && newItems.length === 0) {
                return 5;
            }
            return prevTime;
        });
        if(lockBtn){
            setNewItem((prevNewItems) => [...prevNewItems, item]);
            setItem((prevItems) => prevItems.filter((d) => d !== item));
        }
       
    }


    const cancelItem = (item: Item) => {
        if(lockBtn){
            setNewItem((prevNewItems) => prevNewItems.filter((d) => d !== item));
            setItem((prevItems) => [...prevItems, item]);
        }
        

    }

    const handleBack = () => {
        if (lockBtn && newItems.length > 0) {
            const firstItem = newItems[0];
            setNewItem((prevNewItems) => prevNewItems.filter((d) => d.name !== firstItem.name));
            setItem((prevItems) => [...prevItems, firstItem]);
        }
    };

    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else {
            if (newItems.length > 0) {
                setLockBtn(false);
                if (newItems.length > 0) {
                    newItems.forEach((item, index) => {
                        setTimeout(() => {
                            setItem((prevItems) => [...prevItems, item]);
                            setNewItem((prevNewItems) => prevNewItems.filter((d) => d.name !== item.name));
                        }, index * 500);
                    });
                }

            }
        }
    }, [time]);

    useEffect(()=> {
        if(newItems.length === 0){
            setLockBtn(true);
        }
    },[newItems])


    return (
        <>
            <div className='text-lg pl-10 pr-10 mt-5 flex gap-2 mb-2 justify-end items-center'>
                <h1>{time} s</h1>
                <Link
                    href='https://github.com/panudet001/portfolio/tree/main/src/app/todo-list'
                    target='_blank'
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Go to github
                </Link>
            </div>
            <div className='grid grid-cols-3 gap-4 pl-10 pr-10'>
                <div className='flex flex-col gap-2'>
                    {items.map((item, index) => (
                        <button key={index} type='button' onClick={() => selectItem(item)} className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>{item.name}</button>
                    ))}
                </div>
                <CardItem name='Fruit' data={newItems} onClickHandleBack={handleBack} onClickCancelItem={cancelItem}></CardItem>
                <CardItem name='Vegetable' data={newItems} onClickHandleBack={handleBack} onClickCancelItem={cancelItem}></CardItem>
            </div>

        </>
    )
}

export default TodoList