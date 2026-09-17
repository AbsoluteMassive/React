const ProfileCard = ({
  image = "https://placehold.co/200x200",
  name = "John Doe",
  jobTitle = "Web Developer",
  bio = `I am a passionate web developer who enjoys building responsive, 
  user-friendly websites and learning new technologies. I 
  am a passionate web developer who enjoys building responsive, 
  user-friendly websites and learning new technologies.
 I am a passionate web developer who enjoys building responsive, 
  user-friendly websites and learning new technologies.`,
}) => {
  return (
    <div className="card p-3 m-2 " style={{ width: "25rem" }}>
      <div className="d-flex align-items-center">
        <img
          src={image}
          className="rounded-circle me-3"
          alt={`${name} profile`}
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
          }}
        />

        <div>
          <h5 className="card-title mb-1">{name}</h5>
          <h6 className="card-subtitle text-body-secondary ">{jobTitle}</h6>
        </div>
      </div>

      <p className="card-text mt-4">{bio}</p>
    </div>
  );
};

export default ProfileCard;
