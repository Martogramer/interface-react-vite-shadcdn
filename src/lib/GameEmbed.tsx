import React from "react";

const GameEmbed: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <iframe
        src="https://zv1y2i8p.play.gamezop.com/g/rkAXTzkD5kX"
        title="Gamezop Game"
        style={{
          width: "100%",
          height: "100%",
          border: "0",
        }}
        allowFullScreen
        allowTransparency
        seamless={true} // ✅ en TSX debe ser booleano
        frameBorder="0"
      />
    </div>
  );
};

export default GameEmbed;
