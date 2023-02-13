import styled from "styled-components";
export const DivBodyDashboard = styled.div`
  height: 100vh;
  background-color: #000000;
`;
export const DivContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 1100px;
  height: 600px;
  background: #000000;
  margin-top: 30px;
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
  section {
    display: flex;
    align-items: center;
    margin: 0 auto;
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }
  }
  h1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #f8f9fa;
    margin: 0 auto;
    margin-top: 30px;
  }

  h2 {
    color: white;
  }
`;
export const PModule = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #868e96;
  padding-left: 400px;
  margin: 0 auto;
  margin-top: 30px;
  @media (max-width: 1000px) {
    padding-left: 0px;
  }
`;
export const SectionDeveloping = styled.div`
  margin: 0 auto;
  margin-right: 480px;
  text-align: justify;

  h2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #f8f9fa;
    margin: 0 auto;
    margin-top: 60px;
    text-align: justify;

    @media (max-width: 1040px) {
      display: none;
    }
  }
  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: #f8f9fa;
    margin: 0 auto;
    margin-top: 40px;
    text-align: justify;
  }
  @media (max-width: 1040px) {
    display: none;
  }
`;
