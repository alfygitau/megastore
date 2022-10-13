import styled from "styled-components";

const Brands = () => {
  const brands = [
    {
      label: "Apple",
      image:
        "https://cdn-icons-png.flaticon.com/512/94/94225.png",
    },
    {
      label: "Samsung",
      image:
        "https://cdn-icons-png.flaticon.com/512/882/882849.png",
    },
    {
      label: "Acer",
      image:
        "https://cdn-icons-png.flaticon.com/512/882/882850.png",
    },
    {
      label: "Comfort Zone",
      image:
        "https://i.pinimg.com/originals/03/85/5a/03855aeb876d359501589eff972ddc48.png",
    },
    {
      label: "Lenovo",
      image:
        "https://cdn-icons-png.flaticon.com/512/882/882819.png",
    },
    {
      label: "Hp",
      image:
        "https://cdn-icons-png.flaticon.com/512/882/882851.png?w=360",
    },
    {
      label: "Wilson",
      image:
        "https://iconape.com/wp-content/png_logo_vector/wilson.png",
    },
    {
      label: "Mainstays",
      image:
        "https://i0.wp.com/belairstore.com/wp-content/uploads/2021/06/mainstays-logo.png?fit=400%2C250&ssl=1",
    },
    {
      label: "Lugz",
      image:
        "https://seeklogo.com/images/L/Lugz-logo-97C699DBFD-seeklogo.com.png",
    },
    {
      label: "No Boundaries",
      image:
        "https://images.squarespace-cdn.com/content/v1/5f60bcde6c6cfd13cdc882e3/1601413125613-JTB2OQZZAF0T20C93H80/NoBoundaries-Logo-2020-11.png",
    },
    {
      label: "Dell",
      image:
        "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/dell-512.png",
    },
    {
      label: "LG",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/2048px-LG_symbol.svg.png",
    },
  ];
  return (
    <Container>
      {brands.map((brand, index) => (
        <div className="section" key={index}>
          <img src={brand.image} alt="brand" />
          <p>{brand.label}</p>
        </div>
      ))}
    </Container>
  );
};

export default Brands;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  border: 1px solid black;
  padding: 10px 0px;

  .section {
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;

    img {
      height: 100px;
      width: 100px;
      cursor: pointer;
    }
  }
`;
