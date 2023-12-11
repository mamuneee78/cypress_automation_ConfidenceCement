const URL = require('./Login_URL.json')

describe("RFQ Quot NS", function(){

    it("visit", function(){
        cy.viewport(1920, 1200)
        cy.visit(URL.TestURL)    //url 
        cy.get('#login').type('data_migration')       // user input
        cy.get('#password').type('1234')       // password input
        // cy.wait(2000)
        cy.get('.btn').click()                // loggin button click
        cy.wait(2000)
    
        cy.get('.o_navbar_apps_menu > .dropdown-toggle > .fa').click()           //menu bar
        cy.get('.o-dropdown--menu > [href="#menu_id=210&action=413"]').click()   // PR
        cy.xpath("(//span[contains(.,'Orders')])[1]").click()            //Orders
        cy.xpath("(//a[contains(.,'Request For Quotations')])[1]").click()   //orders menu
        cy.wait(2000)
        cy.xpath("//button[@class='btn btn-primary o_list_button_add']").click()                 //purchase rep
        cy.xpath("(//input[@class='o_input ui-autocomplete-input'])[2]").click().type('{Enter}') //purchase req
        cy.get('.o_form_buttons_edit > .btn-primary').click()               
        cy.xpath("//span[contains(.,'RFQ-Vendor')]").click()                //RFQ ventor button
        cy.wait(1000)
        cy.xpath("(//input[@type='text'])[1]").click().type('{Enter}')     //vendor1 select
        cy.wait(1000)
        cy.xpath("(//input[@type='text'])[1]").click().type('{Enter}')     //vendor2 select
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Save')]").click()                     // save
        cy.wait(1000)
        cy.xpath("//span[contains(.,'RFQs/Orders')]").click()              //Quoation button
        cy.wait(1000)
        cy.xpath("//tr[contains(@data-id,'purchase.order_2')]").click()   // View quoation1
        cy.xpath("//button[contains(@class,'edit')]").click()                //edit mode
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:first-child>td:nth-child(13)").click()
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:first-child>td:nth-child(13)").type('120')
        cy.get('[data-name="product_id"]').click()
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:nth-child(2)>td:nth-child(13)").click()
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:nth-child(2)>td:nth-child(13)").type('140')
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Save')]").click()        //SAVE Quotation1

        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Orders')])[1]").click()            //Orders
        cy.xpath("(//a[contains(.,'Notesheet')])[1]").click()   //orders menu
        cy.get('.o_list_button_add').click()                      //Create Notesheet
        cy.get("select[name='notesheet_type']").select('Local')    // PO type  usage Foreign
        cy.xpath("(//input[@autocomplete='off'])[1]").click().type('{Enter}')   // Vendor select
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[2]").click().type('{Enter}')   // quotation select
        cy.wait(1000)
        cy.xpath("//textarea[@name='subject']").type('Test Subject')            // subject type 
        cy.xpath("//textarea[@name='body']").type('Test Body')            // Body type
        cy.xpath("//button[contains(.,'Save')]").click()            //NS save 

        cy.xpath("//span[contains(.,'Send for Approval')]").should('have.text', 'Send for Approval')
        cy.xpath("//span[contains(.,'Send for Approval')]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text', 'Approve')
        cy.xpath("//button[@class='btn btn-danger']").should('have.text', 'Reject')
        cy.screenshot()
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.get('[name="action_hscm_approve"] > span').click()
        cy.wait(1000)
        cy.get('[name="action_dmd_approve"] > span').click()
        cy.get('[name="action_done"] > span').click()

        cy.xpath("//span[contains(.,'Final Cancel')]").should('have.text', 'Final Cancel')
        cy.screenshot()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Print')]").click()
        cy.xpath("//a[contains(.,'Notesheet Report')]").click()




       













        




        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
})