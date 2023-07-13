<template>
    <label for="name" class="flex flex-col w-full">
        <div class="flex">
            <span class="flex-1">{{ label }}</span>
            <span class="text-xs self-end">{{ value.length }}/{{ maxLength }}자</span>
        </div>
        <textarea class="flex-1 text-base rounded-2xl outline-none p-1 pl-2 bg-key-color-light text-key-color-dark" id="name" type="text" v-model="value" :maxlength="maxLength" />
    </label>
</template>

<script setup lang="ts">
const props = defineProps(['label', 'maxLength', 'modelValue']);
const emit = defineEmits(['update:modelValue']);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
});
const maxLength = computed(() => props.maxLength ?? 1000);
</script>
