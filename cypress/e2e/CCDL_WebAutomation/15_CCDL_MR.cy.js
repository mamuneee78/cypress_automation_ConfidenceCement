describe("Materials Requisition", function(){
    it('visit', function(){
        cy.viewport(1200, 660)
        cy.visit('http://10.10.16.131:9090/web/login')     //url   Test server
        // cy.visit('http://192.168.3.224:9090/web/login')     //url   prestage server
         
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
        cy.xpath("//a[contains(.,'Material Requisition')]").click()    // MR select 
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Create')]").click()         //New 
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[1]").click().type('{Enter}')  //Approver select
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[4]").type('02/01/2024 00:00:00')       //date pick
        cy.wait(1000)
        // cy.get("table[class='table table-sm']>tbody>tr:nth-child(5)>td:nth-child(3)").click()   //date pick
        // cy.wait(1000)
        // cy.xpath("//span[contains(@class,'fa fa-clock-o')]").click()       //time pick
        // cy.wait(1000)
        // cy.xpath("(//span[@class='fa fa-chevron-up'])[1]").click()
        // cy.xpath("(//span[@class='fa fa-chevron-up'])[2]").click()
        // cy.xpath("(//span[@class='fa fa-chevron-up'])[3]").click()
        // cy.xpath("//span[contains(@class,'fa fa-check primary')]").click()
        // cy.wait(1000)
        cy.xpath("//a[contains(.,'Add a line')]").click()      // add a line 1
        cy.wait(1000)   //product1
        cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(1)>td:nth-child(1)").type('fly ash(WS)')
        cy.wait(1000)
        cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(1)>td:nth-child(1)").type('{Enter}')
        //Cost Head
        cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(1)>td:nth-child(3)").click()
         cy.wait(1000)
         cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(1)>td:nth-child(3)").type('{Enter}')
        //Quantity
        cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(1)>td:nth-child(6)").clear().type('5')
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Add a line')]").click()      // add a line 2
        cy.wait(1000)
        cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:nth-child(1)").type('clinker(ws)')
        cy.wait(1000)
        cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:nth-child(1)").type('{Enter}')
        cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:nth-child(3)").click()
         cy.wait(1000)
         cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:nth-child(3)").type('{Enter}')
         cy.get("[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:nth-child(6)").clear().type('5')
         cy.xpath("//button[contains(.,'Save')]").click()  
         cy.wait(1000)
         cy.xpath("//span[contains(.,'Reviewed')]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()



    })
})