describe("Proforma Invoice", function(){
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
        cy.xpath("//a[contains(.,'Proforma Invoice')]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#partner_id").type('Istanbul Caffe').type('{Enter}')         //Vendor select 
        cy.wait(1000)
        cy.get("#purchase_order_id").type('FPO/00').type('{Enter}')   //FPO select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        






    })
})