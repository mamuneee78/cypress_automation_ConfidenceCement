describe("PO Creation", function(){

    it("visit", function(){
        cy.viewport(1480, 720)
        cy.visit('http://10.10.16.131:9090/web/login')     //url 
        cy.get('#login').type('data_migration')       // user input
        cy.get('#password').type('123456')       // password input
        // cy.wait(2000)
        cy.get('.btn').click()                // loggin button click
        cy.wait(2000)
    
        cy.get('.o_navbar_apps_menu > .dropdown-toggle > .fa').click()           //menu bar
        cy.get('.o-dropdown--menu > [href="#menu_id=210&action=413"]').click()   // PR
        cy.xpath("(//span[contains(.,'Orders')])[1]").click()            //Orders
        cy.xpath("(//a[contains(.,'Request For Quotations')])[1]").click()
        cy.wait(2000)
        cy.xpath("//button[@class='btn btn-primary o_list_button_add']").click()
        cy.xpath("(//input[@class='o_input ui-autocomplete-input'])[2]").click().type('{Enter}')
        cy.get('.o_form_buttons_edit > .btn-primary').click()
        




        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
})