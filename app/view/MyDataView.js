	Ext.define('LocaleManagerTutorial.view.MyDataView', {

	    extend: 'Ext.DataView',

	    alias: 'widget.mydataview',

	    config: {
		    height: 500,
		    itemTpl: 'Name: {name}',
		    store: Ext.create('Ext.data.Store', {
			    fields: ['name'],
			    data: [{name: 'Stuart'}, {name: 'Andrew'}]
		    })
	    }
	});