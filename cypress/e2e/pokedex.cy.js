describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('can navigate from main page to certain pokemon', function() {
    cy.visit('http://localhost:8000')
    cy.get('a[href*="/pokemon/ivysaur"]').click()
    cy.contains('chlorophyll')
  })
})