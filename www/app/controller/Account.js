/*
 * File: app/controller/Account.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ChatDawg40.controller.Account', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'loginPanel',
            selector: 'mainview #loginPanel'
        },
        {
            ref: 'logoutPanel',
            selector: 'mainview #logoutPanel'
        }
    ],

    showLogin: function(target) {

        // Create new login form window
        var login = Ext.create("widget.loginform");

        // Show window
        login.show();

    },

    doLogin: function(button, e, eOpts) {

        var form = button.up('form'),				// Login form
            formWindow = button.up('window'),		// Login form window
            values = form.getValues(),				// Form values
            loginPanel = this.getLoginPanel(),		// Panel shown when logged out
            logoutPanel = this.getLogoutPanel();	// Panel shown when logged in

        // Success
        var successCallback = function(resp, ops) {

            // Hide login panel
            loginPanel.hide();

            // Show logout panel
            logoutPanel.show();

        	// Close window
            formWindow.destroy();

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert("Login Failure", resp);

        };


        // TODO: Login using server-side authentication service
        Ext.Ajax.request({
            url: "http://www.a-information.com/chatdawg40/secrutm.php",
        		params: values,
                success: successCallback,
        		failure: failureCallback
         });

        // Just run success for now
        //successCallback();
    },

    showRegister: function(target) {

        // Create new register form window
        var register = Ext.create("widget.registerform");

        // Show window
        register.show();

    },

    showPost: function(target) {

        // Create new register form window
        var post = Ext.create("widget.postform");

        // Show window
        post.show();

    },

    doRegister: function(button, e, eOpts) {

        var form = button.up('form'),				// Register form
            formWindow = button.up('window'),		// Register form window
            values = form.getValues(),				// Form values
            loginPanel = this.getLoginPanel(),		// Panel shown when logged out
            logoutPanel = this.getLogoutPanel();	// Panel shown when logged in

        // Success
        var successCallback = function(resp, ops) {

            // Hide login panel
            loginPanel.hide();

            // Show logout panel
            logoutPanel.show();

        	// Close window
            formWindow.destroy();

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show registration failure error
            Ext.Msg.alert("Registration Failure", resp);

        };


        // TODO: Register using server-side registration service
        // Ext.Ajax.request({
        //		url: "/register",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });

        // Just run success for now
        successCallback();

    },

    doPost: function(button, e, eOpts) {

        var form = button.up('form'),				// Register form
            formWindow = button.up('window'),		// Register form window
            values = form.getValues(),				// Form values
            loginPanel = this.getLoginPanel(),		// Panel shown when logged out
            logoutPanel = this.getLogoutPanel();	// Panel shown when logged in

        // Success
        var successCallback = function(resp, ops) {

            // Hide login panel
            loginPanel.hide();

            // Show logout panel
            logoutPanel.show();

        	// Close window
            formWindow.destroy();

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show registration failure error
            Ext.Msg.alert("Post Failure", resp);

        };


        // TODO: Register using server-side registration service
         Ext.Ajax.request({
        		url: "http://www.a-information.com/chatdawg40/www/psthndlr.php",
        		params: values,
        		success: successCallback,
        		failure: failureCallback
         });

        // Just run success for now
        //successCallback();

    },

    init: function(application) {
        this.control({
            "mainview #loginButton": {
                click: this.showLogin
            },
            "loginform #loginButton": {
                click: this.doLogin
            },
            "mainview #registerButton": {
                click: this.showRegister
            },
            "mainview #postButton": {
                click: this.showPost
            },
            "registerform #registerButton": {
                click: this.doRegister
            },
            "postform #postButton": {
                click: this.doPost
            }
        });
    }

});
