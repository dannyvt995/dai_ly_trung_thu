"use client"
// app/combo/[slug]/page.tsx
import postsData from '../../../data/info.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useCounterStore } from '@/providers/counter-store-provider';
import { useState } from 'react';
import SubBanner from '@/components/SubBanner';
import ImageLoad from '@/components/ImageLoad';

interface ICombo {
  id: number;
  title: string;
  slug: string;
  body: string;
}

interface ISingle {
  name: string;
  info: string;
  price: number;
}

interface IBakery {
  name: string;
  combo: ICombo[];
  single: ISingle[];
}

interface IPostsData {
  givral: IBakery;
  brodard: IBakery;
}

interface IParams {
  slug: string;
  name: string;
}

export default function PostPage({ params }: { params: IParams }) {
  const { slug } = params;
  let isList = false
  if (slug[1] == 'danh-sach-banh') isList = true

  const listbanh = postsData[slug[0] as keyof IPostsData];

  if (!listbanh || !listbanh.single) {
    notFound(); // cc
  }
  const [newProduct, setNewProduct] = useState({ id: 0, name: '', brand: '' });
  const singleItems = listbanh.single;
  const addProduct = useCounterStore((state) => state.addProduct);
  const handleAddProduct = (e: any) => {
    const val = e.target.value

    setNewProduct({ ...newProduct, id: Number(val) })
  };
  return (
    <main>
      <SubBanner />
      {isList ? (
        <div className='container'>
          <h2>Danh sách {slug[0]}</h2>
          <ul className='list_item'>
            {singleItems.map((item: any, index) => {
              console.log(item)
              return (
                <li key={item.id} className='item'>
                  <div className='image'> <ImageLoad src={item.img} alt={'he'} /></div>
                  <h3 className='name'>{item.name}</h3>
                  <Link href={`/banh-tu-chon/${slug[0]}/${item.slug}`}>Chi tiết</Link>

                </li>
              )
            })}
          </ul>
          <Link href="/banh-tu-chon">Trở về danh sách</Link>
        </div>
      ) : (
        <div className='container'>

          {singleItems.map((item: any) => {
            if (slug[1] === item.slug) {
              return (
                <div className='detail_products'>
                  <div className='image'>
                    <ImageLoad src={item.img} alt={'he'} />
                  </div>
                  <div className='info'>
                    <h2>{item.name}</h2>
                    <br />
                    {item.info}
                    <br />
                    {item.price}
                  </div>
                 
                </div>
              )
            }
          })}

          <Link href="/banh-tu-chon/givral/danh-sach-banh">Trở về danh sách</Link>
        </div>
      )}
    </main>
  );
}
