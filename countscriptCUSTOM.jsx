
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
  var staticAssetsPath = app.project.file.path;
  var assetName = 'static_brand_avatar.jpeg';
  var staticAssetFullPath = staticAssetsPath + assetName;
  
  throw new Error(nexrender.reflect.properties.join("\n"))
  
  nexrender.selectLayersByName(null, 'Brand Avatar', function(layer) {
    nexrender.replaceFootage(layer, staticAssetFullPath)
  });
})();
