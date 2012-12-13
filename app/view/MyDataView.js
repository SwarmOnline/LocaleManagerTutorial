	Ext.define('LocaleManagerTutorial.view.MyDataView', {

	    extend: 'Ext.DataView',

	    alias: 'widget.mydataview',

    config: {
	    enableLocale: true,
	    locales: {},
		    height: 500,
		    itemTpl: '{nameLabel}: {name}',
		    store: Ext.create('Ext.data.Store', {
			    fields: ['name'],
			    data: [{name: 'Stuart'}, {name: 'Andrew'}]
		    })
	    },

	prepareData: function(data){
		data = this.callParent(arguments);

		return Ext.apply(data, this.getStringLiterals());
	},

		getStringLiterals: function(){
			return {
				nameLabel: Ux.locale.Manager.get('MyDataView.nameLabel')
			};
		}
	});