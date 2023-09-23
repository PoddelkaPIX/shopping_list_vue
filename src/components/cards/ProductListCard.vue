<script lang="ts" setup >
import type {IShoppingList } from '@/assets/interfaces';
import { useProductListsStore } from '@/stores/ProductLists';
import { ref, type PropType } from 'vue';

const props = defineProps({
    item: {
        type: Object as PropType<IShoppingList>,
        required: true
    }
})

const store = useProductListsStore()

const all = props.item.products.length
const buyed = props.item.products.filter(item => item.buyed == true).length

let percentage_completion =  buyed / all * 100
percentage_completion = percentage_completion ? percentage_completion : 0

let complited = ref(percentage_completion == 100)
</script>

<template>
    <div class=" flex flex-row border-gray-100 shadow-md  
    p-2 rounded-lg 
    bg-white 
    gap-2
    hover:border-gray-200 border-2
    " :class="{'bg-gray-300  border-0': complited}">
        <router-link 
            :to='"/shoppingList/"+item.id'
                class="flex flex-col gap-2 cursor-pointer w-full"
            >
            <input class="border-0 outline-none bg-transparent " v-on:click.prevent="()=>{}" v-model="item.title"/>
            <va-progress-bar :model-value="percentage_completion" :color="complited ? '#a1a1a1' : 'white'"/>
        </router-link>
        <div class="flex flex-col items-center gap-1 ml-auto">
            <va-dropdown placement="top-end">
                <template #anchor>
                    <va-icon name="more_vert" class="ml-auto" />
                </template>
                <va-dropdown-content :no-padding="true"> 
                    <div class="flex flex-col gap-2 p-1 border-2 border-gray-200  rounded-lg">
                        <va-button color="danger" v-on:click="store.delete_shopping_list(item.id)">Удалить</va-button>
                    </div>
                </va-dropdown-content>
            </va-dropdown>
            <div class="w-10">
                {{ all == 0 ? "Пусто" :  buyed+"/"+all  }}
            </div>
    </div>
    </div>
    </template>