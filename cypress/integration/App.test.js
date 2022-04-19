// describe('form submission', () => {
//     beforeEach(() => {
//         cy.visit('http://localhost:3000/').cy.wait(3000)

//     })
    
//     it("shout submit the form", () => {
//         cy.get('#player_name').type("lebron james")
//         cy.get('#player_card').should('not.exist')

//         cy.get('form').submit()
//         cy.get('#player_card').should("exist")
//     })
// });
describe('Cy Visit', function() {
    it('test visit method', function() {
      cy.visit('https://nba-dashboard.netlify.app/')
    })
  });