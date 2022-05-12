/// <reference types="cypress" />
context('Scroll to Top testing', () => {
    beforeEach(() => {
        cy.visit("../../components/scroll-to-top.html");
    })

    it("Le bouton \"scroll-to-top\" doit apparaître en bas à droite lors du scroll vers le bas ", () => {
        cy.dataCy("scrollToBottomButton").click();
        cy.dataCy("scrollToTopButton").should("be.visible");
    })

    it("Le bouton \"scroll-to-top\" doit disparaître lors du scroll vers le haut après avoir cliqué sur celui-ci ", () => {
        cy.dataCy("scrollToBottomButton").click();
        cy.dataCy("scrollToTopButton").should("be.visible");
        cy.dataCy("scrollToTopButton").click();
        cy.dataCy("scrollToTopButton").should("not.be.visible");
    })

}); 