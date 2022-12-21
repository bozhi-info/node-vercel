import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json
    ({
        "hello": "hi"
    })
})

app.listen("8080", ()=>{
    console.log('App is listening on PORT 8080')
})