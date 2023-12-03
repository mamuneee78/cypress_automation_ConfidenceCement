describe("PR Creation", function(){

    it("visit", function(){

        cy.viewport(1200, 660)
       cy.visit('http://10.10.16.131:9090/web/login')     //url   Test server
      //cy.visit('http://192.168.3.224:9090/web/login')     //url   prestage server
                      //Test credential
        // cy.get('#login').type('devops')       // user input
        // cy.get('#password').type('1234')       // password input
        
        //Prestage credential
        cy.get('#login').type('data_migration')       // user input
        cy.get('#password').type('1234')       // password input 
        // cy.wait(2000)
        cy.get('.btn').click()                // loggin button click
        cy.wait(2000)
    
        cy.xpath("//button[contains(@title,'Home Menu')]").click()           //menu bar
        cy.wait(1000)
        cy.get('.o-dropdown--menu > [href="#menu_id=210&action=413"]').click()   // PR
        cy.wait(1000)
        for (let i = 0; i < 2; i++) {       //Repeat run the test 
        cy.xpath("//button[contains(.,'Create')]").click()     //create
        cy.wait(1000)
        cy.xpath("//div[@name='budget_line_id']//input").click().type('{enter}')   //budget line1
        cy.xpath("//div[@name='budget_line_id']//input").type('{enter}')   //budget line1
        // cy.wait(1000)
        cy.xpath("//div[@name='assigned_to']//input").type('Dev')       // approver select
        // cy.wait(1000)
        cy.xpath("//div[@name='assigned_to']//input").type('{Enter}')       // approver select
        cy.xpath("//select[@name='priority']").select('High')                      //priority
        cy.xpath("//select[@name='requirement_for']").select('Operation')          //Requirement for
        cy.xpath("//select[@name='requisition_type']").select('Site Purchase')       //Site Purchase or  Local     //Requisition type
        cy.xpath("//select[@name='purchase_type']").select('New Purchase')         //purchase type
        cy.wait(1000)
        //const filePath = ''
        // cy.get('.oe_add > .btn').click()
        // cy.xpath("//input[@multiple='multiple']").selectFile('cypress/fixtures/me.jpg')   //UploadFile
        //add line 1
        //General Products
        cy.xpath("(//a[contains(.,'Add a line')])[1]").click()                     //add line 1
        // cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:first-child>td:first-child").type('A4 paper ( 80)').type('{enter}')
        // cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:first-child>td:nth-child(3)").type('2')
                
                            //WeightScale products
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:first-child>td:first-child").type('fly ash(WS)') //fly ash(WS)// A4 paper ( 80)
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:first-child>td:first-child").type('{Enter}')
        cy.get('[data-name="product_id"]').click()
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:first-child>td:nth-child(3)").type('200')
                            //add line 2
       cy.xpath("(//a[contains(.,'Add a line')])[1]").click()                     //add line 2
        
                              //Genaral Products
        // cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:first-child").type('Admixture ( 2026 NS BD)')
        // cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:nth-child(3)").type('5')
        
                          //WeightScale products
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:first-child").type('clinker(ws)').type('{enter}')
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:nth-child(3)").type('100')
        cy.xpath("//button[contains(.,'Save')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Send To HOD')]").click() 
        //cy.screenshot()
        cy.xpath("//span[contains(.,'Send To HOD')]").should('have.text', 'Send To HOD')  //send to hod
        cy.wait(1000)
        //cy.screenshot()
        cy.xpath("(//span[contains(.,'Request Approval')])[3]").click()
        cy.xpath("(//span[contains(.,'Request Approval')])[3]").should('have.text', 'Request Approval')  // hod to gm
        cy.wait(1000)
        //cy.screenshot()
        cy.get('[name="button_gm_approve"] > span').click()
        cy.xpath("(//span[contains(.,'Request Approval')])[3]").should('have.text', 'Request Approval') //gm to scm
        cy.wait(2000)
        //cy.screenshot()
        cy.xpath("(//span[contains(.,'Approve')])[3]").click()           //scm approved 
        cy.xpath("(//span[contains(.,'Approve')])[3]").should('have.text', 'Approve')
        cy.wait(1000)
        //cy.screenshot()
        cy.get('[name="button_done"] > span').click()
        cy.wait(1000)
        cy.get('[name="button_send_for_amendment"] > span').should('have.text', 'Send for Amendment')
        //cy.screenshot()

        }

  

        

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })





        });
    });