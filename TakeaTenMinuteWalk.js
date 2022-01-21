/*You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

Sie leben in der Stadt Cartesia, wo alle Straßen in einem perfekten Raster angelegt sind. Sie kamen zehn Minuten zu früh zu einem Termin und beschlossen, die Gelegenheit für einen kurzen Spaziergang zu nutzen. Die Stadt stellt ihren Bürgern eine Laufgenerierungs-App auf ihren Handys zur Verfügung – jedes Mal, wenn Sie die Taste drücken, sendet sie Ihnen eine Reihe von Ein-Buchstaben-Strings, die Wegbeschreibungen darstellen (z. B. ['n', 's', 'w', 'e']). Sie gehen immer nur einen Block für jeden Buchstaben (Richtung) und Sie wissen, dass Sie eine Minute brauchen, um einen Stadtblock zu durchqueren, also erstellen Sie eine Funktion, die wahr zurückgibt, wenn der Weg, den die App Ihnen gibt, genau zehn Minuten dauert (Sie wollen weder zu früh noch zu spät sein!) und bringen Sie selbstverständlich wieder an Ihren Ausgangspunkt zurück. Geben Sie andernfalls false zurück.

Hinweis: Sie erhalten immer ein gültiges Array mit einer zufälligen Auswahl von Richtungsbuchstaben (nur 'n', 's', 'e' oder 'w'). Es wird Ihnen niemals ein leeres Array geben (das ist kein Spaziergang, das ist Stillstand!).

https://www.codewars.com/kata/54da539698b8a2ad76000228/javascript

Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
Test.expect(!isValidWalk(['w']), 'should return false');
Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
*/

function isValidWalk(walk) {
    //insert brilliant code here
  }

  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
  console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
  console.log(!isValidWalk(['w']), 'should return false');
  console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');