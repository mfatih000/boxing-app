<template>
  <div class="m-3">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h1>Serilerim</h1>
      <button class="btn btn-secondary" @click="toBack()">Geri</button>
    </div>
    <!-- Seri Ekle Butonu -->
    <div class="d-flex justify-content-end">
      <button class="btn btn-success" @click="showAddSeriesModal">Seri Ekle</button>
    </div>

    <!-- Seri Listesi -->
    <ul class="list-group mt-3">
      <li v-for="(seri, index) in series" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
        {{ seri.name }}
        <button class="btn btn-primary btn-sm" @click="showEditSeriesModal(index)">Düzenle</button>
      </li>
    </ul>

    <!-- Seri Ekle Modal -->
    <div v-if="isAddSeriesModalVisible" class="modal-overlay">
      <div class="modal-content">
        <h5 class="modal-title">Seri Ekle</h5>
        <input type="text" v-model="newSeriesName" class="form-control" placeholder="Seri Adı">
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeAddSeriesModal">Kapat</button>
          <button class="btn btn-primary" @click="addSeries">Ekle</button>
        </div>
      </div>
    </div>

    <!-- Hareket Ekle Modal -->
    <div v-if="isEditSeriesModalVisible" class="modal-overlay">
      <div class="modal-content">
        <h5 class="modal-title">Hareket Ekle: {{ selectedSeries.name }}</h5>

        <!-- Mevcut hareketlerin listesi ve silme butonları -->
        <ul class="list-group mt-3">
          <li v-for="(move, moveIndex) in selectedSeries.moves" :key="moveIndex" class="list-group-item d-flex justify-content-between align-items-center">
            {{ move.type }} - {{ move.side }}
            <button class="btn btn-danger btn-sm" @click="removeMove(moveIndex)">Sil</button>
          </li>
        </ul>

        <!-- Yeni Hareket Ekle -->
        <p class="mt-3">Hareket Türü Seç:</p>
        <select v-model="newMoveType" class="form-control">
          <option value="kroşe">Kroşe</option>
          <option value="direkt">Direkt</option>
          <option value="aparkat">Aparkat</option>
        </select>

        <p class="mt-3">Taraf Seç:</p>
        <select v-model="newMoveSide" class="form-control">
          <option value="sağ">Sağ</option>
          <option value="sol">Sol</option>
        </select>

        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeEditSeriesModal">Kapat</button>
          <button class="btn btn-primary" @click="addMove">Hareket Ekle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [], // Seri listesi
      newSeriesName: '', // Yeni seri için geçici isim
      selectedSeries: null, // Düzenlenecek seri
      selectedSeriesIndex: null, // Düzenlenecek serinin indeksi
      newMoveType: '', // Yeni hareket tipi
      newMoveSide: '', // Yeni hareket tarafı
      isAddSeriesModalVisible: false, // Seri ekleme modal görünürlüğü
      isEditSeriesModalVisible: false // Hareket ekleme modal görünürlüğü
    };
  },
  mounted() {
    // Uygulama ilk yüklendiğinde localStorage'dan verileri yükle
    const savedSeries = localStorage.getItem('series');
    if (savedSeries) {
      this.series = JSON.parse(savedSeries); // Serileri geri yükle
    }
  },
  methods: {
    toBack(){
      this.$router.push('/'); // Workout sayfasına yönlendir
    },
    // Seri ekle modalını göster
    showAddSeriesModal() {
      this.newSeriesName = ''; // Seri adı alanını temizle
      this.isAddSeriesModalVisible = true; // Modalı göster
    },
    // Seri ekleme modalını kapat
    closeAddSeriesModal() {
      this.isAddSeriesModalVisible = false; // Modalı kapat
    },
    // Yeni seri ekle
    addSeries() {
      if (this.newSeriesName) {
        this.series.push({ name: this.newSeriesName, moves: [] });
        this.saveToLocalStorage(); // Seriyi kaydet
        this.closeAddSeriesModal(); // Modalı kapat
      }
    },
    // Hareket ekleme modalını göster
    showEditSeriesModal(index) {
      this.selectedSeries = this.series[index]; // Düzenlenecek seriyi seç
      this.selectedSeriesIndex = index;
      this.newMoveType = ''; // Hareket tipini sıfırla
      this.newMoveSide = ''; // Tarafı sıfırla
      this.isEditSeriesModalVisible = true; // Modalı göster
    },
    // Hareket ekleme modalını kapat
    closeEditSeriesModal() {
      this.isEditSeriesModalVisible = false; // Modalı kapat
    },
    // Yeni hareket ekle
    addMove() {
      if (this.newMoveType && this.newMoveSide) {
        this.series[this.selectedSeriesIndex].moves.push({
          type: this.newMoveType,
          side: this.newMoveSide
        });
        this.saveToLocalStorage(); // Hareketi kaydet
        this.newMoveType = ''; // Hareket tipini sıfırla
        this.newMoveSide = '';
        // this.closeEditSeriesModal(); // Modalı kapat
      }
    },
    // Hareketi seriden sil
    removeMove(moveIndex) {
      this.series[this.selectedSeriesIndex].moves.splice(moveIndex, 1); // Hareketi diziden kaldır
      this.saveToLocalStorage(); // Seriyi güncelle ve kaydet
    },
    // localStorage'a kaydetme işlemi
    saveToLocalStorage() {
      localStorage.setItem('series', JSON.stringify(this.series)); // Serileri localStorage'a kaydet
    }
  }
};
</script>

<style scoped>
/* Genel Arka Plan */
body {
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e); /* Gradient geçiş: koyu mor, lacivert ve koyu gri tonlar */
  color: white; /* Metinler için beyaz */
  font-family: 'Roboto', sans-serif; /* Sportif bir yazı stili */
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal Stil */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.836); /* Daha koyu ve yoğun bir opaklık */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  /* background-color: rgba(255, 255, 255, 0.753);  */
  border: 2px solid #f44336; /* Kırmızı kenarlık */
  /* box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.6);  */
  padding: 20px;
  border-radius: 12px; /* Daha yuvarlak köşeler */
  width: 400px;
  color: #fff; /* Beyaz metin */
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

/* Butonlar için stil */
button {
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-success {
  background-color: #28a745; /* Yeşil buton */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Hafif gölge */
}

.btn-success:hover {
  background-color: #218838; /* Daha koyu yeşil */
}

.btn-primary {
  background-color: #007bff; /* Mavi buton */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Hafif gölge */
}

.btn-primary:hover {
  background-color: #0056b3; /* Daha koyu mavi */
}

.btn-danger {
  background-color: #dc3545; /* Kırmızı buton */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Hafif gölge */
}

.btn-danger:hover {
  background-color: #c82333; /* Daha koyu kırmızı */
}

/* Liste Stilleri */
ul.list-group {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

.list-group-item {
  background-color: rgba(255, 255, 255, 0.678); /* Hafif şeffaf item */
  border: 1px solid #f44336; /* Kırmızı kenarlık */
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5); /* Hafif gölgeler */
}

/* Form Stilleri */


/* Hover ve Focus Efektleri */
input.form-control:focus, select.form-control:focus {
  outline: none;
  border-color: #f44336; /* Kırmızı renkte odaklanma */
  box-shadow: 0px 0px 5px #f44336;
}
</style>


