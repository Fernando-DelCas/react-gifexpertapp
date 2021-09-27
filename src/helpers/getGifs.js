


export const getGifs = async( category ) => {
   
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=12&api_key=6j67AROmQ4VoABNbVCgJqjeQQ4ETJmpN`;
    const resp =  await fetch( url );
    const { data } = await resp.json();

    //Se realiza un map de los datos obtenidos de la respuesta de la API de Gifs
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}