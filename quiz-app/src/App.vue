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
      text: "Jaká je výchozí metoda pro připojení aplikace k DOM?",
      options: ["app.start()", "app.render()", "app.mount()", "app.link()"],
      correct: 2,
      explanation:
        "`app.mount()` připojí Vue aplikaci ke konkrétnímu DOM elementu.",
    },
    {
      text: "Co udělá `===` v JavaScriptu?",
      options: [
        "Porovná hodnoty a převede je",
        "Porovná jen hodnoty",
        "Porovná hodnoty i typy",
        "Porovná reference",
      ],
      correct: 2,
      explanation: "`===` je přísné porovnání – kontroluje hodnotu i typ.",
    },
    {
      text: "Jaký je účel `v-model`?",
      options: [
        "Dvojcestné datové propojení",
        "Jednocestné propojení",
        "Zapsání události kliknutí",
        "Změna stylu komponenty",
      ],
      correct: 0,
      explanation:
        "`v-model` umožňuje synchronizaci hodnoty mezi komponentou a vstupem (např. input).",
    },
    {
      text: "Jaký je výstup `2 + '2'`?",
      options: ["4", "'22'", "'4'", "SyntaxError"],
      correct: 1,
      explanation:
        "V JavaScriptu dochází ke konverzi typu, takže `2 + '2'` = `'22'` (string).",
    },
    {
      text: "K čemu slouží `setTimeout`?",
      options: [
        "Na opakování funkce",
        "Na spuštění funkce po určitém čase",
        "Na synchronní spuštění funkce",
        "Na deklaraci proměnné",
      ],
      correct: 1,
      explanation:
        "`setTimeout` spustí funkci až po uplynutí určité doby (v milisekundách).",
    },
    {
      text: "K čemu slouží `Array.prototype.map()`?",
      options: [
        "Na výběr prvků z pole",
        "Na transformaci každého prvku pole",
        "Na filtrování prvků",
        "Na odstranění duplicit",
      ],
      correct: 1,
      explanation:
        "`map()` vytvoří nové pole transformací každého prvku originálního pole.",
    },
    {
      text: "Která direktiva vykreslí komponentu pouze pokud je podmínka splněná?",
      options: ["v-if", "v-model", "v-bind", "v-for"],
      correct: 0,
      explanation: "`v-if` vykreslí DOM prvek pouze, pokud je podmínka true.",
    },
    {
      text: "Jaká je výchozí hodnota `this` v běžné funkci?",
      options: ["undefined", "global object (window)", "{}", "null"],
      correct: 1,
      explanation:
        "V non-strict módu je výchozí `this` odkaz na globální objekt (`window`).",
    },
    {
      text: "Jaká je výchozí hodnota `undefined + 1`?",
      options: ["1", "NaN", "undefined1", "null"],
      correct: 1,
      explanation: "`undefined` není číslo, takže `undefined + 1` vrací `NaN`.",
    },
    {
      text: "Jaký je hlavní rozdíl mezi `ref` a `reactive`?",
      options: [
        "ref je jen pro objekty, reactive pro primitivní hodnoty",
        "ref vrací reaktivní objekt, reactive ne",
        "ref se používá pro primitivní hodnoty, reactive pro objekty",
        "jsou to dvě jména pro totéž",
      ],
      correct: 2,
      explanation:
        "`ref()` je vhodný pro primitivní hodnoty, `reactive()` pro objekty a složitější struktury.",
    },
    {
      text: "K čemu slouží `ref()` ve Vue?",
      options: [
        "K načtení externích dat",
        "K reaktivnímu uchování hodnoty",
        "K definici komponenty",
        "K přístupu k API",
      ],
      correct: 1,
      explanation: "`ref()` vytváří reaktivní proměnnou, kterou Vue sleduje.",
    },
    {
      text: "Co dělá `v-for`?",
      options: [
        "Podmíněné vykreslení",
        "Opakuje blok podle položek v poli",
        "Slučuje objekty",
        "Spouští události",
      ],
      correct: 1,
      explanation:
        "`v-for` opakuje šablonu pro každou položku v iterovatelném seznamu.",
    },
    {
      text: "Jaká je hlavní výhoda `const` oproti `let`?",
      options: [
        "Je rychlejší",
        "Zabraňuje přepisování reference",
        "Zvyšuje výkon",
        "Má větší dosah",
      ],
      correct: 1,
      explanation:
        "`const` neumožňuje znovu přiřadit proměnnou – reference je neměnná.",
    },
    {
      text: "K čemu slouží `computed`?",
      options: [
        "K vytvoření proměnné s náhodnou hodnotou",
        "K vytvoření hodnoty, která se automaticky aktualizuje",
        "K spuštění HTTP požadavku",
        "K definici složité šablony",
      ],
      correct: 1,
      explanation:
        "`computed` vytváří odvozenou hodnotu, která se automaticky přepočítá, když se změní závislosti.",
    },
    {
      text: "Co udělá `JSON.stringify()`?",
      options: [
        "Převede text na JSON",
        "Převede objekt na string",
        "Převede JSON na objekt",
        "Vyčistí objekt",
      ],
      correct: 1,
      explanation:
        "`JSON.stringify()` převede JavaScript objekt na JSON string.",
    },
    {
      text: "Jak definovat props v komponentě se `<script setup>`?",
      options: [
        "props: ['text']",
        "defineProps(['text'])",
        "props.value = ['text']",
        "setupProps(['text'])",
      ],
      correct: 1,
      explanation: "V `<script setup>` se props definují přes `defineProps()`.",
    },
    {
      text: "Jaká metoda ve Vue 3 vrací celkovou instanci aplikace?",
      options: ["Vue.init()", "createVue()", "createApp()", "startApp()"],
      correct: 2,
      explanation: "`createApp()` inicializuje novou Vue aplikaci.",
    },
    {
      text: "Jaký hook použiješ ve Vue 3 pro spuštění funkce po načtení komponenty?",
      options: ["onLoad", "onInit", "onMounted", "useEffect"],
      correct: 2,
      explanation:
        "`onMounted()` je Vue 3 lifecycle hook pro spuštění logiky po načtení komponenty.",
    },
    {
      text: "Co je `package-lock.json` a proč je důležitý?",
      options: [
        "Umožňuje definovat globální proměnné v projektu",
        "Slouží jako záloha `package.json`",
        "Uzamkne přesné verze závislostí, aby byly stejné ve všech prostředích",
        "Definuje skripty, které se mají spustit po instalaci",
      ],
      correct: 2,
      explanation:
        "`package-lock.json` uzamyká konkrétní verze závislostí, což zajišťuje, že se projekt bude chovat stejně na různých zařízeních.",
    },
    {
      text: "Jaký je rozdíl mezi `dependencies` a `devDependencies` v `package.json`?",
      options: [
        "`dependencies` jsou pouze pro vývoj, `devDependencies` pro produkci",
        "`devDependencies` jsou globálně instalovatelné balíčky",
        "`dependencies` jsou potřebné při běhu aplikace, `devDependencies` jen při vývoji",
        "Žádný – jsou to aliasy",
      ],
      correct: 2,
      explanation:
        "`dependencies` jsou potřebné pro běh aplikace, zatímco `devDependencies` pouze pro vývoj (např. testovací frameworky, lintery).",
    },
    {
      text: "K čemu slouží `computed` properties ve Vue?",
      options: [
        "K přímému upravování DOM elementů",
        "K vytvoření statické hodnoty",
        "K vytvoření hodnoty, která se přepočítá jen při změně závislostí",
        "K optimalizaci API volání",
      ],
      correct: 2,
      explanation:
        "`computed` property se přepočítá jen tehdy, když se změní její závislosti. Výsledky se cacheují pro efektivitu.",
    },
    {
      text: "Jak funguje `watch` ve Vue?",
      options: [
        "Reaguje na kliknutí uživatele",
        "Sleduje změny hodnoty a spustí funkci",
        "Vykresluje šablony při načtení komponenty",
        "Odešle HTTP požadavek při mountu",
      ],
      correct: 1,
      explanation:
        "`watch` sleduje změny konkrétní hodnoty a spustí funkci pokaždé, když se hodnota změní.",
    },
    {
      text: "Co je rozdíl mezi `v-if`, `v-show` a `v-for`?",
      options: [
        "`v-if` podmíněně vykresluje, `v-show` skrývá, `v-for` iteruje přes data",
        "`v-show` maže prvky z DOMu",
        "`v-if` je jen pro boolean hodnoty",
        "`v-for` je jako computed",
      ],
      correct: 0,
      explanation:
        "`v-if` vykresluje podmíněně, `v-show` pouze schovává element (display: none) a `v-for` slouží k iteraci.",
    },
    {
      text: "Co dělá `emit` ve Vue?",
      options: [
        "Importuje komponenty",
        "Sděluje rodiči událost z komponenty dítěte",
        "Spouští API volání",
        "Přidává globální proměnné",
      ],
      correct: 1,
      explanation:
        "`emit` ve Vue se používá pro posílání událostí z komponenty zpět k rodiči.",
    },
    {
      text: "Jaký je rozdíl mezi `ref` a `reactive` ve Vue?",
      options: [
        "`ref` je pro objekty, `reactive` pro čísla a stringy",
        "`ref` je pomalejší",
        "`ref` je pro primitivní hodnoty, `reactive` pro objekty a pole",
        "Oba jsou stejné",
      ],
      correct: 2,
      explanation:
        "`ref` se používá pro primitivní hodnoty (čísla, stringy), zatímco `reactive` pro objekty a pole.",
    },
    {
      text: "Co jsou `slots` ve Vue?",
      options: [
        "Event listenery",
        "Speciální metoda pro zpracování JSON",
        "Místo v komponentě, kam může rodič vložit vlastní obsah",
        "Metoda pro definování stylů",
      ],
      correct: 2,
      explanation:
        "`slots` umožňují vložení vlastního obsahu do komponenty — jde o flexibilní mechanismus pro přizpůsobení šablon.",
    },
    {
      text: "Jak funguje `Vue Router`?",
      options: [
        "Slučuje CSS styly s komponentami",
        "Mapuje URL cesty na komponenty",
        "Řeší stavovou logiku",
        "Načítá async data z API",
      ],
      correct: 1,
      explanation:
        "`Vue Router` mapuje URL na jednotlivé Vue komponenty a umožňuje navigaci v aplikaci.",
    },
    {
      text: "K čemu slouží `lifecycle hooks` ve Vue?",
      options: [
        "Na připojení CSS",
        "Na zobrazení dat uživateli",
        "Na spuštění kódu ve specifických fázích komponenty",
        "Na změnu hodnot v ref",
      ],
      correct: 2,
      explanation:
        "`lifecycle hooks` umožňují spustit kód při vytvoření, aktualizaci nebo zničení komponenty (např. `onMounted`).",
    },
    {
      text: "Jaký je rozdíl mezi `var`, `let` a `const`?",
      options: [
        "`var` má funkční scope a hoistuje se, `let` a `const` mají blokový scope",
        "`var` nelze přepsat, `let` a `const` ano",
        "`const` a `var` jsou identické, `let` je speciální",
        "Všechny mají stejný scope, ale jinou syntaxi",
      ],
      correct: 0,
      explanation:
        "`var` má funkční scope a hoistuje se. `let` a `const` mají blokový scope. `const` navíc nejde přepsat.",
    },
    {
      text: "Co je to hoisting v JavaScriptu?",
      options: [
        "Zvýšení výkonu proměnných",
        "Přesun proměnných a funkcí na konec souboru",
        "Přesunutí deklarací proměnných a funkcí na začátek jejich scope",
        "Načtení všech závislostí před spuštěním skriptu",
      ],
      correct: 2,
      explanation:
        "Hoisting je mechanismus, kdy se deklarace proměnných a funkcí přesunou na začátek jejich scope při běhu programu.",
    },
    {
      text: "Jak se chová `this` v arrow funkcích?",
      options: [
        "Arrow funkce si `this` určují samy",
        "Arrow funkce nemají vlastní `this`, přebírají ho z okolního scope",
        "`this` odkazuje vždy na `window`",
        "`this` neexistuje v arrow funkcích",
      ],
      correct: 1,
      explanation:
        "Arrow funkce nemají vlastní `this`, ale přebírají ho z kontextu, ve kterém byly vytvořeny.",
    },
    {
      text: "Co je closure v JavaScriptu?",
      options: [
        "Funkce, která běží pouze jednou",
        "Funkce, která uzavře celý kód",
        "Funkce, která si pamatuje proměnné z okolního scope i po jeho ukončení",
        "Typ proměnné",
      ],
      correct: 2,
      explanation:
        "Closure je funkce, která si 'pamatuje' proměnné z okolního scope i po jeho ukončení.",
    },
    {
      text: "Co je to prototypový řetězec?",
      options: [
        "Seznam všech dědičných tříd",
        "Spojení mezi HTML prvky",
        "Mechanismus, kdy objekty dědí vlastnosti a metody přes svůj prototyp",
        "Vazba mezi CSS a JavaScriptem",
      ],
      correct: 2,
      explanation:
        "Prototypový řetězec umožňuje objektům v JavaScriptu dědit vlastnosti a metody z jiných objektů.",
    },
    {
      text: "Jaký je rozdíl mezi `class` a konstruktorovou funkcí?",
      options: [
        "`class` je rychlejší",
        "`class` je pouze syntaktický cukr nad konstruktorovou funkcí a prototypy",
        "Konstruktorové funkce neexistují v ES6",
        "`class` neumožňuje dědičnost",
      ],
      correct: 1,
      explanation:
        "`class` je jen přehlednější zápis (syntaktický cukr) nad tím, co už existovalo v podobě konstruktorových funkcí a prototypů.",
    },
    {
      text: "Jaký je rozdíl mezi `map()` a `forEach()`?",
      options: [
        "`map()` i `forEach()` vrací nové pole",
        "`forEach()` mění původní pole, `map()` ne",
        "`map()` vrací nové pole, `forEach()` nevrací nic",
        "`forEach()` vrací počet iterací",
      ],
      correct: 2,
      explanation:
        "`map()` vrací nové pole s transformovanými hodnotami, `forEach()` pouze projde každou položku bez návratové hodnoty.",
    },
    {
      text: "K čemu slouží spread operátor `...`?",
      options: [
        "Na rozložení pole nebo objektu na jednotlivé části",
        "Na seřazení pole",
        "Na zjištění typu proměnné",
        "Na spojení více funkcí do jedné",
      ],
      correct: 0,
      explanation:
        "Spread operátor `...` rozkládá pole nebo objekt do jednotlivých prvků/vlastností.",
    },
    {
      text: "Co jsou template literals v JavaScriptu?",
      options: [
        "Řetězce, které nelze měnit",
        "Šablony pro HTML",
        "Řetězce s interpolací a podporou více řádků pomocí zpětných apostrofů (``)",
        "Řetězce, které se automaticky přeloží",
      ],
      correct: 2,
      explanation:
        "Template literals jsou řetězce, které používají zpětný apostrof a umožňují interpolaci proměnných i vícero řádků.",
    },
    {
      text: "Jaký je rozdíl mezi `import/export` a `require/module.exports`?",
      options: [
        "`require` je moderní syntaxe, `import` stará",
        "`import/export` je synchronní, `require` je asynchronní",
        "`import/export` je ES6 modulový systém, `require` je CommonJS",
        "Žádný, fungují stejně",
      ],
      correct: 2,
      explanation:
        "`import/export` je statický ES6 modulový systém, `require/module.exports` patří do staršího CommonJS standardu (typicky v Node.js).",
    },
    {
      text: "Co je event loop v JavaScriptu?",
      options: [
        "Cyklus, který blokuje běh aplikace",
        "Mechanismus pro synchronní zpracování dat",
        "Cyklus, který zajišťuje zpracování asynchronních operací bez blokování hlavního vlákna",
        "Fronta pro zpracování DOM událostí",
      ],
      correct: 2,
      explanation:
        "Event loop umožňuje JavaScriptu provádět asynchronní operace (např. `setTimeout`, `fetch`) bez zablokování hlavního vlákna.",
    },
    {
      text: "Jaký je vztah mezi `Promises` a `async/await`?",
      options: [
        "`async/await` je nový typ Promise",
        "`async/await` nahradil Promises",
        "`async/await` je syntaktický cukr nad Promises",
        "Nejsou nijak propojené",
      ],
      correct: 2,
      explanation:
        "`async/await` je čitelnější způsob práce s Promises, který umožňuje psát asynchronní kód podobně jako synchronní.",
    },
    {
      text: "Co je `Node.js`?",
      options: [
        "Prohlížeč pro běh JavaScriptu",
        "Editor pro JavaScript",
        "Runtime prostředí pro JavaScript založené na V8, které umožňuje spouštět JS mimo prohlížeč",
        "Typ frameworku pro tvorbu UI",
      ],
      correct: 2,
      explanation:
        "`Node.js` umožňuje spouštět JavaScript na serveru mimo prohlížeč, je založené na V8 engine a je neblokující.",
    },
    {
      text: "Jaký je rozdíl mezi `require` a `import`?",
      options: [
        "`require` je asynchronní, `import` synchronní",
        "`require` patří do ES6, `import` do Node.js",
        "`require` je synchronní CommonJS syntaxe, `import` je ES6 modulová syntaxe",
        "Obě se používají pouze v prohlížeči",
      ],
      correct: 2,
      explanation:
        "`require` je CommonJS modulová syntaxe používaná v Node.js, zatímco `import/export` je moderní ES6 syntaxe.",
    },
    {
      text: "K čemu slouží `package-lock.json`?",
      options: [
        "Ukládá zálohy balíčků",
        "Umožňuje rychlejší instalaci npm",
        "Uzamkne přesné verze balíčků, aby byla instalace konzistentní napříč zařízeními",
        "Definuje příkazové skripty projektu",
      ],
      correct: 2,
      explanation:
        "`package-lock.json` zajišťuje, že při každé instalaci dostaneš stejné verze závislostí.",
    },
    {
      text: "Co dělá `npx`?",
      options: [
        "Odebere balíček",
        "Nainstaluje balíček globálně",
        "Spustí CLI nástroj bez nutnosti globální instalace",
        "Aktualizuje všechny závislosti",
      ],
      correct: 2,
      explanation:
        "`npx` umožňuje spustit příkaz z balíčku, aniž bys ho musel globálně instalovat.",
    },
    {
      text: "Jak funguje reaktivita ve Vue 3?",
      options: [
        "Pomocí class-based getterů",
        "Vue sleduje změny v DOM",
        "Pomocí `Proxy` objektů, které sledují přístup a změny k datům",
        "Přes `setInterval`",
      ],
      correct: 2,
      explanation:
        "Vue 3 využívá `Proxy`, které obalí data a umožňují sledovat čtení a zápis pro reaktivní aktualizaci DOMu.",
    },
    {
      text: "Co jsou lifecycle hooky ve Vue?",
      options: [
        "Příkazy pro stylování komponent",
        "Události vyvolané uživatelem",
        "Metody, které se spouští ve specifických fázích života komponenty",
        "Speciální props",
      ],
      correct: 2,
      explanation:
        "Lifecycle hooky jsou funkce jako `onMounted`, `onUpdated`, které umožňují reagovat na určité fáze komponenty.",
    },
    {
      text: "Jaký je rozdíl mezi `watch` a `computed` ve Vue?",
      options: [
        "`watch` vrací hodnotu, `computed` ne",
        "`computed` je reaktivní, `watch` ne",
        "`watch` reaguje na změnu a spustí funkci, `computed` vrací odvozenou hodnotu",
        "`watch` je pomalejší",
      ],
      correct: 2,
      explanation:
        "`computed` vrací hodnotu, která se mění podle závislostí. `watch` reaguje na změnu a spustí funkci (např. API call).",
    },
    {
      text: "Kdy použiješ `ref()` a kdy `reactive()`?",
      options: [
        "`ref()` pro pole, `reactive()` pro objekty",
        "`ref()` pro objekty, `reactive()` pro čísla",
        "`ref()` pro primitivní hodnoty, `reactive()` pro složitější struktury jako objekty nebo pole",
        "`ref()` je pomalejší",
      ],
      correct: 2,
      explanation:
        "`ref()` je vhodný pro jednoduché hodnoty jako čísla nebo stringy, `reactive()` pro složitější struktury (objekty, pole).",
    },
    {
      text: "Jak ve Vue přistoupíš k DOM elementu?",
      options: [
        "Pomocí `document.querySelector()`",
        "Pomocí `ref` a `$refs` nebo `template ref`",
        "Pouze přes ID v HTML",
        "Vue nepodporuje přístup k DOM",
      ],
      correct: 1,
      explanation:
        "Ve Vue můžeš přistupovat k DOMu přes `<input ref='el'>` a následně pomocí `this.$refs.el` nebo `ref()` v Composition API.",
    },
    {
      text: "Co jsou `slots` ve Vue?",
      options: [
        "Dynamické styly",
        "Způsob definice props",
        "Způsob, jak vkládat vlastní obsah do komponenty",
        "Specializované lifecycle hooky",
      ],
      correct: 2,
      explanation:
        "Slots umožňují komponentám přijímat obsah z rodičů a dynamicky ho zobrazit (např. `<slot></slot>`).",
    },
    {
      text: "Kdy se používá `v-show` místo `v-if`?",
      options: [
        "Když chci element navždy skrýt",
        "Když potřebuji přepínat viditelnost často a nechci, aby se znovu renderoval",
        "Když chci přepínat mezi stránkami",
        "Když chci zcela odstranit prvek z DOM",
      ],
      correct: 1,
      explanation:
        "`v-show` pouze přepíná CSS `display`, nevytváří/ničí elementy, takže je efektivnější při častém přepínání.",
    },
    {
      text: "Co je `key` ve `v-for` smyčce?",
      options: [
        "Identifikátor pro lepší výkon při přepočtu",
        "Název proměnné",
        "Pozice v poli",
        "Pouze kosmetická záležitost",
      ],
      correct: 0,
      explanation:
        "Pomocí `:key` Vue pozná, které prvky změnit nebo ponechat při re-renderu – zabraňuje zbytečnému překreslování.",
    },
    {
      text: "K čemu slouží `v-bind`?",
      options: [
        "Na přidání událostí",
        "Na podmíněné vykreslení",
        "Na dynamické přiřazení hodnoty atributu",
        "Na import proměnných",
      ],
      correct: 2,
      explanation:
        "`v-bind` umožňuje dynamicky nastavit atribut (např. `:src`, `:class`, `:id` atd.).",
    },
    {
      text: "Jak Vue sleduje změny v poli?",
      options: [
        "Používá vnitřní `watchArray` hook",
        "Přepisuje metody pole jako `push`, `splice`, atd.",
        "Nepodporuje reaktivní pole",
        "Používá setInterval na kontrolu změn",
      ],
      correct: 1,
      explanation:
        "Vue přepisuje metody pole, aby detekovalo změny a aktualizovalo DOM při manipulaci s polem.",
    },
    {
      text: "Jaká je výchozí hodnota `typeof undefined`?",
      options: ["'object'", "'null'", "'undefined'", "'string'"],
      correct: 2,
      explanation:
        "`typeof undefined` vrací `'undefined'`, což odpovídá typu neinitializované proměnné.",
    },
    {
      text: "Co dělá `setInterval`?",
      options: [
        "Spustí funkci po určitém čase pouze jednou",
        "Zruší funkci",
        "Opakuje volání funkce v daném intervalu",
        "Zastaví běžící skript",
      ],
      correct: 2,
      explanation:
        "`setInterval` opakuje zadanou funkci každých X milisekund, dokud není zrušena přes `clearInterval`.",
    },
    {
      text: "Kdy se používá `emit`?",
      options: [
        "K předání dat z rodiče do komponenty",
        "K odeslání požadavku na server",
        "K vyslání události z dítěte do rodiče",
        "K inicializaci komponenty",
      ],
      correct: 2,
      explanation:
        "`emit()` se používá, když komponenta potřebuje oznámit událost rodičovské komponentě (např. @close).",
    },
    {
      text: "Jaký je výstup: `typeof NaN`?",
      options: ["'undefined'", "'number'", "'NaN'", "'object'"],
      correct: 1,
      explanation:
        "`NaN` je typu `number`, i když znamená „Not a Number“. Je to historická zvláštnost v JavaScriptu.",
    },
    {
      text: "Jak lze přidat Bootstrap do Vue projektu?",
      options: [
        "Stačí nainstalovat Tailwind",
        "Přes CDN pouze ve Vue 2",
        "Importem `bootstrap` v main.js nebo main.ts",
        "Není to možné",
      ],
      correct: 2,
      explanation:
        "Bootstrap můžeš přidat přes npm/yarn a naimportovat v hlavním souboru – `import 'bootstrap/dist/css/bootstrap.min.css'`.",
    },
    {
      text: "Co je `template ref` ve Vue?",
      options: [
        "Template kód uvnitř JSX",
        "Nástroj pro psaní stylů",
        "Způsob, jak přistoupit k DOM elementům přes `ref()`",
        "Název proměnné uvnitř slotu",
      ],
      correct: 2,
      explanation:
        "Template `ref` slouží k přístupu na konkrétní DOM prvek nebo komponentu (např. `<div ref='box'>`).",
    },
    {
      text: "Jak se odlišuje `forEach` od `map()`?",
      options: [
        "`map()` modifikuje originální pole",
        "`forEach()` vrací nové pole",
        "`map()` vrací nové pole, `forEach()` nevrací nic",
        "Obě fungují stejně",
      ],
      correct: 2,
      explanation:
        "`map()` vytvoří nové pole podle vrácených hodnot, `forEach()` jen projde pole a nic nevrací.",
    },
    {
      text: "Co znamená `hoisting`?",
      options: [
        "Deklarace se ignorují",
        "Přesunutí deklarací proměnných a funkcí na začátek scope",
        "Zrušení proměnných",
        "Komprese JS kódu",
      ],
      correct: 1,
      explanation:
        "`Hoisting` znamená, že proměnné a funkce jsou dostupné před místem deklarace, ale pouze deklarace – ne přiřazení.",
    },
    {
      text: "K čemu slouží `props` v komponentě?",
      options: [
        "Na komunikaci mezi sourozeneckými komponentami",
        "Na získání dat od rodiče",
        "Na nastavení počátečního stavu",
        "Na vykreslení dat z API",
      ],
      correct: 1,
      explanation:
        "`props` slouží k předání dat z rodičovské komponenty do komponenty podřízené.",
    },
    {
      text: "Jaký hook použít, když chci něco spustit při připojení komponenty?",
      options: ["onCreated()", "onBeforeMount()", "onMounted()", "useEffect()"],
      correct: 2,
      explanation:
        "`onMounted()` je lifecycle hook ve Vue 3, který se spustí po připojení komponenty k DOM.",
    },
    {
      text: "K čemu slouží `.prevent` u event listeneru ve Vue?",
      options: [
        "Zabrání vykonání funkce",
        "Zastaví šíření události",
        "Zamezí výchozímu chování události",
        "Změní typ události",
      ],
      correct: 2,
      explanation:
        "Například `@submit.prevent` zabrání defaultnímu odeslání formuláře (zabrání reloadu stránky).",
    },
    {
      text: "Jak deklaruješ computed property v `<script setup>`?",
      options: [
        "`computed(() => ...)`",
        "`useComputed()`",
        "`defineComputed()`",
        "`computedProperty()`",
      ],
      correct: 0,
      explanation:
        "Používá se funkce `computed()` z `vue` pro vytvoření odvozené reaktivní hodnoty.",
    },
    {
      text: "Co dělá `this` v běžné (ne-arrow) funkci?",
      options: [
        "Ukazuje na globální objekt nebo kontext volání",
        "Ukazuje vždy na `window`",
        "Ukazuje na rodiče funkce",
        "Není přístupný",
      ],
      correct: 0,
      explanation:
        "`this` v běžné funkci závisí na kontextu – v metodách objektů na objekt, jinak na `window` nebo `undefined`.",
    },
    {
      text: "Jak zabráníš znovupřiřazení proměnné?",
      options: [
        "Použiju `let`",
        "Použiju `const`",
        "Použiju `var`",
        "Zamknu proměnnou pomocí lock()",
      ],
      correct: 1,
      explanation:
        "`const` zabrání znovupřiřazení hodnoty – ale struktury jako objekty lze nadále upravovat.",
    },
    {
      text: "Jak funguje `v-model` ve Vue?",
      options: [
        "Zajišťuje jednocestné datové propojení",
        "Spojuje props a emits",
        "Synchronizuje hodnotu inputu s daty (dvojcestně)",
        "Používá se k iteraci pole",
      ],
      correct: 2,
      explanation:
        "`v-model` umožňuje propojit hodnotu inputu s proměnnou ve Vue – a reaguje na změnu oběma směry.",
    },
    {
      text: "Jak vytvořit `computed` hodnotu závislou na jiné `ref`?",
      options: [
        "`computed(() => refName.value * 2)`",
        "`watch(refName)`",
        "`ref(() => refName * 2)`",
        "`useEffect()`",
      ],
      correct: 0,
      explanation:
        "`computed(() => refName.value * 2)` vytvoří reaktivní hodnotu, která se automaticky aktualizuje při změně závislosti.",
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
    <h1 class="mb-4">Vue & JS Quiz</h1>
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
