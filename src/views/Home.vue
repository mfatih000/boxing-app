<template>
  <div class="d-flex justify-content-center align-items-center vh-100 home-background">
    <div class="text-center">
      <div class="mb-4">
        <button @click="goToWorkout" class="btn home-button">Model Çalış</button>
      </div>
      <div>
        <button @click="goToComboAdd" class="btn home-button">Model Ekle</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToWorkout() {
      this.$router.push('/workout'); // Workout sayfasına yönlendir
    },
    goToComboAdd() {
      this.$router.push('/combo-add'); // ComboAdd sayfasına yönlendir
    }
  }
};
</script>

<style scoped>
.home-background {
  background-color: #333; /* Dark background to fit the kickboxing theme */
  color: white;
  padding: 0 20px; /* Add horizontal padding */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow for depth */
  text-align: center;
  transition: background-color 0.3s ease; /* Smooth background transition */
}

.home-background:hover {
  background-color: #444; /* Slightly lighter dark background on hover */
}

.home-button {
  background-color: #7c160e; /* Bold red for buttons */
  color: white;
  font-size: 1.2em;
  padding: 12px 30px;
  border-radius: 6px;
  width: 200px; /* Ensure buttons have the same size */
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease; /* Smooth transition on hover */
}

.home-button:hover {
  background-color: #9b2c2c; /* Darker red on hover for buttons */
}

.mb-4 {
  margin-bottom: 20px;
}
</style>
