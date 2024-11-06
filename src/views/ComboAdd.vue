<template>
  <div class="workout-main">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h1 class="page-title">Serilerim</h1>
      <button class="btn btn-secondary" @click="toBack()">Geri</button>
    </div>
    <!-- Seri Ekle Butonu -->
    <div class="d-flex justify-content-end">
      <button class="btn btn-success" @click="showAddSeriesModal">Seri Ekle</button>
    </div>

    <!-- Seri Listesi -->
    <ul class="list-group mt-3">
      <li v-for="(seri, index) in series" :key="index"
        class="list-group-item d-flex justify-content-between align-items-center">
        {{ seri.name }}
        <div>
          <button class="btn btn-danger btn-sm me-1" @click="deleteSeries(seri.name)">Sil</button>
          <button class="btn btn-primary btn-sm" @click="showEditSeriesModal(index)">Düzenle</button>
        </div>
      </li>
    </ul>

    <!-- Seri Ekle Modal -->
    <div v-if="isAddSeriesModalVisible" class="modal-overlay">
      <div class="modal-content">
        <h5 class="modal-title">Seri Ekle</h5>
        <input type="text" v-model="newSeriesName" class="form-control" placeholder="Seri Adı">
        <p class="mt-3">Eskiv Aralığı:</p>
        <select v-model="weaveInterval" class="form-control">
          <option value="-1">Yok</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
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
        <h6>Eskiv Aralığı: {{ selectedSeries.weaveInterval }} Harekette Bir</h6>
        <ul class="list-group mt-3">
          <li v-for="(move, moveIndex) in selectedSeries.moves" :key="moveIndex"
            class="list-group-item d-flex justify-content-between align-items-center">
            {{ move.type }} - {{ move.side }}
            <button class="btn btn-danger btn-sm" @click="removeMove(moveIndex)">Sil</button>
          </li>
        </ul>

        <!-- Yeni Hareket Ekle -->
        <p class="mt-3">Hareket Türü Seç:</p>
        <select v-model="newMoveType" class="form-control">
          <option value="Kroşe">Kroşe</option>
          <option value="Direkt">Direkt</option>
          <option value="Aparkat">Aparkat</option>
          <option value="Yüksek Tekme">Yüksek Tekme</option>
          <option value="Yan Tekme">Yan Tekme</option>
          <option value="Bacağa Tekme">Bacağa Tekme</option>
          <option value="Direkt Tekme">Direkt Tekme</option>
        </select>

        <p class="mt-3">Taraf Seç:</p>
        <select v-model="newMoveSide" class="form-control">
          <option value="Sağ">Sağ</option>
          <option value="Sol">Sol</option>
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
      weaveInterval: -1, 
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
    toBack() {
      this.$router.push('/'); // Geri sayfasına yönlendir
    },
    showAddSeriesModal() {
      this.newSeriesName = ''; // Seri adı alanını temizle
      this.isAddSeriesModalVisible = true; // Modalı göster
    },
    closeAddSeriesModal() {
      this.isAddSeriesModalVisible = false; // Modalı kapat
    },
    addSeries() {
      if (this.newSeriesName) {
        this.series.push({ name: this.newSeriesName, moves: [], weaveInterval: this.weaveInterval });
        this.saveToLocalStorage(); // Seriyi kaydet
        this.closeAddSeriesModal(); // Modalı kapat
      }
    },
    deleteSeries(seriesName) {
      const confirmation = confirm(`"${seriesName}" adlı seriyi silmek istediğinize emin misiniz?`);
      if (confirmation) {
        this.series = this.series.filter(seri => seri.name !== seriesName);
        this.saveToLocalStorage(); // Güncellenmiş seriyi kaydet
      }
    },

    showEditSeriesModal(index) {
      this.selectedSeries = this.series[index]; // Düzenlenecek seriyi seç
      this.selectedSeriesIndex = index;
      this.newMoveType = ''; // Hareket tipini sıfırla
      this.newMoveSide = ''; // Tarafı sıfırla
      this.isEditSeriesModalVisible = true; // Modalı göster
    },

    closeEditSeriesModal() {
      this.isEditSeriesModalVisible = false; // Modalı kapat
    },
    addMove() {
      if (this.newMoveType && this.newMoveSide) {
        this.series[this.selectedSeriesIndex].moves.push({
          type: this.newMoveType,
          side: this.newMoveSide
        });
        this.saveToLocalStorage(); // Hareketi kaydet
        this.newMoveType = ''; // Hareket tipini sıfırla
        this.newMoveSide = ''; // Tarafı sıfırla
      }
    },
    removeMove(moveIndex) {
      this.series[this.selectedSeriesIndex].moves.splice(moveIndex, 1); // Hareketi sil
      this.saveToLocalStorage(); // Seriyi güncelle
    },
    saveToLocalStorage() {
      localStorage.setItem('series', JSON.stringify(this.series)); // Serileri kaydet
    }
  }
};
</script>

<style scoped>
.workout-main {
  background-color: #333;/* Dark textured background */
  padding: 5%;
  color: white;
  height: 100vh;
}

body {
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e); /* Dark gradient background */
  color: white; /* White text */
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.836);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal Content */
.modal-content {
  padding: 20px;
  border: 2px solid #f44336; /* Red border */
  border-radius: 12px; /* Rounded corners */
  background-color: #2a2a2a;
  color: white;
  width: 400px;
}

/* Buttons */
button {
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-success {
  background-color: #1a4424;
}

.btn-danger {
  background-color: #7c160e;
}

.btn-primary {
  background-color: #555704;
}

button:hover {
  opacity: 0.85;
}

.list-group-item {
  background-color: #343a40; 
  border: 1px solid #444;
color: aliceblue;}

.page-title {
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
}
</style>
