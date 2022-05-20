import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  height: 100vh;
  width: 100vw;
  overflow: scroll;

  .desktop--nav {
    display: flex;
    justify-content: space-between;
    font-family: "Noto serif", serif;
    color: var(--primary-color);
    font-size: 18px;
    font-weight: bold;
    padding: 15px 5px;
    background-color: var(--secondary-color);
    overflow-x: auto;
    min-height: 40px;

    ::-webkit-scrollbar-track {
      background-color: var(--secondary-color-50);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--primary-color-50);
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 25%;

      div:hover {
        cursor: pointer;
        color: var(--primary-color-50);
      }
    }
  }

  .foodsection {
    margin: 3rem 4rem;
    padding: 2rem;
    color: var(--secondary-color-50);
    font-weight: bold;
    font-size: 24px;
    border-top: 1px solid var(--secondary-color-50);
    border-bottom: 1px solid var(--secondary-color-50);
  }

  @media screen and (max-width: 500px) {
    .desktop--nav {
      display: none;
    }
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary-color);
  padding: 30px 15px;
  margin-top: -1rem;

  button{
    width: 200px;
    height: 30px;
    font-size: 16px;
    margin-bottom: -10px;
    border-radius: 5px;
    background-color: var(--secondary-color-50);

    :hover{
      background-color: var(--terciary-color-50);
    }
  }
`;

export const ModalHeader = styled.div`
  height: 10rem !important;
  display: flex;
  flex-direction: column;
  span {
    margin-left: 47rem;
    width: 15px;
    text-align: center;
    margin-top: -12px;
    cursor: pointer;
  }
  .header {
    display: flex;
    flex-direction: row;
    border: 1px solid;
    height: 10rem !important;
    .image-place {
      height: 100%;
      width: 35%;
      img {
        max-width: 150px;
      }
    }
    .product-description {
      height: 100%;
      width: 62%;
    }
  }
`;

export const ModalBody = styled.div`
  height: 22rem !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .product-adds {
    border: 1px solid;
    height: 100%;
    width: 35%;
    h2 {
      margin: 1rem;
    }
    .adds {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      max-height: 2.5rem;
      margin: 0.25rem;
      p {
        margin-right: 0.5rem;
        width: 4.75rem;
        overflow: hidden;
      }
      .minus {
        cursor: pointer;
        width: fit-content;
        height: fit-content;
        margin-right: 1rem;
      }
      .plus {
        cursor: pointer;
        width: fit-content;
        height: fit-content;
        margin-right: 1rem;
      }
    }
  }
  .product-size {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid;
    height: 100%;
    width: 62%;
    h2 {
      margin: 1rem;
    }
    .sizes {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      max-height: 2.5rem;
      margin: 0.5rem;
      p {
        margin-right: 2rem;
        width: 5rem;
        overflow: hidden;
      }
      .minus {
        cursor: pointer;
        width: fit-content;
        height: fit-content;
        margin-right: 5rem;
      }
      .plus {
        cursor: pointer;
        width: fit-content;
        height: fit-content;
        margin-right: 4rem;
      }
    }
  }
`;

export const Content = styled.div`
  margin: 0rem 0rem 3rem 4rem;
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
`;

export const MenuContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  min-width: 500px;
`;

export const CartContainer = styled.div`
  background-color: var(--secondary-color);
  min-width: 740px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 30px;
  span {
    margin-bottom: 1rem;
    margin-left: 45rem;
    width: 15px;
    text-align: center;
    cursor: pointer;
  }
`;

export const ButtonRequest = styled.button`
  font-family: "Noto Serif", serif;
  font-size: 23px;
  padding: 19px 29px;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border-radius: 24px;
  width: fit-content;
`;
export const CartList = styled.ul`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  margin-bottom: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const ButtonOpenCart = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: var(--secondary-color);
  color: var(--terciary-color);
  font-size: 2em;
  position: absolute;
  right: 50px;
  bottom: 30px;

  @media screen and (max-width: 500px){
    width: 50px;
    height: 50px;
    right: 30px;
    bottom: 30px;
  }

  :hover {
    background-color: var(--secondary-color-50);
  }
`;
