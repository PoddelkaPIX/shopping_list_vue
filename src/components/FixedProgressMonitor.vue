<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import BaseProgressMonitor  from "./bases/BaseProgressMonitor.vue"
import ProgressBar from './ProgressBar.vue'
import SpendingMonitor from "./SpendingMonitor.vue"

export default defineComponent({
    extends: BaseProgressMonitor,
    components: {
        ProgressBar,
        SpendingMonitor
    },
})
</script>
<template>
   <div class="fixed right-0 bottom-0 w-80 bg-white p-2 max-2xl:w-full max-2xl:border-t-2 max-2xl:p-0">
        <SpendingMonitor class="text-[10px]" :products="products"/>
        <ProgressBar :complited="complited" :maximum="maximum"/>
   </div>
</template>

vue.config