# Starsheep Marketplace TEDS

Code Crafters: Miguel A. Cuevas G. & Milka Yamil Trinidad

Esta pagina web fue creada con SvelteKit. Para poder poder correrla, se necesita tener instalado Node.js y pnpm. (Probada en Linux y WSL2!!!)

[GitHub_Repo](https://github.com/secretarybird97/starsheep-pb)

## Correr utilizando Docker (recomendado)

```bash
docker-compose up -d
```

La pagina web se encontrara en [localhost:3000](http://localhost:3000)

## Correr localmente

Para poder poder correrla de manera nativa, se necesita tener instalado Node.js y pnpm. (Probada en Linux y WSL2!!!)

### Instalar dependencias

En caso de no tener instalado Node.js, se puede instalar desde [aqui](https://nodejs.org/en/download/)

Instalar pnpm

```bash
npm install -g pnpm
```

Instalar las dependencias del proyecto

```bash
pnpm install
```

Inicializar base de datos

```bash
./db/pocketbase serve
```

(en una terminal separada) Correr el proyecto

```bash
pnpm run dev
```

# Credenciales para probar la pagina

Usuario: test

Contraseña: 12345678
