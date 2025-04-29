            const images = [
            "1953-1956.png",
             "1965-1966.png",
             "1971-1975.png",
             "1980-1981.png",
             "1991-1994.png",

             "1996-1997.png",
             "1997-2000.png",

             "2009-2010.png",

             "2014-2015.png",
             "2023.png"
            ];
            
const lists = [
   ["#10 - Geroge King", "#4 - Dolph Schayes","#5 - Paul Seymour"],
   ["#15 - Hal Greer", "#13 - Wilt Chamberlain", "#25 - Chet Walker"],
   ["#20 - Doug Collins", "#32 - Billy Cunningham","#30 - George McGinnis"],
   ["#34 - Charles Barkley", "#10 - Maurice Cheeks","#2 - Moses Malone", "#6 - Julius Erving"],
   ["#32 - Charles Barkley", "#33 - Hersey Hawkins","#35 - Clarence Weatherspoon"],
   ["#3 - Dana Barros", "#3 - Allen Iverson"],
   ["#3 - Allen Iverson", "#20 - Eric Snow", "#4 - Pepe Sanchez"],
   ["#9 - Andre Iguodala", "#21 - Thadeus Young", "#23 - Lou Williams"],
   ["#4 - Nerlens Noel", "#11 - Jrue Holiday"],
   ["#0 - Tyrese Maxey", "#12 - Tobias Harris", "#21 - Joel Embiid"]
];

const paragraphs = [
   "  The team was formally known as the 'Syracuse Nationals' and played in New York, these uniforms were worn in the early 1950s and set the tone for future designs.",
   "After moving out of New York, the franchise rebranced to the Philadelphia 76ers and played in Hershey, PA. With a Red, White, and Blue color scheme, this team embodied the new USA image.",
   "By the early 1970s, flashier uniform elements began to appear. The team experimented with stars along the sides and brighter color tones. It was a reflection of the NBA’s cultural shift toward a more dynamic and entertaining brand.",
   "The 1980-81 set is closely associated with the team’s championship run. They’re forever tied to legends like Julius Erving and the height of Sixers dominance.",
   "In the early 1990s, the team leaned the farthest they could into USA. These jerseys modernized the classic styling while preserving the team’s red, white, and blue tradition.",
   "While keeping their USA color scheme, the team attempted to modernize the jersey. This was seen as a darker time for sixers uniforms. It feels like all the personaly was sucked out.",
   "The 1997 redesign emphasized power and individuality with Iverson’s rise. The uniforms reflected that energy. Red, black, and gold dominated the palette, bringing a rebellious edge.",
   "As the team looked to the past for inspiration, the 2009–2010 jerseys brought back a throwback vibe. They echoed the glory days of the ‘80s while subtly updating fonts and materials.",
   "This was the uniform for the process era. In 2014–2015, the Sixers released a cleaner white uniform that put the focus on simplicity. The logo was updated for a new generation, and the jersey reflected a back-to-basics approach. It was part of a broader rebranding effort for the team.",
   "The 2023 design represents a refined blend of tradition and modern aesthetics. The materials are cutting-edge, while the visuals pay homage to the team’s long history. These uniforms tell a story of evolution and enduring identity."];
   
            let currentIndex = 0;
   
function cycleImage() {
    const listElement = document.getElementById("jersey-list");
    const paragraphElement = document.getElementById("jersey-description");
   const imageElement = document.getElementById("jersey-image");
   currentIndex = (currentIndex + 1) % images.length;
   imageElement.src = images[currentIndex];
   listElement.innerHTML = "";
   lists[currentIndex].forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
         listElement.appendChild(li);
     });
       paragraphElement.textContent = paragraphs[currentIndex];
    }

   
   
   
    document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactform");
      const successMessage = document.getElementById("successMessage");
          
       form.addEventListener("submit", function(event) {
          event.preventDefault();
           const name = document.getElementById("name").value;
           const email = document.getElementById("email").value;
           const message = document.getElementById("message").value;
           
           if (name && email && message) {
                successMessage.style.display = "block"; 
                form.reset(); 
              } else {
                alert("Please fill out all fields.");
              }
            });
          });           