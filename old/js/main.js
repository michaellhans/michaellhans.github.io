// main.js
// Contain all script for index.html

// Return an inline HTML contain table element based on array
function makeTableHTML(arr) {
  var result = "<table class='table-content'>";
  for (var i = 0; i < arr.length; i++) {
    result += '<tr>';
    for (var j = 0; j < arr[i].length; j++) {
      if (j == 0) {
        result += '<td><b>' + arr[i][j] + '</b></td>';
      } else {
        result += '<td>' + arr[i][j] + '</td>';
      }
    }
    result += '</tr>';
  }
  result += '</table>';
  return result;
}

// Return an inline HTML contain paragraph element based on array
function makeParagraphHTML(arr) {
  var result = '';
  for (var i = 0; i < arr.length; i++) {
    result += "<p class='paragraph-content'>";
    result += arr[i];
    result += '</p>';
  }
  return result;
}

// Event Handler when the about button is clicked
function aboutClicked() {
  document.getElementById('content-detail').innerHTML = makeParagraphHTML(
    aboutInfo
  );
}

// Event Handler when the education button is clicked
function educationClicked() {
  document.getElementById('content-detail').innerHTML = makeTableHTML(
    educationInfo
  );
}

// Event Handler when the contact info button is clicked
function contactClicked() {
  document.getElementById('content-detail').innerHTML = makeTableHTML(
    contactInfo
  );
}

// Variable Dictionary
var educationInfo = [
  ['TK: ', 'TK Santa Maria Fatima (2004 - 2004)'],
  ['SD: ', 'SD Santa Maria Fatima (2006 - 2012)'],
  ['SMP: ', 'SMP Maria Immaculata Marsudirini (2012 - 2015)'],
  ['SMA: ', 'SMA Fons Vitae 1 (2015 - 2018)'],
  ['PTN: ', 'Institut Teknologi Bandung - Teknik Informatika (2018 - Present)'],
];

var contactInfo = [
  ['Phone:', '+62 813 1567 8220'],
  ['Address:', 'Jalan PTB Duren Sawit Blok N IV / 9 Jakarta Timur 13440'],
  ['E-mail:', 'michaelhans777@gmail.com'],
  ['Blog:', 'https://michaelh-shadow.blogspot.com'],
  ['Birthday', 'September 7, 2000'],
  ['Gender:', 'Male'],
];

var aboutInfo = [
  [
    'Michael Hans adalah seorang manusia biasa yang sedang menekuni pemrograman sejak ia SMA. Saat ini, Michael Hans adalah mahasiswa aktif Teknik Informatika Institut Teknologi Bandung (ITB) angkatan 2018.',
  ],
  [
    'Baginya, hidup itu seperti sebuah video-game. Kita manusia adalah karakter utamanya. Karakter utama ini memiliki stats-stats tertentu yang melambangkan seberapa jauh achievement yang sudah kita capai di hidup ini. Hidup ini perlu dimanfaatkan sebesar-besarnya. Semua keputusan berada di tangan kita tanpa terkecuali. Kita bebas menentukan jalan hidup kita dan kita juga bebas ingin menjadi orang seperti apa.',
  ],
];

// Initial Script
aboutClicked();
