const apikey = "asdfasdf";
const url = `asdfasdfasdf=${apikey}`;

const peiticion = fetch(url);

// peticion
//   .then((resp) => {
//     console.log(resp);
//     resp.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch(console.war);

// PROMESAS ANIDADAS
peiticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    console.log(data.images.original.url);

    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.bodu.append(img);
  })
  .catch(console.warn);
