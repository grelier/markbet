<template>
    <div id="main" class="flex justify-center shadow-lg">
        <div
            class="container flex flex-col items-center justify-center m-2"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <img src="/logo-dark.svg" height="300" width="300" alt="logo" class="mb-3"/>
            <p
                v-html="$t('components.home.welcome.intro')"
                class="text-light text-center text-title font-bold break-words"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const angle = ref(0)
onMounted(() => {
    angle.value += 1
})

watch(angle, (newValue, oldValue) => {
    const interval = 10
    const step = 0.1
    const min = 0
    const max = 360
    if((oldValue < newValue || newValue === 0) && newValue < max) {
        setTimeout(() => {
            angle.value += step
        }, interval)
    } else if(newValue >= max) {
        setTimeout(() => {
            angle.value = min
        }, interval)
    }
})

const cssAngle = computed(() => {
    return `${angle.value}deg`
})
</script>

<style scoped lang="scss">
@use '@/assets/colors.scss';

#main {
    height: 100vh;
    background: linear-gradient(
        v-bind(cssAngle), 
        colors.$primary,
        colors.$secondary,
        colors.$tertiary,
        colors.$quaternary,
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