import styled from "styled-components";
import Brands from "../../components/cards/Brands";
import CategoryCard from "../../components/cards/CategoryCard";
import LandingCard from "../../components/cards/LandingCard";
import SubCategories from "../../components/sub-categories/SubCategories";

const LandingPage = () => {
  return (
    <Container>
      <Section>
        <p>Categories</p>
        <CategoryCard />
        <p>Brands</p>
        <Brands/>
        <p>Essential Tech</p>
        <SubCategories />
        <p>Your happy place</p>
        <LandingCard />
      </Section>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 100%;
`;
const Section = styled.div`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
`;
