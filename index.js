import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
const app = express()
app.use(cors())
app.use(express.json())

const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
    




]


app.get('/',(req,res)=>{
    res.send('Hello World there')
})

 
app.get('/data',(req,res)=>{
        res.json(data)
    })






  
  // Send the email


app.post('/nodemailer',(req,res)=>{

    const {from,to,subject,text} = req.body
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "cyrilmwalimuke@gmail.com", // Replace with your Gmail email
          pass: "sgod awzc wnoq mhat", // Replace with your App Password
        },
      });
      
      // Email options
      const mailOptions = {
        from,
        to,
        subject,
        text,
      };




    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });

})



app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})