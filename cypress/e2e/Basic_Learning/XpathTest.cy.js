// describe("PO Creation", function(){

//     it("visit", function(){

//         cy.visit('https://www.saucedemo.com/')
//         cy.get('input[name="user-name"]').type('standard_user')
//         cy.get('input[name="password"]').type('secret_sauce')
//         cy.get('input[name="login-button"]').click()
//         //cy.xpath("//input[contains(@data-test,'username')]").type('standard_user')
//         // cy.get("//input[@name='password']").type('secret_sauce')
//         // cy.get("//input[@name='login-button']").click()
describe("PO Creation", function(){

    it("visit", function(){

        cy.visit('http://192.168.3.187:7071/web/login')
        cy.xpath("//input[@name='login']").type('qa_user')
        cy.xpath("//input[@name='password']").type('1234')

        // cy.get('#login').type('qa_user')
        // cy.get('#password').type('1234')
        // cy.wait(2000)
         cy.get('.btn').click()
         cy.get('.dropdown-toggle > .oi').click()
         cy.get('[href="#menu_id=437&action=575"]').click()
         cy.wait(2000)
         cy.get('.btn-primary').click()



    })

})