import React from 'react';
import s from './style.module.css';
import type { Metadata } from "next";
import data from '@/data/info.json';
import Link from 'next/link';
import { Data } from '@/types/data_type';

export const metadata: Metadata = {
    title: "",
    description: "",
};

interface IParams {
    slug: keyof Data;
}

export default function ComboBrand({ params }: { params: IParams }) {
    const { slug } = params;

    if (slug.length > 1) {
        const collection_data_combo = [
            ...data.givral.combo,
            ...data.brodard.combo,
        ];
        const post: any = collection_data_combo.find((p) => p.slug === slug[1]);

        return (
            <main>
                <h1>======== ID {post.id}</h1>
                <p>======== NAME {post.name}</p>
                <p>======== BODY {post.body}</p>
                <Link href="/combo">Trở về danh sách</Link>
            </main>
        )
    } else {
        const products = data[slug].combo;
        return (
            <main>
                <h2>Danh sách combo {slug === 'givral' ? 'Givral' : 'Brodard'}</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <Link href={`/combo/${slug}/${product.slug}`}>
                                <span>{product.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        );
    }

}
