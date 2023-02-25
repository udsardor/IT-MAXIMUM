
const URI = `http://localhost:8080/api/mail`


const sendButton = document.querySelector('#sendMailBtn')

sendButton.addEventListener('click', async () => {
    const emailMe = document.getElementById("emailMe").value
    const phoneMe = document.getElementById("phoneMe").value
    const fname = document.getElementById("fname").value

    if(!emailMe || !fname || !phoneMe ){
        alert(`Hamma parameterlar to'liq kiritilishi kerak!`)
        return
    }

    const params = {
        emailMe,
        phoneMe,
        fname
    }

    await fetch(URI, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(() => {
        alert(`Muvaffaqqiyatli yuborildi`)
    }).catch((e) => {
        alert('Xatolik!!!')
        console.log(e)
    })
})