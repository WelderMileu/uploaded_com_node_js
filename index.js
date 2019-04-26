const express = require('express')
const multer = require('multer') // Biblioteca de Uploaded do NodeJS
const upload = multer({ dest:'uploaded/' }) // Definado o caminho onde serao salvo os arquivos
const app = express()

app.set('view engine', 'ejs')

app.get('/',(req, res) => {
	res.render("home")
})

// Tratando o uploaded do nosso home
app.post('/',upload.single('arquivo'),(req, res) => {
	console.log(req.body, req.file)
	res.send('Ok')
})

app.listen(3000,(erro) => {
	const open = erro?'Erro ao conectar ao servidor':
	'Servidor rodando ...\nhttp://localhost:3000';

	console.log(open)
})