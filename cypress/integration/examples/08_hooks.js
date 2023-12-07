
import HomePage from "../pageObject/HomePage";
import ProductPage from "../pageObject/ProductPage";

describe('Hooks', () => {
    let userData;

    before(function () {
        cy.fixture('example').then(function (data1) {
            userData = data1
        })
    })

    it('Verify Hooks', () => {
        // Cypress.config('defaultCommandTimeout', 6000)
        const homePage = new HomePage();
        const productPage = new ProductPage();

        cy.visit(Cypress.env('url')+'/angularpractice/');

        homePage.getEditBox().type(userData.name)
        homePage.getGender().select(userData.gender)

        homePage.getTwoWayDataBinding().should('have.value', userData.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        //  homePage.getEntrepreneur().should('be.disabled').debug()

        homePage.getShopTab().click();

        userData.productName.forEach(function (element) {
            //cy.pause()
            cy.selectProduct(element)
        })

        productPage.checkoutButton().click({ force: true })

        var sum = 0;

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const actualText = $el.text();
            var res = actualText.split(" ")
            res = res[1].trim();
            cy.log(res)
            sum = Number(sum) + Number(res);
        }).then(function () {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element){
            const actualText = element.text();
            let res = actualText.split(" ")
            var total = res[1].trim();
            cy.log(res)
            expect(Number(total)).to.equal(sum)
        })

        cy.contains('Checkout').click()
        cy.get('#country').type('india')
        // Cypress.config('defaultCommandTimeout', 6000)
        cy.wait(5000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get("[type='submit']").click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function (msg) {
            const text = msg.text();
            expect(text.includes('Success')).to.be.true;
        })

    })
})