<template>
    <div id="main" class="flex bg-light justify-center shadow-lg">
        <div
            class="container flex flex-col items-center justify-center m-2"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <p class="text-dark text-center text-title font-bold break-words">
                {{ $t('components.about.headline.ready') }}
            </p>
            <p class="text-primary text-center text-xl font-bold break-words">
                {{ $t('components.about.headline.weAreWaiting') }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#main {
    min-height: 100vh;
}
</style>