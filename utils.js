export const fetchData = async () => {
  const API = "https://my-json-server.typicode.com/savayer/demo/posts";
  const data = await fetch(API);

  const json = await data.json();

  let newData = [];
  json.forEach((item) => {
    newData.push({
      id: item.id,
      title: item.title.en,
      link_title: item.link_title,
      link: item.link,
      text: item.body.en.substr(0, 50) + "...",
    });
  });

  return newData;
};
