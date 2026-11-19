function findTopLeft(pointList) { //Max Lat and Min Lon
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point => { 
            if (maxLat == null) { //first point
                maxLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat > maxLat) { //max lat
                    maxLat = point.lat
                }
                if (point.lon < minLon) { //min lon
                    minLon = point.lon
                }
            }
        }    
        )

    return {"pointId": 1, "lat": maxLat, "lon": minLon}
}


function findTopRight(pointList) { //Max Lat and Max Lon
    var maxLat = null;
    var maxLon = null;

    pointList.data.forEach(
        point => { 
            if (maxLat == null) { //first point
                maxLat = point.lat
                maxLon = point.lon
            }
            else {
                if (point.lat > maxLat) { //max lat
                    maxLat = point.lat
                }
                if (point.lon > maxLon) { //max lon
                    maxLon = point.lon
                }
            }
        }    
        )

    return {"pointId": 2, "lat": maxLat, "lon": maxLon}
}


function findBottomLeft(pointList) { //Min Lat and Min Lon
    var minLat = null;
    var minLon = null;

    pointList.data.forEach(
        point => { 
            if (minLat == null) { //first point
                minLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat < minLat) { //min lat
                    minLat = point.lat
                }
                if (point.lon < minLon) { //min lon
                    minLon = point.lon
                }
            }
        }    
        )

    return {"pointId": 3, "lat": minLat, "lon": minLon}
}


function findBottomRight(pointList) { //Min Lat and Max Lon
    var minLat = null;
    var maxLon = null;

    pointList.data.forEach(
        point => { 
            if (minLat == null) { //first point
                minLat = point.lat
                maxLon = point.lon
            }
            else {
                if (point.lat < minLat) { //min lat
                    minLat = point.lat
                }
                if (point.lon > maxLon) { //max lon
                    maxLon = point.lon
                }
            }
        }    
        )

    return {"pointId": 4, "lat": minLat, "lon": maxLon}
}


function Run() {
    var topLeftPoint = findTopLeft(theJSON);
    var topRightPoint = findTopRight(theJSON);
    var bottomLeftPoint = findBottomLeft(theJSON);
    var bottomRightPoint = findBottomRight(theJSON);

    var boundingBox = {
        "topLeft": topLeftPoint,
        "topRight": topRightPoint,
        "bottomLeft": bottomLeftPoint,
        "bottomRight": bottomRightPoint
    }

    console.log("Bounding box computed for liamomara03@tamu.edu: ");
    console.log(boundingBox);
}