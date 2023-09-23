<script lang="ts">
import type { IProduct } from '@/assets/interfaces';
import type { PropType } from 'vue';

 export default {
    methods: {
        calculate_percentage(){
            let percentage_completion= this.complited / this.maximum * 100
            return percentage_completion ? percentage_completion : 0
        }
    },
    props: {
        products: {
            type: Array as PropType<IProduct[]>,
            required: true
        },
        complited: {
            type: Number,
            required: true
        },
        maximum: {
            type: Number,
            required: true
        }
    }
}
</script>