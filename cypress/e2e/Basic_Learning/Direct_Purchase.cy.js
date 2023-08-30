describe("Direct Purchase", function(){

    it("visit", function(){

        cy.visit('http://192.168.3.187:7071/web/login')
        cy.get('#login').type('qa_user')
        cy.get('#password').type('1234')
        // cy.wait(2000)
         cy.get('.btn').click()
         cy.get('.dropdown-toggle > .oi').click()
         cy.get('[href="#menu_id=437&action=575"]').click()
         cy.get('.o_menu_sections > :nth-child(1) > .dropdown-toggle > span').click()
         cy.wait(2000)
         cy.get('[href="#menu_id=471&action=580"]').click()
         cy.wait(1000)
         cy.get('.btn-primary').click()
         cy.wait(1000)
         cy.get('#partner_id').click()
         cy.wait(1000)
         cy.get('#partner_id').type('Cash').type('{enter}')
         cy.wait(1000)
         cy.get('#purchase_request_id').click()
         cy.wait(1000)
         cy.get('#purchase_request_id').type('{enter}')
        
         cy.wait(3000)
         cy.get('[name="price_unit"]').type('15')
         cy.get('.btn-primary > span').click()
         cy.get('.btn-primary > span').click()
         cy.get('.btn-primary > span').click()

        








    })
})