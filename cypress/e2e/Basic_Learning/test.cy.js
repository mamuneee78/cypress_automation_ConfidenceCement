 describe("First Cypress", function(){

    it("visit", function(){

        cy.visit('http://192.168.3.187:7071/web/login')
        cy.get('#login').type('qa_user')
        cy.get('#password').type('1234')
        // cy.wait(2000)
         cy.get('.btn').click()
         cy.get('.dropdown-toggle > .oi').click()
         cy.get('[href="#menu_id=268&action=431"]').click()
         cy.wait(2000)
         cy.get('.o_menu_sections > :nth-child(3) > .dropdown-toggle > span').click()
         cy.get('[href="#menu_id=490&action=596"]').click()
         cy.wait(2000)
         cy.get('.btn-primary').click()
         cy.get('#mrr_type').select('Direct')                    //Using select dropdown method 
         cy.get('#purchase_order_id').click()
         cy.wait(2000)
         cy.get('#purchase_order_id').type('{enter}')            // use keybord key //
         cy.get('.o_list_number.o_required_modifier').click()
         cy.get('.o_list_number.o_required_modifier').type('2')
        //  cy.wait(1000)
        //  cy.get('[name="quantity_done"]').click()
        //  cy.get('[name="quantity_done"]').type('2')
         cy.get('#qc_required').check()
         cy.get('#qc_required').should('be.visible').and('be.checked')
         cy.get('#qc_required').uncheck()
         cy.get('#qc_required').should('not.be.checked')
         cy.get('.o_form_button_cancel > .fa').click()
         cy.wait(5000)
         cy.get('.o_menu_brand').should('be.visible').and('contain','Inventory')              //Text Assertion 

         cy.get('.oe_topbar_name').click()
         cy.get('[href="http://192.168.3.187:7071/web/session/logout"]').click()




         


        })
    })

 