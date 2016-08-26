var path = require('path')

module.exports = {
  entry: {
    app:["./app/components/app.jsx"]
  },
  output: {
    path: path.resolve(__dirname, './client'),
    filename: '/bundle.js'
  },

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
