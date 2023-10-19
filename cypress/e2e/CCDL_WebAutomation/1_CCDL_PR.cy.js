describe("PO Creation", function(){

    it("visit", function(){

        cy.viewport(1280, 720)
        cy.visit('http://10.10.16.131:9090/web/login')     //url 
        cy.get('#login').type('devops')       // user input
        cy.get('#password').type('1234')       // password input
        // cy.wait(2000)
        cy.get('.btn').click()                // loggin button click
        cy.wait(2000)
    
        cy.get('.o_navbar_apps_menu > .dropdown-toggle > .fa').click()           //menu bar
        cy.get('.o-dropdown--menu > [href="#menu_id=210&action=413"]').click()   // PR
        cy.get('.o_list_button_add').click()     //create
        cy.wait(1000)
        cy.xpath("//div[@name='budget_line_id']//input").click().type('{enter}')   //budget line1
        cy.xpath("//div[@name='budget_line_id']//input").type('{enter}')   //budget line1
        // cy.wait(1000)
        cy.xpath("//div[@name='assigned_to']//input").type('devops')       // approver select
        cy.xpath("//select[@name='priority']").select('High')                      //priority
        cy.xpath("//select[@name='requirement_for']").select('Operation')          //Requirement for
        cy.xpath("//select[@name='requisition_type']").select('Local')             //Requisition type
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
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:first-child>td:first-child").type('Fly_Ash').type('{enter}')
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:first-child>td:nth-child(3)").type('100')
                            //add line 2
        cy.xpath("(//a[contains(.,'Add a line')])[1]").click()                     //add line 2
        
                              //Genaral Products
        // cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:first-child").type('Admixture ( 2026 NS BD)')
        // cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:nth-child(3)").type('5')
        
                          //WeightScale products
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:first-child").type('Clinker').type('{enter}')
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped']>tbody>tr:nth-child(2)>td:nth-child(3)").type('100')

        cy.get('.o_form_buttons_edit > .btn-primary').click() 
        //cy.screenshot()
        cy.xpath("//span[contains(.,'Send To HOD')]").should('have.text', 'Send To HOD')
        cy.wait(1000)
        //cy.screenshot()
        cy.get('[name="button_hod_approve"] > span').click()
        cy.xpath("(//span[contains(.,'Request Approval')])[3]").should('have.text', 'Request Approval')
        cy.wait(1000)
        //cy.screenshot()
        cy.get('[name="button_scm_approve"] > span').click()
        cy.xpath("(//span[contains(.,'Request Approval')])[3]").should('have.text', 'Request Approval')
        cy.wait(1000)
        //cy.screenshot()
        cy.get('[name="button_pm_approve"] > span').click()
        cy.xpath("(//span[contains(.,'Approve')])[3]").should('have.text', 'Approve')
        cy.wait(1000)
        //cy.screenshot()
        cy.get('[name="button_done"] > span').click()
        cy.wait(1000)
        cy.get('[name="button_send_for_amendment"] > span').should('have.text', 'Send for Amendment')
        //cy.screenshot()

  

        

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })





        });
    });