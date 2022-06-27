<template>
    <div id="main" class="flex bg-primary justify-center shadow-lg">
        <div
            class="container flex flex-column items-center justify-center mx-1"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <p
                v-html="$t('components.home.comingSoon.comingSoon')"
                class="text-light text-center text-title font-bold break-words"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#main {
    height: 100vh;
}
</style>