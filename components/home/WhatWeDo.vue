<template>
    <div id="main" class="flex bg-light justify-center shadow-lg">
        <div class="container flex flex-wrap flex-col items-center justify-center mx-1">
            <p class="text-dark text-center text-title font-bold break-words">
                We aim to shake up<br>the way you bet!
            </p>
            <Link
                @click="scrollUp()"
                to="/about"
                size="xl"
                variant="primary"
                class="mt-2"
            >
                Learn more here
            </Link>
        </div>
    </div>
</template>

<script setup lang="ts">
const scrollUp = () => {
    document.getElementById('__nuxt').scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
#main {
    height: 100vh;
}
</style>