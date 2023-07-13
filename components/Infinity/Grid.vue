<template>
    <div class="grid grid-cols-3 gap-4">
        <InfinityItem v-for="(cat, i) in catList" :key="i" />
    </div>
</template>
