


 export const getGifs = async ( category  ) => {
    const apiKey = "bkK8p6ByqN42Kf189ahVrY4ptzkf68GE";

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=${apiKey}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => {
       return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url,
       };
    });

    return gifs;


 };