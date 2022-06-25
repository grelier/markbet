<template>
    <div id="main" class="w-full bg-dark flex justify-center shadow-lg">
        <div class="container flex items-center mx-1">
            <Link to="/" variant="light" size="md" class="mx-1">
                Home
            </Link>
            <Link to="/about" variant="light" size="md" class="mx-1">
                About
            </Link>
        </div>  
    </div>
    <transition name="slidedown">
        <div v-if="!isVisible" class="fixed top-0 left-0 right-0 flex justify-center">
            <div class="container flex items-center mx-1 mt-2">
                <Link to="/" variant="dark" size="md" class="mx-1">
                    Home
                </Link>
                <Link to="/about" variant="dark" size="md" class="mx-1">
                    About
                </Link>
            </div>
        </div>  
    </transition>
</template>

<script setup lang="ts">
onMounted(() => {
    window.addEventListener("scroll", onScroll)
})
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll)
})

let isVisible = ref(true)

const onScroll = () => {
    isVisible.value = window.scrollY < 100
}
</script>

<style scoped>
#main {
    height: 50px
}

.slidedown-enter-active {
  transition: max-height 1s ease-in;
}
.slidedown-leave-active {
  transition: max-height 0s;
}

.slidedown-enter-to,
.slidedown-leave-from {
  overflow: hidden;
  max-height: 100vh;
}

.slidedown-enter-from,
.slidedown-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>