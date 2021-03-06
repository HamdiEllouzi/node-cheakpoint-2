const express = require("express");

const app = express();
const port = process.env.PORT || "8000";

app.set('view engine', 'pug')
app.set('views', './view')

app.use((req,res, next)=>{
    const date = new Date();
    cheakDate(date)? next():
    next(new Error('The web application is only available during working hours (Monday to Friday,  from 9 to 17)'));
})
app.get('/',(req,res)=>{
    res.render('home-page')
})
app.get('/our-services',(req,res)=>{
    res.render('our-services')
})
app.get('/contact-us',(req,res)=>{
    res.render('contact-us')
})

app.listen(port)

const cheakDate = (date) => {
    const days = date.getDay()
    const hours = date.getHours()
    if(days > 0){
        if(hours > 9 && hours < 17) return true
        return false
    }else return false
}