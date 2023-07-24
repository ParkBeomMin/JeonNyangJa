<template>
    <TouchContainer @onClick="onClick" @onLongClick="onLongClick">
        <img :src="url" alt="" />
        <p>{{ cat.id }}</p>
    </TouchContainer>
</template>

<script setup lang="ts">
const props = defineProps<{ cat: Cat }>();
const cat = computed(() => props.cat);
const emit = defineEmits(['onClick', 'onLongClick']);

const url = computed(() => `/assets/${props.cat.img}`);

const onClick = () => {
    console.log('click', cat);

    const router = useRouter();
    router.push(`/Cat/${cat.value.id}`);
};

const onLongClick = () => {
    console.log('onLongClick');
};
</script>
