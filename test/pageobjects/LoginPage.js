//This is LoginPage class that represents Login Page and hold the reusuable functionaility 
//This will be useful for code reusability and readability 
var Page = require('./Page');
var LoginPage = Object.create(Page, {

    username: { get: function () { return browser.element('input[name="email"]'); } },
    password: { get: function () { return browser.element('input[name="password"]'); } },
    form:     { get: function () { return browser.element('.button=Login'); }}, 
    verifyPositiveText: { get: function () { return browser.getText('.content=You\'re logged in!');}},
    verifyNegativeTest: {get: function() {return browser.getText('li=Your password must be at least 6 characters');}},

   
    
    open: { value: function() {
        Page.open.call(this, '/example');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } },


   

});

module.exports = LoginPage;