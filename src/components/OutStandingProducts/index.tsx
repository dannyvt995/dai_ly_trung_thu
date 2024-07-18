
import React from 'react'
import s from './style.module.css'
import data from '@/data/info.json'
import { shuffleArray } from '@/utils/shuffleArray';
import ImageLoad from '../ImageLoad';

export default function OutStandingProducts() {

    const list_combo = [
        ...data.givral.combo,
        ...data.brodard.combo
    ]
    const shuffledArray = shuffleArray([...list_combo]);
    const results = shuffledArray.slice(0, 9);

    return (
        <section className={s.outstandingproducts_section}>
            <div className='container'>
                <h2>SẢN PHẨM NỔI BẬT</h2>
                <ul className='list_item'>
                    {results.map((combo, index) => (
                        <li key={index} className='item'>
                        
                                <div className='image'> <ImageLoad src={combo.img} alt={'he'}/></div>
                                <h3 className='name'>{combo.name}</h3>
                                <h3>{combo.id}</h3>
                                <a  href={`/combo/${combo.brand}/${combo.slug}`}> Chi tiet</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
