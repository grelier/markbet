<template>
    <div id="main" class="flex bg-primary justify-center shadow-lg">
        <div
            class="container flex flex-wrap flex-col items-center justify-center mx-1"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <p class="text-light text-center text-title font-bold break-words">
                {{ $t('components.about.user.wantToBet') }}
            </p>
            <p class="text-tertiary text-center text-title font-bold break-words">
                {{ $t('components.about.user.hereToHelp') }}
            </p>
            <ul class="list-disc mt-2">
                <li class="text-light text-lg font-bold break-words">
                    {{ $t('components.about.user.list.1') }}
                </li>
                <li class="text-light text-lg font-bold break-words">
                    {{ $t('components.about.user.list.2') }}
                </li>
                <li class="text-light text-lg font-bold break-words">
                    {{ $t('components.about.user.list.3') }}
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