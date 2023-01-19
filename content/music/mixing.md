+++
title = "Mixing notes"
date = "2022-07-02"
tags = ["music", "notes"]
desc = "My song mixing process and some tips"
+++

## Table of contents

<div class="table-of-contents">

[mixing process](#the-mixing-process)  
[focussed listening](#focussed-listening)  
[midrange-focussed mixing](#midrange-focussed-mixing)

</div>

## The Mixing Process

1. [Organization](#organization)
2. [Volume](#volume)
3. [Panning](#panning-and-stereo-field)
4. [Equalization](#equalization)
5. [Double checking](#double-checking-the-mix)
6. [Exporting stems](#exporting-the-stems)

### Organization

**Tips**

- Group all related tracks together (drums, voice, synths, etc.) and color-code them.
- Name all the tracks in a way that makes it easier to find what is what.
- Remove all unused tracks and sounds.

### Volume

#### Overall volume

Starting with the main tracks and working down from there, set the relative volume of the tracks. It's usually preferable to bring things down than up most of the time, even if that mean bringing down  everything to keep one track at it's current level and being more prominent.

If necessary, automate the volume of tracks in some parts of the song to leave room for other elements. For example, in a verse drums can be quieter and then come back louder for the chorus.

**Tips**

- put the whole song in mono while doing that step to prevent being skewed by perceived loudness of very wide sounds
- Try to keep between -3db to -10db of headroom for mastering.  
- Having a little bit of compression and a limiter on the master bus when mixing can help get a better feel of how it's gonna sit in the mastered track.
- Increasing the volume of some tracks slowly during buildups is really effective.
- Having a little bit of silence before a drop makes it sound more impactful.

#### Compression

Compression turns down the volume of a track every time the sound exceed a certain level (threshold) The ratio is the amount that is turned down.
For example, threshold at -16db and ratio at 2:1, every time the sound goes over -16db, the extra volume is gonna be reduced by half. The Attack sets amount of time after threshold is exceeded for the compression to happen.
The release is how long it takes after compression has happened before volume gets back to it’s initial level. And finally, makeup gain compensates for the loss of volume after compression.

Compression ratios:
- 2:1 gentle
- 4:1 standard
- 8:1 aggressive
- 20:1 limiting

Use compression to make sounds / tracks more even in volume over time (starting with -20db of compression is a good start) and then play around with different ratios. If a song has a lot of little sounds on different track for a section and they should be mixed in a similar way, grouping them and then compressing the group is a good way to get started with that.

Parallel compression, to keep the original dynamics of the sound in addition to a more punchy compressed version, can be combined with full wet compression on a same track depending on the effect desired.

**Tips**

- Sidechain a lot of the elements of the song to the kick, either individually or through grouping them and then side-chaining.
- If some tracks are really filtered it can be good to add a compressor on them to compensate for the loss of volume due to filtering.
- Put compression on drum groups to glue them together

### Panning and stereo field

**Tips**

- Using headphones for this part is really useful.
- Bass elements should be mono.
- Keep reverb stereo.
- Pan different tracks to create a wider stereo field.
- In drops, keep most important tracks mostly in the center.
- Ping pong delay is also a good way to make a track more wide.
- Having the lead a bit more to one side and the chords a bit more to the opposite side can make them clearer.
- Animating the panning on some element can make it more interesting.

### Equalization

Remove the low end of everything that's not bass or a kick drum to prevent muddiness (that can include effects sends like reverbs and delays). To know where to start the low cut, check the lowest note played by that instrument.

check for conflicting frequencies and either pan them apart or boost / cut different frequencies for both sounds so they compete less. As with volume, it's usually best to cut more frequencies than to boost them to create more room.

**Tips**

- EQ reverbs so they don't add mud in the low and high end
- Punchy kicks: scoop down at 200hz, then compress with a medium attack and a quick release.
- Identify and remove unwanted harmonics with a high Q point in an EQ plugin.

### Double checking the mix

It's good to do the mix itself on a good set of monitors but it's also really useful to test it out on headphones and other types of speakers during and at the end of the process (trying it out in the car is a classic test).

### Exporting the stems

Once the mix is good, it is time to export the stems for mastering.
I usually create a new folder called "[name of song] - stems (x bpm)".
Before exporting the tracks i make sure that no track is soloed or deactivated.
I export all tracks at a sample rate of 44100Hz, in WAV format, making sure to include the return and master effects (with nothing on the master bus).

---

## Focussed listening

Put on some music and listen deeply to the balance of the different elements, how they are panned, what are the supporting elements in the background of the song doing, etc.

---

## Midrange-focussed mixing

200hz < --- > 4khz

Try accomplishing most of your mixing goals while staying in that frequency range, then at the end make changes on the lower and higher end if needed. This can help a lot with the perceived volume of the track.
