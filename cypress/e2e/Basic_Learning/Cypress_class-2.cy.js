describe('Cart', function(){

    beforeEach(function(){
        cy.viewport(1080,720)
        cy.visit('https://demo.nopcommerce.com/')
    })
it('Add to cart', function(){
        cy.title().should('eq', 'nopCommerce demo store')

        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
        // cy.xpath("//button[contains(text(),'Search')]").click()
        cy.get('#small-search-box-form > .button-1').click()
        cy.get('.product-title > a').click()
        cy.get('#add-to-cart-button-4').click()
        cy.wait(3000)

        cy.xpath("//a[contains(text(),'shopping cart')]").click()
        cy.get('.product-unit-price').contains("$1,800.00")
        cy.get('.product-subtotal').contains('$3,600.00')
    })
})