export default function Hearts() {
  return (
    <div className="hearts">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 8 + Math.random() * 6 + "s",
          }}
        >
          🤍
        </span>
      ))}
    </div>
  );
}