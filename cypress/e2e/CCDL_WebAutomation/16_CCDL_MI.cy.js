const URL = require('./Login_URL.json')

describe("Material Issue", function(){
    it('visit', function(){
        cy.viewport(1200, 660)
        cy.visit(URL.TestURL)   //url   prestage server
         
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
        cy.xpath("(//a[contains(.,'Inventory')])[1]").click()   // Inventory

        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'Material Issue')])[1]").click()    // MR select 
        cy.wait(1000)
        //View MI
        cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:first-child>td:nth-child(2)").click() 
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Send To GM')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Approve')]").click()



    })
})