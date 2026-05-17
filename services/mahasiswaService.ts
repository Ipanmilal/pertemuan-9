import axios from 'axios';
import { getRequestParams } from '~/utils/apiUtils';

// menagambil data mahasiswa
export async function fetchMahasiswa() {
    const router = useRouter();
    try {
      const {protocol, host } = getRequestParams();
      const url = `${protocol}//${host}/api/mahasiswa`
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error('Error fetching mahasiswa:', error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        // router.replace('/login');
      }
      throw error;
    }
  }
