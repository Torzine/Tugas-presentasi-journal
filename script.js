

const slides = ['slide-cover','slide-1','slide-2','slide-3','slide-4','slide-5','slide-6','slide-7'];
let currentSlide = 0;

const dotLabels = ['Cover','Tujuan','Metode','Kaitan','Perbandingan','Kesimpulan','Kuis','Hasil'];
const dotsEl = document.getElementById('navDots');
slides.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i===0?' active':'');
  d.title = dotLabels[i];
  d.onclick = () => goToSlide(i);
  dotsEl.appendChild(d);
});

function goToSlide(idx) {
  document.getElementById(slides[currentSlide]).classList.remove('active');
  document.getElementById(slides[currentSlide]).style.display = '';
  if(currentSlide === 0) document.getElementById('slide-cover').style.display = 'none';
  
  currentSlide = idx;
  const allSections = document.querySelectorAll('section');
  allSections.forEach(s => { s.style.display = 'none'; });
  
  const target = document.getElementById(slides[idx]);
  target.style.display = idx===0 ? 'flex' : 'block';
  if(idx !== 0) { target.classList.add('active'); }
  else { target.style.flexDirection='column'; }
  
  document.querySelectorAll('.dot').forEach((d,i) => d.classList.toggle('active', i===idx));
  window.scrollTo({top:0, behavior:'smooth'});
  if(idx === 5) { qIndex = 0; score = 0; answered = false; setTimeout(renderQuestion, 0); }
}

function toggleRow(row) {
  row.classList.toggle('active');
}

(function(){
  document.querySelectorAll('section').forEach(s => s.style.display='none');
  document.getElementById('slide-cover').style.display='flex';
  document.getElementById('slide-cover').style.flexDirection='column';
})();


const questions = [
  {
    q: "Apa yang dimaksud dengan algoritma dalam pemrograman?",
    opts: ["Bahasa pemrograman tingkat tinggi seperti Python", "Langkah-langkah logis yang disusun secara sistematis untuk menyelesaikan masalah", "Perangkat lunak untuk membuat aplikasi mobile", "Kumpulan kode program yang sudah siap digunakan"],
    ans: 1,
    exp_correct: "Tepat sekali! Algoritma adalah serangkaian langkah logis dan terstruktur yang dibuat untuk menyelesaikan suatu masalah. Ia bukan bahasa pemrograman, tapi lebih kepada 'resep' atau 'blueprint' yang kemudian akan diimplementasikan dalam bahasa pemrograman apapun.",
    exp_wrong: "Perhatikan lagi. Algoritma bukan bahasa pemrograman atau perangkat lunak. Algoritma adalah langkah-langkah logis yang dirancang secara sistematis untuk menyelesaikan masalah — seperti resep masak sebelum memasak."
  },
  {
    q: "Metode penelitian apa yang digunakan dalam jurnal 'Mengidentifikasi Dasar Algoritma Pemrograman'?",
    opts: ["Eksperimen laboratorium dengan pengujian program", "Survei kepada mahasiswa IT", "Studi literatur / kajian pustaka", "Pengembangan aplikasi berbasis web"],
    ans: 2,
    exp_correct: "Benar! Jurnal ini menggunakan studi literatur (library research), yaitu mengumpulkan dan menganalisis data dari buku, jurnal ilmiah, artikel, dan referensi terkait — bukan eksperimen atau pembuatan aplikasi.",
    exp_wrong: "Kurang tepat. Jurnal ini menggunakan metode studi literatur atau kajian pustaka, bukan eksperimen, survei, atau pengembangan aplikasi. Penulis mengumpulkan data dari berbagai sumber referensi tertulis."
  },
  {
    q: "Manakah yang BUKAN termasuk bentuk penyajian algoritma yang dibahas dalam jurnal?",
    opts: ["Pseudocode", "Flowchart / Diagram Alir", "Deskriptif (narasi)", "Source code langsung dalam bahasa Python"],
    ans: 3,
    exp_correct: "Tepat! Source code dalam bahasa Python bukan bentuk penyajian algoritma — itu adalah hasil implementasi algoritma. Tiga bentuk algoritma yang dibahas jurnal adalah: deskriptif (narasi), pseudocode, dan flowchart.",
    exp_wrong: "Perlu diperhatikan. Tiga bentuk penyajian algoritma dalam jurnal adalah deskriptif, pseudocode, dan flowchart. Source code Python adalah implementasi program, bukan bentuk penyajian algoritma itu sendiri."
  },
  {
    q: "Apa hubungan antara algoritma dan program komputer menurut jurnal?",
    opts: ["Algoritma dan program komputer tidak ada kaitannya", "Program komputer dibuat sebelum algoritma dirancang", "Algoritma adalah rancangan logika yang diimplementasikan menjadi program", "Algoritma hanya digunakan dalam matematika, bukan pemrograman"],
    ans: 2,
    exp_correct: "Betul! Hubungannya jelas: algoritma = rancangan logika, coding = penerapan logika tersebut. Jurnal menegaskan bahwa 'program adalah implementasi algoritma ke dalam bahasa pemrograman.' Tanpa algoritma, program tidak memiliki arah.",
    exp_wrong: "Kurang tepat. Menurut jurnal: algoritma adalah rancangan logika, dan program adalah implementasi dari algoritma tersebut. Jadi algoritma dibuat dulu, baru dikodekan menjadi program dalam bahasa pemrograman tertentu."
  },
  {
    q: "Apa yang terjadi jika seorang programmer langsung coding tanpa memahami algoritma terlebih dahulu?",
    opts: ["Program selesai lebih cepat dan efisien", "Logika program kacau, kode sulit dipelihara, dan debugging memakan waktu lama", "Kualitas program tidak terpengaruh", "Program justru menjadi lebih optimal"],
    ans: 1,
    exp_correct: "Tepat sekali! Ini adalah kesalahan umum mahasiswa IT — terlalu fokus pada syntax tapi lemah logika. Akibatnya: logika program kacau, sulit scaling, kode sulit dipelihara (maintainability rendah), dan proses debugging menjadi sangat lama.",
    exp_wrong: "Perlu diingat. Langsung coding tanpa algoritma adalah kesalahan umum yang disebut jurnal. Hasilnya: logika berantakan, program sulit dikembangkan (scaling), kode sulit dipelihara, dan debugging memakan waktu sangat lama."
  },
  {
    q: "Konsep apa yang dibahas dalam jurnal terkait pengukuran efisiensi algoritma?",
    opts: ["Machine Learning dan Neural Network", "Big O Notation", "HTML dan CSS Framework", "Basis data relasional (SQL)"],
    ans: 1,
    exp_correct: "Benar! Big O Notation adalah cara mengukur dan membandingkan efisiensi algoritma berdasarkan jumlah operasi yang diperlukan seiring pertumbuhan data. Contoh: O(1) = konstan, O(n) = linear, O(n²) = kuadratik. Ini langsung dipakai programmer untuk menulis kode yang efisien.",
    exp_wrong: "Jawaban yang benar adalah Big O Notation. Konsep ini digunakan untuk menganalisis efisiensi algoritma — seberapa cepat atau lambat sebuah algoritma bekerja ketika ukuran datanya bertambah besar."
  },
  {
    q: "Apa strategi algoritma 'Divide and Conquer' dalam pemrograman?",
    opts: ["Menggabungkan semua data dalam satu struktur besar lalu memproses sekaligus", "Memecah masalah besar menjadi sub-masalah kecil, menyelesaikannya, lalu menggabungkan hasilnya", "Menyimpan hasil perhitungan sebelumnya agar tidak dihitung ulang", "Mencari solusi secara acak hingga ditemukan yang paling optimal"],
    ans: 1,
    exp_correct: "Tepat! Divide and Conquer = Bagi dan Taklukkan. Strateginya: (1) Bagi masalah besar menjadi bagian-bagian kecil, (2) Selesaikan tiap bagian, (3) Gabungkan hasilnya. Contoh terkenal: algoritma Merge Sort dan Quick Sort menggunakan strategi ini.",
    exp_wrong: "Kurang tepat. Divide and Conquer berarti membagi masalah besar menjadi sub-masalah yang lebih kecil, menyelesaikan masing-masing, lalu menggabungkan hasilnya. Bukan menyimpan hasil perhitungan (itu Dynamic Programming) atau mencari secara acak."
  },
  {
    q: "Apa perbedaan utama antara jurnal utama dan jurnal pembanding (G.G. Maulana, 2017)?",
    opts: ["Jurnal utama lebih praktis karena membuat aplikasi, jurnal pembanding lebih teoritis", "Jurnal utama fokus teori dasar algoritma, jurnal pembanding mengembangkan media pembelajaran berbasis web", "Kedua jurnal sama persis dalam metode dan outputnya", "Jurnal utama membahas database, jurnal pembanding membahas algoritma"],
    ans: 1,
    exp_correct: "Benar! Perbedaan utamanya ada di pendekatan dan output: Jurnal utama = teoritis, output berupa pemahaman konsep. Jurnal pembanding = praktis, output berupa platform web pembelajaran algoritma (El-Goritma) yang bisa langsung digunakan mahasiswa.",
    exp_wrong: "Perhatikan kembali. Jurnal utama menggunakan studi literatur dan menghasilkan pemahaman teori. Sedangkan jurnal pembanding (G.G. Maulana) mengembangkan media pembelajaran interaktif berbasis web bernama El-Goritma."
  },
  {
    q: "Domain pemrograman modern mana yang langsung berkaitan dengan konsep algoritma yang dibahas jurnal?",
    opts: ["Hanya matematika murni dan fisika komputasi saja", "Web development, mobile app, AI, game, dan sistem informasi", "Hanya database dan jaringan komputer", "Hanya pengembangan sistem operasi"],
    ans: 1,
    exp_correct: "Tepat! Algoritma adalah fondasi universal. Konsep seperti flowchart, pseudocode, Big O, divide and conquer, dan dynamic programming semuanya digunakan langsung di web development, mobile app, AI/machine learning, game development, dan sistem informasi.",
    exp_wrong: "Algoritma berlaku di semua domain pemrograman modern! Mulai dari web development (sorting, searching data), mobile app, AI/ML (optimization algorithms), game development (pathfinding), hingga sistem informasi — semuanya membutuhkan pemahaman algoritma."
  },
  {
    q: "Mengapa jurnal menyebut algoritma sebagai 'pondasi utama' sebelum membuat program?",
    opts: ["Karena algoritma adalah satu-satunya bahasa yang dipahami komputer", "Karena tanpa algoritma komputer tidak bisa dinyalakan", "Karena algoritma menentukan logika dan alur penyelesaian masalah secara sistematis sebelum proses coding", "Karena algoritma menggantikan seluruh fungsi bahasa pemrograman"],
    ans: 2,
    exp_correct: "Benar! Algoritma disebut pondasi karena ia menentukan CARA berpikir dan ALUR penyelesaian masalah sebelum dituangkan dalam kode. Seperti arsitek membuat blueprint sebelum membangun gedung — tanpa blueprint, bangunan bisa runtuh. Tanpa algoritma, program bisa tidak efisien atau bahkan salah logika.",
    exp_wrong: "Algoritma disebut pondasi karena ia adalah cetak biru (blueprint) logika penyelesaian masalah yang harus dirancang sebelum coding dimulai. Bukan karena menggantikan bahasa pemrograman atau mengoperasikan hardware — tapi karena menentukan cara berpikir yang sistematis."
  },
  {
  q: "Apa tujuan utama penggunaan pseudocode dalam perancangan algoritma?",
  opts: [
    "Menggantikan bahasa pemrograman",
    "Membuat program berjalan lebih cepat",
    "Menuliskan logika algoritma dengan bahasa yang mudah dipahami",
    "Menyimpan data program"
  ],
  ans: 2,
  exp_correct: "Benar! Pseudocode digunakan untuk menuliskan langkah-langkah algoritma dengan bahasa sederhana yang mudah dipahami sebelum diterjemahkan ke bahasa pemrograman.",
  exp_wrong: "Kurang tepat. Pseudocode berfungsi untuk menggambarkan logika algoritma secara sederhana sebelum proses coding dilakukan."
},
{
  q: "Mengapa flowchart sering digunakan dalam pembelajaran algoritma?",
  opts: [
    "Karena dapat menampilkan logika program secara visual",
    "Karena menggantikan fungsi compiler",
    "Karena mempercepat koneksi internet",
    "Karena dapat menyimpan database"
  ],
  ans: 0,
  exp_correct: "Tepat! Flowchart membantu memahami alur logika algoritma melalui simbol dan diagram yang mudah dibaca.",
  exp_wrong: "Jawaban yang benar adalah karena flowchart menampilkan logika algoritma secara visual sehingga lebih mudah dipahami."
},
{
  q: "Apa manfaat mempelajari algoritma sebelum mempelajari bahasa pemrograman?",
  opts: [
    "Agar dapat menginstal software lebih cepat",
    "Agar memiliki dasar berpikir logis dalam menyelesaikan masalah",
    "Agar tidak perlu belajar coding lagi",
    "Agar komputer bekerja lebih cepat"
  ],
  ans: 1,
  exp_correct: "Benar! Algoritma melatih pola pikir logis dan sistematis yang menjadi dasar dalam membuat program komputer.",
  exp_wrong: "Algoritma membantu seseorang memahami cara menyelesaikan masalah secara logis sebelum dituangkan ke dalam kode program."
},
{
  q: "Apa karakteristik algoritma yang baik?",
  opts: [
    "Memiliki langkah yang jelas dan terurut",
    "Menggunakan bahasa pemrograman tertentu",
    "Harus berbentuk flowchart",
    "Harus menggunakan database"
  ],
  ans: 0,
  exp_correct: "Tepat! Algoritma yang baik memiliki langkah-langkah yang jelas, logis, dan mudah dipahami.",
  exp_wrong: "Algoritma yang baik harus memiliki urutan langkah yang jelas dan logis agar dapat diimplementasikan dengan benar."
},
{
  q: "Dalam jurnal pembanding, media El-Goritma dikembangkan berbasis apa?",
  opts: [
    "Desktop",
    "Mobile Android",
    "Web",
    "Cloud Computing"
  ],
  ans: 2,
  exp_correct: "Benar! El-Goritma dikembangkan sebagai media pembelajaran berbasis web sehingga mudah diakses oleh mahasiswa.",
  exp_wrong: "Jawaban yang benar adalah web. El-Goritma merupakan media pembelajaran algoritma berbasis web."
},
{
  q: "Apa kelebihan media pembelajaran berbasis web dibandingkan pembelajaran konvensional?",
  opts: [
    "Dapat diakses secara fleksibel kapan saja",
    "Tidak membutuhkan perangkat",
    "Menggantikan dosen sepenuhnya",
    "Tidak memerlukan internet"
  ],
  ans: 0,
  exp_correct: "Tepat! Media berbasis web memungkinkan mahasiswa belajar lebih fleksibel dan interaktif.",
  exp_wrong: "Media pembelajaran berbasis web unggul karena dapat diakses kapan saja dan dari berbagai perangkat."
},
{
  q: "Apa yang dimaksud dengan debugging dalam pemrograman?",
  opts: [
    "Proses mencari dan memperbaiki kesalahan program",
    "Proses membuat flowchart",
    "Proses menghapus algoritma",
    "Proses mengganti bahasa pemrograman"
  ],
  ans: 0,
  exp_correct: "Benar! Debugging adalah proses menemukan dan memperbaiki kesalahan (bug) dalam program.",
  exp_wrong: "Debugging merupakan proses mencari serta memperbaiki kesalahan yang terdapat dalam program."
},
{
  q: "Mengapa logika pemrograman penting bagi mahasiswa informatika?",
  opts: [
    "Karena membantu menyelesaikan masalah secara sistematis",
    "Karena menggantikan seluruh mata kuliah lain",
    "Karena membuat komputer lebih mahal",
    "Karena tidak membutuhkan algoritma"
  ],
  ans: 0,
  exp_correct: "Benar! Logika pemrograman membantu mahasiswa menyusun solusi yang sistematis dan efektif terhadap suatu masalah.",
  exp_wrong: "Logika pemrograman sangat penting karena melatih kemampuan berpikir sistematis dalam menyelesaikan masalah."
},
{
  q: "Apa hubungan antara flowchart dan pseudocode?",
  opts: [
    "Keduanya digunakan untuk menggambarkan algoritma",
    "Keduanya adalah bahasa pemrograman",
    "Keduanya digunakan untuk menyimpan data",
    "Keduanya menggantikan program komputer"
  ],
  ans: 0,
  exp_correct: "Tepat! Flowchart dan pseudocode sama-sama digunakan untuk merepresentasikan algoritma sebelum proses coding dilakukan.",
  exp_wrong: "Flowchart dan pseudocode memiliki tujuan yang sama yaitu menggambarkan algoritma, hanya bentuk penyajiannya yang berbeda."
},
{
  q: "Kesimpulan utama dari kedua jurnal yang dibandingkan adalah?",
  opts: [
    "Algoritma tidak diperlukan dalam pemrograman",
    "Algoritma merupakan dasar penting dan perlu didukung metode pembelajaran yang efektif",
    "Media pembelajaran lebih penting daripada algoritma",
    "Bahasa pemrograman lebih penting daripada logika"
  ],
  ans: 1,
  exp_correct: "Benar! Kedua jurnal sama-sama menegaskan bahwa algoritma merupakan pondasi pemrograman dan pembelajarannya perlu didukung metode yang efektif.",
  exp_wrong: "Kesimpulan utama kedua jurnal adalah pentingnya algoritma sebagai pondasi pemrograman serta perlunya media atau metode pembelajaran yang mendukung pemahaman mahasiswa."
}
];

let qIndex = 0;
let score = 0;
let answered = false;

function renderQuestion() {
  const q = questions[qIndex];
  const letters = ['A','B','C','D'];
  const pct = ((qIndex+1)/questions.length)*100;
  document.getElementById('qProgressFill').style.width = pct+'%';
  document.getElementById('qCounter').textContent = (qIndex+1)+' / '+questions.length;

  document.getElementById('quizArea').innerHTML = `
    <div class="qcard">
      <div class="qnum">Soal ${qIndex+1} dari ${questions.length}</div>
      <div class="qtext">${q.q}</div>
      <div class="opts" id="optsContainer">
        ${q.opts.map((o,i)=>`
          <div class="opt" id="opt-${i}" onclick="chooseAnswer(${i})">
            <div class="opt-letter">${letters[i]}</div>
            <span>${o}</span>
          </div>
        `).join('')}
      </div>
      <div class="explanation" id="explanation"></div>
    </div>
  `;
  document.getElementById('nextQuizBtn').style.display = 'none';
  document.getElementById('toResultBtn').style.display = 'none';
  answered = false;
}

function chooseAnswer(idx) {
  if(answered) return;
  answered = true;
  const q = questions[qIndex];
  const opts = document.querySelectorAll('.opt');
  opts.forEach(o => { o.classList.add('disabled'); o.onclick = null; });

  const expEl = document.getElementById('explanation');
  if(idx === q.ans) {
    opts[idx].classList.add('correct');
    score++;
    expEl.className = 'explanation show correct-exp';
    expEl.innerHTML = `<div class="exp-header c">✅ Jawaban Benar!</div><div class="exp-text">${q.exp_correct}</div>`;
  } else {
    opts[idx].classList.add('wrong');
    opts[q.ans].classList.add('reveal');
    expEl.className = 'explanation show wrong-exp';
    expEl.innerHTML = `<div class="exp-header w">❌ Belum Tepat</div><div class="exp-text">${q.exp_wrong}</div>`;
  }

  const nextBtn = document.getElementById('nextQuizBtn');
  if(qIndex < questions.length - 1) {
    nextBtn.style.display = 'inline-block';
  } else {
    document.getElementById('toResultBtn').style.display = 'inline-block';
    showFinalResult();
  }
}

function nextQuestion() {
  qIndex++;
  renderQuestion();
}

function showFinalResult() {
  const pct = Math.round((score/questions.length)*100);
  document.getElementById('finalScore').textContent = score+'/'+questions.length;
  document.getElementById('finalPct').textContent = 'Persentase benar: '+pct+'%';

  let stars = '', msg = '';
  if(pct >= 90) { stars='⭐⭐⭐⭐⭐'; msg='Luar biasa! Kamu benar-benar memahami materi algoritma pemrograman dengan sangat baik.'; }
  else if(pct >= 70) { stars='⭐⭐⭐⭐'; msg='Bagus sekali! Pemahamanmu sudah kuat, tinggal sempurnakan beberapa konsep.'; }
  else if(pct >= 50) { stars='⭐⭐⭐'; msg='Cukup baik! Tapi ada beberapa konsep yang perlu kamu pelajari ulang.'; }
  else { stars='⭐⭐'; msg='Perlu belajar lebih giat lagi. Baca kembali jurnal dan coba ulangi kuis ini!'; }

  document.getElementById('finalStars').textContent = stars;
  document.getElementById('finalMsg').textContent = msg;
}

function restartQuiz() {
  qIndex = 0; score = 0; answered = false;
  goToSlide(5);
}

renderQuestion();
