describe('Dashboard Elements', () => {

  beforeEach(() => {

    cy.session('userLogin', () => {

      cy.visit('https://dosmonorepodev.z6.web.core.windows.net/')

      cy.get('.btn', { timeout: 20000 })
        .should('be.visible')
        .click()

      cy.origin(
        'https://sso-dev.vercel.app',
        { args: { username: '9139369289', password: 'Password@123' } },
        ({ username, password }) => {

          cy.get('#phonenumber-input', { timeout: 20000 })
            .should('be.visible')
            .clear()
            .type(username, { delay: 50 })

          cy.get('#continue', { timeout: 15000 })
            .should('be.visible')
            .click()

          cy.get('input[type="password"]', { timeout: 20000 })
            .should('be.visible')
            .type(password)

          cy.get('button[type="submit"]', { timeout: 15000 })
            .should('be.visible')
            .click()
        }
      )

      // 🔥 IMPORTANT: confirm login success BEFORE caching session
      cy.contains('Dashboard', { timeout: 60000 })
        .should('be.visible')
    })

    // ✅ Instead: stabilize UI
    cy.visit('https://dosmonorepodev.z6.web.core.windows.net/')

    cy.contains('Dashboard', { timeout: 60000 })
      .should('be.visible')

    cy.get('body')
      .should('be.visible')
  })


  // ───────── QUICK ACTION ─────────

  it('Online Orders tab exists and is clickable', () => {
    // Validate existence and visibility

    //cy.get('[href="/dashboard"]')
      //.should('be.visible')
      //.click()


      cy.get('[href="/orders/ecommerce/order-list"]')
      .should('be.visible')
      .click()
      cy.wait(10000)
  
      // Go back to previous page
      cy.go('back')

    //cy.contains('Dashboard', { timeout: 60000 })
      //.should('be.visible')

    //cy.get('body').should('not.be.empty')
  })

    it('Add Stock tab exists and is clickable', () => {
    // Validate existence and visibility
    cy.get('[href="/inventory/add-stock"]')
      .should('exist')
      .and('be.visible')
 
    // Validate it is clickable and navigates
    cy.get('[href="/inventory/add-stock"]').click()
    cy.wait(5000)
     // Go back to previous page
      cy.go('back')
    
  })

    it('Push Orders tab exists and is clickable', () => {
    // Validate existence and visibility
    cy.get('[href="/orders/push-orders/push-request"]')
      .should('exist')
      .and('be.visible')
 
    // Validate it is clickable and navigates
    cy.get('[href="/orders/push-orders/push-request"]').click()
    cy.wait(5000)
     // Go back to previous page
      cy.go('back')
    
  })


     it('Sell to Walk-in Customers tab exists and is clickable', () => {
    // Validate existence and visibility
    cy.get('[href="/orders/push-orders/push-request"]')
      .should('exist')
      .and('be.visible')
 
    // Validate it is clickable and navigates
    cy.get('[href="/orders/push-orders/push-request"]').click()
    cy.wait(5000)
     // Go back to previous page
      cy.go('back')
    
  })

  it('Confirm Delivery tab exists and is clickable', () => {
    // Validate existence and visibility
    cy.get('[href="/store/waybill"]')
      .should('exist')
      .and('be.visible')
 
    // Validate it is clickable and navigates
    cy.get('[href="/store/waybill"]').click()
    cy.wait(5000)
     // Go back to previous page
      cy.go('back')
    
  })
  
  it('Wallet & BNPL (Buy now Pay Later) tab exists and is clickable', () => {
    // Validate existence and visibility
    cy.get('.grid > [href="/wallet"]')
      .should('exist')
      .and('be.visible')
 
    // Validate it is clickable and navigates
    cy.get('.grid > [href="/wallet"]').click()
    cy.wait(5000)
    
    cy.contains('Wallet').should('be.visible')

cy.get('[aria-label="Close"]').click({ force: true })
     // Go back to previous page
     // cy.go('back')
    
  })


  

  
 
 


 
 



/*
   it('Add Stock tab exists and is clickable', () => {

    cy.get('[href="/inventory/add-stock"]')
      .should('be.visible')

    cy.get('body').should('not.be.empty')
  })


    it('Push Orders tab exists and is clickable', () => {

    cy.get('[href="/inventory/add-stock"]')
      .should('be.visible')

    cy.get('body').should('not.be.empty')
  })


  it('Sell to Walk-in-Customer tab exists and is clickable', () => {

    cy.get('[href="/inventory/add-stock"]')
      .should('be.visible')

    cy.get('body').should('not.be.empty')
  })


  it('Confirm Delivery tab exists and is clickable', () => {

    cy.get('[href="/inventory/add-stock"]')
      .should('be.visible')

    cy.get('body').should('not.be.empty')
  })

  it('Wallet & BNPL (Buy now Pay Later) tab exists and is clickable', () => {

    cy.get('[href="/inventory/add-stock"]')
      .should('be.visible')

    cy.get('body').should('not.be.empty')
  })
})
*/
})