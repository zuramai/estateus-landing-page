const mix = require('laravel-mix');
require('laravel-mix-nunjucks')
require('laravel-mix-purgecss');

mix.sass('src/assets/scss/app.scss', 'dist/assets/css')
    .setPublicPath('dist')
    .options({
        processCssUrls: false
    }).purgeCss();;
   
mix.njk('src/', 'dist/', {
    ext: '.html',
    marked: null,
    watch: true,
    block: 'content',
    envOptions: {
        watch: true,
        noCache: true
     },
    manageEnv: (nunjucks) => {},
})
