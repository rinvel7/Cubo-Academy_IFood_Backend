const aws = require('aws-sdk')

const endpoint = new aws.Endpoint(process.env.ENDPOINT_S3)

const s3 = new aws.S3({
    endpoint,
    credentials: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.APP_KEY
    }
})

const uploadFile = async (path, buffer, mimetype) => {
    const arquivo = await s3.upload({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: path,
        Body: buffer,
        ContentType: mimetype
    }).promise()

    return {
        url: arquivo.Location,
        path: arquivo.Key
    }
}

app.post('/upload-multiple', multer.array('arquivo'), async (req, res) => {
    const { files } = req

    try {
        const resultado = []

        for (const file of files) {
            const arquivo = await uploadFile(
                `imagens/${file.originalname}`,
                file.buffer,
                file.mimetype
            )

            resultado.push(arquivo)
        }

        return res.json(resultado)
    } catch (error) {
        console.log(error)
        return res.status(500).json({mensagem: 'Erro interno do servidor'})
    }
})


const listagemArquivos = async () => {
    const arquivos = await s3.listObjects({
        Bucket: process.env.BACKBLAZE_BUCKET
    }).promise()

    const files = arquivos.Contents.map((file) => {
        return {
            url: `https://${process.env.BACKBLAZE_BUCKET}.${process.env.ENDPOINT_S3}/${file.Key}`,
            path: file.Key
        }
    })

    return files
}

const excluirArquivo = async (path) => {
    await s3.deleteObject({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: path
    }).promise()
}

module.exports = {
    uploadFile,
    listagemArquivos,
    excluirArquivo
}