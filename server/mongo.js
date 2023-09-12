const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://leewiz:${password}@cluster0.ts21z9n.mongodb.net/chatApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const emoteSchema = new mongoose.Schema({
    url: String,
    code: String,
})

const Emote = mongoose.model('Emote', emoteSchema)

const note = new Emote({
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4f058d58458544a4971de55672468204/static/light/2.0',
    code: 'hasSlam',
})

note.save().then(result => {
    console.log('emote saved!')
    mongoose.connection.close()
})

// qau2vmd7BPB2pbr-fra