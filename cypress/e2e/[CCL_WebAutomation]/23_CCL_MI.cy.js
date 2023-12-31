describe("Material Issue", function(){
    it('visit', function(){
        cy.viewport(1000, 660)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Inventory')]").click()        //Purchase
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        cy.wait(1000)
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'Material Issue')])[1]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#requisition_id").type('MR00')      //MR select
        cy.wait(1000)
        cy.get("#requisition_id").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Approve')]").click()
        cy.wait(1000)



    })
})