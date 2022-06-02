
/////////////////////////
// INSERT MEDIA ASSETS //
/////////////////////////

(function() {

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

  var tempAssets = [
    { 'layerName': 'Brand Avatar',   'filename': 'avatar.jpeg'   },
    { 'layerName': 'Brand Avatar 2', 'filename': 'avatar2.jpeg'  },
    { 'layerName': 'Bookmark Icon',  'filename': 'bookmark.png'  },
    { 'layerName': 'Comment Icon',   'filename': 'comment.png'   },
    { 'layerName': 'Like Icon',      'filename': 'like.png'      },
    { 'layerName': 'Main Media',     'filename': 'video.mp4'     },
    { 'layerName': 'Profile BG',     'filename': 'profilebg.png' },
    { 'layerName': 'User Icon',      'filename': 'user.png'      },
  ]

  var mediaAssets = NX.media_assets || tempAssets;
  
  mediaAssets.forEach(
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

