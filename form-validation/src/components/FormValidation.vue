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
</script>

<template>
  <div>
    <form @submit.prevent="submitForm" class="custom-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="formData.name" type="text" id="name" />
        <span v-if="!isNameValid.value" class="error">Name is required</span>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="formData.email" type="email" id="email" />
        <span v-if="!isEmailValid.value" class="error">Email is required</span>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="formData.password" type="password" id="password" />
        <span v-if="!isPasswordValid.value" class="error"
          >Password must be at least 8 characters</span
        >
      </div>

      <button type="submit" :disabled="!isFormValid" class="submit-button">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
.custom-form {
  max-width: 400px;
  margin: 50px auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
}

.error {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
}

.submit-button {
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
</style>
