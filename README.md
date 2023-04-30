Portfolio created with React also using Three.js technology.


We CREATE the project with the next command
1.- npm create vite@latest my-project -- --template react


We RUN the project with
1.- npm run dev


Dependencies Instalations (Adding "--legacy-peer-deps"  because the package "react-tilt" uses older versions of react)
1.- npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

(
    *@react-three/fiber -> React Based ThreeJs Library[Creating 3Js Code un React Fashion]
    *@react-three/drei & maath -> Math utility functions
    *react-tilt -> Animation
    *react-vertical-timeline-component -> Experience similar to LinkedIn
    *react-router-dom -> Routing
)


Tailwind Normal Instalation
1.- npm install -D tailwindcss
2.- npx tailwind init -p
Link: https://tailwindcss.com/docs/installation

Tailwind VITE Instalation Using REACT (Adding "--legacy-peer-deps" again for older packages)
1.- npm install -D tailwindcss --legacy-peer-deps -D postcss autoprefixer
2.- npx tailwindcss init -p
Link: https://tailwindcss.com/docs/guides/vite