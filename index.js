const express = require('express')
const multer = require('multer') // Biblioteca de Uploaded do NodeJS 
const app = express()

// Tratando o nosso uplodaded
const storage = multer.diskStorage({
	destination:(req, file, cb) => {
		cb(null, 'uploaded/')
	},
	filename:(req, file, cb) => {
		cb(null, Date.now()+'-'+file.originalname)
	}
})

const upload = multer({ storage }) // Definado o caminho onde serao salvo os arquivos
app.set('view engine', 'ejs')

app.get('/',(req, res) => {
	res.render("home")
})

// Tratando o uploaded do nosso home
app.post('/',upload.single('arquivo'),(req, res) => {
	console.log(req.body, req.file)
	res.send('arquivo enviado com sucesso!')
})

app.listen(3000,(erro) => {
	const open = erro?'Erro ao conectar ao servidor':
	'Servidor rodando ...\nhttp://localhost:3000';

	console.log(open)
})