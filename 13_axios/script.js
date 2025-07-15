// AXIOS GLOBALS

axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

const URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

// GET REQUEST
function getTodos() {
  axios({
    method: "get",
    url: URL,
  })
    .then((response) => showOutput(response))
    .catch((error) => console.log(error.message));
}

// POST REQUEST
function addTodo() {
  axios({
    method: "post",
    url: URL,
    data: {
      firstName: "Raymund",
      lastName: "Corpuz",
    },
  })
    .then((response) => showOutput(response))
    .catch((error) => console.log(error.message));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios({
    method: "patch",
    url: `${URL}/1`,
    data: {
      title: "New Raymund",
      complete: true,
      id: 1,
    },
  })
    .then((response) => showOutput(response))
    .catch((error) => console.log(error.message));
}

// DELETE REQUEST
function removeTodo() {
  axios({
    method: "delete",
    url: `${URL}/1`,
  })
    .then((response) => showOutput(response))
    .catch((error) => console.log(error.message));
}

// SIMULTANEOUS DATA
function getData() {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    ])
    .then(axios.spread((todo, post) => showOutput(post)))
    .catch((error) => console.log(error.message));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      "Contents-Type": "Application/JSON",
      Authorization: "sometoken",
    },
  };

  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New Todos",
        complete: true,
      },
      config
    )
    .then((response) => showOutput(response))
    .catch((error) => console.log(error.message));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "Harry Potter",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };

  axios(options).then((res) => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
  axios
    .get("https://jsonplaceholder.typicode.com/todoss")
    .then((res) => showOutput(res))
    .catch((error) => {
      if (error.message) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);

        alert("Page Not Found");
      }
    });
}

// CANCEL TOKEN
function cancelToken() {}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCE
const axiosInstance = axios.create({});
// axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
