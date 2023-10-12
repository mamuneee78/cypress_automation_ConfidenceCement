describe("Foreign-PO(Agrmt)", function(){
    it('visit', function(){
        cy.viewport(1000, 660)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Local Purchase')]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#purchase_base").select('Agreement')    // PO base select
        cy.wait(2000)
        cy.get("#partner_id").click()
        cy.wait(1000)
        cy.get("#partner_id").type('A & Brothers')     //vendor select 
        cy.wait(1000)
        cy.get("#partner_id").type('{Enter}') 
        cy.get("#agreement_id").click()
        cy.get("#agreement_id").type('VA000').type('{Enter}')   //agreement select
        cy.wait(1000)
        cy.get("#purchase_request_id").click()
        cy.get("#purchase_request_id").type('PR/000').type('{Enter}')   //PR select
        cy.wait(1000)
        cy.get("table[class='o_section_and_note_list_view o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(4)").type('20')
        cy.xpath("//a[contains(@name,'products')]").click()
        cy.wait(1000)
        cy.get("table[class='o_section_and_note_list_view o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(4)").type('20')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm Order')]").click()
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        

    })
})