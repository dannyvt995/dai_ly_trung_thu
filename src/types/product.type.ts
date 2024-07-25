export enum CAKE_TYPE {
  GIVRAL = 'givral',
  COMBO_GIVRAL = 'combo/givral',
  BRODARD = 'brodard',
  COMBO_BRODARD = 'combo/brodard'
}

export interface IProduct {
  id: number
  name: string
  body?: string
  slug: string
  price: number
  img: string
  type: string
  egg?: number
  codes?: any
  brand: string
  trongluong?: number
}
