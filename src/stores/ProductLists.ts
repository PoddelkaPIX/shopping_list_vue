import { defineStore } from 'pinia'
import type { IProduct, IShoppingList } from '@/assets/interfaces'

interface IStoreState {
  lists: IShoppingList[]
  measurements: String[]
}

export const useProductListsStore = defineStore('productLists', {
  state: (): IStoreState=>({
    measurements: [" ", 'шт.', 'л.', 'кг.'],
    lists: <IShoppingList[]>[
      {
        id: 1,
        title: "Новый список",
        products: [
          {
            id: 1,
            title: "Молоко",
            count: 2,
            price: 65,
            buyed: false,
            measurement: ""
          },
          {
            id: 2,
            title: "Хлеб",
            count: 1,
            price: 30,
            buyed: false, 
            measurement: ""
          }
        ]
      },
      {
        id: 2,
        title: "Новый список 2",
        products: []
      }
    ]
  }),
  actions: {
    get_list_by_id(list_id: number): IShoppingList | null{
      for (let index in this.lists){
        if (this.lists[index].id == list_id){
          return this.lists[index]
        }
      }
      return null
    },
    add_shopping_list(){
      this.lists.unshift({
        id: this.lists.length + 1,
        title: "Новый список",
        products: []
      })
    },
    add_product(list_id: number, product: IProduct = {
      id: 0,
      title: '',
      count: 1,
      price: 0,
      buyed: false,
      measurement: ""
    }){
      for (let list of this.lists){
        if (list.id == list_id){
          product.id = list.products.length + 1
          list.products.unshift(product)
          return
        }
      }
    },
    delete_shopping_list(list_id: number){
      this.lists = this.lists.filter((list) => list.id != list_id);
    },
    delete_product(list_id: number, product_id: number){
      let list = this.get_list_by_id(list_id)
      list.products = list.products.filter((product) => product.id != product_id);
    },
    is_complited(list: IShoppingList){
      let buyed = list.products.filter(item => item.buyed == true).length
      return buyed === list.products.length && buyed > 0
    },
    sort_lists(){
      this.lists.sort((a: IShoppingList, b: IShoppingList)=>{
        if (this.is_complited(a) && !this.is_complited(b)){
          return 1
        }else if (this.is_complited(b) && !this.is_complited(a)){
          return -1
        }
        return 0
      })
    },
    sort_products(list: IShoppingList){
      list.products.sort((a: IProduct, b: IProduct)=>{
        if (a.buyed){
          return 1
        }else if (b.buyed){
          return -1
        }
        return 0
      })
      return list
    },
  }
})