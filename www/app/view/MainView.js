/*
 * File: app/view/MainView.js
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

Ext.define('ChatDawg40.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',

    requires: [
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 100,
                    itemId: 'headerPanel',
                    title: 'Header',
                    dockedItems: [
                        {
                            xtype: 'panel',
                            dock: 'right',
                            itemId: 'loginPanel',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'postButton',
                                    margin: 6,
                                    text: 'Post'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'loginButton',
                                    margin: 6,
                                    text: 'Login'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'registerButton',
                                    margin: 5,
                                    text: 'Register'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            dock: 'right',
                            hidden: true,
                            itemId: 'logoutPanel',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'logoutButton',
                                    margin: 6,
                                    text: 'Logout'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'contentPanel',
                    title: 'Content',
                    items: [
                        {
                            xtype: 'tabpanel',
                            activeTab: 0,
                            items: [
                                {
                                    xtype: 'panel',
                                    title: 'Public',
                                    items: [
                                        {
                                            xtype: 'gridpanel',
                                            title: 'My Grid Panel',
                                            store: 'publicPostStore',
                                            columns: [
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 119,
                                                    dataIndex: 'username',
                                                    text: 'Username'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 410,
                                                    dataIndex: 'post',
                                                    text: 'Post'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'type',
                                                    text: 'Type'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'userid',
                                                    text: 'Userid'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'posturlID',
                                                    text: 'PosturlID'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'postpictureID',
                                                    text: 'PostpictureID'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'postvideoID',
                                                    text: 'PostvideoID'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'linkedpost',
                                                    text: 'Linkedpost'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Friends'
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Party'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});