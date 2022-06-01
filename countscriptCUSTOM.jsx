
(function() {
    nexrender.selectLayersByName(null, 'Like Count', function(layer) {
      var slider = layer('Effects')('Slider Control')('Slider');
      slider.setValueAtKey(1, 9000);
      slider.setValueAtKey(2, 9879);
    });

    nexrender.selectLayersByName(null, 'Comment Count', function(layer) {
      var slider = layer('Effects')('Slider Control')('Slider');
      slider.setValueAtKey(1, 12);
      slider.setValueAtKey(2, 57);
    });
})();


(function() {
  // fileObj = new File ('/Users/ec2-user/test-log.txt');
  // fileObj.open('w')
  // fileObj.writeln('hello world')
  $.writeln("MAYBE??????????????")
  throw new Error($.getenv('PWD'))
})();



