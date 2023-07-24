<template>
    <div>
        <h1>{{ title }}</h1>
        <ListGrid :catList="catList" />
    </div>
</template>

<script setup lang="ts">
const { type } = defineProps<{ type: string }>();
const { getTitle } = useRanking();
const title = computed(() => getTitle({ type }));
const catList = [
    { id: '17', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
    { id: '19', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
    { id: '20', name: '베르', oneSentence: '베르베르', img: 'test.jpg' },
];
</script>
