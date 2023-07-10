<template>
    <div>
        <label for="upload" class="upload-button">
            <span>이미지 선택</span>
            <input id="upload" type="file" accept="image/*" @change="handleImageUpload" />
        </label>
        <Cropper
            v-if="imageUrl"
            class="cropper"
            :stencil-props="{
                handlers: {},
                movable: false,
                resizable: false,
                aspectRatio: 1,
            }"
            :resize-image="{
                adjustStencil: false,
            }"
            image-restriction="stencil"
            :src="imageUrl"
            alt="Preview Image"
        />
    </div>
</template>

<script setup lang="ts">
import { Cropper } from 'vue-advanced-cropper';

const { useImageUploadData, handleImageUpload } = useImageUpload();
const imageUrl = computed(() => useImageUploadData.imageUrl);
</script>

<style scoped>
.cropper {
    width: 100%;
    height: 600px;
    background: #ddd;
}
.upload-button {
    display: inline-block;
    background-color: #4caf50;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

.upload-button span {
    margin-right: 8px;
}
</style>
