const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const Dotenv = require('dotenv-webpack');

const PUBLIC_PATH = path.resolve(__dirname, '/');

function resolveModule(name = '') {
	return path.resolve(__dirname, 'src', 'js', name);
}

const include = [resolveModule()];

const config = {
	entry: resolveModule('main.js'),
	module: {
		rules: [
			{
				exclude: /(node_modules)/,
				test: /\.js$/,
				include,
				use: {
					loader: 'babel-loader',
					options: { presets: ['@babel/preset-env'] },
				},
			},
			{
				include: path.resolve(__dirname, 'src', 'css'),
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { importLoaders: 2 },
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [require('autoprefixer')()],
						},
					},
					{
						loader: 'sass-loader',
					},
				],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.bundle.js',
		publicPath: PUBLIC_PATH,
	},
    plugins: [
        new Dotenv(),
		new MiniCssExtractPlugin({
			filename: 'main.css',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Your Story Project',
		}),
	],
	target: 'web',
};

module.exports = {
	config,
	include,
	publicPath: PUBLIC_PATH,
};
