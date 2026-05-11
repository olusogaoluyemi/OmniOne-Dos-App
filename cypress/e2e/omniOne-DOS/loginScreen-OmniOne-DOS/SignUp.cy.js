describe('SignUp / Account Creation', () => {

  it('Create New Account using New Valid Credentials', () => {

    cy.visit('https://dosmonorepodev.z6.web.core.windows.net/')

    // Click initial button from DOS app
    cy.get('.btn')
      .should('be.visible')
      .click()

    // Switch to SSO domain
    cy.origin('https://sso-dev.vercel.app', () => {

      // Confirm redirect to SSO
      cy.url().should('include', 'sso-dev.vercel.app')

      // Open Create Account page
      cy.get('#createaccount-button')
        .should('be.visible')
        .click()

      // =========================
      // CREATE ACCOUNT FORM
      // =========================

      // First Name
      cy.get('#first-name-input')
        .should('be.visible')
        .type('Test')

      // Last Name
      cy.get('#last-name-input')
        .should('be.visible')
        .type('Account')


      // Country Dropdown
      cy.contains('Select an Option')
        .should('be.visible')
        .click()

      // Select Nigeria
      cy.contains('Nigeria')
         .should('be.visible')
         .click()

      // Phone Number
      cy.get('#phone-number-input')
        .should('be.visible')
        .type('08038274829')

      // Email
      cy.get('#email-input')
        .should('be.visible')
        .type(`oluyemitest@yopmail.com.com`)

      // Password
      cy.get('#password-input')
        .should('be.visible')
        .type('Password123@')

      // Confirm Password
      cy.get('#confirm-password-input')
        .should('be.visible')
        .type('Password123@')

      // Accept Terms
      cy.get('input[type="checkbox"]')
        .check({ force: true })

      // Click Create Account
      cy.contains('button', 'Create Account')
        .should('be.visible')
        .click()

      // =========================
      // ASSERTIONS
      // =========================

      // Wait for onboarding/dashboard redirect
      cy.url({ timeout: 20000 })
        .should('not.include', '/signup')

      cy.get('#account-creation-success-button').click()

    })

  })

})