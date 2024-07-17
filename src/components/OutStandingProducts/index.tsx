
import React from 'react'
import s from './style.module.css'
import data from '@/data/info.json'
import { shuffleArray } from '@/utils/shuffleArray';

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
                <ul>
                    {results.map((combo, index) => (
                        <li key={index}>
                            <div className={s.item}>
                                <h3>{combo.name}</h3>
                                <a href={`/combo/${combo.brand}/${combo.slug}`}>Chi tiết</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
