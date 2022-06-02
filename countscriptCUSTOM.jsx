
var layerMap = {
  "avatar": "Brand Avatar",
  "avatar2": "Brand Avatar 2",
  "bookmark": "Bookmark Icon",
  "comment": "Comment Icon",
  "like": "Like Icon",
  "video": "Main Media",
  "profilebg": "Profile BG",
  "user": "User Icon",
}

/////////////////////////
// INSERT MEDIA ASSETS //
/////////////////////////

(function() {
  var mediaAssets = NX.media_assets || [];
  mediaAssets.map(
    function (asset) {
      
      // This was the best way I could find to access NexRender's working dir
      var localAssetDir = app.project.file.path;
      
      nexrender.selectLayersByName(null, asset.layerName, function(layer) {
        var assetFilePath = localAssetDir + '/' + asset.filename;
        nexrender.replaceFootage(layer, assetFilePath);
      });
    }
  );
})();

