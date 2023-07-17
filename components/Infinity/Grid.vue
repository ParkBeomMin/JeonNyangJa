<template>
    <div class="grid grid-cols-3 gap-4">
        <InfinityItem v-for="(cat, i) in catList" :key="i" :cat="cat" />
    </div>
</template>

<script setup lang="ts">
const { useCatData } = useCat();

const catList = computed(() => useCatData.value.catList);
</script>
