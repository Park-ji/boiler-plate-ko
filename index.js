const express = require('express') /*express 모듈 가져옴*/
const app = express() /*새로운 express app생성*/
const port = 5000 /*5000번 포트를 백서버로 둠*/

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jihyun:p1236987@boilerplate.0e8ep.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false 
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})