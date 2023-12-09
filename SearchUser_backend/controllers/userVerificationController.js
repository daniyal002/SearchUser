const fs = require('fs')

const emailListJson = fs.readFileSync('./data/emailList.json')
const emailList = JSON.parse(emailListJson)


const userVerification = async (req, res) =>{
    try {
        setTimeout(async ()=>{
        
        const {email,number} = req.body;
        const existingEmail = await emailList.find(item => item.email === email)
        const existingNumber = await emailList.find(item => item.number === number)
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        
       
        if(email){
            if(!existingEmail){
                    return res.status(404).json({message:`Нет такой почты ${email}, которую вы запросили`})
            }
            if(!emailRegex.test(email)){
                return res.status(401).json({message:'Введите коректный Email адрес'})
            }
        
        }
        
        if(number){
            if(!existingNumber){
                    return res.status(404).json({message:`Нет такого номера ${number}, которое вы запросили`})
        }
        }
        
        if(email && number){
            const resultUser = await emailList.filter(item => item.email === email && item.number === number)
                    return res.status(200).json(resultUser)
            }else{
            const resultUser = await emailList.filter(item => item.email === email || item.number === number)
                    return res.status(200).json(resultUser)
            }
        },5000)
    } catch (error) {
        return res.status(500).json({message:`${error}`})
    }
}

module.exports = {
    userVerification
}