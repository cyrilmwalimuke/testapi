import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
    




]


app.get('/hello world',(req,res)=>{
    res.send('Hello World')
})

 
app.get('/data',(req,res)=>{
        res.json(data)
    })




app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})