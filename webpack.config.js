var path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        alias: {
            API: path.resolve(__dirname, 'api/index.js'),
            Components: path.resolve(__dirname, 'src/components/'),
            Utiles: path.resolve(__dirname, 'src/utiles/'),
            Helpers: path.resolve(__dirname, 'src/helpers.js'),
            Actions: path.resolve(__dirname, 'src/actions/'),
            Selectors: path.resolve(__dirname, 'src/selectors/index.js'),
            Constants: path.resolve(__dirname, 'src/constants.js'),
            ActionTypes: path.resolve(__dirname, 'src/actionTypes.js'),
            Records: path.resolve(__dirname, 'src/records/'),
            Reducers: path.resolve(__dirname, 'src/reducers/'),
            Containers: path.resolve(__dirname, 'src/containers/')
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['babel-preset-es2015','babel-preset-react','babel-preset-stage-0']
                }
            },
            {
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
            }
        ]     
    }
};
