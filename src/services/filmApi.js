async function getFetch() {
//   let key = "21072746-8c3dd0d1e8e29ef8d58afec32";
  const apiKey = `3edb87365eb5f7934b30e53b3f8713fc`;
  const baseUrl = `https://api.themoviedb.org/3/`;

  // прописываем параметры запроса, согласно доков API
  // ДОБАВЛЯЕМ ПАРАМЕТР ДЛЯ СТРАНИЦ
  let params = `trending/all/week?api_key=${apiKey}`;

  // сливаем встроку запроса перед отправкой
  let url = baseUrl + params;

  // создаем объект опций для запроса, по докам API, для передачи ключа
  let options = {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  };

  // собственно запрос и обработка ответа на него
  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.movies;
  return data;
}

export default { getFetch };