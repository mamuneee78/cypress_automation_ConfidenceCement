
describe('Table Handle', ()=>{

    beforeEach(()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn').click()
        cy.wait(2000)
        cy.get('.btn-close').click()
        cy.get('#menu-customer > .parent').click()
        cy.get('#menu-customer>ul>li:nth-child(1)').click()

    })

    it.only('Check number of rows and cols', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7')

        cy.get("select[name='filter_status']").select('Enabled') //.should('have.text', 'Enabled')
        //cy.get("select[name='filter_status']").should('have.text', 'Enabled')

    })

    it.skip('Check table value', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(3)").should('contain', 'gorankreziccc90@gmail.com')

    })
    it.only('read all the values from table', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($col, index, $cols)=>{
                        cy.log($col.text());
                    })

            })

        })
    })


    })
