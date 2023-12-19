describe("Material Issue Return", function(){
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
        cy.xpath("(//a[contains(.,'Material Issue Return')])[1]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#material_issue_id").type('MI00')      //MI select
        cy.wait(1000)
        cy.get("#material_issue_id").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Send For Review')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Reviewed')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Validate')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Apply')]").click()
        cy.wait(1000)



    })
})