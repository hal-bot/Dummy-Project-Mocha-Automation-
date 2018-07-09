//import Page from './Page';
var Page = require('./Page');
var LoginPage = Object.create(Page, {

    username: { get: function () { return browser.element('input[name="email"]'); } },
    password: { get: function () { return browser.element('input[name="password"]'); } },
    form:     { get: function () { return browser.element('.button=Login'); } },
    verifyText: { get: function () { return browser.getText('.content'); } },
    verifyNegativeTest: {get: function() {return browser.getText('body > div > div > form > div.ui.error.message');}},

    open: { value: function() {
        Page.open.call(this, '/example');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }

});

module.exports = LoginPage;