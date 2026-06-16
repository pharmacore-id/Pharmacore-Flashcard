
async function loadTopics(){

  const res =
    await fetch(
      API_URL + "?action=getTopics"
    );

  const data =
    await res.json();

  const container =
    document.getElementById(
      "topicsContainer"
    );

  container.innerHTML = "";

  data.topics.forEach(topic=>{

    const block =
      document.createElement("div");

    block.className = "topic-block";

    let html = `
      <h2>${topic.mainTopic}</h2>
    `;

    topic.subTopics.forEach(sub=>{

      html += `
        <div
          class="subtopic-card"
          onclick="
            startTopic(
              '${topic.mainTopic}',
              '${sub}'
            )
          ">
          ${sub}
        </div>
      `;

    });

    block.innerHTML = html;

    container.appendChild(block);

  });

}

function startTopic(
  mainTopic,
  subTopic
){

  localStorage.setItem(
    "mainTopic",
    mainTopic
  );

  localStorage.setItem(
    "subTopic",
    subTopic
  );

  location.href =
    "review.html";

}

loadTopics();
