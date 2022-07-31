describe('Login', () => {
    
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Should validate Login', () => {
      cy.get("button[type='button']")
      .eq(1)
      .click({force:true})
    })
})