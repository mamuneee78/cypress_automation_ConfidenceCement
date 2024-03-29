describe("Proforma Invoice", function(){
    it('visit', function(){
        cy.viewport(1920, 1200)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'LC/TT/LCAF')]").click()
        cy.wait(1000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 

        var RandomNumber = Math.floor(Math.random()*100000)             // Random Number variable 
        const formattedNumber = `CCL/LC/${RandomNumber}`; // Customize the format
  
        cy.xpath("//input[@id='name_0']").clear().type(formattedNumber)
        //cy.xpath("//input[@id='name_0']").clear().type(RandomNumber)
        cy.wait(1000)
        cy.get("#partner_id_0").type('A & Brothers').type('{Enter}')         //Vendor select 
        cy.get("#proforma_invoice_id_0").type('PI/00').type('{Enter}')   //PI select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        






    })
})