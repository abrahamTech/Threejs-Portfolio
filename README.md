Portfolio created with React also using Three.js technology.

We create the project with the next command
1.- npm create vite@latest my-project -- --template react

Packages Instalation (Adding "--legacy-peer-deps"  because the package "react-tilt" uses older versions of react)


Tailwind Normal Instalation
1.- npm install -D tailwindcss
2.- npx tailwind init -p
Link: https://tailwindcss.com/docs/installation

Tailwind VITE Instalation Using REACT (Adding "--legacy-peer-deps" again for older packages)
1.- npm install -D tailwindcss --legacy-peer-deps -D postcss autoprefixer
2.- npx tailwindcss init -p
Link: https://tailwindcss.com/docs/guides/vite