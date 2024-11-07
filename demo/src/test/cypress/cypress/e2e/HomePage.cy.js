// import

describe("test home page", function(){

    beforeEach(() => {
        cy.visit('http://localhost:8081/') // localhost:8080
        cy.get('.navbar-brand').contains('Navbar', {matchCase: false});
    })

    it("Opened home page, verified nav loaded", () => {
        cy.intercept('/current', { fixture: 'currentMockedData.json' })
        cy.get('.nav-link').contains('Current Comic').click();
        cy.get('h1').contains('Proterozoic Rocks');
        cy.get('img')
    })
    
    
    it("Opened home page, verified nav loaded", () => {
        cy.get('.nav-link').contains('Past Comic').click();
        cy.get('input').type('1')
        cy.get('button').contains('Fetch Comic').click();
        cy.get('h1').contains('Barrel - Part 1');
        cy.get('img')
    })
})