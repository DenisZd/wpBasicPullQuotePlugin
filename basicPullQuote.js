/************************************
 * https://github.com/DenisZd/wpBasicPullQuotePlugin
 * version α
 *
 * Denis Zdanovsky
 * https://www.istaridevelopment.com
 *
 *  Basic Pull Quotes
 *
 ************************************
*/
(function()
{
    tinymce.create('tinymce.plugins.istariBasicPullQuotes',
	{

        init : function(ed, url)
		{
			ed.addCommand('basicPullQuoteLeft', function()
			{
                var selection = ed.selection.getContent();
                var toReturn = '';
                toReturn = '<aside class="istariPullQuote istariPullQuote--left"><blockquote class="istariPullQuote__blockquote">' + selection.replace(/<\/?p[^>]*>/g, " ") + '</blockquote></aside><br/><br/>';
                ed.execCommand('mceInsertContent', 0, toReturn);
            });
            ed.addCommand('basicPullQuoteRight', function()
			{
                var selection = ed.selection.getContent();
                var toReturn = '';
                toReturn = '<aside class="istariPullQuote istariPullQuote--right"><blockquote class="istariPullQuote__blockquote">' + selection.replace(/<\/?p[^>]*>/g, " ") + '</blockquote></aside><br/><br/>';
                ed.execCommand('mceInsertContent', 0, toReturn);
            });
			
            ed.addButton('pullQuoteMenu',
			{
				type : 'menubutton',
				border : '1 1 1 1',
				text : 'Pull Quote',
				tooltip : 'Add a left, or right pull quote',
				icon: true,
				image : url + '/basicPullQuote.png',
				size : 'small',
				menu : [
					{text: 'Left-Aligned', onclick: function() {ed.execCommand('basicPullQuoteLeft'); }},
					{text: 'Right-Aligned', onclick: function() {ed.execCommand('basicPullQuoteRight'); }}
				]
			});
      },


        createControl : function(n, cm)
		{
            return null;
        },


        getInfo : function()
		{
            return {
				longname : "Basic Pull Quotes",
				author : "Denis Zdanovsky",
				authorurl : "https://www.istaridevelopment.com",
				version : "0.1"
				//infourl : ""
			};
        }
    });

    tinymce.PluginManager.add('istariBasicPullQuotes', tinymce.plugins.istariBasicPullQuotes);
})();