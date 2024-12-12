+++
title = "Printing tips"
tags = ["notes", "design"]
date = "2023-11-27"
draft = false
desc = "Tips on preparing layouts for printing"
+++


<div class="table-of-contents">

[Preparing for printing](#preparing-a-document-for-printing)  
[Soft Proofing](#soft-proofing)  
[Links](#links-and-references)  

</div>

## Preparing a document for printing

### Colors

Work in RGB and only convert to CMYK when generating the press-ready pdf.

It is also recommended to calibrate your monitor with hardware calibrator to ensure that the colors you see are as close as possible as the final result will be.

Another good trick to preview a document contrast and colors on a screen is to lower the brightness of the around 50%, or even better, bring a sheet of white paper against it and lower the brightness of the screen until it is as close as possible as the sheet of paper.

### Bleed and Safety zone

Generally, printers will want at least a 0.125" bleed zone outside the document final size. It is also advised to keep the same 0.125" inside of the document free from text or important elements since it can get cut off in the trimming process.

{{< spacer >}}

## Soft proofing

Different design and image editing software have tools to "soft-proof" a document, soft-proofing besically means proofing using software, instead of the traditionnal proofing by running the document through the press and checking how it turned out. This is useful to save time, paper and ink by identifying problems with images and colors early on before sending to the presses.

In InDesign you can soft-proof by selecting **View -> Proof colors**

### ICC profiles

An ICC profile is a document containing a lot of information on how ink is absorbed by a specific paper and how the printing process will affect the color and contrast of a document.

### Ink coverage

Total Ink Coverage or Total Area Coverage is the total percentage amount of ink printed on a specific dot in a design. designs with a lot of overprinting can lead to an excessive amount of ink deposited on the paper leading to muddy shadows and loss of detail. Ink will also not dry properly if it exceeds a certain percentage causing additional trouble.

Using Adobe acrobat, the Total area coverage can be verified for a document before sending to print.

Open the **Output Preview** modal, preview separations and at the bottom of the modal check the **Total Area Coverage checkbox**. Then depending on the paper used, adjust the percentage above which the ink buildup will cause trouble.

- Sheetfed offset on coated paper: **320% to 340%**
- heatset web offset including SWOP: **300%**
- Uncoated newsprint on non-heatset web offset: **240% to 260%**

{{< spacer >}}

## Links and References

https://layersmagazine.com/proofing-with-pdfs-part-2.html  
https://www.prepressure.com/design/basics/tic

