<template>
    <div class="flex flex-col min-h-screen">
        <TouchContainer @onDoubleClick="onDoubleClick">
            <img :src="url" :alt="`${name}-${id}`" />
        </TouchContainer>
        <DetailUtils />
        <span>{{ name }}</span>
        <span>{{ oneSentence }}</span>
    </div>
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
