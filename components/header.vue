<template>
    <div class="bg-dark flex justify-center shadow-lg">
        <div class="container flex items-center">
            <NuxtLink to="/" class="flex items-center">
                <img src="/logo-dark.svg" width="100" />
                <h1 class="text-xl text-light font-bold font-sans pl-1">
                    Live Your Bet
                </h1>
            </NuxtLink>
            <div class="ml-2">
                <NuxtLink
                    to="/"
                    class="text-lg text-light font-sans hover:underline mx-1"
                    :class="$route.path === '/' ? 'font-bold' : 'font-thin'"
                >
                    Home
                </NuxtLink>
                <NuxtLink
                    to="/about"
                    class="text-lg text-light font-sans hover:underline mx-1"
                    :class="$route.path === '/about' ? 'font-bold' : 'font-thin'"
                >
                    About
                </NuxtLink> 
            </div>
        </div>  
    </div>
</template>