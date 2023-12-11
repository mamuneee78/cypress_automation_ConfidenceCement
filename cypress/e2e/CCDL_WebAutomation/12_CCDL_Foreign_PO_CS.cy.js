const URL = require('./Login_URL.json')

describe("CASH PO", function(){

    it("visit", function(){
        cy.viewport(1920, 1080)
        cy.visit(URL.TestURL) //url    

                     //Prestage credential
        cy.get('#login').type('data_migration')       // user input
        cy.get('#password').type('1234')       // password input

                   //Test credential
        // cy.visit('http://10.10.16.131:9090/web/login')     //url 
        // cy.get('#login').type('devops')       // user input
        // cy.get('#password').type('1234')       // password input
        // cy.wait(2000)
        // cy.wait(2000)
        cy.get('.btn').click()                // loggin button click
        cy.wait(2000)
    
        cy.get('.o_navbar_apps_menu > .dropdown-toggle > .fa').click()           //menu bar 
        cy.get('.o-dropdown--menu > [href="#menu_id=210&action=413"]').click()   // Purchase

        cy.xpath("//span[contains(.,'Orders')]").click()            //Orders
        cy.xpath("//a[contains(.,'Foreign Purchase Order')]").click()   //Foreign PO
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Create')]").click()
        //cy.xpath("//a[contains(.,'Local Purchase Order')]").click()  //Local PO
        //cy.xpath("(//a[contains(.,'Request For Quotations')])[1]").click() //RFQ 
        // cy.wait(2000)
        // cy.xpath("//button[@class='btn btn-primary o_list_button_add']").click() //create RFQ
        // cy.xpath("(//input[@class='o_input ui-autocomplete-input'])[2]").click().type('{Enter}') //PR no select
        // cy.get('.o_form_buttons_edit > .btn-primary').click()     //save RFQ
        //cy.xpath("//span[contains(.,'Orders')]").click()            //Orders
        // cy.wait(2000)
        
        cy.xpath("//select[@name='purchase_base']").select('Comparative Statement')  //Purchase base
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[2]").type('CCDL/2023/Q0')   //CS with RFQ no
        cy.xpath("(//input[@autocomplete='off'])[2]").type('{Enter}')   //CS with RFQ no
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[12]").type('Main Plant')   //cost head 
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[12]").type('{Enter}')   //cost head  
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:nth-child(1)>td:nth-child(12)").type('20')
        cy.xpath("//a[contains(.,'Products')]").click()
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:nth-child(2)>td:nth-child(12)").type('15')
        cy.get('.o_form_buttons_edit > .btn-primary').click()     //save Local PO
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Request Approval')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Send for GM Approval')]").click()
        cy.wait(1000)
        cy.get('[name="gm_approved"]').click()
        cy.wait(1000)
        cy.get('[name="button_confirm"] > span').click()
        cy.wait(1000)
        cy.get('[name="button_approve"] > span').click()

        cy.get('[name="cancel_purchase_after_approval"] > span').should('have.text', 'Final Cancel')




        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
})