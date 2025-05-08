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
FontAwesome tillhandahåller ett stort bibliotek av SVG- och webfonter som enkelt integreras med React-komponenter via @fortawesome/react-fontawesome. Ikoner renderas som <svg>-element, vilket gör dem skalbara och stilbara med CSS. Jag använde biblioteket för att hämta förstorningsglaset till sökfunktionen. Jag började titta på att använda biblioteket för att animera vissa delar av logotypen, men upptäckte att det kostade mer än det smakade. Bra att veta dock, vad man kan använda biblioteket till. Verkar mycket kraftfullt.

### Swiper
Användes för att göra biljetterna svepbara. Jag letade upp ett exempel på hur biblioteket används och gjorde likadant, men med vissa justeringar. 

### React Barcode
Används för att generera streckkoder av de slumpade biljettkoderna. Eftersom komponenten fanns och var väldigt lätt att använda passade det att använda den i projektet. Jag är medveten om att det teoretiskt sätt skulle kunna slumpas fram samma biljettnummer. För att säkra hade jag kunnat lagra de slumpade biljettkoderna i en lista och jämföra varje nytt nummer mot den. Något att ta ställning till i ett skarpt projekt tänker jag.

### UUID
Används för att generera unika ID:n till varje order och biljett. Används för att generera unika id för varje order. Långa koder med mycket hög entropi. Som jag förstår det finns det ingen databas som lagrar använda koder, men längden på koderna gör risken för upprepning i princip obefintlig. Säkerställer att ordrarna skiljs från varandra. Man ska exempelvis kunna lägga flera oberoende ordrar på samma event.
