search = () => {
    searchString = document.getElementById("name").value;
    searchDate = document.getElementById("launch").value;
    const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=cbf31025`;
    const apiCall = fetch(API_URL);
    apiCall
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const output = data.Search.filter((movieYear) => {
          return movieYear.Year >= document.getElementById("launch").value;
        });
  
        const txtArray =output.map((item) => {
          return `
              
          <li class="result">
          <table>
          <tr>
          <td><img src="${item.Poster}" alt="${item.Title}">
  
          <td><h3>${item.Title}</h3>
          <p>Year: ${item.Year}</p>
          <p>imdbID: ${item.imdbID}</p></td></td>
          </tr>
          </table>
  
          </li>
  
         `;
        });
  
        document.getElementById("js-items").innerHTML = txtArray;
      });
  };
  
  const btn = document.getElementById("btn");
  btn.onclick = search;
