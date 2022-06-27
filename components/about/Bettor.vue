<template>
    <div id="main" class="flex bg-tertiary justify-center shadow-lg">
        <div
            class="container flex flex-wrap flex-col items-center justify-center mx-1"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <p class="text-light text-center text-title font-bold break-words">
                {{ $t('components.about.bettor.experienceBettor') }}
            </p>
            <p class="text-primary text-center text-title font-bold break-words">
                {{ $t('components.about.bettor.helpCommunity') }}
            </p>
            <ul class="list-disc mt-2">
                <li class="text-light text-lg font-bold break-words">
                    {{ $t('components.about.bettor.list.1') }}
                </li>
                <li class="text-light text-lg font-bold break-words">
                    {{ $t('components.about.bettor.list.2') }}
                </li>
                <li class="text-light text-lg font-bold break-words">
                    {{ $t('components.about.bettor.list.3') }}
                </li>
                <li class="text-light text-lg font-bold break-words">
                    {{ $t('components.about.bettor.list.4') }}
                </li>
            </ul>
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