Thank you for downloading my widget!

FAQ:
 Q: How can I change the time format to 24 hours?
   A: Go into the "scripts" folder and open "custom.js" and find "if (hour > 12) {" and change it to "if (hour > 24) {".
 Q: How can I change the default font?
   A: Go into the "css" folder and open "style.css" and find "font-family:'digital-7'" and change "digital-7" to any font you want.
 Q: How do I add AM and PM to the time?
   A: Go into the "scripts" folder and open "custom.js" and find 

      document.getElementById('time').innerHTML = `${hour}:${min}`;

      And add ${mid} after ${min}.
 Q: How can I use a custom font that I downloaded?
   A: Upload your custom font to the "fonts" folder and go into the "css" folder and open "style.css" and find "@font-face" and updated it to your font info also don't forget to update the font-family in the body class.
      Example:
      
      @font-face{font-family:'Your Font Name';src:url(../fonts/Font-Name.ttf);font-weight:400;font-style:normal;
 Q: How do I change the font size?
   A: Go into the "css" folder and open "style.css" and find "font-size:50px;" and change the "50" to the size you want in pixels.
 Q: How can I add more slant to the time?
   A: Go into the "css" folder and open "style.css" and find "transform: skew(-4deg);" and change the "4" to another number.

If you have any questions please feel free to contact me.