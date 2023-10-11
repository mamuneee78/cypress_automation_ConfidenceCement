
describe('Test suit', ()=> {

    before(()=> {
        
            cy.viewport(1920, 1480)
            cy.visit('http://192.168.3.187:7071/web/login')     //url 
            cy.get('#login').type('qa_user')       // user input
            cy.get('#password').type('1234')       // password input
            cy.get('.btn').click()                // loggin button click
            cy.wait(1000)
     })
    beforeEach(()=> {
            cy.wait(2000)
            cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
            cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
            cy.xpath("//span[contains(.,'Orders')]").click()
            cy.wait(1000)
           })

    it('PI', ()=>{
        cy.xpath("//a[contains(.,'Proforma Invoice')]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#partner_id").type('A & Brothers').type('{Enter}')         //Vendor select 
        cy.wait(1000)
        cy.get("#purchase_order_id").type('FPO/00')
        cy.wait(1000)
        cy.get("#purchase_order_id").type('{Enter}')   //FPO select
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Confirm')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        cy.wait(1000)

    })

    it('LC', ()=>{
        cy.xpath("//a[contains(.,'LC/TT/LCAF')]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#partner_id").type('A & Brothers').type('{Enter}')         //Vendor select 
        cy.wait(1000)
        cy.get("#proforma_invoice_id").type('PI/00').type('{Enter}')   //PI select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        cy.wait(1000)

    })

    it('CI', ()=>{
        cy.xpath("//a[contains(.,'Commercial Invoice')]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'New')]").click()         //New 
        cy.wait(1000)
        cy.get("#lc_details_id").type('LC/00').type('{Enter}')   //LC select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        cy.xpath("//span[contains(.,'Send Back')]").should('have.text', 'Send Back')

    })




  })
