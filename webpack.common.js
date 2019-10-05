const { CheckerPlugin } = require('awesome-typescript-loader');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

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
				include,
				loader: 'awesome-typescript-loader',
				resolve: {
					alias: {
						components: resolveModule('components'),
						context: resolveModule('context'),
						lib: resolveModule('lib'),
						pages: resolveModule('pages'),
						resources: path.resolve(__dirname, 'src', 'resources'),
						types: resolveModule('types'),
					},
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
				test: /\.(js|ts)x?$/,
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
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
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
		new CheckerPlugin(),
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
