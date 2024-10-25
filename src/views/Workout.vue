<template>
  <div class="m-3">
    <div class="d-flex justify-content-between align-items-center">
      <h1>Workout</h1>
      <button class="btn btn-secondary" @click="toBack()">Geri</button>
    </div>
    <!-- Seri Listesi -->
    <div v-if="series.length > 0">
      <h3>Seriler</h3>
      <ul class="list-group">
        <li v-for="(seri, index) in series" :key="index" class="list-group-item">
          <button class="btn btn-primary" @click="startWorkout(seri)">
            {{ seri.name }}
          </button>
        </li>
      </ul>
    </div>

    <!-- Hareketlerin Gösterimi -->
    <div v-if="currentMove" class="workout-display mt-4">
      <div class="d-flex justify-content-between align-items-center">
        <h3>{{ selectedSeries ? selectedSeries.name : '' }} Hareketleri</h3>
        <button class="btn btn-danger mt-3" @click="stopWorkout">Kapat</button>
      </div>
      <div class="workout-move">
        <p>{{ currentMove.type }} - {{ currentMove.side }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [], // Seriler buraya yüklenecek (LocalStorage'dan)
      selectedSeries: null, // Seçilen seri
      currentMove: null, // Şu an ekranda gösterilen hareket
    };
  },
  mounted() {
    // LocalStorage'dan serileri yükle
    const savedSeries = JSON.parse(localStorage.getItem('series')) || [];
    this.series = savedSeries;
  },
  methods: {
    toBack(){
      this.$router.push('/'); // Workout sayfasına yönlendir
    }, 
    // Antreman başlatma
    startWorkout(seri) {
      this.selectedSeries = seri; // Seçilen seriyi kaydet
      let index = 0; // İlk hareketten başla
      
      // Hareketleri sırayla ekrana getiren ve sesli okuma ile senkronize eden işlev
      const nextMove = () => {
        // Seçilen serinin null olup olmadığını kontrol et
        if (!this.selectedSeries) {
          return; // Eğer null ise çık
        }

        if (index < this.selectedSeries.moves.length) {
          const move = this.selectedSeries.moves[index];
          this.currentMove = move; // Hareketi ekrana göster
          
          // Hareketin adını sesli oku ve seslendirme tamamlandığında bir sonraki harekete geç
          this.readMoveAloud(move).then(() => {
            index++; // Bir sonraki harekete geç
            nextMove(); // Bir sonraki hareketi göster
          });
        } else {
          index = 0; // Hareketler bittiğinde başa dön
          nextMove(); // Tekrar başlat
        }
      };
      
      nextMove(); // İlk hareketi başlat
    },
    // Antremanı durdurma
    stopWorkout() {
      this.currentMove = null; // Ekranı temizle
      this.selectedSeries = null; // Seçimi sıfırla
    },
    // Hareketi sesli okuma (Promise ile okuma bitinceye kadar bekleme)
    readMoveAloud(move) {
      return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(` ${move.side},${move.type}`);
        utterance.lang = 'tr-TR'; // Türkçe dil desteği
        
        // Ses hızı ayarı
        utterance.rate = 1.5; // Ses hızını artırın (1.5 veya 1.7 gibi değerler deneyebilirsiniz)
        
        // Sesli okuma bitince çözülür (resolve edilir)
        utterance.onend = () => {
          resolve();
        };
        
        window.speechSynthesis.speak(utterance); // Hareketi oku
      });
    }
  },
  beforeDestroy() {
    // Sayfa değişikliğinde veya bileşen yok olduğunda interval'ı temizle
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
};
</script>

<style scoped>
.workout-display {
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.workout-move {
  font-size: 1.5em;
  margin: 10px 0;
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
</style>
