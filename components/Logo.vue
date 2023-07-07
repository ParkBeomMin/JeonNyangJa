<template>
    <!-- <div class="container"> -->
    <h1 class="logo">
        <span class="l1 text-key-color-light">전</span>
        <span class="l2 fade-out">국</span>
        <span class="l3">냥</span>
        <span class="l4 fade-out">이</span>
        <span class="l5">자</span>
        <span class="l6 fade-out">랑</span>
    </h1>
    <!-- </div> -->
</template>

<script setup lang="ts">
const { $anime } = useNuxtApp();

onMounted(() => {
    useAnime({
        targets: '.l1',
        keyframes: [{ translateY: -40 }, { translateY: 0 }, { translateY: -20 }, { translateY: 0 }, { translateX: '100%' }],
        duration: 1400,
        easing: 'spring',
    });
    useAnime({
        targets: '.l2',
        keyframes: [{ translateY: -40 }, { translateY: 0 }, { translateY: -20 }, { translateY: 0 }],
        delay: 100,
        duration: 1000,
        easing: 'spring',
    });
    useAnime({
        targets: '.l3',
        keyframes: [{ translateY: -40 }, { translateY: 0 }, { translateY: -20 }, { translateY: 0 }],
        delay: 200,
        duration: 1000,
        easing: 'spring',
    });
    useAnime({
        targets: '.l4',
        keyframes: [{ translateY: -40 }, { translateY: 0 }, { translateY: -20 }, { translateY: 0 }],
        delay: 300,
        duration: 1000,
        easing: 'spring',
    });
    useAnime({
        targets: '.l5',
        keyframes: [{ translateY: -40 }, { translateY: 0 }, { translateY: -20 }, { translateY: 0 }, { translateX: '-100%' }],
        delay: 400,
        duration: 1000,
        easing: 'spring',
    });
    useAnime({
        targets: '.l6',
        keyframes: [{ translateY: -40 }, { translateY: 0 }, { translateY: -20 }, { translateY: 0 }],
        delay: 500,
        duration: 1000,
        easing: 'spring',
    });
    useAnime({
        targets: '.fade-out',
        opacity: 0,
        delay: 1000,
        duration: 100,
        easing: 'linear',
    });
    //     useAnime({ targets: '.l1', translateX: '100%', delay: 1000, duration: 800 });
    //     useAnime({ targets: '.l5', translateX: '-100%', delay: 1000, duration: 800 });
});
</script>

<style>
body,
#__nuxt,
#__nuxt > div {
    width: 100%;
    height: 100vh;
}

.container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.logo > span {
    font-weight: bold;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent,
        0 10px 10px rgba(0, 0, 0, 0.4);
}

/* 
.left-logo {
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
} */
</style>
