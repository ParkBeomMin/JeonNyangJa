<template>
    <TouchContainer class="flex flex-col" @onDoubleClick="onDoubleClick">
        <img :src="url" :alt="`${name}-${id}`" />
        <DetailUtils />
        <span>{{ name }}</span>
        <span>{{ oneSentence }}</span>
    </TouchContainer>
</template>

<script setup lang="ts">
const { id } = defineProps<{ id: string }>();

const { getCatData } = useCat();
const { name, oneSentence, img } = getCatData({ id });
const url = computed(() => `/assets/${img}`);

const onDoubleClick = () => {
    console.log('like');
};
</script>
