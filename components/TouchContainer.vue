<template>
    <div @touchstart="touchstart" @touchend="touchend" @mousedown="touchstart" @mouseup="touchend" @dblclick="emit('onDoubleClick')">
        <slot />
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['onClick', 'onLongClick', 'onDoubleClick']);
const { touchStart, touchEnd } = useTouch();
const touchend = () => {
    touchEnd({ onClick: () => emit('onClick') });
};
const touchstart = () => {
    touchStart({ onLongClick: () => emit('onLongClick') });
};
</script>
