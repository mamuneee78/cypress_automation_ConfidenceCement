describe("MRR Local", function(){
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
        cy.xpath("//a[contains(.,'MRR')]").click()    // MRR select 
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Create')]").click()         //New 
        cy.wait(1000)
        cy.get("[name='purchase_type']").select('Local Purchase')  //Purchase type

        cy.xpath("(//input[@autocomplete='off'])[2]").type('Local/CCDL') //PO id select
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[2]").type('{Enter}')   //PO id select
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Save')]").click()      
        cy.wait(1000)
        cy.xpath("//span[contains(.,'MRR Review')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'MRR Approve')]").click()
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Cancel Approved')]").should('have.text', 'Cancel Approved')
        cy.wait(1000)



    })
})