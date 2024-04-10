const API_KEY = '43320774-2e32212a247c0a8af917c24eb';
export async function searchImages(keyword) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    keyword
  )}&image_type=photo&orientation=horizontal&safesearch=true`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
