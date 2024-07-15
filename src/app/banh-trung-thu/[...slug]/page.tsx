"use client"
// app/combo-trung-thu/[slug]/page.tsx
import postsData from '../../../data/info.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useCounterStore } from '@/providers/counter-store-provider';
import { useState } from 'react';

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
var slugify = require('slugify')
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
  const handleAddProduct = (e:any) => {
    const val = e.target.value
    console.log(val)
    setNewProduct({ ...newProduct, id: Number(val) })
    addProduct(newProduct);
  };
  return (
    <main>
      {isList ? (
        <>
          <h2> Danh sách </h2>
          <ul>
            {singleItems.map((item: any,index) => {
              let url = slugify(item.name, { lower: true })
              return (
                <li key={item.id} >
                  <Link href={`/banh-trung-thu/${slug[0]}/${url}`}>{item.name} - {item.price}₫</Link>
                  <div>
                    <button data-link="" value={`${index}`} onClick={(e) => handleAddProduct(e)}>Mua</button>
                  </div>
                </li>
              )
            })}
          </ul>
          <Link href="/banh-trung-thu">Trở về danh sách</Link>
        </>

      ) : (

        <>
          <h2> Chi tiết bánh </h2>

          {singleItems.map((item: any) => {

   
            let url = slugify(item.name, { lower: true })
            if (slug[1] === url) {
              return (
                <li key={item.id}>
                  {item.name}
                  <br />
                  {url}
                  <br />
                  {item.info}
                  <br />
                  {item.price}
                </li>
              )
            }
          })}

          { }
          <Link href="/banh-trung-thu/givral/danh-sach-banh">Trở về danh sách</Link>
        </>

      )}


    </main>
  );
}
