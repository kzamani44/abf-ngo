require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

// GET PORT NUMBER FOR LOCALHOST FROM .ENV FILE
const PORT = process.env.PORT;

// 
app.listen(PORT, () => {
	console.log('\x1b[34mConnected to database \x1b[0m');
	console.log('\x1b[34mServer started\x1b[0m');
	console.log(
		`\x1b[34mlistening on\x1b[0m \x1b[91mhttp://localhost:${PORT}\x1b[0m`
	);
});