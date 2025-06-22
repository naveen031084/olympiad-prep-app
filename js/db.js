// NSO Questions
const nsoQuestions = [
  { question: "We eat the seeds of__________.", options: ["Apple", "Banana", "Watermelon", "Carrot"], answer: "Watermelon" },
  { question: "Which of the following animals is NOT a pet?", options: ["Dog", "Cat", "Tiger", "Rabbit"], answer: "Tiger" }
];

// IMO Questions
const imoQuestions = [
  { question: "Which is a size?", options: ["Box", "Mat", "Large"], answer: "Large" },
  { question: "Which can you spend?", options: ["Rules", "Money", "Luck"], answer: "Money" }
];

// IEO Questions
const ieoQuestions = [
  { question: "Choose the correct word that describes the picture.", options: ["Kitchen", "Dining room", "Shop"], answer: "Kitchen" },
  { question: "They ______________ playing football.", options: ["like", "likes", "liking"], answer: "like" }
];

// IGKO Questions
const igkoQuestions = [
  { question: "Which plant gives us cooking oil?", options: ["Sunflower", "Wheat", "Mango"], answer: "Sunflower" },
  { question: "The famous monument shown in the given picture is called 'Statue of Liberty'. Where is it located?", options: ["Paris", "London", "New York", "Berlin"], answer: "New York" }
];

function generateQuestions(subject) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  let questions = [];

  if (subject === "nso") questions = nsoQuestions;
  else if (subject === "imo") questions = imoQuestions;
  else if (subject === "ieo") questions = ieoQuestions;
  else if (subject === "igko") questions = igkoQuestions;

  questions.forEach((q, index) => {
    container.innerHTML += `
      <div class="question">
        <p><strong>Q${index + 1}:</strong> ${q.question}</p>
        <ul>
          ${q.options.map(opt => `<li>${opt}</li>`).join("")}
        </ul>
        <p><em>Correct Answer: ${q.answer}</em></p>
      </div>
    `;
  });
}
