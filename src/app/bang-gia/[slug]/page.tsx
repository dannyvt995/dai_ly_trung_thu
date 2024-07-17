import Table_Price_Brodard from '@/noname/Table_Price_Brodard';
import Table_Price_Givral from '@/noname/Table_Price_Givral';
import React from 'react'
interface IParams {
  slug: string;
}

export default function PriceBrand({ params }: { params: IParams }) {
  const { slug } = params;
  const list_slug = ['bang-gia-banh-givral', 'bang-gia-banh-brodard']
  if (list_slug[0] === slug) {
    return (
      <main>
        <h1>Bảng giá Givral 2024</h1>
        <Table_Price_Givral />
      </main>
    )
  } else if (list_slug[1] === slug) {
    return (
      <main>
        <h1>Bảng giá Brodard 2024</h1>
        <Table_Price_Brodard />
      </main>
    )
  }

}
