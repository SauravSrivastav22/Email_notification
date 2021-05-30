var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{ //here write sender email jo mail bhejega uska
        user: 'srivastavsaurav22@gmail.com',
        pass: 'Saurav@111'
    }
});
//jisko bejna h uska ye multiple v ho skta h
var mailOptions = {
    from: 'Boos',
    to: 'sahinreja511@gmail.com',
    subject: 'Team Noob',
    text: `Hey bro... Kaisan baa ho... Hamro ke batao`

};
//inside this agar error hoga to error print krega otherwise email sent print karega
transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    } else{
        console.log('Email sent:- ' + info.response);
    }
});