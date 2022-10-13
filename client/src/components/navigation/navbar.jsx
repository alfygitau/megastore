import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: rgb(0, 113, 220);
  color: white;
  font-weight: 800;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  .section {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      flex: 2;
      span {
        font-weight: 900;
        font-size: 30px;
        padding-right: 20px;
        cursor: pointer;
      }
    }
    .category {
      display: flex;
      align-items: center;
      flex: 1;
      a {
        color: white;
        text-decoration: none;
        margin-right: 20px;
        display: flex;
        align-items: center;
      }
    }
    .search {
      display: flex;
      align-items: center;
      flex: 6;
    }
    .account {
      display: flex;
      align-items: center;
      flex: 2;
      .dropdown {
        a {
          color: white;
          background-color: rgb(0, 113, 220);
        }
      }
      a {
        color: white;
        text-decoration: none;
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;

export const Wrapper = styled(Container)`
  height: 40px;
  font-weight: 800;

  .section {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .links {
      display: flex;
      align-items: center;
      a {
        margin-right: 10px;
        color: white;
        text-decoration: none;
      }
    }
  }
`;
