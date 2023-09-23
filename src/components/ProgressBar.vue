<script lang="ts">
import { ref, defineComponent, type Ref, watchEffect } from 'vue';
    export default defineComponent({
        props: {
            complited: {
                type: Number,
                required: true
            },
            maximum: {
                type: Number,
                required: true
            }
        },
        methods: {
            calculate_percentage(){
                this.percentage_completion = this.complited / this.maximum * 100
                this.percentage_completion  =  this.complited > 0 ? this.percentage_completion : 0
            }
        },
        setup(){
            const percentage_completion: Ref<number> = ref(0)
            return {percentage_completion}
        },
        mounted(){
            this.calculate_percentage()
            watchEffect(this.calculate_percentage)
        }
    })
</script>
<template>
    <div class="flex gap-2 items-center m-2">
        <va-progress-bar :model-value="percentage_completion"></va-progress-bar>
        <div>{{complited}}/{{maximum}}</div>
    </div>
</template>