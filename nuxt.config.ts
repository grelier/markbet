import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    generate: {
        routes: [
            '/',
            '/about',
        ]
    },
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
    },
    css: [
        '~/assets/main.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/_colors.scss"',
                },
            },
        },
    },
})
