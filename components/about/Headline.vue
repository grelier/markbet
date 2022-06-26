<template>
    <div id="main" class="flex bg-light justify-center shadow-lg">
        <div class="container flex flex-wrap flex-col items-center justify-center mx-1">
            <p class="text-dark text-center text-title font-bold break-words">
                {{ $t('components.about.headline.ready') }}
            </p>
            <p class="text-primary text-center text-title font-bold break-words">
                {{ $t('components.about.headline.weAreWaiting') }}
            </p>
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