describe('첫 테스트', () => {
  it('페이지 이동', () => {
    cy.visit('/')
    cy.get('header .logo')
  })
})