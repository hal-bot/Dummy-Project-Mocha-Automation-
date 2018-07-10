// This class is Login Script Class 

var LoginPage = require('../pageobjects/LoginPage');
var assert = require('assert');
var tags = require('mocha-tags');
const reporter = require('wdio-allure-reporter')

describe('Login Page Test Cases for Application ', function()
{
// This method will be executed only if we trigger smoke job 
//This method will be executed if we trigger regression job
    describe('Verify Login Page of the application - Positive', function()
    {
        it('@Smoke Verify The page' , function(){
            LoginPage.open();
            LoginPage.username.setValue('valid@user.com');
            LoginPage.password.setValue('hunter2');
            LoginPage.submit();
            assert.equal(LoginPage.verifyText,"You\'re logged in!");
            reporter.feature('Authentication- Positve=');
        
        })
    })

    
    describe('Verify Login Page of the application - Negative', function()
    {
        // This method will not be executed only if we trigger smoke job 
        //This method will be executed if we trigger regression job
        it('Verifying Negative Scenario for Login Application' , function(){
            LoginPage.open();
            LoginPage.username.setValue('valid@user.com');
            LoginPage.password.setValue('123');
            LoginPage.submit();
            assert.equal(LoginPage.verifyNegativeTest,"Your password must be at least 6 characters");
            reporter.feature('Authentication');
        
        })
    })

});

