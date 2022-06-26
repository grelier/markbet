import { defineNuxtConfig } from 'nuxt'
import en from './locales/en.json'
import fr from './locales/fr.json'
import es from './locales/es.json'
import de from './locales/de.json'

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
        '@intlify/nuxt3'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
    },
    intlify: {
        vueI18n: {
            locale: 'en',
            messages: { en, fr, es, de }
        }
    },
    css: [
        '~/assets/main.scss',
        '~/node_modules/flag-icons/css/flag-icons.min.css',
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
