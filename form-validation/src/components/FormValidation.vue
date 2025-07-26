<script setup>
import { ref, computed } from "vue";

const formData = ref({
  name: "",
  email: "",
  password: "",
});

const isNameValid = computed(() => formData.value.name.trim() !== "");
const isEmailValid = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)
);
const isPasswordValid = computed(() => formData.value.password.length >= 8);

const isFormValid = computed(
  () => isNameValid.value && isEmailValid.value && isPasswordValid.value
);

const submitForm = () => {
  if (isFormValid.value) {
    console.log("Form Submitted", formData.value);
  } else {
    console.log("Form is invalid");
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="submitForm" class="custom-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="formData.name" type="text" id="name" />
        <span v-if="!isNameValid" class="error">Name is required</span>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="formData.email" type="email" id="email" />
        <span v-if="!isEmailValid" class="error">Email is required</span>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="formData.password" type="password" id="password" />
        <span v-if="!isPasswordValid" class="error"
          >Password must be at least 8 characters</span
        >
      </div>

      <button type="submit" :disabled="!isFormValid" class="submit-button">
        Submit
      </button>
    </form>
  </div>
</template>
