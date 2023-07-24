<template>
    <div>
        <DetailCat :id="id" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
console.log(id);
</script>
