function Title () {
    game.splash("Bon Appetit")
    game.showLongText("One day, in a garage sale.", DialogLayout.Bottom)
    game.showLongText("I found this old arcade game called \"Bon Appetit\".", DialogLayout.Bottom)
    game.showLongText("It's owner told me that it was a cancelled game from a successful video game company ", DialogLayout.Bottom)
    game.showLongText("I was really curious to find out more about this cancelled arcade game.", DialogLayout.Bottom)
    game.showLongText("And since it was cheap, I decided to buy it.", DialogLayout.Bottom)
    game.showLongText("When I arrived home, I set up the arcade and started playing.", DialogLayout.Bottom)
    effects.confetti.startScreenEffect()
    music.playMelody("F G A F G A F E ", 217)
    effects.confetti.endScreenEffect()
    game.splash("Welcome to Bon Appetit !")
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.setBackgroundImage(assets.image`myImage1`)
    mySprite.destroy()
    EnemySprite.destroy()
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    music.stopAllSounds()
    scene.setBackgroundImage(assets.tile`myTile1`)
    tiles.setTilemap(tilemap`level6`)
    game.showLongText("This morning, a young man by the name of Takahashi XXXXXXX was found dead in his house.", DialogLayout.Bottom)
    music.stopAllSounds()
    game.showLongText("He was missing the pulpit of both his arms.", DialogLayout.Bottom)
    music.stopAllSounds()
    game.showLongText("The police couldn’t find any evidence on the murder.", DialogLayout.Bottom)
    music.stopAllSounds()
    game.showLongText("The only thing they found was an old arcade machine.", DialogLayout.Bottom)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    otherSprite.destroy()
})
function CreateEnemy () {
    EnemySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    EnemySprite,
    assets.animation`myAnim0`,
    200,
    true
    )
    tiles.placeOnRandomTile(EnemySprite, assets.tile`myTile1`)
    EnemySprite.follow(mySprite)
}
let EnemySprite: Sprite = null
let mySprite: Sprite = null
Title()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
200,
true
)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
let mySprite2 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(5, 2))
info.setScore(0)
let MySprite3 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite3, tiles.getTileLocation(7, 2))
let MySprite4 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite4, tiles.getTileLocation(9, 2))
let MySprite5 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite5, tiles.getTileLocation(14, 3))
let MySprite6 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite6, tiles.getTileLocation(14, 5))
let MySprite7 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite7, tiles.getTileLocation(14, 7))
let MySprite8 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite8, tiles.getTileLocation(5, 7))
let MySprite9 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite9, tiles.getTileLocation(7, 7))
let MySprite10 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite10, tiles.getTileLocation(9, 7))
let MySprite11 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite11, tiles.getTileLocation(2, 8))
let MySprite12 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite12, tiles.getTileLocation(2, 10))
let MySprite13 = sprites.create(assets.image`myImage`, SpriteKind.Food)
tiles.placeOnTile(MySprite13, tiles.getTileLocation(2, 12))
game.showLongText("Hi and welcome to Bon Appetit !", DialogLayout.Bottom)
game.showLongText("To win this game, you’ll have to eat all of the carrots !", DialogLayout.Bottom)
game.showLongText("Good Luck !", DialogLayout.Bottom)
game.onUpdate(function () {
    controller.moveSprite(mySprite, 100, 100)
    scene.cameraFollowSprite(mySprite)
    if (info.score() == 12) {
        game.showLongText("Good Job !", DialogLayout.Bottom)
        tiles.setTilemap(tilemap`level4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
        info.setScore(0)
        game.showLongText("But now things are gonna get a little harder.", DialogLayout.Bottom)
        game.showLongText("As wolves are gonna chase you and try to eat you.", DialogLayout.Bottom)
        game.showLongText("Good luck surviving !", DialogLayout.Bottom)
        CreateEnemy()
    }
})
forever(function () {
    music.playMelody("F G A F G A F E ", 120)
})
