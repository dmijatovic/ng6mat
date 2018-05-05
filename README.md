# Ng6mat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

The goal is to setup angular material and angular cli for an easy starter project with angular material and use scss and custom theme. In addition, I want to test new angular cli commands.

## Branches

- mat-starter: basic starter with material using scss styles. All style assets (fonts and themes) are stored local in the styles folder.
- mat-app-home: extended version containing standard pages usally used in any app
  - home: home page. Landing page, just a basic scafold
  - error: error pages. This is separate module (by default lazy loaded)
  - help: help pages. This is separate module (by default lazy loaded)
  - layout: basic layout scafold having: header, body and footer component. This is separate module. The layout is just created but not implemented in this version
  - loader: default loaders. This is separate module
  - modal: default modal/popup. This is separate module

## Scripts

Folowing scripts are defined in package.json

- `npm start`: runs default angular cli development setup (not used)
- `npm run dev`: runs app in dev mode using dev environement and dev build definitions (see angular.json)
- `npm run prod`: runs app in dev mode using dev environement and dev build definitions (see angular.json)
- `npm run build`: creates production build using production env and  definitions (see angular.json)

## Environments

Starter project has only two environments and build configurations. These should be further extended per project

- dev: development environment and build. Environement variables are definited in environment.dev.ts file and build switches in angular.json. Dev build has only extract css and sourcemaps set on true.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
