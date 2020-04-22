( function( $ ) {
    $.fn.BaconIpsum = function( options ) {
        const settings = $.extend( {
            'paras' : 3
        }, options );

        return this.each( function() {
            const $this = $(this);

            //Limit number of paragraphs to 100 sent to api
            if (settings.paras > 100) {
                settings.paras = 100;
            }

            $.getJSON('https://baconipsum.com/api/?callback=?', {
                'paras':settings.paras
            }, function(paragraphs) {
                if (paragraphs && paragraphs.length > 0) {
                    for (var i = 0; i < paragraphs.length; i++) {
                        $this.append('<p>' + paragraphs[i] + '</p>');
                    }
                }
            });
        });
    };
}) ( jQuery );
