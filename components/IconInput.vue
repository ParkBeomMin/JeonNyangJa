<template>
    <label :for="`icon-input-${icon}`" class="flex w-full">
        <input class="flex-1 text-base p-1 pl-2 rounded-2xl outline-none bg-key-color-light text-key-color-dark" :id="`icon-input-${icon}`" type="text" v-model="value" />
        <i :data-feather="icon" class="w-6 sm:w-8 h-6 sm:h-8"></i>
    </label>
</template>

<script setup lang="ts">
import feather from 'feather-icons';
const props = defineProps(['icon', 'modelValue']);
const emit = defineEmits(['update:modelValue']);
onMounted(() => {
    feather.replace();
});

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
});
</script>
