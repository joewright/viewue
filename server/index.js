const port = process.env.PORT || 3000;

const path = require('path');
const express = require('express');

const publicAssetsDir = process.env.PUBLIC_ASSETS_DIR || path.join(__dirname, '../frontend/public');

exports.run = run;

function run() {
	const app = express();

	app.use(express.static(publicAssetsDir));

	app.listen(port, () => {console.log('listening at port', port);});
}