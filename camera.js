var cv = require('opencv');
// var fs = require('fs');

function readImg(obj) {
    cv.readImage(obj, function (err, im) {
        if (err) throw err;
        if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');

        im.detectObject(cv.FACE_CASCADE, {}, function (err, faces) {
            if (err) throw err;

            for (var i = 0; i < faces.length; i++) {
                var face = faces[i];
                im.ellipse(face.x + face.width / 2, face.y + face.height / 2, face.width / 2, face.height / 2);
            }
            var newObj = `faces-${obj}`;
            im.save(newObj);
            console.log('Image saved as '+newObj);
        });
    });
}

// readImg('all-smiles.JPG');
readImg('last-day.JPG');