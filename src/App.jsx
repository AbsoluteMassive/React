import Title from "./components/Title";
import { VariableDisplay, List } from "./components/VariableDisplay";
import ProfileCard from "./components/ProfileCard";
import JobBoard from "./components/JobBoard";
import StyledButton from "./components/StyledButton";
import JobCounter from "./components/JobCounter";
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
      <div className=" row justify-content-center">
        {people.map((person) => (
          <ProfileCard key={person.name} {...person} />
        ))}
      </div>
      <VariableDisplay />
      <List array={people} />
      <JobBoard jobCount={0} />
      <StyledButton />
      <JobCounter />
    </div>
  );
}

export default App;
