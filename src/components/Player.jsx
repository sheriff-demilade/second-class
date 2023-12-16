const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  image = "/football.jfif",
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Team</strong>: {team}
        </p>
        <p className="card-text">
          <strong>Nationality</strong>: {nationality}
        </p>
        <p className="card-text">
          <strong>Jersey number</strong>: {jerseyNumber}
        </p>
        <p className="card-text">
          <strong>Age</strong>: {age}
        </p>
      </div>
    </div>
  );
};

export default Player;
