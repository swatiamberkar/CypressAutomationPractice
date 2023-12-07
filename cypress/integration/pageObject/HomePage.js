class HomePage
{
    getEditBox(){
        return  cy.get('.form-group:nth-child(1) input')
    }

    getTwoWayDataBinding(){
        return  cy.get('h4 input');
    }

    getGender(){
        return  cy.get('select');
    }

    getEntrepreneur()
    {
        return cy.get('#inlineRadio3');
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link');
    }
}
export default HomePage;