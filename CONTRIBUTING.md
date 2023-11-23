## Requisitos Generales

Omitir los siguientes pasos si esta desarrollando dentro del **Dev Container (o GitHub Codespaces)** incluido en el proyecto.

1. Instalar Node.js `>=16.13` minimo, [última versión LTS recomendada](https://nodejs.org/en/about/releases/)

   - Recommendado: use [`nvm`](https://github.com/nvm-sh/nvm) para administrar versiones de Node.js

1. Instalar [`pnpm`](https://pnpm.io/) (para instalar dependencias npm, usando ambientes de trabajo pnpm)
1. Instalar [`docker`](https://www.docker.com/products/docker-desktop) (para administrar pocketbase)
1. Install [`ts-node`](https://github.com/TypeStrong/ts-node) (para ejecutar scripts de Node.js escritos en TypeScript)

Copie y pegue los siguientes comandos para instalar las dependencias globales:

```bash
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# nvm install 18
npm i -g pnpm ts-node
```

## Configuración General

Para configurar y compilar todos los paquetes, siga estos pasos:

```bash
cd docker
docker compose up -d db
```

```bash
pnpm install
pnpm dev
```

---

Para detener contenedores:

```bash
docker compose down
```

Eliminar archivos de contenedores:

```bash
docker compose down -v --rmi all --remove-orphans
```
