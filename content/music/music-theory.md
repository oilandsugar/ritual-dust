+++
title = "Music theory"
date = "2024-11-28"
tags = ["music", "notes"]
draft = false
+++

{{< warning >}}This page is still very much a work in process and some stuff is definitely wrong on there, use at your own risk.{{</ warning >}}  

<div class="table-of-contents">

[Intervals](#intervals)  
[Scales](#scales)  
[Keys](#keys)  
[Modes](#modes)  
[Chords](#chords)  
[Rhythm](#rythm)  
[Composition and structure](#composition-and-structure)  
[Resources](#resources)

</div>

{{< piano nboctaves="2" smalltext="This little keyboard will follow us along, hover the notes to see their names" >}}  
  
  
## Intervals

In western tonal music, the musical range of instruments is subdivided into 12 equal parts separated from each other by a half-step (which on a keyboard is the jump from one note to the next). Each of these representing a note in the chromatic scale.
The difference between different of these notes are called intervals and are measured in <strong class="accent">half-steps</strong> (semitones) or <strong class="accent">whole steps</strong> (tones).

{{< spacer >}}

## Scales, Keys and Modes

### Scales

A scale is a sequence of notes following a certain pattern of half-steps and whole steps between the notes. Scales generally span a single octave since the pattern repeats with higher or lower octaves. 
  
Scales can have different number of notes in them, the <strong class="accent">chromatic</strong> scale has <strong class="accent">12</strong>, a <strong class="accent">heptatonic</strong> scale has <strong class="accent">7</strong>, a <strong class="accent">hexatonic</strong> scale has <strong class="accent">6</strong>, and a <strong class="accent">pentatonic</strong> scale has <strong class="accent">5</strong>. More ancient forms of music used even smaller scales of 4 (tetratonic), 3 (tritonic) or 2 (ditonic) notes.

The most central and stable note in a scale is called the <strong class="accent">tonic</strong>, usually in a common scale the tonic will be the starting note, for example in the C major scale, the tonic would be C and often in song composed in that key, the first and last notes will be this tonic.

{{< spacer >}}

The <strong class="accent">chromatic scale</strong> is a scale with 12 notes, all eqally spaced by a half-step, one of it's functions is to add color or embellish the major and minor scales.

<div class="row">
<div class="flex-1">
{{< piano notes="c,c#,d,d#,e,f,f#,g,g#,a,a#,b" >}} 
</div>
<div class="flex-2 two-thirds">
{{< code "html" >}}C      C#     D      D#     E      F      F#     G      G#     A      A#     B
T
|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|
{{< /code >}}<small>The chromatic scale</small>
</div>
</div>

{{< spacer >}}

The <strong class="accent">major scale</strong>

<div class="row">
<div class="flex-1">
{{< piano notes="c,d,e,f,g,a,b" >}} 
</div>
<div class="flex-2 two-thirds">
{{< code "html" >}}I      II    III     IV     V      VI    VII
C      D      E      F      G      A      B
T
|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|
{{< /code >}}<small>The C major scale</small>
</div>
</div>

{{< spacer >}}

The <strong class="accent">minor scale</strong>, sometimes referred to as natural minor

<div class="row">
<div class="flex-1">
{{< piano notes="c,d,eb,f,g,ab,bb" >}} 
</div>
<div class="flex-2 two-thirds">
{{< code "html" >}}I      II    III     IV     V      VI    VII
C      D      Ef     F      G      Af     Bf
T
|‑[ws]‑|‑[hs]‑|‑[ws]‑|‑[ws]‑|‑[hs]‑|‑[ws]‑|
{{< /code >}}<small>The C minor scale</small>
</div>
</div>
    
{{< spacer >}}

The <strong class="accent">harmonic minor scale</strong> is a variation of the minor scale in whch the degree VII has been raised by a half-step, allowing to create a dominant seventh chord from the ffth degree of the scale.

<div class="row">
<div class="flex-1">
{{< piano notes="c,d,eb,f,g,ab,b" >}} 
</div>
<div class="flex-2 two-thirds">
{{< code "html" >}}I      II    III     IV     V      VI    VII
C      D      D#      F     G      G#     B
T
|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|
{{< /code >}}<small>The C harmonic minor scale</small>
</div>
</div>

{{< spacer >}}

The <strong class="accent">melodic minor scale</strong> is a variation of the harmonic minor scale made to make melodies of ascending and descending consecutive notes more harmonious. When the melodic minor scale s played in an ascending pattern it's degrees VI and VII are increased by a half-step and when played in a descending pattern it's degrees VI and VII are decreased by a half-step.

{{< code "html" >}}------ ascending ------>                                                <------ descending ------
I      II    III     IV     V      VI    VII    |    I      II    III     IV     V      VI    VII
C      D      Ef     F      G      A      B     |    C      D      Ef     F      G      Af     Bf
T                                               |    T
|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|     |    |‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|‑[hs]‑|
{{< /code >}}<small>The C melodic minor scale</small>

<div class="row">
<div class="flex-1 smaller-padding-left smaller-padding-right">
<strong>Ascending</strong>
  
{{< piano notes="c,d,eb,f,g,a,b" >}} 
</div>
<div class="flex-1 smaller-padding-left smaller-padding-right">
<strong>Descending</strong>
  
{{< piano notes="c,d,eb,f,g,ab,bb" >}} 
</div>
</div>

{{< spacer >}}

### Keys

A key is the combination of a tonic or central notes, a scale and a set of chord progressions.
These are all the keys in the western classical musical tradition, which are the most commonly used in contemporary electronic music.

<div class="grid-3">
    
<div class="music-key">
<strong>A major</strong>  
<div class="accent">A, B, C♯, D, E, F♯, G♯</div>
<div class="desc"><em>joyful and pastoral</em></div>
</div>

<div class="music-key">
<strong>A minor</strong>  
<div class="accent">A, B, C, D, E, F, G</div>
<div class="desc"><em>tender and plaintive</em></div>
<div class="genres"><div class="stat">pop</div><div class="stat">edm</div></div>
</div>

<div class="music-key">
<strong>A# major (B♭ major)</strong>  
<div class="accent">B♭, C, D, E♭, F, G, A</div>
<div class="desc">magnificient and joyful</div>
</div>

<div class="music-key">
<strong>A# minor (B♭ minor)</strong>  
<div class="accent">B♭, C, D♭, E♭, F, G♭, A♭</div>
<div class="desc"><em>obscure and terrible</em></div>
</div>

<div class="music-key">
<strong>B major</strong>  
<div class="accent">B, C♯, D♯, E, F♯, G♯, A♯</div>
<div class="desc">harsh and plaintive</div>
</div>

<div class="music-key">
<strong>B minor</strong>  
<div class="accent">B, C♯, D, E, F♯, G, A</div>
<div class="desc"><em>solitary and melancholic</em></div>
</div>

<div class="music-key">
<strong>C major</strong>  
<div class="accent">C, D, E, F, G, A, B</div>
<div class="desc"><em>gay and warlike</em></div>
<div class="genres"><div class="stat">pop</div></div>
</div>

<div class="music-key">
<strong>C minor</strong>  
<div class="accent">C, D, E♭, F, G, A♭, B♭</div>
<div class="desc"><em>obscure and sad</em></div>
<div class="genres"><div class="stat">edm</div></div>
</div>

<div class="music-key">
<strong>C# major (D♭ major)</strong>  
<div class="accent">C♯, D♯, E♯, F♯, G♯, A♯, B♯</div>
<div class="desc"><em>feeling?</em></div>
</div>

<div class="music-key">
<strong>C# minor (D♭ minor)</strong>  
<div class="accent">C♯, D♯, E, F♯, G♯, A, B</div>
<div class="desc"><em>feeling?</em></div>
</div>

<div class="music-key">
<strong>D major</strong>  
<div class="accent">D, E, F♯, G, A, B, C♯</div>
<div class="desc"><em>cruel and hard</em></div>
</div>

<div class="music-key">
<strong>D minor</strong>  
<div class="accent">D, E, F, G, A, B♭, C</div>
<div class="desc"><em>serious and pious</em></div>
</div>

<div class="music-key">
<strong>D# major (E♭ major)</strong>  
<div class="accent">???</div>
<div class="desc"><em>cruel and hard</em></div>
</div>

<div class="music-key">
<strong>D# minor (E♭ minor)</strong>  
<div class="accent">D♯, E♯, F♯, G♯, A♯, B, C♯</div>
<div class="desc"><em>amorous and plaintive</em></div>
</div>

<div class="music-key">
<strong>E major</strong>  
<div class="accent">E, F♯, G♯, A, B, C♯, D♯</div>
<div class="desc"><em>feeling?</em></div>
</div>

<div class="music-key">
<strong>E minor</strong>  
<div class="accent">E, F♯, G, A, B, C, D</div>
<div class="desc"><em>feeling?</em></div>
<div class="genres"><div class="stat">pop</div></div>
</div>

<div class="music-key">
<strong>F major</strong>  
<div class="accent">F, G, A, B♭, C, D, E</div>
<div class="desc"><em>furious and quick-tempered</em></div>
</div>

<div class="music-key">
<strong>F minor</strong>  
<div class="accent">F, G, A♭, B♭, C, D♭, E♭</div>
<div class="desc"><em>obscure and plaintive</em></div>
</div>

<div class="music-key">
<strong>F# major</strong>  
<div class="accent">F♯, G♯, A♯, B, C♯, D♯, E♯</div>
<div class="desc"><em>feeling?</em></div>
</div>

<div class="music-key">
<strong>F# minor</strong>  
<div class="accent">F♯, G♯, A, B, C♯, D, E</div>
<div class="desc"><em>feeling?</em></div>
<div class="genres"><div class="stat">edm</div></div>
</div>

<div class="music-key">
<strong>G major</strong>  
<div class="accent">G, A, B, C, D, E, F♯</div>
<div class="desc"><em>serious and magnificient</em></div>
<div class="genres"><div class="stat">pop</div></div>
</div>

<div class="music-key">
<strong>G minor</strong>  
<div class="accent">G, A, B♭, C, D, E♭, F</div>
<div class="desc"><em>serious and magnificient</em></div>
<div class="genres"><div class="stat">edm</div></div>
</div>

<div class="music-key">
<strong>G# major (A♭ major)</strong>  
<div class="accent">G♯, A♯, B♯, C♯, D♯, E♯, Fdouble sharp, G♯</div>
<div class="desc"><em>feeling?</em></div>
</div>

<div class="music-key">
<strong>G# minor (A♭ minor)</strong>  
<div class="accent">G♯, A♯, B, C♯, D♯, E, F♯</div>
<div class="desc"><em>feeling?</em></div>
</div>
    
</div>

{{< spacer >}}

### Modes  

Alternatively to a key, a mode represent different ways to use a specific scale to compose music.
Scales can have different modes, which are the same sequence of notes as the note's major scale but starting on a different note.

<div class="grid-3">
<div class="music-mode">
    <strong>Ionian</strong><br/>
    starting note: <span class="accent">I</span><br/>
    tonality: <span class="accent">major</span><br/>
</div>
<div class="music-mode">
    <strong>Dorian</strong><br/>
    starting note: <span class="accent">II</span><br/>
    tonality: <span class="accent">minor</span><br/>
</div>
<div class="music-mode">
    <strong>Phrygian</strong><br/>
    starting note: <span class="accent">III</span><br/>
    tonality: <span class="accent">minor</span><br/>
</div>
<div class="music-mode">
    <strong>Lydian</strong><br/>
    starting note: <span class="accent">IV</span><br/>
    tonality: <span class="accent">major</span><br/>
</div>
<div class="music-mode">
    <strong>Mixolydian</strong><br/>
    starting note: <span class="accent">V</span><br/>
    tonality: <span class="accent">major</span><br/>
</div>
<div class="music-mode">
    <strong>Aeonian</strong><br/>
    starting note: <span class="accent">VI</span><br/>
    tonality: <span class="accent">minor</span><br/>
</div>
<div class="music-mode">
    <strong>Locrian</strong><br/>
    starting note: <span class="accent">VII</span><br/>
    tonality: <span class="accent">half-diminished</span><br/>
</div>
</div>

{{< spacer >}}

## Chords and progressions

For every note in a key, a chord can be made by adding a note a 3rd and a 5th above the root note. These chords can be referred by a number, corresponding to the position of the note in the key.

{{< code "html" >}}I   II   III  IV  V   VI   VII
C - Dm - Em - F - G - Am - Bdim
{{< /code >}}<small>Chords of C major key and their number in roman numerals</small>

A chord can be inverted by moving it's 3rd or 5th up or down an octave, this is useful when makng chord progressions and wanting to keep the different chords in a similar pitch range.

chord progressions refer to a sequence of chords, usually from the same key, but that can also include chords and notes from outside the key. They can be referred to by their numbers, for example: <span class="accent">I - II - VI - V</span>.

{{< spacer >}}

## Rhythm

{{< spacer >}}

## Composition and structure

### The Five Arrangement Elements

It’s helpful to break an arrangement down into these five main elements, bearing in mind that some instruments may do different jobs at different parts in a song, or even fulfill multiple roles at once:
- Foundation: This is usually the rhythm section - drums providing the major pulse of the song that you would feel and count along to, and bass providing harmonic context for all other pitched instruments. The rest of the arrangement is built upon the foundation.
- Pads: Long sustained sounds - often chords, notes, or atmospheric effects which are held to fill some of the background space.
- Rhythm: Rhythm is any instrument that plays off of the Foundation’s pulse, adding movement and excitement to the track.
- Lead: What you would sing along to and probably pay the most attention to when listening.
- Fills: Fills occupy the spaces in between Lead lines to maintain interest when it’s natural for the main melody to take a break.

{{< spacer >}}

### Tension and Release

- Harmonic tension: The root chord of the key of your song is the most stable and resolved harmonic position. Tension is introduced as you move to other chords, as well as by accompanying them with some lead or bass notes which fit in less “expected” ways, i.e. notes that are outside of the current chord.
- Rhythmic tension: A lot of fun and interest comes from accentuating “weaker” beats - mainly, ones that don’t fall on the quarter note “1 2 3 4” that you would typically count along to most songs with. Think about rhythmic tension not only for typical “rhythm” parts like percussion, but also the rhythm of your main melody or the rhythm of the chord changes.
As you’re working, consider how tension and release play out across every aspect of your song - the impression of the introduction, the quantization of notes, the length of a buildup, contrasts in volume or brightness...

{{< spacer >}}

### Melody aspects

phrase - repetition of bunch of notes with same rythm but can change in pitch
chords - multiple notes played together, often accompanying melody
range - range of notes on scale applied to a melody
higher notes towards the end
keep the phrase length the same overall
insérer des breaks dans un rythme de drums

### Arpegios

Arpegios are a series of notes played in succession following a certain pattern. Arpegios are usually built using chord progressions. It is useful to start by just playing the chords in succession to get the right mood and the arpegiate them to create the rythmic part.

An interesting approach to using arpegios is starting by taking only one note per chord and then, as the song progresses, adding more notes, like unfolding the chords over time.

When using an arpegiator, in order to break the monotony of a constant arpegio, we can remove some notes from some chords, or change chords earlier or later than it normally would, changing how the pattern sounds and creating intersting variations.

Another fun thing i like to do in a DAW is when I have an arpegiated sequence that is boring, I turn it into mdi and add ornaments or notes in between the existing ones or remove some of the ones that were already there to change up the rythm.

One other way to add variation is varying the volume or character of some notes to accent them, like for example opening a filter more on some notes thans others. On a synth, this can also be done by using an LFO or a sample and hold to randomize this change.

{{< spacer >}}

## Resources

- [Music theory notes](https://badd10de.dev/notes/music-theory.html)
- [List of chord progressions](https://en.wikipedia.org/wiki/List_of_chord_progressions)
- [Color of keys](https://www.rollingball.com/A01c.htm)
- [analysis of keys and modes per genres](https://methodmatters.github.io/music-song-key-mode-genre-clustering/)
- [good video on arpegios](https://www.youtube.com/watch?v=X-NB74HJh7Q)