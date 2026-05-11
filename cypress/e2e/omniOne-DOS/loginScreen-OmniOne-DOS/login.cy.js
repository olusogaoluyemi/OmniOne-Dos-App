describe('Login Screen', () => {
  it('logs in successfully using valid credentials', () => {
    cy.visit('https://dosmonorepodev.z6.web.core.windows.net/')

    cy.get('.btn').should('be.visible').click()

    //cy.get('.btn', { timeout: 15000 }).should('be.visible').click()

    cy.origin(
      'https://sso-dev.vercel.app',
      { args: { username: '9139369289', password: 'Password@123' } },
      ({ username, password }) => {

        cy.get('#phonenumber-input', { timeout: 15000 })
          .should('exist')
          .click({ force: true })
          .clear({ force: true })
          .type(username, { force: true, delay: 100 })
          .trigger('input', { force: true })
          .trigger('change', { force: true })

        cy.get('#continue', { timeout: 10000 })
          .should('not.be.disabled')
          .click()

        cy.get('input[type="password"]', { timeout: 15000 })
          .should('be.visible')
          .type(password)

        cy.get('button[type="submit"]', { timeout: 10000 })
          .should('not.be.disabled')
          .click()
      })
    // Confirm dashboard loaded - check something that's definitely visible
    cy.get('body', { timeout: 15000 }).should('be.visible')
    cy.get('.w-\\[30px\\]', { timeout: 10000 })
  .should('be.visible')
    
  })
})