<script lang="ts">
import { defineComponent, ref, type PropType, watchEffect } from 'vue';
import type { IProduct } from '../assets/interfaces';
    export default defineComponent({
        props: {
            products: {
                type: Array as PropType<IProduct[]>
            }
        },
        setup(){
            const remaining_amount = ref(0)
            const spent_amount = ref(0)
            return {spent_amount, remaining_amount}
        },
        methods:{
             calculate_amount(){
                console.log("calculate_amount");
                
                this.spent_amount = 0
                this.remaining_amount = 0
                for (let index in this.products){
                    if ( this.products[Number(index)].buyed){
                        this.spent_amount +=  this.products[Number(index)].price *  this.products[Number(index)].count

                    }else{
                        this.remaining_amount +=  this.products[Number(index)].price *  this.products[Number(index)].count
                    }
                }
            }
        },
        mounted() {
            this.calculate_amount()
            watchEffect(this.calculate_amount)
        },
    })
</script>

<template>
    <div class="flex justify-between w-[80%] m-auto mt-4 mb-4 max-sm:text-sm max-md:w-full max-md:justify-center gap-5">
        <div class="w-fit ">
            <h3 class="text-gray-500">Не приобретено</h3>
            <div class="text-lg">{{remaining_amount}} <va-icon name="currency_ruble"></va-icon></div>
        </div>
        <div class="w-fit">
            <h3 class="text-gray-500">Приобретено</h3>
            <div class="text-lg">{{spent_amount}}<va-icon name="currency_ruble"></va-icon></div>
        </div>
        <div class="w-fit">
            <h3 class="text-gray-500">Всего</h3>
            <div class="text-lg">{{remaining_amount + spent_amount}} <va-icon name="currency_ruble"></va-icon></div>
        </div>
    </div>
</template>vue.config