input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(622, music.beat(BeatFraction.Quarter))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(932, music.beat(BeatFraction.Half))
    music.playTone(831, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(932, music.beat(BeatFraction.Whole))
})
