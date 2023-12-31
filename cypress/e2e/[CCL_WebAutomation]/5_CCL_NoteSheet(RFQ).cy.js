
describe("Quotation", function(){
    it('visit', function(){
        cy.viewport(1200, 660)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()       //Order menu
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Note sheet')]").click()  //NoteSheet
        cy.wait(1000)
        for (let i = 0; i < 2; i++) {       //Repeat run the test 
        cy.wait(1000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(2000)
        cy.xpath("//label[@class='form-check-label o_form_label'][contains(.,'Request For Quotation')]").click()
        cy.wait(1000)
        //cy.xpath("//label[@class='form-check-label o_form_label'][contains(.,'Request For Quotation')]").should('be.checked');
        cy.get("#rfq_id_0").type('RFQ/000').type('{Enter}')
        cy.wait(1000)
        cy.get("#quotation_id_0").type('Q/000').type('{Enter}')
        cy.wait(1000)  
        cy.get("#subject_0").type('Test Subject')  
        cy.get("#body_0").type('Test body')  
        cy.xpath("//span[contains(.,'Submit to Layer-1')]").should('have.text', 'Submit to Layer-1')
        cy.xpath("//span[contains(.,'Submit to Layer-1')]").click()
        cy.wait(1000) 
        cy.xpath("//span[contains(.,'Submit to Layer-2')]").should('have.text', 'Submit to Layer-2')
        cy.xpath("//span[contains(.,'Submit to Layer-2')]").click()
        cy.wait(1000) 
        cy.xpath("//span[contains(.,'Submit to SCM-HOD')]").should('have.text', 'Submit to SCM-HOD')
        cy.xpath("//span[contains(.,'Submit to SCM-HOD')]").click()
        cy.wait(1000) 
        cy.xpath("//span[contains(.,'Approve')]").should('have.text', 'Approve')
        cy.xpath("//span[contains(.,'Approve')]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        cy.xpath("//a[contains(.,'Note sheet')]").click()
        cy.wait(1000)
        
 
        

        }




    })
})