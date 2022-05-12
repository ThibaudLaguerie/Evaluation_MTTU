/// <reference types="cypress" />
context('Smart Tag testing', () => {
    beforeEach(() => {
        cy.visit("../../components/smart-tag.html");
    })

    it("Le tag doit apparaître au survol du bouton \"See more\" ", () => {
        cy.dataCy("tagComponent").should("not.be.visible");
        cy.dataCy("seeMoreButton").trigger("mouseover");
        cy.dataCy("tagComponent").should("be.visible");
    })

    it("Le tag doit disparaître lors de la fin du survol du bouton \"See more\" ", () => {
        cy.dataCy("seeMoreButton").trigger("mouseover");
        cy.dataCy("tagComponent").should("be.visible");
        cy.get("body").click(0,0);
        cy.dataCy("tagComponent").should("not.be.visible");

    })

}); 