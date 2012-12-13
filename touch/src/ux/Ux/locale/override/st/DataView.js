	Ext.define('Ux.locale.override.st.DataView', {
		override : 'Ext.DataView',

		requires : [
			'Ux.locale.override.st.Component'
		],

		setLocale : function(locale) {
			var me                 = this,
				locales            = me.locales || me.getInitialConfig().locales,
				manager            = me.locale;

			me.callParent(arguments);

			me.refresh();
		}
	});