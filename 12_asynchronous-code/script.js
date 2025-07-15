async function getData() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

const datas = getData();

const root = document.querySelector(".root");

// console.log(typeof data);

// Object.values(data).forEach(([key, value]) => {
//   console.log(`${value}`);
// });

datas.then((data) => {
  data.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item.title;
    root.appendChild(p);
  });
});
