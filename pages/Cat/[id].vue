<template>
    <PagingScrollView :list="catList">
        <DetailCat v-for="cat in catList" :key="cat.id" :id="id" />
    </PagingScrollView>
</template>

<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
console.log(id);
const catList: Array<{ id: string }> = reactive([{ id: id as string }]);
catList.push({ id: (+id + 1).toString() });
</script>
