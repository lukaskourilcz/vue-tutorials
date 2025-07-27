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
      text: "Jak zjistíš délku pole v JS?",
      options: [
        "array.count()",
        "array.length",
        "array.size",
        "array.getLength()",
      ],
      correct: 1,
      explanation: `.length je vlastnost, která vrací počet prvků v poli.`,
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
      text: "Co vrátí `typeof null` v JavaScriptu?",
      options: ["'null'", "'object'", "'undefined'", "'function'"],
      correct: 1,
      explanation:
        "`typeof null` je `'object'`, což je historická chyba v jazyce JavaScript.",
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
    <p><strong>Skóre:</strong> {{ score }} / {{ questions.length }}</p>

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
