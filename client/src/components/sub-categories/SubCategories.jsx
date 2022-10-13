import styled from "styled-components";

const SubCategories = () => {
  const subcategories = [
    {
      label: "Laptops",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-94f4/k2-_2cab673e-5594-40a8-970f-4fbad5867b7e.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "iPads and Tablets",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-c692/k2-_8126be8a-f311-4b8f-8d8c-029aec2319fa.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "Printers and suppliers",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-5ff0/k2-_892f5e87-0d0f-448b-a3d2-c30248cd5892.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "PC Gaming",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-99da/k2-_a39f0676-55f0-459e-bc35-e2a975b73056.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "Smartphones",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-5c28/k2-_c40a2fa8-92ff-4b99-9069-0623ff532cd8.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "TVs",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-dd46/k2-_5d0c3c15-6e56-4c2c-86f7-53b56edb91a9.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "Headphones",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-3c17/k2-_40fd18c6-8f1e-4016-b1f8-2822585695ef.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "Cameras",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-b18c/k2-_136a5750-b817-476c-a905-864bcad57138.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "Home Audio",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-4dc3/k2-_30bd23d4-29a3-4400-990d-56620a13075e.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "Networking",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-9dde/k2-_d5617ce6-a792-4858-abd0-b5f151be9756.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "Video Games",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-2cea/k2-_45614b4e-5f25-41fa-b29a-b597733e13c1.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
    {
      label: "Shop All Tech",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-7492/k2-_3464e53f-ed5b-4d75-a4b9-181e41d897eb.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    },
  ];
  return (
    <Container>
      {subcategories.map((subcategory, index) => (
        <div className="section" key={index}>
          <img src={subcategory.image} alt="subcategory" />
          <p>{subcategory.label}</p>
        </div>
      ))}
    </Container>
  );
};

export default SubCategories;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 200px;
      width: 200px;
      cursor: pointer;
    }
  }
`;
