const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        location: './src/js/location.js',
        menu: './src/js/menu.js',
        contact: './src/js/contact.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home - The Little Den Coffee Shop',
            template: 'src/index.html',
            filename: 'index.html',
            chunks: ['']
        }),
        new HtmlWebpackPlugin({
            title: 'Menu - The Little Den Coffee Shop',
            template: 'src/menu.html',
            filename: 'menu.html',
            chunks: ['menu']
        }),
        new HtmlWebpackPlugin({
            title: 'About - The Little Den Coffee Shop',
            template: 'src/about.html',
            filename: 'about.html',
            chunks: ['location']
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Us - The Little Den Coffee Shop',
            template: 'src/contact.html',
            filename: 'contact.html',
            chunks: ['contact']
        }),
    ],   
};