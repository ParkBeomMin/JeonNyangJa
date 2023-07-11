<template>
    <div class="flex flex-col">
        <label for="upload" class="bg-key-color-light text-key-color-dark">
            <span>이미지 선택</span>
            <input v-show="false" id="upload" type="file" accept="image/*" @change="handleImageUpload" />
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
            @change="onCropChange"
        />
        <input type="text" v-model="useImageUploadData.name" />
        <textarea v-model="useImageUploadData.oneSentence" />
        <img v-if="cropImageUrl" :src="cropImageUrl" alt="" />
    </div>
</template>

<script setup lang="ts">
// https://advanced-cropper.github.io/vue-advanced-cropper/guides/recipes.html#getting-the-result
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
const { useImageUploadData, handleImageUpload, onCropChange } = useImageUpload();
const imageUrl = computed(() => useImageUploadData.imageUrl);
const cropImageUrl = computed(() => useImageUploadData.cropImageUrl);
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
