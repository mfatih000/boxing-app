<template class="">
  <div class="workout-main ">
    <div class="d-flex justify-content-between align-items-center">
      <h1>Workout</h1>
      <button class="btn btn-secondary" @click="toBack()">Geri</button>
    </div>
    <!-- Seri Listesi -->
    <div class="series-part" v-if="series.length > 0 && selectedSeries == null">
      <h3>Seriler</h3>
      <ul class="list-group">
     <template  v-for="(seri, index) in series" :key="index" >
      <li class="list-group-item"  @click="startWorkout(seri)">
          <button class="btn btn-primary">
            {{ seri.name }}
          </button>
        </li>
     </template>
      </ul>
    </div>

    <div v-if="series.length == 0">
      KAYITLI SERİNİZ BULUNMAMAKTADIR.LÜTFEN EKLEME EKRANINDAN BİR SERİ EKLEYİNİZ.
    </div>

    <div v-if="currentMove" class="workout-display mt-4">
      <div>
        <div class="d-flex justify-content-end" >
          <button class="btn btn-primary mt-3" @click="stopWorkout">Kapat</button>
        </div>
        <ul>
          <p v-for="(item, index) in selectedSeries.moves" :key="index"><button disabled="true"
              class="btn btn-warning mb-1">{{ item.side }}-{{ item.type }}</button></p>
        </ul>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <h3>{{ selectedSeries ? selectedSeries.name : '' }}</h3>
      </div>
      <div class="workout-move" v-if="!currentMove.side">
        <p>{{ currentMove.type }} </p>
      </div>
      <div class="workout-move" v-else>
        <p>{{ currentMove.side }}-{{ currentMove.type }} </p>
      </div>

      <div class="d-flex justify-content-end">
        <button @click="changeSpeed('slower')" class="btn btn sm btn-warning btn-sm"><font-awesome-icon
            :icon="['fas', 'fast-backward']" /></button>
       <button class="btn btn-secondary mx-1"> {{ currentSpeed }}</button>
        <button @click="changeSpeed('faster')" class="btn btn sm btn-primary btn-sm"><font-awesome-icon
            :icon="['fas', 'fast-forward']" /></button>
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
      currentSpeed: 4,
    };
  },
  mounted() {
    // LocalStorage'dan serileri yükle
    const savedSeries = JSON.parse(localStorage.getItem('series')) || [];
    this.series = savedSeries;
  },
  methods: {
    changeSpeed(state) {
      if (state == 'faster') {
        this.currentSpeed += 0.50
      }
      else {
        this.currentSpeed -= 0.50
      }
    },
    toBack() {
      this.$router.push('/'); // Workout sayfasına yönlendir
    },
    // Antreman başlatma
    startWorkout(seri) {
      this.selectedSeries = seri; // Seçilen seriyi kaydet
      let index = 0; // İlk hareketten başla
      var moveCounter = 0; // Hareketleri saymak için sayaç

      // Hareketleri sırayla ekrana getiren ve sesli okuma ile senkronize eden işlev
      const nextMove = () => {
        // Seçilen serinin null olup olmadığını kontrol et
        if (!this.selectedSeries) {
          return; // Eğer null ise çık
        }
        // Eskiv kontrolü: Eğer sayacın değeri weaveInterval’a eşitse "Eskiv" mesajı göster
        if (moveCounter == this.selectedSeries.weaveInterval) {
          this.currentMove = { side: "", type: "Eskiv" }; // "Eskiv" mesajı için geçici hareket
          this.readMoveAloud(this.currentMove).then(() => {
            nextMove(); // "Eskiv" seslendirmesi tamamlandıktan sonra bir sonraki hareketi göster
          });
          moveCounter = 0
          console.log(this.selectedSeries.weaveInterval)
          console.log(moveCounter + " eskiv ")
          // Hareket sayacını artır
        } else {
          // Normal hareket göster
          if (index < this.selectedSeries.moves.length) {
            const move = this.selectedSeries.moves[index];
            this.currentMove = move; // Hareketi ekrana göster

            // Hareketin adını sesli oku ve seslendirme tamamlandığında bir sonraki harekete geç
            this.readMoveAloud(move).then(() => {
              index++; // Bir sonraki harekete geç
              nextMove(); // Bir sonraki hareketi göster
            });

            moveCounter++;
          } else {
            moveCounter = 0
            index = 0; // Hareketler bittiğinde başa dön
            nextMove(); // Tekrar başlat
            console.log(moveCounter + " yeniden")
          }
          console.log(this.selectedSeries.weaveInterval)
          console.log(moveCounter)
        }
        // Hareket sayacını artır
      };
      nextMove(); // İlk hareketi başlat
    },

    // Antremanı durdurma
    stopWorkout() {
      this.currentMove = null; // Ekranı temizle
      this.selectedSeries = null; // Seçimi sıfırla
      this.currentSpeed = 4;
      window.speechSynthesis.cancel(); // Tüm seslendirmeleri iptal et
    },

    // Hareketi sesli okuma (Promise ile okuma bitinceye kadar bekleme)
    readMoveAloud(move) {
      return new Promise((resolve) => {
        // Eski sesli okumaları temizle
        window.speechSynthesis.cancel();

        // `move.side` için Türkçe seslendirme
        const sideUtterance = new SpeechSynthesisUtterance(move.side);
        sideUtterance.lang = 'tr-TR'; // `move.side` Türkçe okunacak
        sideUtterance.rate = this.currentSpeed;

        // `move.type` için dil seçimi (içinde 'kick' varsa İngilizce, yoksa Türkçe)
        const typeUtterance = new SpeechSynthesisUtterance(move.type);
        typeUtterance.lang = move.type.toLowerCase().includes('kick') ? 'en-US' : 'tr-TR';
        typeUtterance.rate = this.currentSpeed;

        // `side` seslendirme bittikten sonra `type` seslendirme başlatılır
        sideUtterance.onend = () => {
          window.speechSynthesis.speak(typeUtterance);
        };

        // `type` seslendirme bittikten sonra Promise çözülür
        typeUtterance.onend = () => {
          resolve();
        };

        // İlk olarak `side` seslendirmesi başlatılır
        window.speechSynthesis.speak(sideUtterance);
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
.workout-main {
  background: linear-gradient(to bottom, #1b1b1b, #121212); /* Dark textured background */
  padding: 5%;
  color: white;
  height: 100vh;
}

.workout-display {
  background-color: #333; /* Dark, semi-transparent */
  padding: 20px;
  border-radius: 8px;
  color: white;
  box-shadow: 0px 0px 10px 2px #7c160e; /* Red glow effect */
}

.series-part {
  background-color: #333; /* Transparent black */
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

button {
  border: none;
  color: white;
  font-weight: bold;
}

.btn-primary {
  background-color: #64130d;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5); /* Adds depth */
}

.btn-warning {
  background-color: #ffd966;
  color: black;
}

ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0;
}

ul li {
  background-color: #2c2c2c; /* Dark grey background for the list items */
  color: white; /* White text for contrast */
  padding: 12px 20px; /* Add padding for spacing */
  border-radius: 6px; /* Rounded corners */
  margin-bottom: 10px; /* Space between list items */
  display: flex;
  justify-content: space-between; /* Space out button and text */
  align-items: center;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}



</style>
