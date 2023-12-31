
describe("Comparative Statement", function(){
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
        cy.xpath("//a[contains(.,'Comparative Statement')]").click()  //CS
        cy.wait(1000)
        for (let i = 0; i < 1; i++) {       //Repeat run the test 
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#request_for_quotation_id_0").type('RFQ/00').type('{Enter}')   // RFQ select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Compare')]").click()
        cy.wait(1000)
        //Unit price
        cy.xpath("(//input[@type='text'])[1]").type('5')
        cy.xpath("(//input[@type='text'])[3]").type('5')

        //cy.get("table[class='table table-bordered mt-0']>tbody>tr:nth-child(3)>td:nth-child(14)").click().type('5')
        //cy.get("table[class='table table-bordered mt-0']>tbody>tr:nth-child(4)>td:nth-child(14)").type('5')    
        cy.wait(1000)
        cy.xpath("(//button[contains(.,'Save')])[2]").click() //save CS
        cy.wait(1000)
        cy.xpath("(//a[@href='#'])[2]").click() 
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Send For Approval')]").should('have.text', 'Send For Approval')    //Assertion
        cy.xpath("//span[contains(.,'Send For Approval')]").click()          //send for approval
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Approve')]").should('have.text', 'Approve')    //Assertion
        cy.xpath("//span[contains(.,'Approve')]").click()          //approved by SCM HOD
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Approve')]").click()          //approved by MD
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Amendment')]").should('have.text', 'Amendment')   //assertion
        cy.wait(2000)
        cy.xpath("(//a[contains(.,'Comparative Statement')])[1]").click()    //back to CS list
        cy.wait(1000)

        }
        

    })
})