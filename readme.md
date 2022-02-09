## How to install AdminLte3 with webpack

### 1 - Add Webpack encore on your symfony project

``
composer require symfony/webpack-encore-bundle
``

### 2 - Yarn install and start a node server
``
yarn install
``

``
yarn encore dev-server
``

### 3 - Download AdminLte and add it to your project

``yarn add admin-lte@^3.2``

### 4 - Integrate base template

It's now the harder part of the tutorial. We have to modify the app.js file to include all of the javascripts module and stylesheets to make it work.
 
-  



