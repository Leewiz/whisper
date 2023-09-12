const express = require('express')
const app = express()

app.use(express.json())

let emotes = ['emote 1', 'emote 2', 'emote 3', 'emote 4', 'emote 5']

app.get('/', (request, response) => {
    response.send('<h2>Hello Ass!</h2>')
});

app.get('/api/emotes', (request, response) => {
    response.json(emotes)
});

app.post('/api/emotes', (request, response) => {
    const emote = request.body;
    console.log(emote);
    response.json(emote);
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});