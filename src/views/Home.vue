<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="text-center">
      <div class="mb-2">
        <button @click="goToWorkout" class="btn btn-primary">Başla</button>
      </div>
      <div>
        <button @click="goToComboAdd" class="btn btn-secondary">Ekle</button>
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
/* İstersen burada özel stiller de ekleyebilirsin */
</style>
