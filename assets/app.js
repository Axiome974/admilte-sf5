/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/font.scss';
import 'admin-lte/dist/css/adminlte.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

// Js files
import 'admin-lte/dist/js/adminlte.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'

global.$ = require('jquery/dist/jquery.min');

// start the Stimulus application
import './bootstrap';

