// types.ts
export interface Combo {
  id: number
  name: string
  slug: string
  price: number
  body: string
  codes: never[]
}

export interface BrandData {
  name: string
  combo: Combo[]
  single: {
    id: number
    name: string
    trongluong: number
    egg: number
    price: number
  }[]
}

export interface Data {
  givral: BrandData
  brodard: BrandData
}

export interface IProduct {
  img: string
  id: number
  brand: string
  name: string
  trongluong?: number | undefined
  egg?: number | undefined
  price: number
  slug: string
  type: string
}

export interface ICombo {
  img: string
  id: number
  brand: string
  name: string
  slug: string
  price: number
  body: string
  codes: []
  type: string
}
