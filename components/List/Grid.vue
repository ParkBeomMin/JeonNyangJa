<template>
    <div class="grid grid-cols-3 gap-4">
        <ListItem v-for="(cat, i) in catList" :key="i" :cat="cat" />
    </div>
</template>

<script setup lang="ts">
const { catList } = defineProps<{ catList: Array<Cat> }>();
</script>
