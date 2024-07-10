const articles = [
  {
    id: 1,
    title: 'Pengantar Fullstack JavaScript dengan MERN',
    summary: 'Pengantar singkat tentang stack MERN dan komponennya.',
    image: '../src/assets/image/image11.png',
    content: `
      <p>Stack MERN adalah kumpulan teknologi yang kuat untuk membangun aplikasi fullstack JavaScript. Stack ini terdiri dari MongoDB, Express.js, React.js, dan Node.js. Stack ini memungkinkan pengembang menggunakan satu bahasa, JavaScript, di seluruh proses pengembangan, mulai dari frontend hingga backend.</p>
    `,
  },
  {
    id: 2,
    title: 'Menyiapkan Lingkungan Pengembangan MERN',
    summary: 'Langkah-langkah untuk menyiapkan lingkungan pengembangan untuk proyek MERN.',
    image: '../src/assets/image/image12.png',
    content: `
      <p>Untuk mulai mengembangkan dengan stack MERN, Anda perlu menginstal Node.js dan npm. Gunakan npm untuk menginstal paket-paket yang diperlukan seperti Express untuk backend dan Create React App untuk frontend. Selain itu, Anda juga perlu menginstal MongoDB secara lokal atau menggunakan layanan MongoDB berbasis cloud.</p>
    `,
  },
  {
    id: 3,
    title: 'Membangun API dengan Express.js',
    summary: 'Panduan singkat untuk membangun API menggunakan Express.js.',
    image: '../src/assets/image/image13.png',
    content: `
      <p>Express.js adalah kerangka kerja aplikasi web untuk Node.js yang digunakan untuk membangun API yang cepat dan efisien. Dengan Express, Anda dapat mengatur routing, middleware, dan menangani permintaan HTTP dengan mudah. Mulailah dengan membuat server Express dasar dan tambahkan endpoint untuk mengelola data.</p>
    `,
  },
  {
    id: 4,
    title: 'Mengelola Data dengan MongoDB',
    summary: 'Cara menggunakan MongoDB untuk mengelola data dalam aplikasi MERN.',
    image: '../src/assets/image/image14.png',
    content: `
      <p>MongoDB adalah database NoSQL yang menggunakan struktur dokumen yang fleksibel dan skalabel. Anda dapat menyimpan dan mengambil data dalam format JSON, yang sangat cocok untuk aplikasi JavaScript. Gunakan Mongoose, sebuah pustaka ODM, untuk memodelkan data dan berinteraksi dengan MongoDB dalam aplikasi Node.js Anda.</p>
    `,
  },
  {
    id: 5,
    title: 'Membangun Antarmuka Pengguna dengan React.js',
    summary: 'Panduan dasar untuk membangun antarmuka pengguna interaktif dengan React.js.',
    image: '../src/assets/image/image15.png',
    content: `
      <p>React.js adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna yang dinamis dan responsif. Dengan komponen-komponen React, Anda dapat membagi antarmuka pengguna menjadi bagian-bagian yang dapat digunakan kembali. Mulailah dengan membuat komponen dasar dan gunakan state dan props untuk mengelola data dalam aplikasi Anda.</p>
    `,
  },
  {
    id: 6,
    title: 'Menghubungkan Frontend dan Backend',
    summary: 'Cara menghubungkan frontend React dengan backend Express.',
    image: '../src/assets/image/image16.png',
    content: `
      <p>Untuk menghubungkan frontend dan backend dalam aplikasi MERN, Anda perlu mengatur komunikasi antara React dan Express. Gunakan Axios atau Fetch API untuk membuat permintaan HTTP dari React ke server Express. Pastikan untuk mengatur endpoint API di Express dan menangani permintaan dengan benar.</p>
    `,
  },
  {
    id: 7,
    title: 'Autentikasi dan Otorisasi di Aplikasi MERN',
    summary: 'Implementasi autentikasi dan otorisasi dalam aplikasi MERN.',
    image: '../src/assets/image/image17.png',
    content: `
      <p>Autentikasi dan otorisasi adalah aspek penting dalam aplikasi web. Gunakan JWT (JSON Web Tokens) untuk mengamankan rute dan mengelola sesi pengguna. Implementasikan login dan registrasi pengguna di backend dengan Express, dan kelola status autentikasi di frontend dengan React.</p>
    `,
  },
  {
    id: 8,
    title: 'Deploying Aplikasi MERN ke Production',
    summary: 'Panduan untuk mendistribusikan aplikasi MERN ke lingkungan produksi.',
    image: '../src/assets/image/image18.png',
    content: `
      <p>Setelah aplikasi MERN Anda selesai dikembangkan, langkah berikutnya adalah mendistribusikannya ke lingkungan produksi. Gunakan layanan seperti Heroku, Vercel, atau DigitalOcean untuk meng-host aplikasi Anda. Pastikan untuk mengatur variabel lingkungan dan mengoptimalkan aplikasi untuk kinerja dan keamanan.</p>
    `,
  }
];

export default articles;
