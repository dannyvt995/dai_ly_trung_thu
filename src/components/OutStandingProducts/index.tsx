"use client"
import React from 'react'
import s from './style.module.css'
import data from '@/data/info.json'
import { shuffleArray } from '@/utils/shuffleArray';

export default function OutStandingProducts() {

    const list_combo = [
        ...data.givral.combo,
        ...data.brodard.combo
    ]
    const shuffledArray = shuffleArray([...list_combo]); // Trộn mảng và giữ nguyên mảng gốc
    const results = shuffledArray.slice(0, 9); // Lấy ra 6 phần tử đầu tiên
 
    return (
        <section className={s.outstandingproducts_section}>
            <div className='container'>
                <h2>SẢN PHẨM NỔI BẬT</h2>
                {results.map((combo, index) => (
                <button key={index}>{combo.name}</button> // Giả sử combo có thuộc tính 'name'
                ))}
            </div>
        </section>
    )
}
