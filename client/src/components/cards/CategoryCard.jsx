import styled from "styled-components";

const CategoryCard = () => {
  const subcategories = [
    {
      label: "Savings & Featured Shops",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-ff3b/k2-_2ba5e02c-9e11-4158-a223-577b3bce351b.v1.jpg?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Electronics",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-c984/k2-_3ffe24a3-76b9-4c57-8c4d-6c716d5ba9f5.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Sports and Outdoor",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-21f3/k2-_db4fcda3-61af-4c3a-88af-e356be12a8b7.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Clothing, Shoes & Accessories",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-fe24/k2-_6c0f3a2d-9224-4310-b328-65fb2251e2db.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Books",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-9fc8/k2-_30344bb2-2a6b-4f13-8532-dc42cfa47a23.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Movies & TV Shows",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-32e1/k2-_96bbe7ff-9df2-4aaa-907a-7ee3932fb25e.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Video Games",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-1465/k2-_c6cd8b02-25bf-4ea8-bc4e-bf1f10e1e950.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Arts, Crafts, Sewing & Party Supplies",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-efc0/k2-_c250cd28-7d28-4bc0-ac5a-343d3f751ebb.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Auto, Tires & Industrial",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-a416/k2-_1f018c0e-9181-4286-9716-79fc9fc830c8.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Home Improvement",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-c596/k2-_f731f80f-7517-4d64-8ff7-ea347af55b71.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Patio & Garden",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-6689/k2-_6e2e35b2-6af8-4d3e-9d5e-2f0aee3a7761.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
    },
    {
      label: "Home, Furniture & Appliances",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-7275/k2-_6d6fe6a6-3c46-40e9-b276-2e5a23fee280.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
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

export default CategoryCard;

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
