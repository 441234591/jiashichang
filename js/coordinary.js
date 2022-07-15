/* eslint-disable */
// 各大坐标系转换插件,QQ:1572309495
// 定义一些常量
var x_PI = 3.14159265358979324 * 3000.0 / 180.0
var PI = 3.1415926535897932384626
var a = 6378245.0
var ee = 0.00669342162296594323

/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
 * 即 百度 转 谷歌、高德
 * @param bd_lon
 * @param bd_lat
 * @returns {*[]}
 */
function bd09_to_gcj02(bd_lon, bd_lat) {
    var bd_lon = +bd_lon
    var bd_lat = +bd_lat
    var x = bd_lon - 0.0065
    var y = bd_lat - 0.006
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_PI)
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_PI)
    var gg_lng = z * Math.cos(theta)
    var gg_lat = z * Math.sin(theta)
    return [gg_lng, gg_lat]
}

/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即谷歌、高德 转 百度
 * @param lng
 * @param lat
 * @returns {*[]}
 */
function gcj02_to_bd09(lng, lat) {
    var lat = +lat
    var lng = +lng
    var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI)
    var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI)
    var bd_lng = z * Math.cos(theta) + 0.0065
    var bd_lat = z * Math.sin(theta) + 0.006
    return [bd_lng, bd_lat]
}

/**
 * WGS84转GCj02
 * @param lng
 * @param lat
 * @returns {*[]}
 */
function wgs84_to_gcj02(lng, lat) {
    var lat = +lat
    var lng = +lng
    if (out_of_china(lng, lat)) {
        return [lng, lat]
    } else {
        var dlat = trans_form_lat(lng - 105.0, lat - 35.0)
        var dlng = trans_form_lng(lng - 105.0, lat - 35.0)
        var radlat = lat / 180.0 * PI
        var magic = Math.sin(radlat)
        magic = 1 - ee * magic * magic
        var sqrtmagic = Math.sqrt(magic)
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI)
        var mglat = lat + dlat
        var mglng = lng + dlng
        return [mglng, mglat]
    }
}

/**
 * GCJ02 转换为 WGS84
 * @param lng
 * @param lat
 * @returns {*[]}
 */
function gcj02_to_wgs84(lng, lat) {
    var lat = +lat
    var lng = +lng
    if (out_of_china(lng, lat)) {
        return [lng, lat]
    } else {
        var dlat = trans_form_lat(lng - 105.0, lat - 35.0)
        var dlng = trans_form_lng(lng - 105.0, lat - 35.0)
        var radlat = lat / 180.0 * PI
        var magic = Math.sin(radlat)
        magic = 1 - ee * magic * magic
        var sqrtmagic = Math.sqrt(magic)
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI)
        var mglat = lat + dlat
        var mglng = lng + dlng
        return [lng * 2 - mglng, lat * 2 - mglat]
    }
}

function trans_form_lat(lng, lat) {
    var lat = +lat
    var lng = +lng
    var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0
    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0
    return ret
}

function trans_form_lng(lng, lat) {
    var lat = +lat
    var lng = +lng
    var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0
    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0
    return ret
}

/**
 * 判断是否在国内，不在国内则不做偏移
 * @param lng
 * @param lat
 * @returns {boolean}
 */
function out_of_china(lng, lat) {
    var lat = +lat
    var lng = +lng
    // 纬度3.86~53.55,经度73.66~135.05
    return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55)
}

/**
 * 根据多边形坐标获取中心经纬度坐标
 * @param data
 * @returns {{lng: number, lat: number}}
 */
function getCenterPoint(pList) {
    var total = pList.length - 1;
    var X = 0, Y = 0, Z = 0;
    for (var i = 1; i <= pList.length - 1; i++) {
        var lon = pList[i - 1][0] * Math.PI / 180; //经度
        var lat = pList[i - 1][1] * Math.PI / 180; //纬度
        X += Math.cos(lat) * Math.cos(lon);
        Y += Math.cos(lat) * Math.sin(lon);
        Z += Math.sin(lat);
    }
    X = X / total;
    Y = Y / total;
    Z = Z / total;
    var lon2 = Math.atan2(Y, X);
    var hyp = Math.sqrt(X * X + Y * Y);
    var lat2 = Math.atan2(Z, hyp);
    var longitude = (lon2 * 180 / Math.PI).toFixed(6);
    var latitude = (lat2 * 180 / Math.PI).toFixed(6);
    return [longitude, latitude];
}