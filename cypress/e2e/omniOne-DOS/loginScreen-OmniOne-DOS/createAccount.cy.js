describe('SignUp / Account Creation', () => {

  it('Create New Account using New Valid Credentials', () => {

    cy.visit('https://dosmonorepodev.z6.web.core.windows.net/')

    cy.get('.btn').should('be.visible').click()

    cy.origin('https://sso-dev.vercel.app', () => {

      cy.url().should('include', 'sso-dev.vercel.app')

      cy.get('#createaccount-button').should('be.visible').click()
      cy.get('#first-name-input').should('exist').click().type()
          

    })

  })

})