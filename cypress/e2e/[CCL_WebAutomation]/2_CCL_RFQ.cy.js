describe("RFQ", function(){
    it('visit', function(){
        cy.viewport(1920, 1200)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Request For Quotation')]").click() 
        cy.wait(1000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.get("#purchase_request_ids_0").type('PR/0000').type('{Enter}')

        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(7)").type('100')
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(7)").type('80')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Go-back')]").should('have.text', 'Go-back')
        //cy.wait(20000)



        Cypress.on('uncaught:exception', () => false)
    })
})