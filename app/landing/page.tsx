export default function Landing() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Aditi’s Portfolio ✨</h1>
      <a
        href="/home"   // change to "/" if your portfolio stays at root
        className="px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-100 transition"
      >
        Enter Portfolio
      </a>
    </main>
  );
}
