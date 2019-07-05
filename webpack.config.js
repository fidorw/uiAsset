module.exports = {
	entry: './js/uiAsset.js',
	output: {
		path: __dirname + '/dist',
		filename: 'uiAsset.js',
		libraryTarget: 'var',
		library: 'uiAsset',
		libraryExport: 'default'
	}
}
