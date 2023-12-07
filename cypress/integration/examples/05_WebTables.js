describe('Web Tables', ()=>{
    it('Verify Web Table', ()=> {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get("[name='courses'] tr td:nth-child(2)").each(($el, index, $list) => {
            const text = $el.text();
            if(text.includes('Python'))
            {
                cy.get("[name='courses'] tr td:nth-child(2)").eq(index).next().then(function(price){
                    const value = price.text();
                    expect(value).to.equal('25')
                })

            }
        })
    })
})