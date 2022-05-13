import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: fit-content;
  background-color: var(--secondary-color);
  display: flex;
  height: 10vh;
  min-width: 500px;
  position: fixed;
  border-bottom: 0.2px solid var(--primary-color);
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5%;
  gap: 28px;
  @media (min-width: 1024px) {
    padding-left: 10%;
  }

  h2 {
    font-style: black;
    font-size: 2em;
    line-height: 49px;
    background: -webkit-linear-gradient(#485d5e, var(--primary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: none;
    font-family: "Noto Serif", serif;

    @media (min-width: 700px) {
      display: block;
    }
    @media (min-width: 1024px) {
      font-size: 2.5em;
    }
  }
`;

export const RightContainer = styled.div`
  flex: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  gap: 10px;
`;

export const NavbarButton = styled.button`
  border: none;
  background-color: inherit;
  color: var(--primary-color);
  padding: 10px;
  font-size: 24px;
  height: fit-content;
  min-width: fit-content;
  margin: 10px 0;
  font-family: "Noto Serif", serif;
  cursor: pointer;
  :hover {
    border-radius: 4px;
    background-color: var(--secondary-color-50);
  }
`;

export const ModalLinksButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 36px;
  cursor: pointer;
  margin-bottom: -7px;
`;

export const ModalNav = styled.div`
  width: fit-content;
  min-width: 500px;
  height: fit-content;
  background-color: var(--secondary-color);
  position: fixed;
  border-radius: 0 0 10px 0px;
  top: 10vh;

  ul {
    list-style: none;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;

    li {
      padding: 10px 0;
      width: 80%;
      border-bottom: 2px solid var(--primary-color);
      box-sizing: border-box;
      text-align: center;
    }
    li:last-child {
      border: none;
    }
    a {
      color: var(--primary-color);
      font-family: "Noto Sans", sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

export const SectionLanding = styled.section`
  padding-top: 2vh;
  min-height: 100vh;
  height: fit-content;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  gap: 2vh;

  img {
    width: 35%;
    height: auto;
    max-width: 450px;
  }
`;
export const SectionTitle = styled.h1`
  width: 80%;
  font-weight: 700;
  font-size: 3rem;
  line-height: 77px;
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 15px;
  font-family: "Noto Sans", sans-serif;
  margin-top: 50px;
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const MainDescription = styled.h3`
  font-weight: 400;
  width: 60%;
  font-size: 1.3rem;
  line-height: 29px;
  text-align: center;
  color: white;
  margin-bottom: 15px;
  margin-top: 0px;
  font-family: "Inter", sans-serif;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const SectionAboutUs = styled.section`
  padding-top: 10px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);

  ul {
    list-style: none;
    width: 80%;
    min-width: 450px;
    margin-top: 50px;
    gap: 2vw;
    display: flex;
    flex-direction: column;
  }
`;

export const TopicAboutUs = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  gap: 10vw;
  height: fit-content;
  div {
    width: 50%;
    height: auto;
    img {
      width: 100%;
      height: auto;
      border-radius: 20px;
    }
    .decoration {
    }
  }

  section {
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;
    justify-content: space-between;
    height: inherit;
    gap: 10vh;
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: center;
      color: var(--secondary-color);
      font-family: "Noto Sans", sans-serif;
      justify-self: flex-start;
    }
    p {
      font-size: 1rem;
      color: var(--secondary-color);
      font-family: "Noto Sans", sans-serif;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: ${(props) => (props.invert ? "row-reverse" : "row")};

    section {
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
`;

export const SectionTestimony = styled.section`
  min-width: 500px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--primary-color);
`;

export const SliderTestimony = styled.div`
  width: 70vh;
  height: 40vh;
  background-color: var(--secondary-color);
`;
