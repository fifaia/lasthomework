describe('zootopia.ge', () => {
  it('Does not do much!', () => {
    // რეგისტრაცია
    cy.viewport(1920, 1080);
    cy.visit('https://zootopia.ge/ka')
    //ჰედერში შესვლაზე კლიკი
    cy.get('.iprof').click()
    // ავტორიზაციის ღილაკი
    cy.get('.avtorization > .input-shablon > .form-button').should('be.visible')
    //სწრაფ შეკვეთის ღილაკი
    cy.get('.fast-order-btn').should('be.visible')
    //კლიკი პაროლის აღდგენაზე
    cy.get('.recovery-btn').click()
    // აღდგენის ღილაკზე კლიკი ცარიელი ელ ფოსტით, ერორის შემოწმება
    cy.get('.recovery > .input-shablon > .form-button').click().get('.input-shablon > .form-error > p').should('contain','არასწორი ელ_ფოსტა')
    //პაროლის აღდგენის გამორთვა
    cy.get('.recovery > .input-shablon > .xform').click()
  })
})


var rand = {
    number: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    text: (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
