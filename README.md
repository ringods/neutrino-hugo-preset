# Neutrino preset for Hugo site and theme.

**ARCHIVED:** As I switched to [Laravel Mix](https://laravel-mix.com/), this repository is no longer maintained. If you want to take it over, please mail me at ringo AT de-smet.name to request project tranferral.

[Hugo](https://gohugo.io) is a powerful static website generator. It offers a clean separation
between content and styling. This styling is comprised of layouts, CSS style sheets and imagery.
Hugo clearly states that [it does not support asset processing](https://gohugo.io/getting-started/directory-structure/)
at the moment:

> Hugo does not currently ship with an asset pipeline ([#3207](https://github.com/gohugoio/hugo/issues/3207)). 
> You can solicit support from the community in the Hugo forums or check out a few of the Hugo starter kits 
> for examples of how Hugo developers are managing static assets.

A [starter kit](http://gohugo.io/tools/starter-kits/) can get your site bootstrapped with a
combination of Hugo and Grunt/Gulp/Webpack. But there are a few shortcomings to these starter kits:

* They only work for your site, not for your theme
* As a boilerplate, you start off of a certain commit. Once started, it's hard to include upstream improvements
  as there is no common Git history between these repositories.
* A separate tool (cfr `hugulp`). *sigh* Yet another tool. For updates, you are dependent upon the maintainer.

## Aim

The aim of this project is to create a base config which includes all of the build
setup for modern web asset handling. This setup is aimed to work for your theme and your site at
the same time.

Features:

- Wraps Hugo exectuion in the processing pipeline
- Processes assets from site and theme in a single run
- HTML minification
- Style sheets: SASS to CSS compilation
- Style sheets: minification
- Javascript minification
- Javascript bundling
- Image conversion: build image variants for Retina/non-Retina, computer screens and phone/tablet screens.
- Image optimization: compress the images without loosing quality.
- SVG sprites

This project does not provide the layouts or assets that a Hugo site or theme requires. 

## Context

Webpack is the defacto frontend build tool at the time of writing. Setting up a Webpack
build is sometimes still a bit magic. But having a pre-made config file for a Hugo
build including the asset pipeline is not a flexible setup. It would also end up
with the same problems of the existing starter kits.

So how can we distribute a reusable build setup, which can be upgraded easily with
upstream changes and still tweaked by the user? The solution is to distribute the
config as a package which can be installed as a dependency.

Looking around, [Neutrino](https://neutrino.js.org/) was the solution.
From the website:

> Neutrino is a companion tool which lets you build web and Node.js applications
> with shared presets or configurations. It intends to make the process of initializing
> and building projects much simpler by providing minimal development dependencies.

It uses [Webpack](https://webpack.js.org/) under the hood, which means that
Neutrino can use everything that ecosystem has to offer.

## Usage

To use this build preset, first make sure you have a Hugo site and theme
with _unprocessed_ assets. Going from your current site and theme to one
with unprocessed assets is just one step: move everything from your `static`
folder to a folder named `src`. Create an `src` folder in both your
site and theme.

Now initialize your site to be a NodeJS project. Install node and then run
this in your site folder:

```sh
$ npm init
```

This will create a skeleton `package.json` file. Update some of the fields
to your liking. Now install `neutrino` and this build preset:

```sh
$ npm install --save-dev neutrino neutrino-hugo-preset
```

*NOTE:* this project is not yet published on `npmjs.com`, so the above
command will still fail at the moment.

Now make sure to define 2 `npm` scripts in your `package.json` to run Neutrino:

```json
  "scripts": {
    "start": "neutrino start",
    "build": "neutrino build"
  },
``` 

For Neutrino to know which build presets to use, create a file `.neutrinorc.js`
with these contents:

```js
module.exports = {
  use: [
    'neutrino-hugo-preset'
  ]
}
```

You should be able to start in development mode with

```sh
$ npm start
```

and a production build with

```sh
$ npm run build
```


## Contributing

To contribute, you fork this project, create a branch with your changes and submit 
a Github Pull Request.
