
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
  nexrender.selectLayersByName(null, 'Brand Avatar', function(layer) {
    nexrender.replaceFootage(layer, 'static_brand_avatar.jpeg')
  });
})();



