import { defineStore } from "pinia";
import { fetchMahasiswa } from "~/services/mahasiswaService";

export interface Mahasiswa {
  id_mahasiswa: number;
  nim: string;
  nama: string;
  email: string;
  id_jurusan: string;
  detail_jurusan: Jurusan;
}

export interface Jurusan {
  id_jurusan: number;
  nama_jurusan: string;
  akreditasi: string;
}

export const useMahasiswaStore = defineStore('mahasiswa',{
  state: () => ({
    mahasiswadata: [] as Mahasiswa[]
  }),
  actions: {
    // menampilkan data mahasiswa
    async fetchMahasiswa() {
        try {
          const response = await fetchMahasiswa();
          this.mahasiswadata = response.data.result;
          return response;
        } catch (error) {
          console.error('Error fetching mahasiswa:', error);
          throw error;
        }
      },


  }
})