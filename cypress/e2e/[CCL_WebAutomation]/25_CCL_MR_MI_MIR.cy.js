describe("MR_MI_MIR",()=>{
    beforeEach('login', ()=>{
        cy.viewport(1200, 660)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Inventory')]").click()        //Purchase
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
    })

    it('MR', ()=>{
        cy.xpath("//a[contains(.,'Material Requisition')]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.xpath("//input[contains(@id,'requisition_deadline')]").click()        //date pick
        cy.wait(1000)
        cy.get("table[class='table table-sm']>tbody>tr:nth-child(5)>td:nth-child(3)").click()   //date pick
        cy.wait(1000)
        cy.xpath("//span[contains(@class,'fa fa-clock-o')]").click()       //time pick
        cy.wait(1000)
        cy.xpath("(//span[@class='fa fa-chevron-up'])[1]").click()
        cy.xpath("(//span[@class='fa fa-chevron-up'])[2]").click()
        cy.xpath("(//span[@class='fa fa-chevron-up'])[3]").click()
        cy.xpath("//span[contains(@class,'fa fa-check primary')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Add a line')]").click()      // add a line 1
        cy.wait(1000)   //product1
        cy.get("[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(1)>td:nth-child(1)").type('HeadPhone')
        cy.wait(1000)
        cy.get("[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(1)>td:nth-child(1)").type('{Enter}')
        //Cost Head
        cy.get("[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(1)>td:nth-child(4)").click()
         cy.wait(1000)
         cy.get("[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(1)>td:nth-child(4)").type('{Enter}')
        //Quantity
        cy.get("[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(1)>td:nth-child(5)").clear().type('5')
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Add a line')]").click()      // add a line 2
        cy.wait(1000)
        cy.get("[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(1)").type('Pendrive 32GB')
        cy.wait(1000)
        cy.get("[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(1)").type('{Enter}')
        cy.get("[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(4)").click()
         cy.wait(1000)
         cy.get("[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(4)").type('{Enter}')
         cy.get("[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(5)").clear().type('5')
         cy.xpath("//span[contains(.,'Send to Approver')]").click()
         cy.wait(1000)
         cy.xpath("//span[contains(.,'Confirm')]").click()
         cy.wait(1000)
         cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
    })
    it('MI', ()=>{
        cy.xpath("(//a[contains(.,'Material Issue')])[1]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#requisition_id").type('MR00')      //MR select
        cy.wait(1000)
        cy.get("#requisition_id").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Approve')]").click()
        cy.wait(2000)
    })

    it('MIR', ()=>{
        cy.xpath("(//a[contains(.,'Material Issue Return')])[1]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#material_issue_id").type('MI00')      //MI select
        cy.wait(1000)
        cy.get("#material_issue_id").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Send For Review')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Reviewed')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Validate')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Apply')]").click()
        cy.wait(1000)
    })



    })
