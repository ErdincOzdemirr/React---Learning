import axios from 'axios';

// getData fonksiyonunu async olarak tanımlayın ve default olarak dışa aktarın.
export default async function getData(userId) {
  try {
    // Kullanıcı verileri için axios ile istek yapın
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

    // Kullanıcının post verileri için axios ile istek yapın
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    // Kullanıcı ve post verilerini birleştirin
    const combinedData = {
      ...userResponse.data,
      posts: postsResponse.data,
    };

    // Birleştirilmiş veriyi return edin
    return combinedData;
  } catch (error) {
    console.error('Veri alınamadı:', error);
    throw error;
  }
}

// getData fonksiyonunu kullanarak verileri çekin ve loglayın
getData(1)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Hata oluştu:', error);
  });