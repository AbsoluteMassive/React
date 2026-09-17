import Title from "./components/Title";

import ProfileCard from "./components/ProfileCard";
function App() {
  const person1 = {
    image: "https://placehold.co/200x200",
    name: "John Doe",
    jobTitle: "Web Developer",
    bio: `I am a passionate web developer who enjoys 
    building responsive, user-friendly websites and
    learning new technologies.`,
  };
  const person2 = {
    image: "https://placehold.co/200x200",
    name: "PewDiePie",
    jobTitle: "YouTuber and Content Creator",
    bio: `PewDiePie, whose real name is Felix Kjellberg, 
    is a Swedish content creator known for gaming videos,
     comedy, and commentary on internet culture.`,
  };
  const person3 = {
    image: "https://placehold.co/200x200",
    name: "Michael Jordan",
    jobTitle: "Former Professional Basketball Player",
    bio: `Michael Jordan is a 
    legendary former basketball player best 
    known for his success with the Chicago Bulls, 
    six NBA championships, and global 
    influence on the sport.`,
  };
  const people = [person1, person2, person3];

  return (
    <div className="container">
      <Title title="Example Components" />
      <div className="row">
        {people.map((person) => (
          <ProfileCard key={person.name} {...person} />
        ))}
      </div>
    </div>
  );
}

export default App;
