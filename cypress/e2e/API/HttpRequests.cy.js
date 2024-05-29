describe("HTTP REquestes",()=>{
    it("GET Call", ()=>{

    cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
    .its('status')
    .should('equal',200);
    }) 
    //Upper one is for Get request Api 

    it("Post Call", ()=>{

        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body:{
                title:"Test Post",
                body:"This is post call",
                userId:1
            }


                })
                .its('status')
                .should('equal',201)
})


it("Put call",()=>{
    cy.request({
        method:'PUT',
        url:'https://jsonplaceholder.typicode.com/posts/1',
        body:{
           title:"Test post - Updated",
           body:"This is Put call",
           userId:1,
             id:1
        }
    })
    .its('status')
    .should('equal',200);
})

it("Delete Call",()=>{
    cy.request({
        method:'Delete',
        url:'https://jsonplaceholder.typicode.com/posts/1',
        
    })
    .its('status')
    .should('equal',200)
})
})