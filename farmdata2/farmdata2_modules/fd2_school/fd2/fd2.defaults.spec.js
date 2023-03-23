describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
        

    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
        .should("have.text"," Harvest Report")
    
    })
    it("Check the start date and end date", () => {
        cy.get("[data-cy=start-date]").should("have.value","2020-05-05")
        cy.get("[data-cy=end-date]").should("have.value","2020-05-15")
    })

    it("Check the crop dropdown", () => {
        cy.get ("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option0]").should("have.text","All")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option4]").should("have.text","BEAN-DRY")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option109]").should("have.text","WATERMELON")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] ").children().should("have.length","112")
    }
    )

    

})
