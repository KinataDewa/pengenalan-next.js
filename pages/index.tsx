import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Selamat datang di  Website Saya!</h1>
      <p>Ini adalah Halaman utama.</p>
      <Link href='/about'>
        Tentang Kami
      </Link>
    </div>
  );
};

export default HomePage;