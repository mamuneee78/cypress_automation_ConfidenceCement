describe("Local-PO(CS)", function(){
    it('visit', function(){
        cy.viewport(1000, 660)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Local Purchase')]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#purchase_base").select('Comparative Statement')    // PO base select
        cy.wait(2000)
        cy.get("#partner_id").type('DreamIT Ltd').type('{Enter}')         //Vendor select
        cy.get("#rfq_id").click()
        cy.get("#rfq_id").type('RFQ/00').type('{Enter}')   //rfq select
        cy.wait(1000)
        cy.get("#cs_ids").click()
        cy.get("#cs_ids").type('CS-2023/0').type('{Enter}')   //cs select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm Order')]").click()
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        






    })
})