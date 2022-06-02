
/////////////////////////
// INSERT MEDIA ASSETS //
/////////////////////////

(function() {

  var layerMap = {
    "avatar":    "Brand Avatar",
    "avatar2":   "Brand Avatar 2",
    "bookmark":  "Bookmark Icon",
    "comment":   "Comment Icon",
    "like":      "Like Icon",
    "video":     "Main Media",
    "profilebg": "Profile BG",
    "user":      "User Icon",
  };

  var tempAssets = [
    { 'layerName': 'Brand Avatar',   'filename': 'avatar.jpeg'   },
    { 'layerName': 'Brand Avatar 2', 'filename': 'avatar2.jpeg'  },
    { 'layerName': 'Bookmark Icon',  'filename': 'bookmark.png'  },
    { 'layerName': 'Comment Icon',   'filename': 'comment.png'   },
    { 'layerName': 'Like Icon',      'filename': 'like.png'      },
    { 'layerName': 'Main Media',     'filename': 'video.mp4'     },
    { 'layerName': 'Profile BG',     'filename': 'profilebg.png' },
    { 'layerName': 'User Icon',      'filename': 'user.png'      },
  ];

  var mediaAssets = NX.media_assets || tempAssets;
  
  mediaAssets.forEach(
    function (asset) {
      
      // A roundabout way to access NexRender's download directory
      var localAssetDir = app.project.file.path;
      
      nexrender.selectLayersByName(null, asset.layerName, function(layer) {
        var assetFilePath = localAssetDir + '/' + asset.filename;
        nexrender.replaceFootage(layer, assetFilePath);
      });
    }
  );
})();


////////////////////////
// ADJUST MEDIA SCALE //
////////////////////////

(function() {

  var scaleAdjustments = [
    { 'layerName': 'Main Media',     'expression': '[300,300]' },
    { 'layerName': 'Brand Avatar',   'expression': '[75,75]'   },
    { 'layerName': 'Brand Avatar 2', 'expression': '[75,75]'   },
    { 'layerName': 'like.png',       'expression': '[75,75]'   },
    { 'layerName': 'comment.png',    'expression': '[75,75]'   },
    { 'layerName': 'bookmark.png',   'expression': '[75,75]'   },
    { 'layerName': 'user.png',       'expression': '[69,69]'   },
  ];
  
  scaleAdjustments.forEach(
    function (adjustment) {
      nexrender.selectLayersByName(null, adjustment.layerName, function(layer) {
        var parts = ['Scale'];
        var value = { 'expression': adjustment.expression }
        nexrender.changeValueForKeypath(layer, parts, value);
        return true;
      });
    }
  )
})();
