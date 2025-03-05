# sjpi-accessibility-1
May day, May day - help me save the site!

**Kort sammanfattning av fel** 
Webbsidan är väldigt rörig med mycket blinkande och distraherande objekt. 
Mycket onöding JS som laddar hela tiden och skapar stora problem för laddningstider. 
Sidan laddas om hela tiden. 
Mycket rörig CSS som behöver ses över. 
Dubblering och bortkommenterad HTML. 

**Förbättringar** 
HTML- 
Lägger till lang="en" eftersom denna var bortkommenterad (Gör mycket för Accessibility som Redan är grön)
Tar bort <!-- <title>A11y News dupe</title> --> eftersom den inte gör någon nytta. 
Lägger till alt attribut på img.
Tar bort video elementet helt. 
Tar bort den osäkra Gif bilden helt. 
 Ändrat storlek på <!--<img src="http://upload.wikimedia.org/wikipedia/commons/3/3f/JPEG_example_flower.jpg" width="500"> --> från 50000 till 500
 Lagt till bilder igen så att det inte fattas. 
 
 JS-
 Tog bort så att inte tråden blockeras utan bara loggar att en sekund har gått. 
 Ändrat till document.body.innerHTML istället för write som annars rensar sidan efter omladdning. 
