const User = require('./UsersCridential.json')

describe("Purchase Requisition", function(){
    it('visit', function(){
        cy.viewport(1920, 1200)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type(User.SCM_Initiator)       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Direct Purchase')]").click()
        cy.wait(1000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.get("#partner_id_0").click()
        cy.wait(2000)
        cy.get("#partner_id_0").type('{downArrow}{downArrow}{Enter}') 
        //cy.get("#partner_id").type('{Enter}') 
        cy.xpath("//input[@id='purchase_request_id_0']").click()
        cy.xpath("//input[@id='purchase_request_id_0']").type('PR/0000').type('{Enter}')
        cy.wait(1000)
        cy.get("table[class='o_section_and_note_list_view o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(8)").type('40')
        cy.xpath("//a[contains(@name,'products')]").click()
        cy.wait(1000)
        cy.get("table[class='o_section_and_note_list_view o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(8)").type('20')
        cy.wait(1000)
        //cy.xpath("//i[@class='fa fa-cloud-upload fa-fw']").click()
        cy.xpath("//span[contains(.,'Submit')]").click()
        cy.wait(1000)
        cy.xpath("//img[@alt='User']").click()
        cy.xpath("//a[contains(.,'Log out')]").click()

        cy.wait(1000)
        cy.get('#login').type(User.SCM_HOD)       // user input
         cy.get('#password').type('1234')       // password input
         cy.get('.btn').click()
         cy.wait(1000)
         cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Direct Purchase')]").click()
        cy.wait(1000)
        cy.xpath("(//tr[contains(@class,'o_data_row')])[1]").click()

        cy.xpath("//span[contains(.,'Confirm Order')]").click()
        cy.xpath("//a[contains(.,'Direct Purchase')]").click()
        cy.xpath("//span[contains(.,'Order Reference')]").should('have.text', 'Order Reference')

        Cypress.on('uncaught:exception', () => false)


    })
})