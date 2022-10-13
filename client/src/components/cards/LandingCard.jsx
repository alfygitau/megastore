import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";

const LandingCard = () => {
  const content = [
    {
      title: "Screen time",
      description: "Find the perfect smart TV for your space and style",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-a31a/k2-_a2ef2f82-1047-45ee-a83f-14fe092afaa4.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF",
    },
    {
      title: "Next-level Audio",
      description:
        "Turn up the drama on movie night with speakers and sound bars",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-b1bf/k2-_245219bd-2147-4ca0-8f3f-cd5c141bb61a.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF",
    },
  ];
  return (
    <Section>
      {content.map((item) => (
        <Card sx={{ width: 900, height: 450 }} key={item.title}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <button className="btn">Shop Now</button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Section>
  );
};

export default LandingCard;

const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  .btn {
    background-color: white;
    padding: 7px;
    outline: none;
    border-radius: 20px;
    border: 1px solid black;
    width: 120px;
    font-family: "BOGLEREGULAR";
  }
`;
