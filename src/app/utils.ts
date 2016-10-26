export class Utils {
    public static getNID(urlSlug: String) {
        var slugArray = urlSlug.split('-');
        return slugArray.pop();
    }
    public static getSlug(path: String) {
        var pathArray = path.split('/');
        return pathArray.pop();
    }
    public static getImageSrc(imgtag: string) {
        let imgsrc = "";
        let srcRegex = /src[\s]*=[\s\\]*"([^"]*)"/g;
        let imgSrcAr = srcRegex.exec(imgtag);
        if (imgSrcAr && imgSrcAr[1]) {
            imgsrc = imgSrcAr[1];
        }
        return decodeURIComponent(imgsrc);
    }
    public static getImagesSrc(imgtag: string) {
        let match;
        let imgAr = [];
        let srcRegex = /src[\s]*=[\s\\]*"([^"]*)"/g;
        while (match = srcRegex.exec(imgtag)) {
            imgAr.push(match[1]);
        }
        return imgAr;
    }
    public static getArrayofObjects(malformedArray: string){
         return JSON.parse("["+ malformedArray +"]");
    }
}