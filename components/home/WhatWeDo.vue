<template>
    <div id="main" class="flex bg-light justify-center shadow-lg">
        <div
            class="container flex flex-wrap flex-col items-center justify-center mx-1"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <p v-html="$t('components.home.whatWeDo.whatWeDo')" class="text-dark text-center text-title font-bold break-words"/>
            <Link
                @click="scrollTop()"
                to="/about"
                size="xl"
                variant="primary"
                class="mt-2"
            >
                {{ $t('components.home.whatWeDo.learnMore') }}
            </Link>
        </div>
    </div>
</template>

<script setup lang="ts">
const scrollTop = () => {
    document.getElementById('__nuxt').scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
#main {
    height: 100vh;
}
</style>