describe("CASH PO", function(){

    it("visit", function(){
        cy.viewport(1920, 1080)
                 cy.visit('http://10.10.16.131:9090/web/login')     //url   Test server
        //cy.visit('http://192.168.3.224:9090/web/login')     //url   prestage server
        
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
        cy.wait(4000)
    
        cy.xpath("//i[contains(@class,'fa fa-th-large')]").click()           //menu bar
        cy.get('.o-dropdown--menu > [href="#menu_id=210&action=413"]').click()   // Purchase

        cy.xpath("//span[contains(.,'Orders')]").click()            //Orders
        cy.xpath("//a[contains(.,'Cash Purchase Order')]").click()   //Cash PO
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
        
        // cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[2]").click().type('A & Company')    //vendor select
         cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[9]").type('Data Migration')   //HSCM User
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[3]").click().type('{Enter}')   //RFQ no
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[4]").click().type('{Enter}')   //Cost Head
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:nth-child(1)>td:nth-child(9)").type('20')
        // cy.xpath("//a[contains(.,'Products')]").click()
        // cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view']>tbody>tr:nth-child(2)>td:nth-child(9)").type('15')
        cy.get('.o_form_buttons_edit > .btn-primary').click()     //save Cash PO
        cy.get('.btn-primary > span').click()
        cy.wait(1000)
        cy.get('.btn-primary > span').click()
       






        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
})