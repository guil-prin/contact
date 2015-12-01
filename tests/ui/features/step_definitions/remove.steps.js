var assert = require("assert");
var Browser = require('zombie');

module.exports = function() {
    'use strict';

    var _browser = Browser.create();

    this.Given(/^The list of contacts is correctly displayed$/, function(callback) {
        
    }):

    this.When(/^I click on the first Delete Button$/, function(callback) {
        _browser.visit("http://127.0.0.1:3000", function(err) {
            _browser.pressButton('Delete', function(err) {
                if (err) throw err;
                callback.pending();
            });
        });
    });

};