describe("RFQ Quot CS", function(){

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
        cy.xpath("(//span[contains(.,'Orders')])[1]").click()            //Orders
        cy.xpath("(//a[contains(.,'Request For Quotations')])[1]").click()   //orders menu
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Create')]").click()
        //cy.xpath("//button[@class='btn btn-primary o_list_button_add']").click()                  //purchase rep
        cy.xpath("(//input[@class='o_input ui-autocomplete-input'])[2]").click().type('{Enter}') //purchase req
        cy.get('.o_form_buttons_edit > .btn-primary').click()               // save RFQ
        cy.wait(1000)          
        cy.xpath("//span[contains(.,'RFQ-Vendor')]").click()                //RFQ ventor button
        cy.wait(1000)
        cy.xpath("(//input[@type='text'])[1]").type('{Enter}')     //vendor1 select
        cy.wait(1000)
        cy.xpath("(//input[@type='text'])[1]").click().type('{Enter}')     //vendor2 select
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Save')]").click()                     // save
        cy.wait(1000)
        cy.xpath("(//span[contains(@class,'text')])[2]").click()              //Quoation button
        cy.wait(1000)
        cy.xpath("//tr[contains(@data-id,'purchase.order_2')]").click()   // View quoation1
        cy.xpath("//button[contains(@class,'edit')]").click()                //edit mode
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:first-child>td:nth-child(13)").type('120')
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:nth-child(2)>td:nth-child(13)").type('130')
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Save')]").click()        //SAVE Quotation1
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Related Quotations')]").click()
        cy.wait(1000)
        cy.xpath("(//tr[contains(@class,'row text-info')])[2]").click()   // View quoation1
        cy.xpath("//button[contains(@class,'edit')]").click()                //edit mode
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:first-child>td:nth-child(13)").type('110')
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:nth-child(2)>td:nth-child(13)").type('125')
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Save')]").click()        //SAVE Quotation1

        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Orders')])[1]").click()            //Orders
        cy.xpath("//a[contains(.,'Comparative Statement')]").click()   //orders menu CS
        cy.get('.o_list_button_add').click()                      //Create CS
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[1]").click().type('{Enter}')   // RFQ No select
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[2]").type('Test Automation')   // Response Name typing
        cy.screenshot()
        cy.xpath("//button[contains(.,'Save')]").click()        //SAVE CS
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Comparative Statement')]").click()     // CS View 
        cy.screenshot()
        // cy.wait(1000)
        // cy.xpath("table[id='vendor_selection_table']>tbody>tr:last-child>td:nth-child(2)").click()   //CS vendor selection
        // cy.wait(3000)
        // cy.screenshot()
        // cy.xpath("//span[contains(.,'Send To HSCM')]").should('have.text', 'Send To HSCM')   //assertion HSCM
        // cy.xpath("//span[contains(.,'Send To HSCM')]").click()           // Send to HSCM 
        // cy.wait(1000)
        // cy.screenshot()
        // cy.xpath("//span[contains(.,'Send To CEO')]").should('have.text', 'Send To CEO')   // assertion CEO
        // cy.xpath("//span[contains(.,'Send To CEO')]").click()           // Send to CEO
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Approve')]").should('have.text', 'Approve')   // assertion Approve
        // cy.xpath("//span[contains(.,'Approve')]").click()           // Approve
        // cy.screenshot()


        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
})