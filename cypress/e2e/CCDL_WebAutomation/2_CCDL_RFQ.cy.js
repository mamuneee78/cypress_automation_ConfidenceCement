describe("RFQ Creation", function(){

    it("visit", function(){
        cy.viewport(1200, 660)
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
        cy.get('.btn').click()                // loggin button click
        cy.wait(4000)
    
        cy.xpath("//i[contains(@class,'fa fa-th-large')]").click()           //menu bar
        cy.get('.o-dropdown--menu > [href="#menu_id=210&action=413"]').click()   // PR
        cy.xpath("(//span[contains(.,'Orders')])[1]").click()            //Orders
        cy.xpath("(//a[contains(.,'Request For Quotations')])[1]").click() //RFQ 
        cy.wait(2000)
        cy.xpath("//button[@class='btn btn-primary o_list_button_add']").click() //create RFQ
        cy.xpath("(//input[@class='o_input ui-autocomplete-input'])[2]").click().type('{Enter}') //PR no select
        cy.get('.o_form_buttons_edit > .btn-primary').click()     //save RFQ
        
        




        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
})