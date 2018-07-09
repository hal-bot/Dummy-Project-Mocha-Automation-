var LoginPage = require('../pageobjects/LoginPage');
var assert = require('assert');
var tags = require('mocha-tags');
const reporter = require('wdio-allure-reporter')


describe('Login Page Test Cases ', function()
{

    describe('Verify Login Page - Positive', function()
    {
        it('@Smoke Verify The page' , function(){
            LoginPage.open();
            LoginPage.username.setValue('valid@user.com');
            LoginPage.password.setValue('hunter2');
            LoginPage.submit();
            assert.equal(LoginPage.verifyText,"You\'re logged in!");
            reporter.feature('Authentication');
        
        })
    })

    
    describe('Verify Login Page Regression - Positive', function()
    {
        it('Verifying Negative Scenario for Login Application' , function(){
            LoginPage.open();
            LoginPage.username.setValue('valid@user.com');
            LoginPage.password.setValue('hunter2');
            LoginPage.submit();
            assert.equal(LoginPage.verifyText,"You\'re logged in!");
            reporter.feature('Authentication');
        
        })
    })

});

