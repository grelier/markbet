<template>
    <div id="main" class="flex justify-center shadow-lg">
        <div class="container flex flex-column items-center justify-center mx-1">
            <p class="text-light text-center text-title font-bold break-words">
                Browse and buy bets from the<br>most performant beter in town
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#main {
    height: 100vh;
    background: linear-gradient(
        -45deg, 
        #bb19fc, 
        #0ec3f9, 
        #6512ac, 
        #ec05fb
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>