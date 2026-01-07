document.addEventListener("DOMContentLoaded", function () {
  const queryString = new URLSearchParams(window.location.search);
  const query = queryString.get("q")?.toLowerCase();
  const resultsContainer = document.getElementById("results");

  fetch("JS/data.json")
      .then((response) => response.json())
      .then((data) => {
          if (query) {
              const results = data.filter(item =>
                  item.title.toLowerCase().includes(query) ||
                  item.content.toLowerCase().includes(query)
              );

              if (results.length > 0) {
                  results.forEach(result => {
                      const resultElement = document.createElement("div");
                      resultElement.innerHTML = `
                          <h3>${result.title}</h3>
                          <p>${result.content}</p>
                          <a href="${result.url}">Read more</a>
                      `;
                      resultsContainer.appendChild(resultElement);
                  });
              } else {
                  resultsContainer.innerHTML = `<p>No results found for "${query}".</p>`;
              }
          } else {
              resultsContainer.innerHTML
          }
      })
      .catch((error) => {
          console.error("Error fetching data:", error);
          resultsContainer.innerHTML = `<p>Unable to load search results. Please try again later.</p>`;
      });
});
