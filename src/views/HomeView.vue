
<script setup lang="ts">
import { storeToRefs, type StoreDefinition } from 'pinia';
import ProductListCard from "../components/cards/ProductListCard.vue"
import FixedProgressMonitor from "../components/FixedProgressMonitor.vue"
import { useProductListsStore } from '@/stores/ProductLists';
import { ref, watchEffect, type Ref } from 'vue';
import type { IProduct, IShoppingList } from '@/assets/interfaces';

const store = useProductListsStore()

const { lists } = storeToRefs(store)
const products: Ref<IProduct[]> = ref([])

let complited = ref(0)

watchEffect(store.sort_lists)
watchEffect(find_complited)
watchEffect(fill_product_list)

function fill_product_list(){
    products.value = []
    for (let list of lists.value){
        for (let product of list.products){
            products.value.push(product)
        }
    }
}
function find_complited(){
    complited.value = 0
    for (let list of lists.value){
        let c = 0
        for (let product of list.products){
            if (product.buyed){
                c += 1
            }
        }
        if (c == list.products.length && list.products.length != 0){
            complited.value += 1
        }
    }
}

</script>

<template>
  <div  class="flex flex-col gap-2">
    <h1 class=" text-xl"> <va-icon name="receipt_long" :size="24"></va-icon> Списки покупок</h1>
    <va-button icon="add" v-on:click="store.add_shopping_list()"></va-button>
    <ProductListCard v-for="(list) in lists" :item="list" :key="list.id"/>
    <FixedProgressMonitor
        :complited="complited" 
        :maximum="lists.length" 
        :products="products"
    />
  </div>
</template>vue.configvue.configvue.configvue.config