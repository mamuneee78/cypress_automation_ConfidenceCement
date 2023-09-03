describe("Direct Purchase", function(){

    it("visit", function(){

        cy.visit('http://192.168.3.226:9090/web/login')
        cy.get('#login').type('qa_user')
        cy.get('#password').type('1234')
        // cy.wait(2000)
         cy.get('.btn').click()
        //  cy.get('.o_navbar_apps_menu > .dropdown-toggle > .oi').click()
        //  cy.get('[href="#menu_id=437&action=575"]').click()
         cy.get('.o_menu_sections > :nth-child(1) > .dropdown-toggle > span').click()
         cy.get('[href="#menu_id=395&action=532"]').click()
         cy.wait(2000)
         cy.get('.btn-primary').click()
         cy.wait(1000)
         cy.get('#partner_id').click()
         cy.wait(1000)
         cy.get('#partner_id').type('CASH').type('{enter}')
         cy.wait(1000)
        //  cy.get('#purchase_request_id').click()
        //  cy.wait(1000)
         cy.get('#purchase_request_id').type('PR/0000010')
         cy.wait(1000)
         cy.get('#purchase_request_id').type('{enter}')

         cy.xpath("(//td[contains(@class,'modifier')])[4]").type(4)
         cy.xpath("(//td[contains(@class,'modifier')])[6]").type(4)

         cy.xpath("(//td[contains(@class,'modifier')])[11]").first(0).type('3')
         cy.xpath("(//td[contains(@class,'modifier')])[13]").type('3')


        //  cy.xpath('(//td[contains(@class,"modifier")])[6]').type('3')

        

        //  cy.get('.btn-primary > span').click()
        //  cy.get('.btn-primary > span').click()
        //  cy.get('.btn-primary > span').click()


    })
})