describe("ChildWindow Handle", function(){

    it("visit", function(){
        cy.viewport(1920, 1200)
        cy.visit('http://10.10.16.131:9090/web/login')     //url 
        cy.get('#login').type('data_migration')       // user input
        cy.get('#password').type('123456')       // password input
        // cy.wait(2000)
        cy.get('.btn').click()                // loggin button click
        cy.wait(2000)
        cy.get('.o_navbar_apps_menu > .dropdown-toggle > .fa').click()           //menu bar
        cy.get('.o-dropdown--menu > [href="#menu_id=210&action=413"]').click()   // PR
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Orders')])[1]").click()            //Orders
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'Comparative Statement')])[1]").click()   //orders menu CS
        cy.wait(1000)
        cy.get('.o_list_button_add').click()                      //Create CS
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[1]").click().type('{Enter}')   // RFQ No select
        cy.xpath("(//input[@autocomplete='off'])[2]").type('Test Automation')   // Response Name typing
        // cy.screenshot()
        cy.xpath("//button[contains(.,'Save')]").click()        //SAVE CS

        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Comparative Statement')]").click()     // CS View
         

        // Switch to the child window
        cy.xpath("//span[contains(.,'Comparative Statement')]").then((e) => {
        
        cy.visit('http://10.10.16.131:9090/cphl_purchase_comparison/comparison_statement?com_pa_ri_son_id=31')
        cy.wait(3000)
         })
        // cy.xpath("//th[contains(.,'Comparative Statement')]").should('have.text', 'Comparative Statement')
        cy.xpath("table[id='vendor_selection_table']>tbody>tr:last-child>td:nth-child(2)").click()   //CS vendor selection

         // Switch back to the parent window
        //cy.visit('https://example.com');
        //   });


        // cy.screenshot()
        // cy.wait(1000)
        // cy.xpath("table[id='vendor_selection_table']>tbody>tr:last-child>td:nth-child(2)").click()   //CS vendor selection
        // cy.wait(3000)



        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

    })
})