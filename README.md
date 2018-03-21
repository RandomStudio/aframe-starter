# A-Frame Starter Project
A simple way to get started with local development on the web-based virtual reality framework, [A-frame](https://aframe.io/).

## Prequisites
[Download NodeJS](https://nodejs.org/en/download/) - I recommend LTS version 8+.

## Getting started
Clone the repo:
```
git clone https://github.com/anselanza/aframe-starter.git
```
Install the dependencies:
```
cd aframe-starter
npm install
```
Build and launch the server:
```
npm run start
```
Now open your web browser and point to `http://localhost:1234`

![screenshot](screenshot.jpg "Just 3 (and a half?) simple steps")

## More complex example
You can see an example of the tutorial at https://aframe.io/docs/0.7.0/guides/building-a-basic-scene.html implemented using this starter project, which demonstrates environments, textures, interaction, lighting, text and audio. Just switch to the `tutorial-basic-scene` branch:
```
git checkout tutorial-basic-scene
```
The result is something like this:

![screenshot](tutorial.gif "tutorial example")

## Next steps

1. Open the folder up in your favourite text editor.
1. Make changes in the markup in `index.html`.
1. Hit save - the project will re-compile and live-reload in your browser.

If you need to do a proper production build at any time, just run `npm run build` and a compiled version will go to the `dist/` folder.

## Under the hood
This starter project is made so, so simple using [Parcel](https://parceljs.org/)
> ...the Blazing fast, zero configuration web application bundler

