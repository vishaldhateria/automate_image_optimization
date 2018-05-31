var imagemin = require('imagemin');
var imageminJpegtran = require('imagemin-jpegtran');
var imageminPngquant = require('imagemin-pngquant');

imagemin(['images/*.{jpg,png,jpeg}'], 'build/images', {
    plugins: [
        imageminJpegtran(),
        imageminPngquant({ quality: '65-80' })
    ]
}).then(files => {
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});