<template>
  <h1>Data Mahasiswa</h1>
  <table border="1">
    <thead>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Nim</th>
        <th>Jurusan</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="(data, index) in mahasiswaData">
            <td>{{ index + 1 }}</td>
            <td>{{ data.nama }}</td>
            <td>{{ data.nim }}</td>
            <td>{{ data.detail_jurusan.nama_jurusan }}</td>
        </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { useMahasiswaStore, type Mahasiswa } from "~/stores/mahasiswaStore";

export default defineComponent({
  nama: "tablemahasiswa",
  setup() {
    // komponen mahasiswa
    const mahasiswaStore = useMahasiswaStore();
    const mahasiswaData = ref<Mahasiswa[]>([]);

    // fungsi untuk menampilkan data mahasiswa
    const fetchMahasiswa = async () => {
      try {
        await mahasiswaStore.fetchMahasiswa();
        mahasiswaData.value = mahasiswaStore.mahasiswadata;
      } catch (error) {
        console.error("error", error);
      }
    };

    onMounted(async () => {
      await fetchMahasiswa();
    });

    return {
      mahasiswaData,
    };
  },
});
</script>
