const handleClick = async (e) => {
  e.preventDefault();
  let injectedHTML = "";
  let link = document.getElementById("link").value;

  if (Client.checklink(link)) {
    const res = await fetch("http://localhost:8081/link", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link }),
    });
    const { text, agreement, confidence, score_tag, irony, subjectivity } =
      await res.json();

    injectedHTML = `
 
      <ul>
      <li>Score: ${score_tag}</li>
      <li>Irony: ${irony}</li>
      <li>subjectivity : ${subjectivity} </li>
          <li>Agreement: ${agreement}</li>
          <li>Confidence: ${confidence}</li>
      </ul>
`;
  } else {
    injectedHTML = "<p>Please type vaild Link</p>";
  }

  document.getElementById("AnalysisDetails").innerHTML = injectedHTML;
};

export { handleClick };
