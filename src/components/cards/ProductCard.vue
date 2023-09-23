<script lang="ts" setup >
import type { IProduct } from '@/assets/interfaces';
import {type PropType } from 'vue';
import {useProductListsStore} from "../../stores/ProductLists"

const props = defineProps({
    item: {
        type: Object as PropType<IProduct>,
        required: true
    },
    list_id: {
        type: Number,
        required: true,
        default: 0
    }
})

const store = useProductListsStore()

</script>

<template>
    <div class="flex gap-2">
        <va-checkbox></va-checkbox>
        <input class=" scale-150" type="checkbox"  v-model="item.buyed" v-bind:checked="item.buyed">
        <input class="border-0 outline-none w-full bg-transparent" placeholder="Название" v-model="item.title"/>
        <div class="flex items-center">
            <input class="border-0 outline-none bg-transparent w-12 text-right" placeholder="?" :maxlength="4" :min="1" :max="9999" v-model="item.count"  type="number"/>
            <!-- <select
                class="bottom-3 col-span-1 w-12 align-text-top"
                v-model="item.measurement"
                >
               
                <option v-for="item in store.measurements" :value="item" class="border-2 border-red flex gap-2">{{item}}</option>
            </select> -->
        </div>
        <div class="flex items-center">
            <input class="border-0 outline-none bg-transparent w-16 text-right appearance-none" placeholder="?"  :maxlength="7" v-model="item.price" :min="0" :max="9999999" type="number"/>
            <va-icon name="currency_ruble" size="small"></va-icon>
        </div>
        <va-button
        v-on:click="store.delete_product(list_id, item.id)"
            icon="delete"
            color="danger"
        >
        </va-button>
    </div>
</template>vue.configvue.configvue.configvue.config