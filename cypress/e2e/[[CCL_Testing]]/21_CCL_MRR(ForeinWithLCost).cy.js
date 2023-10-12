describe("MRR Foreign with Landed cost", function(){
    it('visit', function(){
        cy.viewport(1200, 600)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Inventory')]").click()        //Purchase
        cy.xpath("(//span[contains(.,'Operations')])[2]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#mrr_type").select('Foreign')         //MRR type select
        cy.get("#ci_id").type('CI/00')              
        cy.wait(1000)
        cy.get("#ci_id").type('{Enter}')   //CI id select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Send For Review')]").click()        
        cy.wait(1000)
        // Landed cost flow
        cy.xpath("(//span[contains(.,'Operations')])[1]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Landed Costs')]").click()    // Landed cost 
        cy.wait(1000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#mrr_id").type('MRR0')
        cy.wait(1000)
        cy.get("#mrr_id").type('{Enter}')                  //MRR select
        cy.wait(1000) 
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(1)>td:nth-child(5)").type('60')
        cy.xpath("//a[contains(.,'Additional Costs')]").click()
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(5)").type('80')
        cy.xpath("//span[contains(.,'Validate')]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Operations')])[2]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
        cy.wait(1000)
        cy.xpath("(//tr[@class='o_data_row'])[1]").click()   //click on first TR





        cy.xpath("//span[contains(.,'Reviewed')]").should('have.text', 'Reviewed')
        cy.xpath("//span[contains(.,'Reviewed')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Validate')]").should('have.text', 'Validate')
        cy.xpath("//span[contains(.,'Validate')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Apply')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'MRR')]").click()





        



    })
})