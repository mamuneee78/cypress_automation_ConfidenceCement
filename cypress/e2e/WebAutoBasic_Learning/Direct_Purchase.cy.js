describe("Direct Purchase", function(){

    it("visit", function(){
        cy.viewport(1440, 720)
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
         cy.get("table[style='table-layout: fixed;']>tbody>tr:nth-child(1)>td:nth-child(7)").type(2)
         cy.wait(1000)
         cy.get("table[style='table-layout: fixed;']>tbody>tr:nth-child(1)>td:nth-child(9)").clear().type(10)
         cy.wait(1000)
         cy.get("table[style='table-layout: fixed;']>tbody>tr:nth-child(2)>td:nth-child(7)").click().clear().type(2)
         cy.wait(1000)
         cy.get("table[style='table-layout: fixed;']>tbody>tr:nth-child(2)>td:nth-child(9)").clear().type(5)

         cy.get('.o_MessageList_separator').click()
         
         //cy.get('tbody > tr > :nth-child(2) > span').should('have.text', '30.00 ৳')
         cy.get('tbody > tr > :nth-child(2) > span').should('be.visible') //.and('have.text', "30.00 ৳");
         cy.xpath("//a[contains(.,'Direct Purchase')]").should('have.text', 'Direct Purchase')


 
         cy.wait(3000)




        //  cy.xpath('(//td[contains(@class,"modifier")])[6]').type('3')

        

        //  cy.get('.btn-primary > span').click()
        //  cy.get('.btn-primary > span').click()
        //  cy.get('.btn-primary > span').click()


    })
});