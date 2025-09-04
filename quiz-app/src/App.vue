<script setup>
import QuizCard from "./components/QuizCard.vue";
import { ref } from "vue";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const questions = ref(
  shuffle([
    // === HTML & CSS ===
    {
      id: 1,
      text: "Co je to HTML sémantika a proč je důležitá pro přístupnost a SEO?",
      options: [
        "Jazyk pro stylování, který řídí vizuální vzhled stránky.",
        "Sémantika je používání tagů, které popisují význam obsahu, což pomáhá vyhledávačům i asistenčním technologiím.",
        "Je to metoda pro vytváření dynamického obsahu.",
        "Způsob, jak zajistit, že HTML kód je validní.",
      ],
      correct: 1,
      explanation:
        "HTML sémantika, jako jsou tagy <header>, <article> nebo <nav>, dává obsahu význam a strukturu.",
    },
    {
      id: 2,
      text: "Jak zajistíte, že je webová stránka responzivní pouze pomocí CSS?",
      options: [
        "Použitím atributů width a height v HTML.",
        "Použitím JavaScriptu k detekci velikosti obrazovky.",
        "Pomocí CSS Media Queries a flexboxu/gridu, které mění styly na základě velikosti okna.",
        "Použitím absolutního pozicování pro všechny prvky.",
      ],
      correct: 2,
      explanation:
        "Media Queries + Flexbox/Grid = základ responzivity bez JavaScriptu.",
    },
    {
      id: 3,
      text: "K čemu slouží atribut alt u obrázků?",
      options: [
        "Definuje velikost obrázku.",
        "Popisuje obsah obrázku pro čtečky obrazovky a SEO.",
        "Slouží k přidání odkazu na jiný obrázek.",
        "Používá se pro animace.",
      ],
      correct: 1,
      explanation:
        "Atribut alt je klíčový pro přístupnost a SEO – popisuje obrázek textově.",
    },
    {
      id: 4,
      text: "Jaký je výchozí display mód elementu <div>?",
      options: ["inline", "block", "flex", "inline-block"],
      correct: 1,
      explanation: "<div> je block-level element, zabírá celou šířku řádku.",
    },
    {
      id: 5,
      text: "Jaký je rozdíl mezi inline a block prvky?",
      options: [
        "Inline zabírají šířku textu, block celou řádku.",
        "Block nelze stylovat.",
        "Inline jsou jen v CSS.",
        "Block je vždy širší než viewport.",
      ],
      correct: 0,
      explanation:
        "Inline prvky (span, a) se řadí v textu, block (div, section) začínají na novém řádku.",
    },

    // === JavaScript Core ===
    {
      id: 6,
      text: "Co udělá === v JavaScriptu oproti ==?",
      options: [
        "=== porovnává hodnotu i typ, == jen hodnotu s konverzí.",
        "=== je pro čísla, == pro řetězce.",
        "Oba jsou stejné.",
        "=== přiřazuje hodnotu.",
      ],
      correct: 0,
      explanation: "=== je strict equality, == provádí type coercion.",
    },
    {
      id: 7,
      text: "Co je to event loop v JavaScriptu?",
      options: [
        "Mechanismus pro asynchronní kód, který spravuje callback queue.",
        "Cyklus pro vykreslování DOM.",
        "Datová struktura pro ukládání událostí.",
        "Funkce pro HTTP požadavky.",
      ],
      correct: 0,
      explanation:
        "Event loop zajišťuje běh async kódu bez blokování hlavního vlákna.",
    },
    {
      id: 8,
      text: "Jaký je rozdíl mezi var, let a const?",
      options: [
        "var má funkční scope, let a const blokový. const nelze znovu přiřadit.",
        "var je moderní, let starší.",
        "Jsou stejné.",
        "const je jen pro čísla.",
      ],
      correct: 0,
      explanation: "Používej let a const. var je hoistovaný a má širší scope.",
    },
    {
      id: 9,
      text: "K čemu slouží Array.prototype.map()?",
      options: [
        "Pro nalezení prvku v poli.",
        "K vytvoření nového pole transformací každého prvku.",
        "K odstranění prvků.",
        "K seřazení pole.",
      ],
      correct: 1,
      explanation:
        "map() vrací nové pole – transformuje každý prvek původního pole.",
    },
    {
      id: 10,
      text: "Co je closure?",
      options: [
        "Funkce uvnitř funkce, která si pamatuje scope.",
        "Uzavřená CSS třída.",
        "DOM událost.",
        "Metoda pro ukončení proměnné.",
      ],
      correct: 0,
      explanation:
        "Closure umožňuje funkci přístup k proměnným z okolního lexical scope i po ukončení nadřazené funkce.",
    },
    {
      id: 11,
      text: "Co je to hoisting v JavaScriptu?",
      options: [
        "Přenesení deklarací proměnných/funkcí na začátek scope.",
        "Zrychlení kódu.",
        "Metoda fetchování dat.",
        "Vytváření proměnných v localStorage.",
      ],
      correct: 0,
      explanation:
        "Deklarace (ne přiřazení) proměnných a funkcí jsou přesunuty nahoru scope.",
    },
    {
      id: 12,
      text: "K čemu slouží JSON.stringify()?",
      options: [
        "Převede objekt na JSON string.",
        "Převede JSON string na objekt.",
        "Vymaže JSON.",
        "Validuje JSON.",
      ],
      correct: 0,
      explanation:
        "JSON.stringify() převádí objekt na text pro uložení/posílání.",
    },
    {
      id: 13,
      text: "Jak funguje async/await?",
      options: [
        "await zastaví async funkci, dokud se promise nevyřeší.",
        "async vrací synchronní hodnotu.",
        "await funguje jen na čísla.",
        "async je jen pro Node.js.",
      ],
      correct: 0,
      explanation: "async/await je syntactic sugar nad promises.",
    },

    // === React Basics ===
    {
      id: 14,
      text: "Jaký je rozdíl mezi Props a State?",
      options: [
        "Props jsou neměnná data z rodiče, State je interní a měnitelný stav komponenty.",
        "Props jsou konstanty, State proměnné.",
        "Oba jsou stejné.",
        "Props se používají jen v class komponentách.",
      ],
      correct: 0,
      explanation:
        "Props se předávají shora dolů, State si komponenta spravuje sama.",
    },
    {
      id: 15,
      text: "K čemu slouží hook useState?",
      options: [
        "K uchování a změně interního stavu komponenty.",
        "K práci s DOM.",
        "K definování CSS.",
        "K vykreslení seznamu.",
      ],
      correct: 0,
      explanation: "useState vrací hodnotu a setter pro správu stavu.",
    },
    {
      id: 16,
      text: "K čemu slouží hook useEffect?",
      options: [
        "K vykonávání side effects (fetch, DOM manipulace).",
        "K uchování stavu.",
        "K optimalizaci výkonu.",
        "K přidání CSS.",
      ],
      correct: 0,
      explanation: "useEffect = side effects po renderu komponenty.",
    },
    {
      id: 17,
      text: "Co je Virtual DOM?",
      options: [
        "Lehká kopie DOMu v paměti, která zrychluje diffování změn.",
        "Databáze.",
        "React router.",
        "JSON soubor.",
      ],
      correct: 0,
      explanation:
        "React drží Virtual DOM a efektivně synchronizuje změny se skutečným DOMem.",
    },
    {
      id: 19,
      text: "Co je controlled komponenta?",
      options: [
        "Komponenta, kde hodnotu vstupu spravuje React state.",
        "Komponenta řízená CSS.",
        "Komponenta se správou Node.js.",
        "Nelze změnit.",
      ],
      correct: 0,
      explanation:
        "Controlled = formulářový input, jehož hodnota je napojená na React state.",
    },
    {
      id: 20,
      text: "Co je prop drilling?",
      options: [
        "Předávání props přes mnoho vrstev komponent.",
        "Optimalizace výkonu.",
        "Testování komponent.",
        "Debugování hooků.",
      ],
      correct: 0,
      explanation:
        "Prop drilling = přetěžování aplikace props – řeší Context API.",
    },
    {
      id: 21,
      text: "K čemu slouží React.memo?",
      options: [
        "Zabrání zbytečnému přerenderování, pokud se props nezmění.",
        "Testování komponent.",
        "Správa Reduxu.",
        "Deklarace proměnné.",
      ],
      correct: 0,
      explanation: "React.memo je HOC pro optimalizaci funkčních komponent.",
    },
    {
      id: 22,
      text: "Jaký je rozdíl mezi useMemo a useCallback?",
      options: [
        "useMemo memoizuje hodnotu, useCallback memoizuje funkci.",
        "Oba jsou stejné.",
        "useCallback je pro state, useMemo pro props.",
        "useMemo je jen v Next.js.",
      ],
      correct: 0,
      explanation: "useMemo → hodnoty, useCallback → funkce.",
    },
    {
      id: 23,
      text: "Co je Context API?",
      options: [
        "Nástroj pro sdílení stavu napříč aplikací bez prop drillingu.",
        "Knihovna pro animace.",
        "Node.js modul.",
        "CSS preprocesor.",
      ],
      correct: 0,
      explanation: "Context API řeší sdílení globálního stavu.",
    },

    // === React Advanced ===
    {
      id: 24,
      text: "K čemu slouží useReducer?",
      options: [
        "Alternativa k useState pro komplexní logiku stavu.",
        "Pro animace.",
        "Pro fetchování dat.",
        "Pro styling.",
      ],
      correct: 0,
      explanation:
        "useReducer se hodí na složité state logiky s akcemi a reducery.",
    },
    {
      id: 25,
      text: "Co je lazy loading v Reactu?",
      options: [
        "Načítání komponenty jen když je potřeba.",
        "Načítání CSS.",
        "Načítání JSON.",
        "Redux hook.",
      ],
      correct: 0,
      explanation:
        "React.lazy a Suspense umožňují načítat komponenty asynchronně.",
    },
    {
      id: 26,
      text: "Co dělá hook useRef?",
      options: [
        "Drží mutable hodnotu, která přežívá mezi rendery.",
        "Ukládá Redux store.",
        "Vytváří Virtual DOM.",
        "Spouští side effect.",
      ],
      correct: 0,
      explanation:
        "useRef slouží pro reference na DOM prvky nebo uchování mutable hodnot.",
    },
    {
      id: 27,
      text: "Co je Higher-Order Component (HOC)?",
      options: [
        "Funkce, která přijímá komponentu a vrací novou komponentu.",
        "Redux reducer.",
        "Next.js route.",
        "Hook.",
      ],
      correct: 0,
      explanation: "HOC = pattern pro znovupoužitelnost logiky komponent.",
    },
    {
      id: 28,
      text: "Jak se v Reactu vykresluje seznam?",
      options: [
        "Pomocí .map() a přidání key prop.",
        "Pomocí for smyčky.",
        "React neumí seznamy.",
        "Pouze přes Redux.",
      ],
      correct: 0,
      explanation:
        "Seznamy se vykreslují metodou map() a je nutné přidat unikátní key.",
    },
    {
      id: 29,
      text: "Co je suspense v Reactu?",
      options: [
        "Mechanismus pro práci s lazy loadingem komponent a data fetchingem.",
        "Testovací knihovna.",
        "Hook.",
        "Redux middleware.",
      ],
      correct: 0,
      explanation:
        "React.Suspense obaluje komponenty a umožňuje fallback při načítání.",
    },
    {
      id: 30,
      text: "Jak funguje error boundary v Reactu?",
      options: [
        "Zachytí chyby ve stromu komponent a vykreslí fallback UI.",
        "Zastaví vykreslování aplikace.",
        "Loguje chyby do console.log.",
        "Používá useEffect.",
      ],
      correct: 0,
      explanation: "Error boundary je class komponenta s componentDidCatch.",
    },
    {
      id: 31,
      text: "K čemu slouží key prop?",
      options: [
        "Identifikace prvků v seznamu pro efektivní diffing.",
        "Styling komponent.",
        "Props drilling.",
        "Redux.",
      ],
      correct: 0,
      explanation: "Key musí být unikátní v seznamu prvků.",
    },

    // === Next.js & Node.js ===
    {
      id: 33,
      text: "Jak funguje routing v Next.js?",
      options: [
        "Každý soubor ve složce pages se stává routou.",
        "Musí se manuálně definovat.",
        "Používá Redux.",
        "Používá props drilling.",
      ],
      correct: 0,
      explanation: "File-system routing – každý soubor v pages = routa.",
    },
    {
      id: 34,
      text: "Co je to SSR v Next.js?",
      options: [
        "Server-Side Rendering – HTML se renderuje na serveru.",
        "Static Style Rendering.",
        "Server Storage Request.",
        "React state rendering.",
      ],
      correct: 0,
      explanation: "SSR zlepšuje SEO a TTFB – renderuje HTML na serveru.",
    },
    {
      id: 35,
      text: "Co je Node.js?",
      options: [
        "Runtime prostředí pro spuštění JavaScriptu na serveru.",
        "React framework.",
        "Databáze.",
        "CSS knihovna.",
      ],
      correct: 0,
      explanation: "Node.js umožňuje psát serverové aplikace v JavaScriptu.",
    },
    {
      id: 36,
      text: "Jak v Node.js importujete modul (CommonJS)?",
      options: [
        "require('modulename')",
        "import modulename",
        "use modulename",
        "include modulename",
      ],
      correct: 0,
      explanation: "CommonJS syntaxe = require().",
    },
    {
      id: 37,
      text: "Co dělá process.env?",
      options: [
        "Získává environment proměnné.",
        "Definuje CSS proměnné.",
        "Ukládá JSON.",
        "Nastavuje React props.",
      ],
      correct: 0,
      explanation: "process.env = přístup k environment proměnným.",
    },

    // === Git & Tooling ===
    {
      id: 38,
      text: "K čemu slouží git commit?",
      options: [
        "Uložení změn do historie repozitáře.",
        "Stažení projektu.",
        "Vytvoření nové větve.",
        "Smazání historie.",
      ],
      correct: 0,
      explanation: "Commit = snapshot projektu s popisem změn.",
    },
    {
      id: 39,
      text: "Jak vytvoříte novou větev v Gitu?",
      options: [
        "git checkout -b nazev",
        "git new nazev",
        "git push branch",
        "git branch create",
      ],
      correct: 0,
      explanation: "Nová větev = git checkout -b jmeno-vetve.",
    },

    // === Axios (jen 1 otázka) ===
    {
      id: 40,
      text: "Co je to Axios?",
      options: [
        "Knihovna pro HTTP požadavky, s interceptory a snadnou prací s JSON.",
        "React framework.",
        "Databázový engine.",
        "CSS preprocesor.",
      ],
      correct: 0,
      explanation:
        "Axios je knihovna nad XMLHttpRequest/fetch pro HTTP požadavky.",
    },

    // === Doplnění React + JS (41–80) ===
    {
      id: 41,
      text: "Co je to hydration v React/Next.js?",
      options: [
        "Proces, kdy klient převezme serverem renderované HTML a propojí ho s Reactem.",
        "Načítání JSON.",
        "Ukládání dat.",
        "Styling.",
      ],
      correct: 0,
      explanation: "Hydration propojí SSR HTML s Reactem na klientovi.",
    },
    {
      id: 42,
      text: "Co je Redux?",
      options: [
        "Knihovna pro správu globálního stavu v aplikaci.",
        "CSS knihovna.",
        "Node.js framework.",
        "React hook.",
      ],
      correct: 0,
      explanation: "Redux umožňuje spravovat globální stav a akce v aplikaci.",
    },
    {
      id: 43,
      text: "Jak přidáte událost onClick v Reactu?",
      options: [
        "<button onClick={handleClick}>",
        "<button onclick='handleClick'>",
        "<button on-click={handleClick}>",
        "<button click={handleClick}>",
      ],
      correct: 0,
      explanation: "React používá camelCase – onClick={...}.",
    },
    {
      id: 44,
      text: "K čemu slouží useContext?",
      options: [
        "Přístup k hodnotám Context API.",
        "Správa CSS.",
        "Redux wrapper.",
        "DOM manipulace.",
      ],
      correct: 0,
      explanation: "useContext čte hodnoty z Contextu.",
    },
    {
      id: 45,
      text: "Jaký je rozdíl mezi SPA a MPA?",
      options: [
        "SPA = jedna HTML stránka, MPA = více HTML souborů.",
        "SPA je rychlejší.",
        "MPA používá React.",
        "Žádný rozdíl.",
      ],
      correct: 0,
      explanation: "SPA (Single Page App) vs. MPA (Multi Page App).",
    },
    {
      id: 48,
      text: "K čemu slouží hook useTransition?",
      options: [
        "K označení stavu jako „low priority“ update.",
        "Pro styling.",
        "Pro JSON parse.",
        "Pro Git.",
      ],
      correct: 0,
      explanation:
        "useTransition je hook pro concurrent rendering a prioritizaci.",
    },

    {
      id: 52,
      text: "K čemu slouží hook useId?",
      options: [
        "Generuje stabilní unikátní ID pro přístupnost.",
        "Ukládá state.",
        "Nastavuje CSS.",
        "Generuje JSON.",
      ],
      correct: 0,
      explanation: "useId generuje stabilní ID pro HTML atributy (např. aria).",
    },
    {
      id: 53,
      text: "Co je StrictMode v Reactu?",
      options: [
        "Nástroj pro odhalení problémů v kódu během vývoje.",
        "CSS režim.",
        "Node.js režim.",
        "Redux store.",
      ],
      correct: 0,
      explanation: "<StrictMode> upozorňuje na deprecated patterns.",
    },
    {
      id: 54,
      text: "Jaký je rozdíl mezi CSR, SSR a SSG?",
      options: [
        "CSR = render klient, SSR = server, SSG = build time.",
        "Vše je stejné.",
        "CSR = server, SSR = client, SSG = JSON.",
        "SSR funguje jen v Node.js.",
      ],
      correct: 0,
      explanation: "Client/Server/Static rendering – 3 přístupy v Next.js.",
    },
    {
      id: 55,
      text: "Co dělá next/image komponenta?",
      options: [
        "Optimalizuje obrázky (lazy loading, resizing).",
        "Ukládá obrázky do DB.",
        "Přidává CSS.",
        "Renderuje JSON.",
      ],
      correct: 0,
      explanation: "next/image zlepšuje výkon a SEO.",
    },
    {
      id: 56,
      text: "Jak spustíte Node.js soubor app.js?",
      options: [
        "node app.js",
        "npm run app.js",
        "git run app.js",
        "yarn build app.js",
      ],
      correct: 0,
      explanation: "Spuštění Node.js souboru: node app.js.",
    },
    {
      id: 57,
      text: "Co je middleware v Expressu?",
      options: [
        "Funkce, která zpracuje request a může volat next().",
        "Databázový dotaz.",
        "React hook.",
        "Git metoda.",
      ],
      correct: 0,
      explanation: "Middleware je funkce mezi requestem a response.",
    },
    {
      id: 58,
      text: "K čemu slouží package.json?",
      options: [
        "Definuje závislosti a konfiguraci projektu.",
        "Obsahuje HTML.",
        "Obsahuje Git historii.",
        "Obsahuje CSS.",
      ],
      correct: 0,
      explanation: "package.json = metadata projektu a seznam závislostí.",
    },
    {
      id: 59,
      text: "Jaký je rozdíl mezi git fetch a git pull?",
      options: [
        "fetch stáhne změny bez merge, pull stáhne a merge.",
        "Jsou stejné.",
        "fetch je jen v Node.js.",
        "pull je pro obrázky.",
      ],
      correct: 0,
      explanation: "git fetch = stáhne, git pull = stáhne + merge.",
    },
    {
      id: 60,
      text: "Jak funguje .gitignore?",
      options: [
        "Definuje soubory/složky ignorované v repozitáři.",
        "Zabraňuje commitu.",
        "Styluje CSS.",
        "Ukládá JSON.",
      ],
      correct: 0,
      explanation: ".gitignore ignoruje např. node_modules.",
    },
    {
      id: 61,
      text: "Co je to Node Package Manager (npm)?",
      options: [
        "Správce balíčků pro JavaScript.",
        "React hook.",
        "Databáze.",
        "Git metoda.",
      ],
      correct: 0,
      explanation: "npm je balíčkovací systém pro Node.js.",
    },
    {
      id: 62,
      text: "Jak spustíte dev server v Next.js?",
      options: ["npm run dev", "node server.js", "git start", "next build"],
      correct: 0,
      explanation: "npm run dev spustí vývojový server.",
    },
    {
      id: 64,
      text: "Jaký je rozdíl mezi export default a named export?",
      options: [
        "default = jeden na soubor, named = více exportů.",
        "Jsou stejné.",
        "default funguje jen v Reactu.",
        "named funguje jen v Node.js.",
      ],
      correct: 0,
      explanation: "Export default je jeden, named exporty mohou být více.",
    },
    {
      id: 65,
      text: "Co je ES6 modul?",
      options: [
        "Standard pro import/export v JavaScriptu.",
        "React hook.",
        "Node.js API.",
        "Git příkaz.",
      ],
      correct: 0,
      explanation: "ES6 moduly = import/export.",
    },
    {
      id: 66,
      text: "Co dělá Array.prototype.filter?",
      options: [
        "Vrací nové pole prvků, které splňují podmínku.",
        "Seřadí pole.",
        "Transformuje prvky.",
        "Smaže pole.",
      ],
      correct: 0,
      explanation: "filter vrací subset pole.",
    },

    {
      id: 68,
      text: "Co dělá spread operator (...) ?",
      options: [
        "Rozloží pole nebo objekt na jednotlivé prvky.",
        "Spojí pole.",
        "Načte JSON.",
        "Spustí Git.",
      ],
      correct: 0,
      explanation: "Spread (...) rozloží pole/objekt.",
    },
    {
      id: 69,
      text: "Co je destrukturalizace v JavaScriptu?",
      options: [
        "Rozbalení hodnot z objektu/pole do proměnných.",
        "Smazání objektu.",
        "Refaktorace kódu.",
        "Redux metoda.",
      ],
      correct: 0,
      explanation: "Destrukturalizace = let {x, y} = obj.",
    },
    {
      id: 70,
      text: "K čemu slouží try/catch?",
      options: [
        "Zachycení a ošetření chyb.",
        "Načítání CSS.",
        "Git metoda.",
        "Redux hook.",
      ],
      correct: 0,
      explanation: "try/catch slouží pro error handling.",
    },
    {
      id: 71,
      text: "Co je promise chaining?",
      options: [
        "Spojení více .then() na promise.",
        "Spojení JSON.",
        "CSS chaining.",
        "Redux chaining.",
      ],
      correct: 0,
      explanation: "Promise chaining = sekvenční zpracování async kroků.",
    },
    {
      id: 72,
      text: "Co dělá async keyword u funkce?",
      options: [
        "Funkce vždy vrací promise.",
        "Zrychlí funkci.",
        "Ukládá JSON.",
        "Styluje CSS.",
      ],
      correct: 0,
      explanation: "async funkce vždy vrací promise.",
    },
    {
      id: 73,
      text: "Co dělá await?",
      options: [
        "Pozastaví async funkci, dokud se promise nevyřeší.",
        "Spustí funkci rychleji.",
        "Ukládá data.",
        "Spouští CSS.",
      ],
      correct: 0,
      explanation: "await čeká na promise a vrátí hodnotu.",
    },
    {
      id: 74,
      text: "Co je modul v JavaScriptu?",
      options: [
        "Samostatný soubor s exporty/importy.",
        "Redux store.",
        "CSS modul.",
        "Git branch.",
      ],
      correct: 0,
      explanation: "Modul = oddělený kus kódu exportovaný/importovaný.",
    },
    {
      id: 75,
      text: "Co je npm install?",
      options: [
        "Nainstaluje závislosti z package.json.",
        "Spustí server.",
        "Uloží JSON.",
        "Styluje CSS.",
      ],
      correct: 0,
      explanation: "npm install stáhne balíčky projektu.",
    },
    {
      id: 76,
      text: "Co dělá npx create-next-app?",
      options: [
        "Vytvoří nový Next.js projekt.",
        "Spustí Git.",
        "Nainstaluje React router.",
        "Uloží JSON.",
      ],
      correct: 0,
      explanation: "npx create-next-app scaffolduje nový Next.js projekt.",
    },
    {
      id: 77,
      text: "Co je node_modules?",
      options: [
        "Složka s nainstalovanými závislostmi.",
        "CSS složka.",
        "Git složka.",
        "React složka.",
      ],
      correct: 0,
      explanation: "node_modules obsahuje všechny balíčky.",
    },
    {
      id: 78,
      text: "Co je hot reloading?",
      options: [
        "Automatické načtení změn kódu bez restartu serveru.",
        "Git metoda.",
        "Redux hook.",
        "CSS animace.",
      ],
      correct: 0,
      explanation: "Hot reloading zrychluje vývoj.",
    },
    {
      id: 80,
      text: "Co je hydration error v Next.js?",
      options: [
        "Rozdíl mezi serverem renderovaným HTML a klientským Reactem.",
        "Git chyba.",
        "Node.js error.",
        "Redux error.",
      ],
      correct: 0,
      explanation: "Hydration error = nesoulad mezi SSR a klientem.",
    },
  ])
);

const currentIndex = ref(0);
const score = ref(0);

const nextQuestion = () => {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++;
  }
};

const handleAnswer = (wasCorrect) => {
  if (wasCorrect) {
    score.value++;
  }
};
</script>

<template>
  <div class="container mt-5">
    <h1 class="mb-4">Frontend Dev Quiz</h1>
    <div class="mb-3">
      <span class="badge bg-info fs-5 p-2 me-2">
        Otázka {{ currentIndex + 1 }} / {{ questions.length }}
      </span>
      <span class="badge bg-success fs-5 p-2"> Skóre: {{ score }} </span>
    </div>
    <QuizCard :question="questions[currentIndex]" @answered="handleAnswer" />

    <button
      class="btn btn-primary mt-3"
      @click="nextQuestion"
      :disabled="currentIndex >= questions.length - 1"
    >
      Další otázka
    </button>
  </div>
</template>
