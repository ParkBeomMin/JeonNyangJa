<template>
    <label for="name" class="flex w-full">
        <span class="place-self-center">{{ label }}</span>
        <input class="flex-1 text-base rounded-2xl outline-none p-1 pl-2 bg-key-color-light text-key-color-dark" id="name" type="text" v-model="value" />
    </label>
</template>

<script setup lang="ts">
const props = defineProps(['label', 'modelValue']);
const emit = defineEmits(['update:modelValue']);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
});
</script>
