import React from 'react';
import s from './style.module.css';
import type { Metadata } from "next";
import data from '@/data/info.json';
import Link from 'next/link';
import { Data } from '@/types/data_type';
import SubBanner from '@/components/SubBanner';
import ImageLoad from '@/components/ImageLoad';

export const metadata: Metadata = {
    title: "",
    description: "",
};

interface IParams {
    slug: keyof Data;
}

export default function ComboBrand({ params }: { params: IParams }) {
    const { slug } = params;
    const collection_data_combo = [
        ...data.givral.combo,
        ...data.brodard.combo,
    ];
    if (slug.length > 1) {
   
        const products: any = collection_data_combo.find((p) => p.slug === slug[1]);

        return (
            <main>
                <SubBanner />
                <div className='container'>
                    <div className='detail_products'>
                        <div className='image'>
                            <ImageLoad src={products.img} alt={'he'}/>
                        </div>
                    </div>
                    <div className='info'>
                        <h1>{products.name}</h1>
                        <p>{products.body}</p>
                    </div>
              
                    <Link href={`/combo/${slug[0]}`}>Trở về danh sách</Link>
                </div>
            </main>
        )
    } else {
        const products = data[slug].combo;
        return (
            <main>
                <SubBanner />
                <div className='container'>
                    <h2>Danh sách combo {slug === 'givral' ? 'Givral' : 'Brodard'}</h2>
                    <ul className='list_item'>
                        {products.map((product:any) => (
                            <li key={product.id} className='item'>
                            
                                <div className='image'><ImageLoad src={product.img} alt={'he'}/></div>
                                <h3 className='name'>{product.name}</h3>
                                <Link href={`/combo/${slug}/${product.slug}`}>
                                    Chi tiết
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        );
    }

}
