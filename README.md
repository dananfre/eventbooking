# Where It's @

En app för biljettbokning gjord som en single page application i ramverket **React**. Examinerande uppgift i kursen **Frontendramverk (35yhp)** på utbildningen **Frontendutvecklare Distans 400yhp**.

## Funktioner
- Sökfunktion för event
- Detaljsida för varje event
- Varukorg med biljettantal och totalpris
- En skickad order genererar biljetter med sektion, platsnummer och unik ID

## Bibiliotek

### React Router
Används för att skapa en single page application med olika vyer, så att användaren kan navigera mellan exempelvis eventlistan, varukorgen och biljettsidan utan att sidan laddas om.

### Zustand
Använt för att skapa global statehantering. Underlättade bygget av applikationen, då jag slapp skicka props onödigt mycket. En planeringsmiss gjorde att jag i slutet behövde skapa två separata listor i store: en för valda ordrar (cartOrders) och en för betalda ordrar (cartOrdersPayed). Det resulterade i lite otydliga namn, men fungerade väl.

### Axios
Används för att förenkla hämtandet av eventdata från ett externt API.

### FontAwesome
Ett ikonbibliotek som användes för att hämta förstorningsglaset till sökfunktionen.

### Swiper
Användes för att göra biljetterna svepbara.

### React Barcode
Används för att generera streckkoder av de slumpade biljettkoderna. Jag är medveten om att det teoretiskt sätt skulle kunna slumpas fram samma biljettnummer. För att säkra hade jag kunnat lagra de slumpade biljettkoderna i en lista och jämföra varje nytt nummer mot den. Något att ta ställning till i ett skarpt projekt tänker jag.

### UUID
Används för att generera unika ID:n till varje order och biljett.
