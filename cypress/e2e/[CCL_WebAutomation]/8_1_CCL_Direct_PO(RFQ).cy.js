describe("Direct-PO(NS)", function(){
    it('visit', function(){
        cy.viewport(1920, 1480)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Direct Purchase')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#direct_po_base_0").select('Request For Quotation')    //select
        cy.wait(2000)
        cy.get("#partner_id_0").type('{downArrow}{downArrow}{Enter}') 
        //cy.get("#partner_id").type('{Enter}') 
        cy.wait(1000)
        cy.xpath("//input[@id='rfq_id_0']").click()
        cy.xpath("//input[@id='rfq_id_0']").type('RFQ/00').type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm Order')]").click()
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        


        Cypress.on('uncaught:exception', () => false)





    })
})