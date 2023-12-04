describe('Test suit', ()=> {
    beforeEach('login', ()=>{
       cy.viewport(1200, 660)
       cy.visit('http://10.10.16.131:9090/web/login')     //url   Test server
      // cy.visit('http://192.168.3.224:9090/web/login')     //url   prestage server
       
                    //Prestage credential
       cy.get('#login').type('data_migration')       // user input
       cy.get('#password').type('1234')       // password input

       cy.get('.btn').click()                // loggin button click
        cy.wait(2000)
    
        cy.get('.o_navbar_apps_menu > .dropdown-toggle > .fa').click()           //menu bar 
        cy.get('.o-dropdown--menu > [href="#menu_id=210&action=413"]').click()   // Purchase

        cy.xpath("//span[contains(.,'Orders')]").click()            //Orders
   })


   it('PI', ()=>{
       cy.xpath("//a[contains(.,'Proforma Invoice')]").click()
       cy.wait(2000)
       cy.xpath("//button[contains(.,'Create')]").click()         //New 

           var RandomNumber = Math.floor(Math.random()*100000)             // Random Number variable 

       cy.xpath("(//input[@autocomplete='off'])[1]").type(RandomNumber)
       cy.wait(1000)
       cy.xpath("(//input[@autocomplete='off'])[2]").type('A & Company').type('{Enter}')         //Vendor select 
       cy.wait(1000)
       cy.xpath("(//input[@autocomplete='off'])[4]").type('Foreign')
       cy.wait(1000)
       cy.xpath("(//input[@autocomplete='off'])[4]").type('{Enter}')   //FPO select
       cy.wait(1000)
       cy.xpath("(//input[@autocomplete='off'])[20]").type('BDT')
       cy.wait(1000)
       cy.xpath("//button[contains(.,'Save')]").click()        
    //    cy.wait(1000)
    //    cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
       //cy.screenshot()

   })
 
   it('LC', ()=>{
       cy.wait(1000)
       cy.xpath("//a[contains(.,'LC/TT/LCAF/BG')]").click()
       cy.wait(2000)
       cy.xpath("//button[contains(.,'Create')]").click()         //New 
      
       var RandomNumber1 = Math.floor(Math.random()*100000)             // Random Number variable 

       cy.xpath("(//input[@autocomplete='off'])[1]").type(RandomNumber1)
       cy.wait(1000)
       cy.xpath("(//input[@autocomplete='off'])[2]").type('A & Company').type('{Enter}')   //Vendor select
       cy.wait(1000)
       cy.xpath("(//input[@autocomplete='off'])[4]").click().type('{Enter}')   //PI select
       cy.wait(1000)
       cy.xpath("//button[contains(.,'Save')]").click()       
       //cy.screenshot()

   })
 
   it('CI', ()=>{
       cy.wait(1000)
       cy.xpath("//a[contains(.,'Commercial Invoice')]").click()
       cy.wait(1000)
       cy.xpath("//button[contains(.,'Create')]").click()         //New 
       cy.wait(1000)

       var RandomNumber1 = Math.floor(Math.random()*100000)             // Random Number variable 

       cy.xpath("(//input[@autocomplete='off'])[1]").type(RandomNumber1)
       cy.wait(1000)
       cy.xpath("(//input[@autocomplete='off'])[3]").click()   //LC select
       cy.wait(1000)
       cy.xpath("(//input[@autocomplete='off'])[3]").type('{Enter}')
       cy.wait(1000)
       cy.xpath("//button[contains(.,'Save')]").click()         
       cy.wait(1000)
       cy.xpath("(//span[contains(.,'Close')])[1]").should('have.text', 'Close')
       //cy.screenshot()
   })
 
   })