describe("PO Creation", function(){

    it("visit", function(){

        cy.visit('http://192.168.3.226:9090/web/login')
        cy.get('#login').type('qa_user')
        cy.get('#password').type('1234')
        // cy.wait(2000)
         cy.get('.btn').click()
         cy.get('.o_navbar_apps_menu > .dropdown-toggle > .oi').click()
         cy.wait(2000)
         cy.get('[href="#menu_id=337&action=491"]').click()
         cy.wait(1000)
         cy.get('.o_menu_sections > :nth-child(3) > .dropdown-toggle > span').click()
         cy.get('[href="#menu_id=420&action=563"]').click()
         cy.wait(1000)
         cy.get('.btn-primary').click()
         cy.get('#mrr_type').select('Direct')                    //Using select dropdown method 
         cy.get('#purchase_order_id').click()
         cy.wait(2000)
         cy.get('#purchase_order_id').type('{enter}')            // use keybord key //
         cy.get('.o_list_number.o_required_modifier').click()
         cy.get('.o_list_number.o_required_modifier').type('2')

    })
})