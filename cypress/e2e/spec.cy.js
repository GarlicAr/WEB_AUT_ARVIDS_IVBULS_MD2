import subm from "./pageObjects/subm.page"

describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
  })


  it('Scenario 1', ()=>{
    //login
    cy.get("#btn-make-appointment").click()
    cy.get("#txt-username").type("John Doe")
    cy.get("#txt-password").type("ThisIsNotAPassword")
    cy.get("#btn-login").click()
    //Tasks
    cy.get("#combo_facility").select("Seoul CURA Healthcare Center")
    cy.get("#chk_hospotal_readmission").click()
    cy.get("#radio_program_medicaid").click()
    cy.get("#txt_visit_date").type("30")
    subm.activeDay.click()
    cy.get("#txt_comment").click().type("CURA Healthcare Service")
    cy.get("#btn-book-appointment").click()

    //validate

    cy.get("#facility").should("have.text", "Seoul CURA Healthcare Center")
    cy.get("#hospital_readmission").should("have.text", "Yes")
    cy.get("#program").should("have.text", "Medicaid")
    cy.get("#visit_date").should("contain", "30")
    cy.get("#comment").should("have.text", "CURA Healthcare Service")





  })


  it.only("Scenario 2", ()=>{
    //login
    cy.get("#btn-make-appointment").click()
    cy.get("#txt-username").type("John Doe")
    cy.get("#txt-password").type("ThisIsNotAPassword")
    cy.get("#btn-login").click()
    //tasks
    cy.get("#menu-toggle").click()
    cy.get("#sidebar-wrapper").should("be.visible")
    cy.get(".sidebar-nav").contains("History").click()
    cy.get(".col-sm-12").should("be.visible", "No appointment")

    
  })
})