﻿/**
* NokiaTiledLayer
*/
ZeroGIS.TiledLayer.NokiaTiledLayer = function (args) {
    ZeroGIS.TiledLayer.apply(this, arguments);
};

ZeroGIS.TiledLayer.NokiaTiledLayer.prototype = new ZeroGIS.TiledLayer();
ZeroGIS.TiledLayer.NokiaTiledLayer.prototype.constructor = ZeroGIS.TiledLayer.NokiaTiledLayer;

ZeroGIS.TiledLayer.NokiaTiledLayer.prototype.getImageUrl = function (level, row, column) {
    ZeroGIS.TiledLayer.prototype.getImageUrl.apply(this, arguments);
    var sum = level + row + column;
    var idx = 1 + sum % 4; //1,2,3,4
    //https://1.base.maps.api.here.com/maptile/2.1/maptile/2ae1d8fbb0/normal.day/4/9/7/512/png8?app_id=xWVIueSv6JL0aJ5xqTxb&app_code=djPZyynKsbTjIUDOBcHZ2g&lg=eng&ppi=72&pview=DEF
    var url = "//" + idx + ".base.maps.api.here.com/maptile/2.1/maptile/2ae1d8fbb0/normal.day/" + level + "/" + column + "/" + row + "/512/png8?app_id=xWVIueSv6JL0aJ5xqTxb&app_code=djPZyynKsbTjIUDOBcHZ2g&lg=eng&ppi=72&pview=DEF";
    return url;
};
