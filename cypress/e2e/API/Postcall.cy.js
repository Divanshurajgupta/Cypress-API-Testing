describe('Api post call',()=>{
    
    it("Check Post APi - With Hardcoded Json Data ",()=>{
        const requestbody={
            email:"dummy@email.com",
            password:"123456"
        }
        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body:requestbody
    })
    .then((response)=>{
         expect(response.status).to.eq(201)
         expect(response.body.email).to.eq("dummy@email.com")
         expect(response.body.password).to.eq("123456")

    })
})

it("Check Post APi - With dynamic ",()=>{
    const requestbody={
        email: Math.random().toString(5).substring(2)+"@email.com",
        password:"123456"
    }
    cy.request({
        method: 'POST',
        url:'https://jsonplaceholder.typicode.com/posts/',
        body:requestbody
})
.then((response)=>{
     expect(response.status).to.eq(201)
     expect(response.body.email).to.eq(requestbody.email)
     expect(response.body.password).to.eq("123456")

})
})

it.only("Check Post APi - With dynamic2 ",()=>{
   cy.fixture('example1').then((data)=>{
    const requestbody=data;
   
    cy.request({
        method: 'POST',
        url:'https://jsonplaceholder.typicode.com/posts/',
        body:requestbody
})
.then((response)=>{
     expect(response.status).to.eq(201)
     expect(response.body.email).to.eq(requestbody.email)
     expect(response.body.password).to.eq(requestbody.password)
     expect(response.body).to.have.property('email',requestbody.email)

})
     })
   
})

})