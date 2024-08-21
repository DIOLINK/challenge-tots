# Mapa de Países con Next.js y Leaflet

Este proyecto es una aplicación web construida con Next.js y TypeScript que muestra un mapa interactivo con pins para cada país. Los datos de los países se obtienen de la API GraphQL de [countries.trevorblades.com](https://countries.trevorblades.com/), y las coordenadas de latitud y longitud se toman de un archivo [JSON](./countries.json) proporcionado. La visualización del mapa se realiza utilizando la biblioteca Leaflet.

## Requerimientos Técnicos

- [X] **Framework:** Next.js
- [X] **Lenguaje:** TypeScript
- [ ] **Visualización de Mapas:** Leaflet
- [ ] **API de Datos:** GraphQL (countries.trevorblades.com)
- [X] **Manejo de Estilos:** MaterialUI
- [ ] **Plataforma de Despliegue:** Netlify

## Funcionalidades

- [ ] **Visualización de Mapa:** Muestra un mapa interactivo con pins para cada país.
- [ ] **Integración GraphQL:** Consume la API de countries.trevorblades.com para obtener datos relevantes de los países.
- [ ] **Manejo de Errores:** Implementación de mecanismos de manejo de errores para una experiencia de usuario robusta.
- [x] **Responsividad:** Diseño adaptable a diferentes tamaños de pantalla.

## Instalación

1. Clona este [repositorio](https://github.com/DIOLINK/challenge-tots.git) en tu máquina local con SSH o HTTPS con los siguientes comandos:

   - #### HTTPS:
      ```shell
      git clone https://github.com/DIOLINK/challenge-tots.git
      ```

   - #### SSH:
      ```shell
      git clone git@github.com:DIOLINK/challenge-tots.git
      ```

2. Navega al directorio del proyecto colonado:
    ```shell
   cd challenge-tots
   ```

3. Instala las dependencies con cualquiera de los siguientes comandos:

   - ### npm
      ```shell
      npm install
      ```

   - ### pnpm
      ```shell
      pnpm install
      ```

4. En la raiz del proyecto encontraras un archivo con el nombre de `template.env` el cual deberas renombra a `.env`.
   
5. Inicia la aplicación en modo de desarrollo:
       
      - ### npm
        ```shell
        npm run dev
        ```

      - ### pnpm
        ```shell
        pnpm dev
        ```