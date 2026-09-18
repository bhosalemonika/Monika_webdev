const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];

const horoscopes = [
  "Today brings new opportunities. Stay confident.",
  "Patience will lead you to success today.",
  "A pleasant surprise is waiting for you.",
  "Trust your instincts before making decisions.",
  "Focus on your goals and avoid distractions.",
  "A positive conversation may change your day.",
  "Your hard work will soon be rewarded.",
  "Take care of your health and rest well.",
  "Good luck is on your side today.",
  "Someone close to you needs your support.",
  "Financial opportunities may arise today.",
  "Stay optimistic and embrace new beginnings."
];

const luckyColors = [
  "Red",
  "Green",
  "Yellow",
  "Silver",
  "Gold",
  "Navy Blue",
  "Pink",
  "Maroon",
  "Purple",
  "Brown",
  "Sky Blue",
  "Sea Green"
];

const luckyNumbers = [
  9,
  6,
  5,
  2,
  1,
  7,
  8,
  4,
  3,
  10,
  11,
  12
];

const careerAdvice = [
  "Take initiative at work.",
  "Focus on improving your skills.",
  "Networking will help your career.",
  "Avoid rushing important decisions.",
  "A promotion opportunity is near.",
  "Learn something new today.",
  "Teamwork will bring success.",
  "Stay organized and productive.",
  "Your creativity will impress others.",
  "Plan your long-term goals.",
  "Leadership qualities will shine.",
  "Consistency is your greatest strength."
];

const lovePredictions = [
  "Romance is in the air.",
  "Express your feelings honestly.",
  "A meaningful conversation awaits.",
  "Spend quality time with loved ones.",
  "Your charm will attract attention.",
  "Forgiveness will strengthen relationships.",
  "Unexpected love may appear.",
  "Trust is the key today.",
  "Your partner appreciates your efforts.",
  "Singles may meet someone special.",
  "Family bonds grow stronger.",
  "Love yourself before loving others."
];

const healthTips = [
  "Drink plenty of water.",
  "Get at least 8 hours of sleep.",
  "Go for a morning walk.",
  "Practice meditation.",
  "Eat more fresh fruits.",
  "Reduce screen time.",
  "Exercise for 30 minutes.",
  "Maintain a balanced diet.",
  "Take short breaks while working.",
  "Stretch your muscles regularly.",
  "Avoid stress and stay calm.",
  "Practice deep breathing exercises."
];

const luckyQuotes = [
  "Believe in yourself.",
  "Every day is a fresh start.",
  "Success follows persistence.",
  "Stay positive and strong.",
  "Your future is bright.",
  "Dream big, work hard.",
  "Confidence creates opportunities.",
  "Kindness always returns.",
  "Embrace every challenge.",
  "Great things take time.",
  "Trust the journey.",
  "You are capable of amazing things."
];

const luckyGemstones = [
  "Diamond",
  "Emerald",
  "Agate",
  "Moonstone",
  "Ruby",
  "Sapphire",
  "Opal",
  "Topaz",
  "Turquoise",
  "Garnet",
  "Amethyst",
  "Aquamarine"
];

const astro = document.getElementById("astro");


astro.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

  
    const text = `
    Hi ${name} ${surname}<br><br>

   your Zodiac Sign is ${zodiacSigns[month-1]}<br><br>

    Horoscope : ${horoscopes[(day-1)%12]}<br><br>

    Career Advice : ${careerAdvice[year%12]}<br><br>

    Love Prediction : ${lovePredictions[(day*month)%12]}<br><br>

    Health Tip : ${healthTips[(name.length*surname.length)%12]}<br><br>

    Lucky Color : ${luckyColors[(day+month)%12]}<br><br>

    Lucky Number : ${luckyNumbers[(day+year)%12]}<br><br>

    Lucky Gemstone : ${luckyGemstones[(month+year)%12]}<br><br>

    Lucky Quote : ${luckyQuotes[(day+name.length)%12]}
    `;

    document.getElementById("result").innerHTML = text;

});