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
        "Použitím atributů width a height v HTML.",
        "Použitím JavaScriptu k detekci velikosti obrazovky.",
        "Pomocí CSS Media Queries a flexboxu/gridu, které mění styly na základě velikosti okna.",
        "Použitím absolutního pozicování pro všechny prvky.",
      ],
      correct: 2,
      explanation:
        "Media Queries umožňují aplikovat různé styly v závislosti na vlastnostech zařízení, jako je šířka obrazovky. Flexbox a Grid jsou pak klíčové pro vytváření flexibilních rozložení.",
    },
    {
      text: "Co udělá === v JavaScriptu a jaký je rozdíl oproti ==?",
      options: [
        "Oba operátory porovnávají hodnotu i typ, ale == je zastaralý.",
        "=== porovnává hodnoty i datové typy bez konverze, zatímco == provádí volnou konverzi typů.",
        "Oba operátory se používají k přiřazení proměnné.",
        "=== se používá jen pro čísla, == pro řetězce.",
      ],
      correct: 1,
      explanation:
        "=== je přísné porovnání, které kontroluje, zda se hodnoty i jejich datové typy shodují. == je volné porovnání, které se pokusí převést datové typy, což může vést k nečekaným výsledkům.",
    },
    {
      text: "Vysvětlete koncept event loopu v JavaScriptu.",
      options: [
        "Je to cyklus pro provádění synchronního kódu.",
        "Je to mechanismus, který zajišťuje, že se asynchronní kód (např. setTimeout) provádí bez blokování hlavního vlákna.",
        "Je to speciální typ datové struktury pro ukládání událostí.",
        "Jedná se o cyklus pro zpracování HTTP požadavků.",
      ],
      correct: 1,
      explanation:
        "Event loop je klíčový pro asynchronní chování JavaScriptu. Umožňuje spouštění úloh na pozadí a jejich následné přesunutí do call stacku, jakmile jsou dokončeny, čímž se zabrání zablokování uživatelského rozhraní.",
    },
    {
      text: "Jaký je rozdíl mezi var, let a const?",
      options: [
        "var je pro čísla, let pro řetězce, const pro objekty.",
        "var má globální/funkční rozsah a je hoistovaný; let a const mají blokový rozsah. const navíc nelze znovu přiřadit.",
        "let je starší než var a const.",
        "Všechny tři jsou identické, pouze je to jiný zápis.",
      ],
      correct: 1,
      explanation:
        "var má širší rozsah a historicky se používá méně. let a const jsou moderní a bezpečnější pro deklaraci proměnných, protože omezují jejich platnost na konkrétní blok kódu.",
    },
    {
      text: "K čemu slouží Array.prototype.map()?",
      options: [
        "Pro nalezení prvního prvku v poli, který splňuje podmínku.",
        "K vytvoření nového pole transformací každého prvku původního pole.",
        "K odstranění prvků z pole.",
        "K seřazení prvků v poli.",
      ],
      correct: 1,
      explanation:
        "map() je ideální pro transformaci dat. Prochází každý prvek v poli, provede nad ním operaci a vrátí zcela nové pole s výsledky.",
    },
    {
      text: "Vysvětlete, co jsou to promises a jaký je jejich vztah k async/await.",
      options: [
        "Promises jsou starší než async/await, proto se už nepoužívají.",
        "Promises jsou objekty, které reprezentují budoucí výsledek asynchronní operace. async/await je syntaktický 'cukr' nad promises, který usnadňuje čtení kódu.",
        "Promises jsou pouze pro front-end, async/await jen pro back-end.",
        "Jsou to dva zcela odlišné koncepty.",
      ],
      correct: 1,
      explanation:
        "Promises umožňují psát asynchronní kód s použitím řetězení .then() a .catch(). async/await je moderní a čitelnější alternativa, která pracuje s promises na pozadí.",
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
        "Props (zkratka pro properties) slouží k předávání dat z rodiče do dětí a jsou immutabilní. State je interní stav komponenty, který může být měněn pomocí funkcí jako useState.",
    },
    {
      text: "Vysvětlete účel useEffect hooku v Reactu.",
      options: [
        "Umožňuje měnit stav komponenty.",
        "Používá se k vytvoření reaktivních proměnných.",
        "Používá se k provádění vedlejších efektů (side effects), jako je načítání dat, manipulace s DOM nebo přihlášení k odběru událostí.",
        "Jeho jedinou funkcí je ukládat data.",
      ],
      correct: 2,
      explanation:
        "useEffect se používá k provádění operací, které nepatří do hlavního vykreslovacího cyklu komponenty. Například se používá pro API volání, manipulaci s DOM nebo nastavení timerů.",
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
        "Dynamické routy umožňují vytvářet cesty s proměnnými parametry (např. /products/[id]), které se dynamicky načítají na základě URL.",
        "Jsou to routy, které se mění, když je aplikace offline.",
        "Implementují se pouze s použitím React Context API.",
      ],
      correct: 1,
      explanation:
        "Dynamické routy se v Next.js implementují vytvořením složky s hranatými závorkami (např. pages/blog/[slug].js). To umožňuje získat parametry z URL pro vykreslení obsahu.",
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
        "Základní operace s daty se shrnují pod akronymem CRUD (Create, Read, Update, Delete) a v SQL jim odpovídají příkazy INSERT, SELECT, UPDATE a DELETE.",
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
      text: "K čemu slouží atribut alt u obrázků v HTML?",
      options: [
        "Definuje velikost obrázku.",
        "Popisuje obsah obrázku pro čtečky obrazovky a při selhání načtení.",
        "Slouží k přidání odkazu na jiný obrázek.",
        "Používá se pro animace.",
      ],
      correct: 1,
      explanation:
        "Atribut alt zlepšuje přístupnost webu a pomáhá SEO, protože poskytuje textovou alternativu k obrázkům.",
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
      text: "Jaký je výchozí zobrazovací mód prvku <div>?",
      options: ["inline", "block", "inline-block", "flex"],
      correct: 1,
      explanation: "<div> je blokový prvek, proto zabírá celou šířku řádku.",
    },
    {
      text: "K čemu slouží metoda querySelector() v JavaScriptu?",
      options: [
        "Vrátí první element, který odpovídá zadanému CSS selektoru.",
        "Vytvoří nový HTML prvek.",
        "Spustí funkci při kliknutí.",
        "Vybere všechny prvky v dokumentu.",
      ],
      correct: 0,
      explanation:
        "document.querySelector() vrací první nalezený element podle CSS selektoru.",
    },
    {
      text: "Co je to React Context API?",
      options: [
        "Nástroj pro stylování komponent.",
        "Mechanismus pro sdílení dat napříč komponentami bez props drillingu.",
        "Metoda pro volání API.",
        "Náhrada za useState.",
      ],
      correct: 1,
      explanation:
        "React Context API umožňuje sdílet stav a data napříč celou aplikací bez nutnosti předávat props skrz mnoho vrstev komponent.",
    },
    {
      text: "Kdy se používá `useMemo` hook?",
      options: [
        "Pro ukládání výsledku výpočtu, aby se zbytečně nepřepočítával při každém renderu.",
        "Pro přístup k DOM elementu.",
        "Pro nastavení CSS proměnných.",
        "Pro validaci formulářů.",
      ],
      correct: 0,
      explanation:
        "`useMemo` optimalizuje výkon uložením hodnoty výpočtu mezi renderováními, dokud se nezmění závislosti.",
    },
    {
      text: "K čemu slouží `useCallback`?",
      options: [
        "Vrací memoizovanou verzi callback funkce.",
        "Ukládá hodnotu stavu.",
        "Slouží jako alternativa k useEffect.",
        "Automaticky volá API.",
      ],
      correct: 0,
      explanation:
        "`useCallback` vrací memoizovanou funkci, což pomáhá optimalizovat výkon u komponent závislých na funkcích.",
    },
    {
      text: "Jaký je rozdíl mezi controlled a uncontrolled komponentami v Reactu?",
      options: [
        "Controlled komponenty řídí svůj stav pomocí React state, uncontrolled používají DOM.",
        "Uncontrolled komponenty mají více props.",
        "Controlled komponenty nelze použít s formuláři.",
        "Žádný rozdíl není.",
      ],
      correct: 0,
      explanation:
        "Controlled komponenty jsou plně řízeny stavem v Reactu (`useState`), uncontrolled používají nativní hodnoty DOM prvků (např. `ref`).",
    },
    {
      text: "Co je to React.Fragment?",
      options: [
        "Prázdný komponent, který umožňuje vracet více elementů bez wrapperu navíc v DOM.",
        "Speciální hook pro data.",
        "Náhrada divu s CSS.",
        "Metoda pro optimalizaci výkonu.",
      ],
      correct: 0,
      explanation:
        "React.Fragment umožňuje seskupit více elementů bez přidání extra uzlu do DOM.",
    },

    {
      text: "Co je event-driven architektura v Node.js?",
      options: [
        "Architektura založená na poslouchání a spouštění událostí.",
        "Architektura pro správu databází.",
        "Styl psaní CSS.",
        "Funkce pro vykreslování React komponent.",
      ],
      correct: 0,
      explanation:
        "Node.js používá event-driven architekturu, což znamená, že asynchronní úlohy jsou řízeny událostmi a callbacky.",
    },
    {
      text: "Jak v Node.js načíst externí modul?",
      options: [
        "import module from 'modulename'",
        "require('modulename')",
        "use('modulename')",
        "include('modulename')",
      ],
      correct: 1,
      explanation:
        "Starší syntaxe v Node.js je `require('modulename')`. Moderní Node.js umožňuje i ES Modules (`import`).",
    },
    {
      text: "Co dělá `process.env` v Node.js?",
      options: [
        "Ukládá nastavení CSS proměnných.",
        "Umožňuje přístup k environment proměnným systému.",
        "Spouští procesy na serveru.",
        "Vytváří nové databázové schéma.",
      ],
      correct: 1,
      explanation:
        "`process.env` poskytuje přístup k environment proměnným (např. API klíče, konfigurace).",
    },
    {
      text: "Jak ukončíte běžící Node.js proces?",
      options: ["`exit()`", "`stop`", "`process.exit()`", "`killNode()`"],
      correct: 2,
      explanation: "`process.exit()` okamžitě ukončí Node.js proces.",
    },
    {
      text: "K čemu slouží `npm init`?",
      options: [
        "Spustí server.",
        "Vytvoří nový `package.json` soubor pro projekt.",
        "Instaluje všechny moduly.",
        "Zastaví běžící aplikaci.",
      ],
      correct: 1,
      explanation:
        "`npm init` inicializuje nový Node.js projekt a vytvoří `package.json`.",
    },

    {
      text: "Co je Git commit?",
      options: [
        "Kopie celého projektu.",
        "Uložení aktuálních změn do historie repozitáře.",
        "Nahrání projektu na server.",
        "Vytvoření nové větve.",
      ],
      correct: 1,
      explanation:
        "Commit ukládá změny s unikátním ID a zprávou, aby bylo možné sledovat historii projektu.",
    },
    {
      text: "Jaký je rozdíl mezi `git pull` a `git fetch`?",
      options: [
        "`git fetch` stáhne změny bez sloučení, `git pull` stáhne a rovnou sloučí.",
        "Oba dělají to samé.",
        "`git fetch` je pro nové projekty, `git pull` pro staré.",
        "Rozdíl neexistuje.",
      ],
      correct: 0,
      explanation:
        "`git fetch` jen stáhne data z remote, ale nemergeuje. `git pull` stáhne i sloučí.",
    },
    {
      text: "Jak vytvoříte novou větev v Gitu?",
      options: [
        "`git create branch nazev`",
        "`git checkout -b nazev`",
        "`git branch checkout nazev`",
        "`git switch new nazev`",
      ],
      correct: 1,
      explanation: "Nová větev se vytvoří příkazem `git checkout -b nazev`.",
    },
    {
      text: "Co dělá `.gitignore` soubor?",
      options: [
        "Ignoruje nepotřebné soubory při commitování.",
        "Blokuje uživatele na GitHubu.",
        "Maže soubory.",
        "Slouží jako README.",
      ],
      correct: 0,
      explanation:
        ".gitignore definuje soubory/složky, které nemají být sledovány v Git repozitáři (např. node_modules).",
    },
    {
      text: "Jak odešlete změny na GitHub?",
      options: [
        "`git push origin branch`",
        "`git upload branch`",
        "`git send branch`",
        "`git save branch`",
      ],
      correct: 0,
      explanation:
        "`git push origin nazev-vetve` odešle commity z lokálu na vzdálený repozitář.",
    },

    {
      text: "Jak deklarujete funkci jako asynchronní?",
      options: [
        "function async myFunc()",
        "async function myFunc()",
        "await function myFunc()",
        "function myFunc(async)",
      ],
      correct: 1,
      explanation: "Funkce se deklaruje `async function myFunc() { ... }`.",
    },
    {
      text: "Co dělá `await` klíčové slovo?",
      options: [
        "Pozastaví vykonávání funkce, dokud se promise nevyřeší.",
        "Spustí funkci rychleji.",
        "Přidá chyby automaticky.",
        "Slouží jako cyklus.",
      ],
      correct: 0,
      explanation: "`await` počká na vyřešení promise a vrátí její hodnotu.",
    },
    {
      text: "Jak zachytíte chybu při použití `async/await`?",
      options: [
        "Pomocí try/catch bloku.",
        "Pomocí finally.",
        "Pomocí if podmínky.",
        "Chyby se nedají zachytit.",
      ],
      correct: 0,
      explanation:
        "Chyby v async/await se zachytávají v `try { ... } catch(err) { ... }`.",
    },
    {
      text: "Co vrací `fetch()` funkce?",
      options: [
        "Objekt XMLHttpRequest.",
        "Promise, která se vyřeší s Response objektem.",
        "Pole JSON dat.",
        "HTML dokument.",
      ],
      correct: 1,
      explanation:
        "`fetch()` vrací promise s Response objektem, který lze převést na JSON nebo text.",
    },
    {
      text: "Jak převedete `fetch` odpověď na JSON?",
      options: [
        "response.convert()",
        "response.toJSON()",
        "response.json()",
        "response.JSON()",
      ],
      correct: 2,
      explanation:
        "Po `fetch()` voláme `response.json()`, které vrátí promise s daty.",
    },
    {
      text: "Jaký je hlavní rozdíl mezi fetch a axios?",
      options: [
        "Axios automaticky zpracovává JSON a má více funkcí (interceptory).",
        "Fetch je jen pro Node.js.",
        "Axios je pomalejší.",
        "Rozdíl neexistuje.",
      ],
      correct: 0,
      explanation:
        "Axios je knihovna s extra funkcemi (interceptory, automatická serializace), zatímco fetch je vestavěné API.",
    },
    {
      text: "Jak se v axiosu posílá POST požadavek?",
      options: [
        "axios.fetch('/url', data)",
        "axios.post('/url', data)",
        "axios.POST('/url', data)",
        "axios.send('/url', data)",
      ],
      correct: 1,
      explanation: "`axios.post('/url', data)` odešle POST request s daty.",
    },
    {
      text: "Jak nastavíte hlavičky v axiosu?",
      options: [
        "axios.headers('/url')",
        "axios.get('/url', { headers: {...} })",
        "axios.setHeaders('/url')",
        "axios.config.headers('/url')",
      ],
      correct: 1,
      explanation:
        "Axios umožňuje posílat hlavičky v druhém argumentu jako objekt `{ headers: { Authorization: ... } }`.",
    },
    {
      text: "Co je to interceptor v axiosu?",
      options: [
        "Funkce, která zachytává requesty nebo response před zpracováním.",
        "Metoda pro cacheování dat.",
        "Způsob validace JSON.",
        "Alternativa k fetch.",
      ],
      correct: 0,
      explanation:
        "Axios interceptory umožňují manipulovat s requesty a response (např. přidat token do hlaviček).",
    },
    {
      text: "Jak zrušíte request v axiosu?",
      options: [
        "axios.cancel()",
        "CancelToken",
        "axios.stop()",
        "axios.abort()",
      ],
      correct: 1,
      explanation:
        "Axios má `CancelToken` nebo `AbortController` pro zrušení requestu.",
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
