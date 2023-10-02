describe("PO Creation", function(){

    it("visit", function(){

        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        // cy.wait(2000)
         cy.get('.btn').click()                // loggin button click
         cy.get('.dropdown-toggle > .oi').click()               
         cy.get('[href="#menu_id=437&action=575"]').click()
         cy.wait(2000)
         cy.get('.btn-primary').click()        // PR New button 
         cy.wait(2000)
         cy.get('#budget_id').click()          // budget
         cy.wait(2000)
         cy.get('#budget_id').type('{enter}')
         cy.get('#priority').select('High')
         cy.get('#requisition_type').select('Local Purchase')
         cy.get('.o_field_x2many_list_row_add > a').click()
         cy.wait(1000)
         cy.get('.o_field_x2many_list_row_add > a').type('ToolBox Broston XM2').type('{enter}')
         cy.wait(1000)
         cy.get('[data-tooltip-delay="1000"][name="product_qty"] > .o_field_widget > .o_input').clear().type(10)
         cy.wait(1000)
         cy.get('.btn-primary > span').click()
         cy.get('.btn-primary > span').click()
         cy.get('.btn-primary > span').click()
         cy.get('.btn-primary > span').click()
         cy.wait(5000)
         cy.get('.o_menu_sections > :nth-child(1) > .dropdown-toggle > span').click()
         cy.get('[href="#menu_id=471&action=580"]').click()
         





         





    })
})