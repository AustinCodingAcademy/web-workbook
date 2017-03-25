(function($) {
    $.fn.typewriter = function(options) {
        var settings = $.extend({
            prefix: "Prefix",
            text: ["Hey", "This is cool, isn't it?"],
            typeDelay: 200,
            waitingTime: 1000,
            callback: null,
            blinkSpeed: 1000
        }, options);

        return this.each(function() {
            var that = this;
            var domHtml = '';
            var totalLength = 0;

            for (var i = 0; i < settings.text.length; i++) {
                totalLength += settings.text[i].length;
            }

            $(this).append('<span id="typewriter-prefix"></span>');
            $(this).append('<span id="typewriter-text"></span>');
            $(this).append('<span id="typewriter-suffix">&#9608;</span>');

            $('#typewriter-prefix').html(settings.prefix);

            function appendCharacter(character) {
                $('#typewriter-text').html($('#typewriter-text').html() + character);
            }

            function removeCharacter() {
                var str = $('#typewriter-text').html();
                $('#typewriter-text').html(str.substring(0, str.length - 1));
            }

            setInterval(function() {
                $('#typewriter-suffix').animate({
                    opacity: 0
                }).animate({
                    opacity: 1
                });
            }, settings.blinkSpeed);

            var blobURL = URL.createObjectURL(new Blob(['(',
                function() {
                    onmessage = function(e) {
                        self.currentStringIndex = 0;
                        self.currentCharIndex = 0;
                        self.settings = e.data;
                        self.sInt = null;
                        self.eInt = null;
                        self.once = false;
                        start();
                    };

                    function start() {
                        if (self.sInt !== null) {
                            clearInterval(sInt);
                            if (once === false) {
                                setTimeout(start, settings.waitingTime);
                                once = true;
                                return;
                            }
                            once = false;
                            sInt = null;
                            eInt = setInterval(function() {
                                var data = [];
                                data[0] = 1;
                                postMessage(data);
                            }, settings.typeDelay);

                        } else {
                            clearInterval(eInt);
                            eInt = null;
                            var currentString = settings.text[Math.floor(currentStringIndex / 2)];
                            sInt = setInterval(function() {
                                var data = [];
                                data[0] = 0;
                                data[1] = currentString.charAt(currentCharIndex);
                                postMessage(data);
                                currentCharIndex++;
                            }, settings.typeDelay);
                        }

                        currentCharIndex = 0;
                        setTimeout(start, settings.text[Math.floor(currentStringIndex / 2)].length * settings.typeDelay + settings.typeDelay);
                        currentStringIndex = (currentStringIndex + 1) % (settings.text.length * 2);
                    }
                }.toString(),
                ')()'
            ], {
                type: 'application/javascript'
            }));

            worker = new Worker(blobURL);
            URL.revokeObjectURL(blobURL);

            worker.postMessage(settings);
            worker.onmessage = function(e) {
                var data = e.data;
                if (data[0] === 0) {
                    appendCharacter(data[1]);
                } else {
                    removeCharacter();
                }
            };
            if ($.isFunction(settings.callback)) {
                settings.callback.call(this);
            }
        });
    };
}(jQuery));
