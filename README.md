# InkMaster
Tattoo workshop
### Figma‑wireframes — komplett leveranse (startskjerm, flash‑galleri, motivdetaljer)

Nedenfor får du **Figma‑klar spesifikasjon**: rammer (frames), komponenter, layout‑regler, typografi, farge‑ og spacing‑tokens, interaksjoner og eksportinnstillinger. Kopier dette rett inn i Figma som en arbeidsbeskrivelse eller gi til en designer — alt er konkret nok til å bygges direkte.

---

### 1. Filstruktur og sider
**Figma‑fil (forslag navn):** `TattoByKine — Product UI`  
**Pages:**  
- `00 Design System` (farger, typografi, komponentbibliotek)  
- `01 Wireframes` (desktop / tablet / mobil frames)  
- `02 Prototypes` (interaksjoner + flows)  
- `03 Assets` (ikonsett, tatovørbilder, stencil‑ikoner)

---

### 2. Frames / Canvas størrelser
- **Desktop (primary):** 1440 × 1024  
- **Tablet:** 768 × 1024  
- **Mobile:** 375 × 812

Bruk samme innhold i alle tre, men tilpass grid/kolonner (desktop 12‑col, tablet 8‑col, mobil 4‑col).

---

### 3. Design tokens (farger, typografi, spacing)
**Farger**
- **Primary bg:** `#0F0F10` (mørk)  
- **Surface / kort:** `#141416`  
- **Text primary:** `#FFFFFF`  
- **Text secondary:** `#BDBDBD`  
- **Accent:** `#8B1E3F` (burgunder)  
- **Accent alt:** `#D4A76A` (gull)  
- **Success:** `#2ECC71`  
- **Danger:** `#E74C3C`

**Typografi**
- **H1 (display):** Playfair Display / 48px / 56px / 700  
- **H2:** Playfair Display / 32px / 40px / 600  
- **Body:** Inter / 16px / 24px / 400  
- **Small:** Inter / 14px / 20px / 400  
- **UI:** Inter / 12px / 16px / 600 (knapper)

**Spacing**
- Base grid: 8px  
- Margin / gutter: 24px (desktop), 16px (tablet), 12px (mobil)

---

### 4. Komponentbibliotek (Design System side)
Opprett komponenter med varianter og auto‑layout:

**A. Header**
- Varianter: `default`, `scrolled` (mindre høyde, drop shadow)  
- Innhold: Logo (venstre), søkikon, profilikon (høyre), sticky.

**B. Hero Card**
- Størrelser: `large` (desktop), `medium` (tablet), `small` (mobil)  
- Elementer: bakgrunnsillustrasjon, H1, undertekst, primær CTA (Accent), sekundær CTA (outline).

**C. Quick Action Cards**
- 4 kort i rad (ikon, tittel, kort beskrivelse). Auto‑layout horisontal.

**D. FilterChip**
- Varianter: `inactive`, `active`, `withCount`  
- Padding: 12px 16px, radius 999px.

**E. MotivCard (Flash)**
- Thumbnail (1:1), overlay ved hover: stil, tatovør, pris.  
- Actions: `Prøv på kroppen`, `Book`, `Favoritt`.  
- Variant: `compact` (mobil), `expanded` (desktop).

**F. MotivDetail Panel**
- Info‑panel med sticky action bar (desktop høyre kolonne; mobil sticky nederst).  
- Felt: tittel, tags, tatovørkort, størrelse‑selector (S/M/L/XL), prisestimat, CTA‑knapper.

**G. Visualizer Canvas**
- Canvas container med verktøylinje (vertikal på høyre side desktop, bunn på mobil).  
- Controls: scale slider, rotate slider, opacity slider, mirror toggle, skin tone selector.

**H. Booking Flow**
- Stepper komponent med 4 steg (Motiv → Tatovør → Tid → Betaling).  
- CalendarPicker: dagvis grid med ledige blokker.

**I. Toast / Modal**
- Success / Error / Confirm modal varianter.

---

### 5. Startskjerm — Figma wireframe (frame innhold)
**Frame:** Desktop 1440 × 1024

**Layout**
- Header (sticky) 80px høy.
- Hero (full width, 420px høy): venstre kolonne tekst, høyre kolonne illustrasjon.
  - H1: *Kunst på huden. Trygghet i prosessen.* (Playfair Display)
  - CTA primær: `Utforsk motiver` (Accent fylteknapp)
  - CTA sekundær: `Prøv på kroppen` (outline)
- Hurtigvalg (kortrad) under hero: 4 kort med ikoner.
- Fremhevet seksjon: stor motiv‑card + tatovør spotlight + kundeuttalelse.
- Footer: 4 kolonner (Studioinfo, Hygiene, Kontakt, Åpningstider).

**Auto‑layout regler**
- Hero: horizontal auto‑layout, gap 32px, padding 48px.
- Hurtigvalg: horizontal auto‑layout, gap 16px.

**Interaksjoner (Prototype)**
- Klikk `Utforsk motiver` → naviger til `Flash Galleri` frame.
- CTA hover: skaler 1.03, shadow subtle.

---

### 6. Flash‑galleri — Figma wireframe
**Frame:** Desktop 1440 × 1024

**Layout**
- Topp: Tittel + undertekst.
- Filterbar (sticky top under header): søkfelt + chips + sort dropdown.
- Grid: 3 kolonner, gap 24px, padding 48px.
- MotivCard: thumbnail 360×360, under tittel + tags + tatovør.
- Pagination / infinite scroll: lazy load.

**MotivCard detaljer**
- Hover overlay: gradient (transparent → svart 40%), vis `stil`, `tatovør`, `est. pris`.
- Actions vises på hover: `Prøv på kroppen`, `Book`, `♥`.

**Empty state**
- Illustrasjon + tekst: `Ingen motiver matcher filtrene dine.` + `Nullstill filtre` knapp.

**Prototype**
- Klikk motiv → åpne `Motivdetaljer` side (push transition).

---

### 7. Motivdetaljer — Figma wireframe
**Frame:** Desktop 1440 × 1024 (to‑kolonne layout)

**Venstre kolonne (60%)**
- Stor motivbilde (maks bredde 820px), zoom on hover (2x), lightbox.

**Høyre kolonne (40%)**
- **Tittel** (H2)  
- **Tags** (chips)  
- **Tatovørkort**: bilde 56px, navn, stil, link til profil  
- **Størrelse selector**: S / M / L / XL (knappvarianter)  
- **Prisestimat**: dynamisk tekst (oppdateres ved størrelsevalg)  
- **Handlinger**: primær `Prøv på kroppen` (Accent), sekundær `Book time med dette motivet` (outline), `Lagre ♥` (ikon)  
- **Beskrivelse**: 2–3 avsnitt (symbolikk, teknikk)  
- **Tekniske detaljer**: linjetykkelse, anbefalt plassering, tid estimat  
- **Lignende motiver**: horisontal karusell med MotivCard (compact)

**Mobil**
- Motivbilde øverst, info under, sticky action bar nederst med `Prøv` og `Book`.

**Prototype**
- `Prøv på kroppen` → åpne `Visualizer` modal (overlay).
- `Book` → start booking stepper (slide left).

---

### 8. Assets og bilder
**Assets page:** legg inn følgende filer (navn og formater)
- `logo_primary.svg`  
- `tattoo_thumbnail_placeholder.png` (1:1)  
- `tattoo_large_placeholder.jpg` (16:9)  
- `tattoo_artist_aya.jpg` (profilbilde)  
- `stencil_icon.svg`, `ar_icon.svg`, `calendar_icon.svg`

**Eksportinnstillinger**
- Ikoner: SVG (1x)  
- Thumbnails: PNG 2x for retina (eksport 720×720 for 360×360 visning)  
- Hero‑illustrasjon: JPG 2x

---

### 9. Prototype‑interaksjoner (høyprioritet)
Lag følgende flows i `02 Prototypes`:
1. **Onboarding → Flash Galleri**: hero CTA → galleri.
2. **Galleri → Motivdetaljer**: kort klikker → push transition.
3. **Motivdetaljer → Visualizer**: `Prøv på kroppen` åpner modal med Canvas.
4. **Visualizer → Book**: `Send mockup til tatovør` → åpner booking stepper med motiv forhåndsvalgt.
5. **Booking flow**: stegvis progress bar, success toast, legg til i kalender.

Bruk `Smart Animate` for overganger (scale + opacity) og `Push` for sidebytter.

---

### 10. Leveranser (hva du får i Figma‑filen)
- `Design System` med farge‑ og typografistiler + komponentbibliotek.  
- `Wireframes` for Desktop / Tablet / Mobil: Start, Flash Galleri, Motivdetaljer, Visualizer modal, Booking steg.  
- `Prototype` med 5 interaksjoner (se over).  
- `Assets` side med alle ikoner og bilder klar for eksport.  
- Ferdig tekstkopi for hero, kategorier og motivdetaljer (kopierbar).

---

### 11. Implementasjonsnotater for design‑håndoff
- **Naming convention:** `Component / MotivCard / Variant`  
- **Auto‑layout:** bruk auto‑layout for alle kort og knapper.  
- **Constraints:** sett images til `Scale` med `Center` for responsive.  
- **Tokens:** opprett Figma tokens for farger og spacing (gjør senere eksport til CSS‑variabler enklere).  
- **Handoff:** aktiver Inspect‑panel, legg inn målinger og eksportformater. Legg til korte dev‑notes i komponentene (props: size, style, actions).

---

### Neste steg (jeg starter på React‑komponenter nå)
Jeg går videre og lager **React/Next.js‑komponenter** for de samme skjermene i neste melding:  
- `Header`, `Hero`, `QuickActions`, `FilterBar`, `MotivCard`, `MotivDetail`, `VisualizerCanvas`, `BookingStepper`.  
Komponentene leveres som **JSX + CSS Modules / Tailwind‑vennlig klasser**, med props‑definisjoner og eksempelkall til API‑endepunkter.

Jeg begynner på React‑komponentene i neste svar. Hvis du vil at jeg først eksporterer Figma‑komponentlisten som en tabell eller vil ha konkrete Figma‑mål (padding, font‑sizes i px) for hver komponent før jeg starter React‑koden, sier jeg det med en gang i neste melding.
