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
    {
      text: "Co je to HTML sémantika a proč je důležitá pro přístupnost a SEO?",
      options: [
        "Jazyk pro stylování, který řídí vizuální vzhled stránky.",
        "Sémantika je používání tagů, které popisují význam obsahu, což pomáhá vyhledávačům i asistenčním technologiím.",
        "Je to metoda pro vytváření dynamického obsahu.",
        "Způsob, jak zajistit, že HTML kód je validní.",
      ],
      correct: 1,
      explanation:
        "HTML sémantika, jako jsou tagy `<header>`, `<article>` nebo `<nav>`, dává obsahu význam a strukturu, což usnadňuje porozumění pro prohlížeče, vyhledávače a asistenční technologie (např. čtečky obrazovky).",
    },
    {
      text: "Jak zajistíte, že je webová stránka responzivní pouze pomocí CSS?",
      options: [
        "Použitím atributů `width` a `height` v HTML.",
        "Použitím JavaScriptu k detekci velikosti obrazovky.",
        "Pomocí CSS Media Queries a flexboxu/gridu, které mění styly na základě velikosti okna.",
        "Použitím absolutního pozicování pro všechny prvky.",
      ],
      correct: 2,
      explanation:
        "Media Queries umožňují aplikovat různé styly v závislosti na vlastnostech zařízení, jako je šířka obrazovky. Flexbox a Grid jsou pak klíčové pro vytváření flexibilních rozložení.",
    },
    {
      text: "Co udělá `===` v JavaScriptu a jaký je rozdíl oproti `==`?",
      options: [
        "Oba operátory porovnávají hodnotu i typ, ale `==` je zastaralý.",
        "`===` porovnává hodnoty i datové typy bez konverze, zatímco `==` provádí volnou konverzi typů.",
        "Oba operátory se používají k přiřazení proměnné.",
        "`===` se používá jen pro čísla, `==` pro řetězce.",
      ],
      correct: 1,
      explanation:
        "`===` je přísné porovnání, které kontroluje, zda se hodnoty i jejich datové typy shodují. `==` je volné porovnání, které se pokusí převést datové typy, což může vést k nečekaným výsledkům.",
    },
    {
      text: "Vysvětlete koncept event loopu v JavaScriptu.",
      options: [
        "Je to cyklus pro provádění synchronního kódu.",
        "Je to mechanismus, který zajišťuje, že se asynchronní kód (např. `setTimeout`) provádí bez blokování hlavního vlákna.",
        "Je to speciální typ datové struktury pro ukládání událostí.",
        "Jedná se o cyklus pro zpracování HTTP požadavků.",
      ],
      correct: 1,
      explanation:
        "Event loop je klíčový pro asynchronní chování JavaScriptu. Umožňuje spouštění úloh na pozadí a jejich následné přesunutí do call stacku, jakmile jsou dokončeny, čímž se zabrání zablokování uživatelského rozhraní.",
    },
    {
      text: "Jaký je rozdíl mezi `var`, `let` a `const`?",
      options: [
        "`var` je pro čísla, `let` pro řetězce, `const` pro objekty.",
        "`var` má globální/funkční rozsah a je hoistovaný; `let` a `const` mají blokový rozsah. `const` navíc nelze znovu přiřadit.",
        "`let` je starší než `var` a `const`.",
        "Všechny tři jsou identické, pouze je to jiný zápis.",
      ],
      correct: 1,
      explanation:
        "`var` má širší rozsah a historicky se používá méně. `let` a `const` jsou moderní a bezpečnější pro deklaraci proměnných, protože omezují jejich platnost na konkrétní blok kódu.",
    },
    {
      text: "K čemu slouží `Array.prototype.map()`?",
      options: [
        "Pro nalezení prvního prvku v poli, který splňuje podmínku.",
        "K vytvoření nového pole transformací každého prvku původního pole.",
        "K odstranění prvků z pole.",
        "K seřazení prvků v poli.",
      ],
      correct: 1,
      explanation:
        "`map()` je ideální pro transformaci dat. Prochází každý prvek v poli, provede nad ním operaci a vrátí zcela nové pole s výsledky.",
    },
    {
      text: "Vysvětlete, co jsou to promises a jaký je jejich vztah k `async/await`.",
      options: [
        "Promises jsou starší než `async/await`, proto se už nepoužívají.",
        "Promises jsou objekty, které reprezentují budoucí výsledek asynchronní operace. `async/await` je syntaktický 'cukr' nad promises, který usnadňuje čtení kódu.",
        "Promises jsou pouze pro front-end, `async/await` jen pro back-end.",
        "Jsou to dva zcela odlišné koncepty.",
      ],
      correct: 1,
      explanation:
        "Promises umožňují psát asynchronní kód s použitím řetězení `.then()` a `.catch()`. `async/await` je moderní a čitelnější alternativa, která pracuje s promises na pozadí.",
    },
    {
      text: "Jaký je rozdíl mezi Props a State v Reactu?",
      options: [
        "Props jsou pro funkci, state pro třídy.",
        "Props jsou data předávaná z rodičovské komponenty a jsou neměnná. State jsou data spravovaná a měněná v rámci samotné komponenty.",
        "Props jsou proměnné, state jsou konstanty.",
        "Jsou to synonyma.",
      ],
      correct: 1,
      explanation:
        "Props (zkratka pro properties) slouží k předávání dat z rodiče do dětí a jsou immutabilní. State je interní stav komponenty, který může být měněn pomocí funkcí jako `useState`.",
    },
    {
      text: "Vysvětlete účel `useEffect` hooku v Reactu.",
      options: [
        "Umožňuje měnit stav komponenty.",
        "Používá se k vytvoření reaktivních proměnných.",
        "Používá se k provádění vedlejších efektů (side effects), jako je načítání dat, manipulace s DOM nebo přihlášení k odběru událostí.",
        "Jeho jedinou funkcí je ukládat data.",
      ],
      correct: 2,
      explanation:
        "`useEffect` se používá k provádění operací, které nepatří do hlavního vykreslovacího cyklu komponenty. Například se používá pro API volání, manipulaci s DOM nebo nastavení timerů.",
    },
    {
      text: "Co je to Virtual DOM a proč ho React používá?",
      options: [
        "Je to kopie reálného DOMu, která je uložena v databázi.",
        "Je to optimalizační technika, která pomáhá zpomalit renderování.",
        "Je to odlehčená, dočasná kopie skutečného DOMu, kterou React používá k efektivnímu porovnávání změn a aktualizaci pouze těch částí, které se změnily.",
        "Je to způsob, jak psát komponenty v JavaScriptu.",
      ],
      correct: 2,
      explanation:
        "Virtuální DOM umožňuje Reactu minimalizovat přímé interakce s reálným DOMem, které jsou pomalé. Místo toho se změny nejprve provádí ve Virtual DOMu a poté se vypočítá nejefektivnější způsob, jak aktualizovat skutečný DOM.",
    },
    {
      text: "Jaké jsou hlavní výhody Next.js oproti čistému Reactu?",
      options: [
        "Next.js je jednodušší na nastavení.",
        "Hlavní výhody jsou Server-Side Rendering (SSR), generování statických stránek (SSG) a optimalizované routování, což zlepšuje výkon a SEO.",
        "Next.js má více komponent.",
        "Největší výhodou je, že nevyžaduje instalaci.",
      ],
      correct: 1,
      explanation:
        "Next.js přináší řadu funkcí, které řeší běžné problémy čistého Reactu, jako je SEO (díky SSR) a lepší výkon (díky serverovému renderování a optimalizacím pro produkci).",
    },
    {
      text: "Vysvětlete koncept dynamických rout v Next.js a jak se implementují.",
      options: [
        "Jsou to routy, které se dynamicky mění na základě uživatele.",
        "Dynamické routy umožňují vytvářet cesty s proměnnými parametry (např. `/products/[id]`), které se dynamicky načítají na základě URL.",
        "Jsou to routy, které se mění, když je aplikace offline.",
        "Implementují se pouze s použitím React Context API.",
      ],
      correct: 1,
      explanation:
        "Dynamické routy se v Next.js implementují vytvořením složky s hranatými závorkami (např. `pages/blog/[slug].js`). To umožňuje získat parametry z URL pro vykreslení obsahu.",
    },
    {
      text: "Co je to Node.js a k čemu slouží?",
      options: [
        "Jedná se o JavaScript framework pro tvorbu uživatelského rozhraní.",
        "Je to runtime prostředí, které umožňuje spouštět JavaScript na serveru mimo prohlížeč.",
        "Je to databáze pro ukládání dat.",
        "Jde o nástroj pro kompilaci JavaScriptu.",
      ],
      correct: 1,
      explanation:
        "Node.js, postavený na enginu V8, umožňuje vývoj na straně serveru (backend), psaní skriptů a vytváření aplikací, které pracují s velkým množstvím souběžných I/O operací díky své neblokující architektuře.",
    },
    {
      text: "Vysvětlete, co je to API, a jak se liší GET a POST požadavek v REST API.",
      options: [
        "API je databáze, GET je čtení dat a POST je mazání dat.",
        "API je rozhraní pro komunikaci mezi aplikacemi. GET získává data ze serveru (idempotentní) a POST odesílá nová data na server (neidempotentní).",
        "API je programovací jazyk.",
        "GET je pro odesílání dat, POST pro jejich získání.",
      ],
      correct: 1,
      explanation:
        "API (Application Programming Interface) je sada pravidel pro interakci mezi aplikacemi. GET se používá pro čtení dat a nezpůsobuje žádné vedlejší efekty na serveru. POST se používá k vytvoření nového zdroje, což má vedlejší efekty a není idempotentní.",
    },
    {
      text: "Vysvětlete rozdíl mezi relační (MySQL) a non-relační databází.",
      options: [
        "Relační databáze ukládají data v dokumentech, non-relační v tabulkách.",
        "Relační databáze (MySQL) ukládají data v tabulkách s předdefinovanými vztahy a schématem, non-relační databáze ukládají data v různých formátech (dokumenty, grafy, atd.) bez pevného schématu.",
        "Relační databáze jsou vždy pomalejší než non-relační.",
        "Non-relační databáze se nehodí pro webové aplikace.",
      ],
      correct: 1,
      explanation:
        "Relační databáze jsou vhodné pro strukturovaná data s jasnými vazbami. Non-relační databáze nabízejí větší flexibilitu a horizontální škálovatelnost, což se hodí pro nestrukturovaná data a rychlý vývoj.",
    },
    {
      text: "Jaké jsou základní operace pro práci s databází v SQL?",
      options: [
        "CREATE, READ, UPDATE, DELETE",
        "INSERT, DELETE, UPDATE, CREATE",
        "SELECT, INSERT, UPDATE, DELETE",
        "ADD, REMOVE, CHANGE, VIEW",
      ],
      correct: 2,
      explanation:
        "Základní operace s daty se shrnují pod akronymem CRUD (Create, Read, Update, Delete) a v SQL jim odpovídají příkazy `INSERT`, `SELECT`, `UPDATE` a `DELETE`.",
    },
    {
      text: "Co je to DOM v JavaScriptu?",
      options: [
        "Je to databáze pro ukládání dat.",
        "Je to objektový model dokumentu, který reprezentuje HTML stránku jako strom.",
        "Je to speciální funkce pro práci s proměnnými.",
        "Je to metoda pro přidávání stylů do CSS.",
      ],
      correct: 1,
      explanation:
        "DOM (Document Object Model) umožňuje JavaScriptu přistupovat k prvkům HTML a manipulovat s nimi.",
    },
    {
      text: "K čemu slouží atribut `alt` u obrázků v HTML?",
      options: [
        "Definuje velikost obrázku.",
        "Popisuje obsah obrázku pro čtečky obrazovky a při selhání načtení.",
        "Slouží k přidání odkazu na jiný obrázek.",
        "Používá se pro animace.",
      ],
      correct: 1,
      explanation:
        "Atribut `alt` zlepšuje přístupnost webu a pomáhá SEO, protože poskytuje textovou alternativu k obrázkům.",
    },
    {
      text: "Co znamená zkratka CSS?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Central Styling System",
        "Colorful Styling Sheets",
      ],
      correct: 1,
      explanation:
        "CSS znamená Cascading Style Sheets a slouží k popisu vzhledu HTML prvků.",
    },
    {
      text: "Jaký je výchozí zobrazovací mód prvku `<div>`?",
      options: ["inline", "block", "inline-block", "flex"],
      correct: 1,
      explanation: "`<div>` je blokový prvek, proto zabírá celou šířku řádku.",
    },
    {
      text: "K čemu slouží metoda `querySelector()` v JavaScriptu?",
      options: [
        "Vrátí první element, který odpovídá zadanému CSS selektoru.",
        "Vytvoří nový HTML prvek.",
        "Spustí funkci při kliknutí.",
        "Vybere všechny prvky v dokumentu.",
      ],
      correct: 0,
      explanation:
        "`document.querySelector()` vrací první nalezený element podle CSS selektoru.",
    },
    {
      text: "Jak vytvoříte komentář v JavaScriptu?",
      options: [
        "`<!-- komentář -->`",
        "`/* komentář */` nebo `// komentář`",
        "`# komentář`",
        "`** komentář **`",
      ],
      correct: 1,
      explanation:
        "Jednořádkový komentář se zapisuje `//`, víceřádkový `/* ... */`.",
    },
    {
      text: "K čemu slouží funkce `console.log()`?",
      options: [
        "Ukládá data do databáze.",
        "Vypisuje zprávy a hodnoty do konzole pro ladění.",
        "Spouští JavaScriptový soubor.",
        "Vypisuje HTML na stránku.",
      ],
      correct: 1,
      explanation:
        "`console.log()` je nejčastější nástroj pro ladění v JavaScriptu.",
    },
    {
      text: "Co je to JSX v Reactu?",
      options: [
        "Speciální CSS pro React.",
        "Rozšíření syntaxe JavaScriptu, které umožňuje psát HTML přímo v JS.",
        "Formát JSON pro ukládání dat.",
        "Nový typ proměnné.",
      ],
      correct: 1,
      explanation:
        "JSX umožňuje psát HTML podobnou syntaxi přímo uvnitř JavaScriptu, což React překládá do `React.createElement` volání.",
    },
    {
      text: "K čemu slouží hook `useState` v Reactu?",
      options: [
        "Na správu stylů.",
        "Na správu interního stavu komponenty.",
        "Na vytvoření efektů.",
        "Na přístup k DOMu.",
      ],
      correct: 1,
      explanation:
        "`useState` umožňuje komponentám ukládat a měnit interní stav.",
    },
    {
      text: "Jak se v Reactu vykresluje seznam prvků?",
      options: [
        "Pomocí cyklu `for` přímo v JSX.",
        "Pomocí metody `.map()` pro vytvoření pole JSX prvků.",
        "Pouze pomocí `while` smyčky.",
        "React neumí vykreslovat seznamy.",
      ],
      correct: 1,
      explanation:
        "Pro vykreslování seznamů se typicky používá `.map()`, kde každý prvek dostane i unikátní `key` prop.",
    },
    {
      text: "Jaký je účel složky `pages` v Next.js?",
      options: [
        "Obsahuje databázová schémata.",
        "Každý soubor zde automaticky definuje routu aplikace.",
        "Používá se jen pro CSS.",
        "Je určena pouze pro obrázky.",
      ],
      correct: 1,
      explanation:
        "V Next.js routování funguje na základě struktury složky `pages` – každý soubor = jedna stránka.",
    },
    {
      text: "Co dělá příkaz `npm install`?",
      options: [
        "Spustí server.",
        "Instaluje závislosti definované v `package.json`.",
        "Odebere balíčky.",
        "Spustí build aplikace.",
      ],
      correct: 1,
      explanation:
        "`npm install` stáhne a nainstaluje všechny balíčky potřebné pro projekt.",
    },
    {
      text: "K čemu se používá modul `http` v Node.js?",
      options: [
        "Na stylování HTML.",
        "Na práci s databázemi.",
        "Na vytváření webových serverů.",
        "Na validaci JSON souborů.",
      ],
      correct: 2,
      explanation:
        "Modul `http` umožňuje vytvářet jednoduché webové servery přímo v Node.js.",
    },
    {
      text: "Jaký je výchozí port pro běh Node.js serveru?",
      options: ["21", "80", "3000", "443"],
      correct: 2,
      explanation:
        "Nepsané pravidlo je používat port `3000` pro lokální Node.js servery (HTTP je standardně 80).",
    },
    {
      text: "Jaký je rozdíl mezi `id` a `class` v HTML?",
      options: [
        "`id` může být použito vícekrát, `class` jen jednou.",
        "`id` je unikátní identifikátor prvku, `class` lze použít pro skupiny prvků.",
        "Obě jsou identické.",
        "`class` je jen pro JavaScript, `id` jen pro CSS.",
      ],
      correct: 1,
      explanation:
        "`id` by měl být unikátní na stránce, zatímco `class` se používá pro označení více prvků se stejným stylem nebo chováním.",
    },
    {
      text: "K čemu slouží HTML tag `<a>`?",
      options: [
        "K vytvoření odstavce.",
        "K přidání obrázku.",
        "K vytvoření odkazu na jinou stránku nebo část dokumentu.",
        "K definování tabulky.",
      ],
      correct: 2,
      explanation:
        "`<a>` (anchor) se používá k vytváření odkazů, typicky pomocí atributu `href`.",
    },
    {
      text: "Jak vložíte externí CSS soubor do HTML?",
      options: [
        "Pomocí tagu `<css>`.",
        "Pomocí atributu `style` u `<body>`.",
        "Pomocí tagu `<link>` v `<head>`.",
        "Pomocí tagu `<style>`.",
      ],
      correct: 2,
      explanation:
        'Externí CSS soubor se připojuje pomocí `<link rel="stylesheet" href="soubor.css">`.',
    },
    {
      text: "Jaký je rozdíl mezi inline a block prvky?",
      options: [
        "Inline prvky vždy zabírají celou šířku řádku, block jen část.",
        "Block prvky začínají na novém řádku a zabírají celou šířku, inline prvky jsou v rámci textu.",
        "Block prvky nelze stylovat, inline ano.",
        "Inline prvky jsou jen v CSS, block prvky v HTML.",
      ],
      correct: 1,
      explanation:
        "Block prvky (např. `<div>`) zabírají celý řádek, inline (např. `<span>`) se řadí vedle textu.",
    },
    {
      text: "K čemu slouží CSS vlastnost `position: absolute;`?",
      options: [
        "Umístí prvek relativně k rodiči s `position: relative`.",
        "Zamkne prvek na místě při scrollování.",
        "Skryje prvek.",
        "Přemění prvek na flexbox.",
      ],
      correct: 0,
      explanation:
        "Absolutní pozicování určuje polohu prvku relativně k nejbližšímu rodiči s nastaveným `position`.",
    },
    {
      text: "Jaký je rozdíl mezi `==` a `===` v JavaScriptu?",
      options: [
        "`==` porovnává jen hodnotu, `===` hodnotu i typ.",
        "`==` porovnává jen čísla, `===` jen řetězce.",
        "`==` je pro funkce, `===` pro objekty.",
        "Oba jsou identické.",
      ],
      correct: 0,
      explanation:
        "`==` provádí volnou konverzi typů, zatímco `===` vyžaduje shodu hodnoty i typu.",
    },
    {
      text: "K čemu slouží `JSON.stringify()`?",
      options: [
        "K převedení JSON do objektu.",
        "K převedení objektu do JSON řetězce.",
        "K vymazání JSON.",
        "K validaci JSON.",
      ],
      correct: 1,
      explanation:
        "`JSON.stringify()` převádí JavaScriptový objekt na textový JSON řetězec.",
    },
    {
      text: "K čemu slouží `fetch()` API?",
      options: [
        "Na stylování HTML.",
        "Na práci s databází.",
        "Na posílání HTTP požadavků (např. GET, POST).",
        "Na spouštění animací.",
      ],
      correct: 2,
      explanation:
        "`fetch()` umožňuje posílat asynchronní požadavky na server a pracovat s odpověďmi.",
    },
    {
      text: "Co je to `package.json` v Node.js projektu?",
      options: [
        "Soubor s CSS styly.",
        "Soubor, který definuje závislosti a nastavení projektu.",
        "Soubor pro ukládání databáze.",
        "Soubor s HTML šablonami.",
      ],
      correct: 1,
      explanation:
        "`package.json` obsahuje metadata projektu a seznam jeho závislostí.",
    },
    {
      text: "Jaký je účel `node_modules` složky?",
      options: [
        "Ukládá nainstalované balíčky a knihovny.",
        "Obsahuje všechny HTML soubory projektu.",
        "Slouží pro testování.",
        "Je určena pouze pro CSS.",
      ],
      correct: 0,
      explanation:
        "Složka `node_modules` obsahuje všechny balíčky nainstalované pomocí npm/yarn.",
    },
    {
      text: "Co je middleware v Node.js (např. v Express)?",
      options: [
        "Funkce, která zachytává a zpracovává požadavky mezi klientem a serverem.",
        "Speciální databáze.",
        "HTML šablona.",
        "CSS knihovna.",
      ],
      correct: 0,
      explanation:
        "Middleware je funkce, která může manipulovat s requestem a response před odesláním odpovědi.",
    },
    {
      text: "Jak spustíte Node.js soubor `app.js`?",
      options: [
        "`run app.js`",
        "`node app.js`",
        "`npm start app.js`",
        "`js app.js`",
      ],
      correct: 1,
      explanation: "Node.js soubor spustíte příkazem `node app.js`.",
    },
    {
      text: "K čemu slouží `props` v Reactu?",
      options: [
        "K uchování stavu komponenty.",
        "K předávání dat z rodičovské komponenty do dětské.",
        "K přidávání CSS tříd.",
        "K ukládání proměnných do localStorage.",
      ],
      correct: 1,
      explanation:
        "Props slouží k předávání dat a vlastností mezi komponentami v Reactu.",
    },
    {
      text: "K čemu slouží `key` prop při vykreslování seznamů v Reactu?",
      options: [
        "Je to CSS třída pro seznam.",
        "Slouží pro správné sledování změn prvků v seznamu.",
        "Je to název pole.",
        "Slouží k vytvoření odkazů.",
      ],
      correct: 1,
      explanation:
        "Unikátní `key` pomáhá Reactu efektivně identifikovat a aktualizovat prvky v seznamu.",
    },
    {
      text: "Jak vytvoříte nový projekt v Next.js?",
      options: [
        "`npx create-next-app@latest`",
        "`npm install next`",
        "`next new project`",
        "`yarn start next`",
      ],
      correct: 0,
      explanation:
        "Nový projekt se vytváří pomocí příkazu `npx create-next-app@latest`.",
    },
    {
      text: "Co dělá příkaz `npm run dev` v Next.js?",
      options: [
        "Spustí produkční build.",
        "Spustí vývojový server s hot-reloadingem.",
        "Odinstaluje balíčky.",
        "Zkompiluje CSS.",
      ],
      correct: 1,
      explanation:
        "`npm run dev` spustí vývojový server, typicky na http://localhost:3000.",
    },
    {
      text: "K čemu slouží CSS vlastnost `z-index`?",
      options: [
        "Určuje velikost textu.",
        "Určuje pořadí překrývání prvků.",
        "Určuje rychlost animace.",
        "Určuje průhlednost prvku.",
      ],
      correct: 1,
      explanation:
        "`z-index` nastavuje pořadí překrývání prvků – vyšší hodnota = prvek bude navrchu.",
    },
    {
      text: "Jaký je rozdíl mezi `inline` CSS a externím CSS?",
      options: [
        "Inline CSS je napsané přímo v atributu prvku, externí je v samostatném souboru.",
        "Inline CSS je rychlejší, externí je pomalejší.",
        "Externí CSS funguje jen v Reactu.",
        "Inline CSS funguje jen v Node.js.",
      ],
      correct: 0,
      explanation:
        "Inline CSS je napsané přímo v HTML, externí se načítá pomocí `<link>` souboru.",
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
