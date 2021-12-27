const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	mode: 'development',
	entry: ['@babel/polyfill', './src/index.tsx'],
	output: {
		filename: '[name].[hash].js',
		//filename: `${filename('js')}`,
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		port: 3000,
		//watchContentBase: true,
	},
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/index.html"),
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
			{
				test: /\.css$/i,
				use: [
					'css-loader'
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpg|jpeg|png|svg)/,
				use: ['file-loader']
			}
		]
	}
}