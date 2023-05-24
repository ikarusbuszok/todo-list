var tevekenysegek = [];

// Tevékenység hozzáadása a listához
function tevekenysegHozzaadasa(tevekenyseg) {
  tevekenysegek.push(tevekenyseg);
}

// Tevékenységek listázása
function tevekenysegekListazasa() {
  console.log("Tevékenységek listája:");
  for (var i = 0; i < tevekenysegek.length; i++) {
    console.log(i + 1 + ". " + tevekenysegek[i]);
  }
}