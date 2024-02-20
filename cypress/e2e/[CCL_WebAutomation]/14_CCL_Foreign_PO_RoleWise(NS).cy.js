const User = require('./UsersCridential.json')


describe("Forein-PO(NS)", function(){
    it('visit', function(){
        cy.viewport(1920, 1480)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type(User.SCM_Initiator)       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Foreign Purchase')]").click()
        cy.wait(1000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#purchase_base_0").select('Notesheet')    // PO base select
        cy.wait(1000)
        cy.get("#notesheet_id_0").click()
        cy.get("#notesheet_id_0").type('NS').type('{Enter}')   //Notesheet select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit')]").click()        
        cy.wait(1000)
        cy.xpath("//img[@alt='User']").click()
        cy.xpath("//a[contains(.,'Log out')]").click()
       cy.wait(1000)
 
        cy.get('#login').type(User.SCM_HOD)       // user input
         cy.get('#password').type('1234')       // password input
         cy.get('.btn').click()
         cy.wait(1000)
         cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Foreign Purchase')]").click()
        cy.wait(1000)
        cy.xpath("(//tr[contains(@class,'o_data_row')])[1]").click()
        cy.wait(1000)


        cy.xpath("//span[contains(.,'Confirm Order')]").click()
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        






    })
})