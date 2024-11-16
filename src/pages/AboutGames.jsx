import Header from "../components/Header";
import GameHeader from "../components/GameHeader";
import AboutGame from "../components/AboutGame";
import Footer from "../components/Footer";
function AboutGames() {
  const game = {
    title: "Aliens: Dark Descent",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1731410612759-d93cede4edbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1731524999532-642d0c39ad76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1731451162440-506d1b3aba95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/zl6sSc-H0CA?si=WM0r2U-dky3T-f3b",
      },
    ],
  };
  return (
    <>
      <Header />
      <GameHeader title={game.title} media={game.media} />
      <AboutGame />
      <Footer />
    </>
  );
}

export default AboutGames;
