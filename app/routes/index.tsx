export default function Index() {
  return (
    <div className="bg-gradient-to-br flex flex-col from-blue-500 via-pink-500 to-teal-500 h-screen">
      <nav className="px-16 basis-1/12 flex justify-between items-center bg-slate-200 shadow-md">
        <div>Menu</div>
          <div>Insta-SAVE</div>
        <div>Login</div>
      </nav>
      <main className="basis-10/12"></main>
      <footer className="basis-1/12 flex justify-center items-center bg-slate-200 bg-opacity-30"><div>VogelCodes-{new Date().getFullYear()}</div></footer>
    </div>
  );
}
