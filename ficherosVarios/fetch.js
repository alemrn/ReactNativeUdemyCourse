const url = "https://jsonplaceholder.typicode.com/users";

const fn = async () => {
  const response = await fetch(url, {
    method: "POST", //GET POST PUT PATCH DELETE
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer acadebieseasdfkalskasjdkfashdf",
    },
    body: JSON.stringify({
      name: "Chachito Feliz",
      website: "google.com",
    }),
  });

  const data = await response.json();
  console.log(data);
};

fn();
