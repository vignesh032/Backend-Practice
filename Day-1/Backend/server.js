import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("Server is Ready")
})

app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:"Joke 1",
            content : "Lol"
        },
        {
            id:2,
            title:"Joke 2",
            content:"Joke is something can't be laughed"
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on http://localhost${port} `)
})