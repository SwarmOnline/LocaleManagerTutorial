//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'LocaleManagerTutorial': 'app',
	'Ux': 'touch/src/ux/Ux'
});
//</debug>



Ext.application({
    name: 'LocaleManagerTutorial',

    requires: [
        'Ext.MessageBox',

	    'Ux.locale.Manager',
	    'Ux.locale.override.st.Component',
	    'Ux.locale.override.st.Button',
	    'Ux.locale.override.st.Container',
	    'Ux.locale.override.st.TitleBar',
	    'Ux.locale.override.st.field.Field',
	    'Ux.locale.override.st.field.DatePicker',
	    'Ux.locale.override.st.form.FieldSet',
	    'Ux.locale.override.st.picker.Picker',
	    'Ux.locale.override.st.picker.Date',
	    'Ux.locale.override.st.field.Select',
	    'Ux.locale.override.st.DataView',

	    'LocaleManagerTutorial.view.MyDataView'

    ],

    views: ['Main'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
	    Ux.locale.Manager.setConfig({
		    ajaxConfig : {
			    method : 'GET'
		    },
		    language   : 'en',
		    tpl        : 'locales/{locale}.json',
		    type       : 'ajax'
	    });

	    Ux.locale.Manager.init();

	    // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

	    var field = Ext.create('Ext.field.Text', {
		    locales: {
			    label: 'Field1.label',
		        placeHolder: 'Field1.placeHolder'
		    }
	    });

	    var selectField = Ext.create('Ext.field.Select', {
		    locales: {
			    label: 'SelectField1.label',
			    options: 'SelectField1.options'
		    },
		    valueField: 'value',
		    displayField: 'name'
	    });

	    // wrap in container so it doesn't get stretched
	    Ext.Viewport.add({
		    xtype: 'container',
		    items: [field, selectField, {
			    xtype: 'mydataview'
		    }]
	    });
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
