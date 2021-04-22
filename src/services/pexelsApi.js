async function getFetch(q, p, pP = 12) {
//   let key = "21072746-8c3dd0d1e8e29ef8d58afec32";
    let key = `563492ad6f917000010000013bbd01457a39431887d74f69015c0d48`;
  const baseUrl = `https://api.pexels.com/v1`;

  // прописываем параметры запроса, согласно доков API
  // ДОБАВЛЯЕМ ПАРАМЕТР ДЛЯ СТРАНИЦ
  let params = `/search?query=${q}&per_page=${pP}&page=${p}`;

  // сливаем встроку запроса перед отправкой
  let url = baseUrl + params;

  // создаем объект опций для запроса, по докам API, для передачи ключа
  let options = {
    method: "GET",
    headers: {
      Authorization: key,
    },
  };

  // собственно запрос и обработка ответа на него
  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.photos;
  return data;
}

export default { getFetch };