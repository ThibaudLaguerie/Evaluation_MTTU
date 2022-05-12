/// <reference types="cypress" />
context('Modal testing', () => {
    beforeEach(() => {
        cy.visit("../../components/modal.html");
    })

    it("Le clic sur le bouton \"Display\" doit faire apparaître la modal ", () => {
        cy.dataCy("modalComponent").should("not.be.visible");
        cy.dataCy("displayButton").click();
        cy.dataCy("modalComponent").should("be.visible");
    })

    it("Le clic en dehors de la modal doit la faire disparaitre ", () => {
        cy.dataCy("displayButton").click();
        cy.dataCy("modalComponent").should("be.visible");
        cy.get("body").click(0, 0);
        cy.dataCy("modalComponent").should("not.be.visible");
    })

    it("La modal doit contenir une balise <h2></h2> contenant Lorem ipsum ", () => {
        cy.dataCy("modalComponent").find("h2").should("have.text", "Lorem Ipsum");
    })

}); 