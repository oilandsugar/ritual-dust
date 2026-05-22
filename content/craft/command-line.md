+++
title = "Command line tools"
tags = ["notes", "code", "command line"]
date = "2024-12-31"
image = ""
desc = "Notes, tips and code snippets i use for various tasks"
+++

## Basic navigation

{{< code >}}// move to a folder (change directory):
cd /Users/Liz/photos/
// list files in current folder:
ls
{{</ code >}}

## Image manipulation

These snipets use image magick to manipulate, convert and dither images

### convert png to jpg

{{< code >}}// single image:
magick image.jpg image.png

// batch process all images in a folder:
magick mogrify -format jpg *.png
{{</ code >}}

### resize images

note that this command will fit the resized image in the given dimensions, so that the image is at the largest 1500px or at the highest 2000px while keeping the orginal aspect ratio.

{{< code >}}// single image:
magick image.jpg -resize 1500x2000 -quality 100 image.jpg

// batch process all images in a folder:
magick mogrify -resize 1500x2000 -quality 100 *.jpg
{{</ code >}}

### resize and dither

{{< code >}}// single image:
magick convert  image.jpg  -colorspace Gray  -ordered-dither o8x8  image-low.jpg

// batch process all images in a folder:
magick convert '*.jpg' -set filename:f "%t" -resize 800x1000 -quality 100 -colorspace Gray  -ordered-dither o8x8 '%[filename:f]-low.jpg'
{{</ code >}}

## Resources

[Image Magick](https://imagemagick.org/index.php)