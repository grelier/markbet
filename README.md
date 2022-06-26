# Markbet

Simple matketing static website build with nuxt 3
https://v3.nuxtjs.org/

## dependencies

Require nodejs 16
https://nodejs.org/en/

## Setup

To install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn generate
```

Locally preview production build locally:

```bash
yarn preview
```

## Check translations

to check whether the translations are up to date (no missing or unused keys):

```bash
yarn translations
```

## Deployement on firebase with github actions

Require additional setup on github if you clone this repo

An action will build and deploy the project to firebase hosting using github action when pushing a commit to `main`
