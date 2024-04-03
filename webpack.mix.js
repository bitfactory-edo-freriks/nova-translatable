let mix = require('laravel-mix');

mix
  .setPublicPath('dist')
  .js('resources/js/translatable-field.js', 'js')
  .js('resources/js/locale-select-field.js', 'js')
  .vue({ version: 3 })
  .webpackConfig({
    output: {
      externals: {
        vue: 'Vue',
        'laravel-nova': 'LaravelNova',
      },
      uniqueName: 'bitfactory/nova-translatable',
    },
  })
