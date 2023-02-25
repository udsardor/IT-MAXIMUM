const { Router } = require('express')
const router = Router()
const mailer = require('../mailer')

router.post('/', async (req, res) => {

    try {

        console.log(req.body)

        const {emailMe, fname, phoneMe} = req.body

        if(!emailMe || !fname || !phoneMe ){
            return res.status(400).json({message: `Hamma parameterlar jo'natilishi kerak!!!`})
        }

        const html = "Email: " + emailMe + "<br>"+
            "Full name: " + fname + "<br>" +
            "Phone no." + phoneMe

        await mailer(process.env.MAIL, 'IT Maximum', '', html)

        res.status(200).json({message: 'success'})

    }catch (e) {
        return res.status(500).json(e)
    }

})

module.exports = router