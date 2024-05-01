const news_list = [
  {
    id: 1,
    image:
      "https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/72627/photo-2023-10-25-135043.jpeg?itok=3kJ4vVM3",
    desc: "hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas totam consequatur necessitatibus sit perspiciatis corrupti illo eum ipsam quam beatae magnam non placeat commodi, natus veniam dicta asperiores iste in, eaque tempore. Perspiciatis dolores debitis numquam, eaque hic veritatis dicta"
    ,
  },
  {
    id: 2,
    image:
      "https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/72627/photo-2023-10-25-135043.jpeg?itok=3kJ4vVM3",
    desc: "World Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas totam consequatur necessitatibus sit perspiciatis corrupti illo eum ipsam quam beatae magnam non placeat commodi, natus veniam dicta asperiores iste in, eaque tempore. Perspiciatis dolores debitis numquam, eaque hic veritatis dicta."
    ,
  },
  {
    id: 3,
    image:
      "https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/72627/photo-2023-10-25-135043.jpeg?itok=3kJ4vVM3",
    desc: "!!!            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas totam consequatur necessitatibus sit perspiciatis corrupti illo eum ipsam quam beatae magnam non placeat commodi, natus veniam dicta asperiores iste in, eaque tempore. Perspiciatis dolores debitis numquam, eaque hic veritatis dicta."
    ,
  },
];
localStorage.setItem("news_list", JSON.stringify(news_list));
function getNews() {
  const news_list = JSON.parse(localStorage.getItem("news_list"));
  for (let i = 0; i < news_list.length; i++) {

    let description = news_list[i].desc

    if (description.length > 40) {
      description = description.substring(0, 40) + "..."
    }


    document.querySelector('.news_container').innerHTML += `
    <div class="new">
    <img src="${news_list[i].image}" onclick="logHello()"/>
    <p class="new_desc">
        ${description}
    </p>
    </div>
    `
  }
}
getNews();


function logHello() {
  console.log('hello');
}
