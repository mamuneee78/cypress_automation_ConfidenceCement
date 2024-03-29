describe("Commercial Invoice", function(){
    it('visit', function(){
        cy.viewport(1920, 1480)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Commercial Invoice')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        var RandomNumber = Math.floor(Math.random()*100000)             // Random Number variable 
        const formattedNumber = `CCL/LC/${RandomNumber}`; // Customize the format
  
        cy.xpath("//input[@id='name_0']").clear().type(formattedNumber)
        cy.get("#lc_details_id_0").type('CCL').type('{Enter}')   //LC select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        cy.xpath("//span[contains(.,'Send Back')]").should('have.text', 'Send Back')






    })
})