Portfolio created with React also using Three.js technology.


## CREATE the project 
```bash
npm create vite@latest my-project -- --template react
```

## RUN the project 
```bash
npm run dev
```

## Dependencies Instalations 
(Add "--legacy-peer-deps"  because the package "react-tilt" uses older versions of react)

```bash 
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom three
```

### What do dependencies do ?

* @react-three/fiber -> React Based ThreeJs Library[Creating 3Js Code un React Fashion]
* @react-three/drei & maath -> Math utility functions
* react-tilt -> Animation
* react-vertical-timeline-component -> Experience similar to LinkedIn
* react-router-dom -> Routing


## Tailwind Normal Instalation
```bash 
npm install -D tailwindcss 
```
```bash 
npx tailwind init -p
```
Link: https://tailwindcss.com/docs/installation

## EmailJs.com
If you want that the contact section gives you information to your email, you need to use `emailjs.com` you will have free 200 emails.

* First: Add New Service, save the `Service ID`
* Second: Create an email template, save the `Template ID`
* Third: Go to your name in the navbar and save the `public key`

*Tailwind VITE Instalation Using REACT (Adding "--legacy-peer-deps" again for older packages)
1.- npm install -D tailwindcss --legacy-peer-deps -D postcss autoprefixer
2.- npx tailwindcss init -p
Link: https://tailwindcss.com/docs/guides/vite

*IMPORTANT
Loader Component is to show the load percentage of the 3d model canvas, if we don't use, when we refresh the page, we are going to see all the page black

*Pages with 3d Models
1.- https://sketchfab.com/3d-models?date=week&features=downloadable&sort_by=-likeCount

2.- https://www.turbosquid.com/Search/3D-Models/free

3.- https://free3d.com/