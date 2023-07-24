<template>
    <div ref="pagingScroll">
        <slot />
    </div>
</template>

<script setup lang="ts">
const pagingScroll = ref();
console.log(pagingScroll);
console.log(pagingScroll.value);
const { list } = defineProps<{ list: Array<any> }>();
let curIndex = ref(0);
const router = useRouter();
onMounted(() => {
    console.log((pagingScroll.value as HTMLDivElement).clientHeight);
    window.addEventListener('scroll', () => {
        let val = window.innerHeight + window.scrollY;
        console.log(window.innerHeight, window.scrollY, document.body.offsetHeight);
        console.log(Math.round(document.body.offsetHeight / 2));

        if (document.body.offsetHeight == window.scrollY) {
            console.log('scroll');

            router.replace(`/Cat/${list[++curIndex.value].id}`);
        }
    });
});
// console.log((pagingScroll.value as HTMLDivElement).clientHeight);
</script>
