import Header from "./Header";
import GameHeader from "./GameHeader";
import PriceTable from "./PriceTable";
import FooterNote from "./FooterNote";
import Footer from "./Footer";
import Comments from "./Comments";
const GamePage = () => {
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

  const prices = [
    {
      store: "G2A",
      storeLogo: "https://www2.0zz0.com/2024/11/16/19/916247327.png",
      drm: "https://www2.0zz0.com/2024/11/16/19/560149152.png",
      price: "$17.99",
      currentPrice: "$10.99",
      discount: "-50%",
    },
  ];

  const warning =
    "This game contains mature content, including nudity and sexual content.";
  const buttonText = "Real Gang Members Helped Make GTA 5";

  return (
    <div>
      <Header />
      <GameHeader title={game.title} media={game.media} />
      <PriceTable prices={prices} />
      <FooterNote warning={warning} buttonText={buttonText} />
      <Comments />
      <Footer />
    </div>
  );
};

export default GamePage;
