/// <reference types="cypress" />
context('Index testing', () => {
    before(() => {
        cy.visit("../../components/index.html");
    })

    it("Ajout de 4 todos ", () => {
        for (let i = 0; i < 4; i++) {
            cy.dataCy("inputComponent").type("Valeur n°" + i);
            cy.dataCy("addButton").click();
        }
        cy.dataCy("spanTodos").should("have.text", "4")
    })

    it("Suppression du deuxième ToDo", () => {
        cy.dataCy("todoItem").eq("1").find("button").click();
        cy.dataCy("spanTodos").should("have.text", "3")
    })



}); 