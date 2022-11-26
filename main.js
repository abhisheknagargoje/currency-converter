document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#currency-converter")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const {
        target: { from, to, amount },
      } = event;

      let myHeaders = new Headers();
      const key = config.SECRET_API_KEY;
      myHeaders.append("apikey", key);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
      const display = document.querySelector("#result");
      try {
        const response = await fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`,
          requestOptions
        );
        const result = await response.json();
        display.textContent = `${to.value} ${result.result}`;
      } catch (error) {
        console.log(error);
      }
    });
});
