var assert = require("assert");
var Browser = require('zombie');

module.exports = function() {
    'use strict';

    var _browser = new Browser();

    this.Given(/^The list of contacts is correctly displayed$/, function(callback) {
        _browser.visit("http://127.0.0.1:3000", function(err) {
            _browser.assert.text("h1", "Contacts");
            callback();
        });
    });

    this.When(/^I click on the first Delete Button$/, function(callback) {
        _browser.visit("http://127.0.0.1:3000", function(err) {
            _browser.pressButton('Delete', function(err) {
                if (err) throw err;
                callback();
            });
        });
    });


    this.Then(/^The first contact is deleted$/, function(callback) {
        _browser.visit("http://127.0.0.1:3000", function(err) {
            callback.pending();
        });
    });

};