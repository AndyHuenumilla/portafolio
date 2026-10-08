// Configuración de Karma: ejecuta las pruebas de Jasmine en Chrome sin ventana.
// Webpack + Babel traducen el JSX para que el navegador lo entienda.

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: [{ pattern: 'src/**/*.spec.jsx', watched: false }],
    preprocessors: { 'src/**/*.spec.jsx': ['webpack'] },
    webpack: {
      mode: 'development',
      devtool: false,
      resolve: { extensions: ['.js', '.jsx'] },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            // El proyecto usa "type": "module"; esto permite importar './datos' sin escribir la extensión
            resolve: { fullySpecified: false },
            use: {
              loader: 'babel-loader',
              options: {
                // istanbul mide qué líneas del código se ejecutan (informe de cobertura)
                plugins: [['istanbul', { exclude: ['**/*.spec.*'] }]],
              },
            },
          },
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
      },
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
    browsers: ['ChromeHeadlessSinSandbox'],
    customLaunchers: {
      ChromeHeadlessSinSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    singleRun: true,
  });
};
