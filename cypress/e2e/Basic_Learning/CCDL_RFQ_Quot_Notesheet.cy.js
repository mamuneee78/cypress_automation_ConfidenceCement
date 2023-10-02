describe("Single Quotation", function(){

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
        cy.xpath("(//a[contains(.,'Request For Quotations')])[1]").click()   //orders menu
        cy.wait(2000)
        cy.xpath("//button[@class='btn btn-primary o_list_button_add']").click()                 //purchase rep
        cy.xpath("(//input[@class='o_input ui-autocomplete-input'])[2]").click().type('{Enter}') //purchase req
        cy.get('.o_form_buttons_edit > .btn-primary').click()               
        cy.xpath("//span[contains(.,'RFQ-Vendor')]").click()                //RFQ ventor button
        cy.wait(1000)
        cy.xpath("(//input[@type='text'])[1]").click().type('{Enter}')     //vendor select
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Save')]").click()                     // save
        cy.wait(1000)
        cy.xpath("//span[contains(.,'RFQs/Orders')]").click()              //Quoation button
        cy.wait(1000)
        cy.xpath("//tr[contains(@class,'o_data_row text-info')]").click()   // View quoation 
        cy.xpath("//button[contains(@class,'edit')]").click()                //edit mode
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:first-child>td:nth-child(13)").type('120')
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:nth-child(2)>td:nth-child(13)").type('130')
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Save')]").click()        //SAVE Quotation
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
        cy.xpath("//span[contains(.,'Send for Approval')]").should('have.text', 'Send for Approval')
        cy.xpath("//span[contains(.,'Send for Approval')]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text', 'Approve')
        cy.xpath("//button[@class='btn btn-danger']").should('have.text', 'Reject')
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[2]").click()




       













        




        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
})