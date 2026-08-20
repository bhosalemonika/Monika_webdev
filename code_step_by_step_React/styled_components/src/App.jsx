import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: white;
`;

const Image = styled.img({
  width: '200px'
});

const Name = styled.h2`
  color: blue;
`;

const Role = styled.p`
  color: gray;
`;

function App() {
  return (
    <>
    <Card>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
        alt="profile"
      />

      <Name>Monika Bhosale</Name>

      <Role>Software Developer</Role>
    </Card>


 <Card>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
        alt="profile"
      />

      <Name>Monika Bhosale</Name>

      <Role>Software Developer</Role>
    </Card>

     <Card>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
        alt="profile"
      />

      <Name>Monika Bhosale</Name>

      <Role>Software Developer</Role>
    </Card>

     <Card>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
        alt="profile"
      />

      <Name>Monika Bhosale</Name>

      <Role>Software Developer</Role>
    </Card>
     <Card>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
        alt="profile"
      />

      <Name>Monika Bhosale</Name>

      <Role>Software Developer</Role>
    </Card>
     <Card>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
        alt="profile"
      />

      <Name>Monika Bhosale</Name>

      <Role>Software Developer</Role>
    </Card>



</>
  );
}

export default App;