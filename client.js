let result = document.querySelector("p");

const getResult = async () => {
  try {
    const res = await fetch("/flip");
    const data = await res.json();
    console.log(data);
    result.textContent = data.decision;
  } catch (err) {
    console.log(err);
  }
};
document.querySelector("button").addEventListener("click", getResult);
