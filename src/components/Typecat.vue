<template>
  <div class="container">
    <h1>Typecat</h1>
    <div class="display">
      <p v-for="word in generatedText" :key="word">
        <span
          :class="{
            completed: word.isCompleted,
            wrong: word.wrong,
          }"
          >{{ word.msg }}
        </span>
        <span>&nbsp;</span>
      </p>
    </div>
    <input
      :disabled="generatedText[TOTAL_WORDS - 1].isCompleted"
      type="text"
      :placeholder="placeholderText"
      v-model="userWord"
      @keyup.prevent="startInterval"
      @keydown.space.prevent="handleSubmit"
      @keydown.enter.prevent="handleSubmit"
    />
    <div class="info">
      <p>Total time is {{ formattedTimer() }}</p>
      <div v-if="generatedText[TOTAL_WORDS - 1].isCompleted">
        <input type="button" value="Reset" @click="reset" />
        <p>{{ result() }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from "vue";
import textGenerator from "./api/textGenerator";

export default defineComponent({
  setup() {
    const userWord = ref("");
    const currentWordNum = ref(0);
    const placeholderText = computed(() =>
      currentWordNum.value > 0 ? "" : "Start Typing"
    );
    const timer = ref(0);
    const totalTime = ref(0);
    const TOTAL_WORDS = 25;
    const generatedText = reactive(textGenerator(TOTAL_WORDS));

    const cursor = ref(0);

    function handleSubmit(): void {
      if (userWord.value === "") return;
      if (userWord.value !== generatedText[currentWordNum.value].msg) {
        generatedText[currentWordNum.value].wrong = true;
      }
      generatedText[currentWordNum.value].isCompleted = true;
      userWord.value = "";
      currentWordNum.value++;
      if (currentWordNum.value === generatedText.length) {
        clearInterval(totalTime.value);
      }
    }

    function startInterval() {
      if (totalTime.value === 0)
        totalTime.value = setInterval(() => timer.value++, 1000);
    }

    function formattedTimer() {
      if (timer.value < 60) return `${timer.value}s`;
      let sec = timer.value;
      const min = Math.floor(timer.value / 60);
      sec -= min * 60;
      return `${min}m ${sec}s`;
    }

    function result(): string | undefined {
      if (currentWordNum.value === generatedText.length) {
        let correctWords = 0;
        generatedText.forEach((element) => {
          if (!element.wrong) correctWords++;
        });
        const wpm = Math.floor((TOTAL_WORDS / timer.value) * 60);
        const accuracy = Math.floor((correctWords / TOTAL_WORDS) * 100);
        return `${wpm} WPM ${accuracy}% Accuracy `;
      }
    }

    function reset(): void {
      timer.value = 0;
      currentWordNum.value = 0;
      totalTime.value = 0;
      generatedText.splice(0, generatedText.length);
      const temp = textGenerator(TOTAL_WORDS);
      temp.forEach((element) => generatedText.push(element));
    }

    return {
      generatedText,
      handleSubmit,
      userWord,
      placeholderText,
      cursor,
      formattedTimer,
      result,
      startInterval,
      TOTAL_WORDS,
      reset,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  font-size: 40px;

  .display {
    font-size: 25px;
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    p {
      margin: 0;
      padding: 0;
    }

    .completed {
      text-decoration: line-through;
      color: #00ff5c;
      -webkit-filter: blur(1.5px);
      //-webkit-filter: grayscale(0.5);
    }
    .wrong {
      color: red;
    }
  }

  input {
    margin-top: 1em;
    font-family: Ubuntu, sans-serif;
    font-size: 40px;
    width: 400px;
    outline: none;
    border-radius: 7px;
    border-style: none;
    text-align: center;
    background-color: black;
    color: #a0aec0;
  }
  .info {
    font-size: 25px;
  }
}
</style>
