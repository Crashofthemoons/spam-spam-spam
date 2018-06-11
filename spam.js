const emailExtract = []



customers1.customers.forEach(customers => {
   const pushEmail = customers.contacts.email.map(function (email){
        emailExtract.push(email)
        return emailExtract
   })
})

console.log(emailExtract)