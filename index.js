const fs = require('fs');
const request = require('request');
const text = 'สวัสดี';

const options = {
    url: `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=th&client=tw-ob`,
    headers: {
        'Referer': 'http://translate.google.com/',
        'User-Agent': 'stagefright/1.2 (Linux;Android 5.0)'
    }
}

request(options)
    .pipe(fs.createWriteStream('tts.mp3'))