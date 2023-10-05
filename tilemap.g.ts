// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004040404040404040404040404040404040000000000000400000000000000040500040400040204000400040004000404000404030404040004000400040004040000000404030400040004000400040400040404040004000400000004000404000000000000000004030400040004040003040404040400040404000400040400000004000300000403040004000404000404040004040404000400040004040000000000040300000000000400040400040404040404040404040204000404000000000304000000000000040004040004040404040404040404040400040402040000000000030000000000000104040404040404040404040404040406`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 . . . . . . . 2 
. . 2 . . 2 . 2 . . . 2 . . . 2 
2 . 2 2 . 2 2 2 . 2 . 2 . 2 . 2 
2 . . . 2 2 . 2 . 2 . . . 2 . 2 
2 . 2 2 2 2 . . . 2 . . . 2 . 2 
2 . . . . . . . . 2 . 2 . 2 . 2 
2 . . 2 2 2 2 . . 2 2 2 . 2 . 2 
2 . . . 2 . . . . 2 . 2 . 2 . 2 
2 . 2 2 2 . 2 2 2 2 . . . 2 . 2 
2 . . . . . 2 . . . . . . 2 . 2 
2 . . 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 . 2 . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile9,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "door":
            case "tile1":return tile1;
            case "paper":
            case "tile9":return tile9;
            case "teacher":
            case "tile6":return tile6;
            case "brick":
            case "tile2":return tile2;
            case "stairs":
            case "tile3":return tile3;
            case "outdoors":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
