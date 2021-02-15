var _app = function () {
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.32;
    this.musicFadeIn = 4000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    this.brandDescription = [
        "witchedkid the germ",
        "alto the retarded fag",
        "shaddix the",
        "shaddix the",
        "shaddix the uhh..",
        "shaddix the uhh..",
        "shaddix the yes",
        "it is us who are strong"
    ];

    this.titleChanger = function (text, delay) {
        text = text ||
            ['a', 'an', 'ant', 'anti', 'antis', 'antiso', 'antisoz', 'antisozi', 'antisozia', 'antisozial', 'antisozial.', 'antisozial.t', 'antisozial.te', 'antisozial.tea', 'antisozial.team', 'ntisozial.team', 'tisozial.team', 'isozial.team', 'sozial.team', 'ozial.team', 'zial.team', 'ial.team', 'al.team', 'l.team', '.team', 'team', 'eam', 'am', 'm', '⠀⠀'];
        delay = delay || 800;

        var counter = 0;

        setInterval(function () {
            if(counter < text.length) 
                document.title = text[counter++]; 
            else 
                document.title = text[counter = 0];
        }, delay);
    }

    this.iconChanger = function (urls, delay) {
        if (!urls)
            return;

        delay = delay || 800;

        var counter = 0;
        
        setInterval(function () {
            if(counter < urls.length) {
                var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = urls[counter];
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            else 
                counter = 0;

           ++counter;
        }, delay);
    }
};

var app = new _app();
