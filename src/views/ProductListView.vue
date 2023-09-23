<script setup lang="ts">

import { useProductListsStore } from '@/stores/ProductLists';
import { useRoute } from 'vue-router';
import ProductCard from "../components/cards/ProductCard.vue"
import { ref, watchEffect, type Ref } from 'vue';
import type { IProduct, IShoppingList } from '@/assets/interfaces';
import router from '@/router';
import FixedProgressMonitor from "../components/FixedProgressMonitor.vue"
const route = useRoute()
const store = useProductListsStore()

const product_list: Ref<IShoppingList | null> = ref(store.get_list_by_id(Number(route.params.id)))

let buyed_products: Ref<IProduct[]>= ref([])

if (product_list == null || product_list.value == undefined){
    router.replace("/")
}

watchEffect(update)

function update(){
    if (product_list.value != null){
        buyed_products.value = product_list.value.products.filter(product=>product.buyed)
        product_list.value = store.sort_products(product_list.value)
    }
}

</script>

<template>
    <div class="flex flex-row transition-all">
        <h1 class="mb-2 text-2xl">
            {{ product_list?.title }}
        </h1>
        <va-button icon="arrow_back" class="mb-5 ml-auto" v-on:click="$router.go(-1)"></va-button>
    </div>
    <div class="flex flex-col gap-2">
        <va-button icon="add" v-on:click="store.add_product(product_list.id), update()" v-if="product_list"></va-button>
        <ProductCard 
        v-for="(product, index) in product_list?.products" 
        :list_id="product_list?.id"
        :item="product" 
        :key="index.toString() + product.id.toString()" 
    />        
    </div>
    <FixedProgressMonitor
        :complited="buyed_products.length" 
        :maximum="product_list?.products.length ? product_list.products.length: 0" 
        :products="product_list?.products ? product_list.products: []"
    />
    
</template>vue.configvue.configvue.configvue.config