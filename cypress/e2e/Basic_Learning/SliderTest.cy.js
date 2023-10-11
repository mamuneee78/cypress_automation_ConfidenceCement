describe("SliderTest", function(){

    it("visit", function(){
        for (let i = 0; i < 5; i++) {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/slider')     //url 
        cy.xpath("//input[@type='range']")
        .invoke('val', 40)
        cy.wait(1000)
        cy.xpath("//input[@type='range']")
         .invoke('val', 60)
         cy.xpath("//input[@type='range']")
         .invoke('val', 95)

        }



        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
})