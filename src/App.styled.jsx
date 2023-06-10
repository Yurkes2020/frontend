import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 28px 16px 32px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 480px) {
    padding: 34px 256px 116px 257px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 28px;
  height: 32px;
  margin-right: 8px;
  @media screen and (min-width: 480px) {
    width: 50px;
    height: 56px;
  }
`;

export const Text = styled.p`
  font-size: 10px;
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  display: block;
  font-size: 14px;
  font-weight: bold;
  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  padding: 7px 6px;
  :not(:last-child) {
    margin-right: 6px;
  }
  display: flex;
  vertical-align: top;
  width: 88px;
  background-color: #302e5a;
  border-radius: 6px;
  font-weight: 600;
  font-size: 11px;
`;

export const Svg = styled.img`
  margin-right: 4px;
`;

export const Main = styled.main`
  text-align: center;
  padding: 0 16px 20px;
  height: 100%;
  @media screen and (min-width: 480px) {
    padding: 0 0 0 257px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px auto;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 480px) {
    margin-right: calc(100% - 356px);
    text-align: left;
  }
`;

export const Web = styled.p`
  margin: auto;
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 5px 0;
  border-radius: 3px;
  background-color: #4252d1;
  width: 89px;
  @media screen and (min-width: 480px) {
    margin: 0;
  }
`;

export const WebImg = styled.img`
  margin-left: 11px;
  margin-right: 5px;
`;

export const Front = styled.p`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 53px;
  line-height: 65px;
  text-align: center;
  color: #ff3459;
  @media screen and (min-width: 480px) {
    text-align: left;
  }
`;

export const Zero = styled.span`
  margin-right: 11px;
  padding: 4px;
  background-color: #ff3459;
  border-radius: 4px;
  display: inline-block;
  transform: matrix(1, -0.06, 0.06, 1, 0, 0);
`;

export const Start = styled.p`
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 16px;
  @media screen and (min-width: 480px) {
    font-size: 22px;
  }
`;

export const TextSkil = styled.p`
  padding: 12px;
  line-height: 1.5;
  text-align: center;
  font-size: 14px;
  @media screen and (min-width: 480px) {
    text-align: left;
    padding: 0;
  }
`;

export const TextBold = styled.span`
  font-weight: 600;
  font-size: 14px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const TextBlue = styled.span`
  display: inline-block;
  color: #4252d1;
  margin-left: 5px;
  @media screen and (min-width: 480px) {
    margin-left: 0;
  }
`;

export const Form = styled.form`
  display: grid;
  margin-bottom: 36px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  padding: 41px 21px 40px;
  background-color: #303a53;
  box-shadow: 0px 8.96175px 44.8087px rgba(40, 127, 165, 0.1);
  border-radius: 8.96175px;
  @media screen and (min-width: 480px) {
    width: 366px;
    height: 474px;
    padding: 50px 50px;
    margin: 0;
  }
`;

export const TextGift = styled.p`
  padding: 0 52px;
  @media screen and (min-width: 480px) {
    padding: 0 20px;
  }
`;

export const TextRed = styled.span`
  color: #ff3459;
`;

export const Input = styled.input`
  background-color: #272d3d;
  color: #ffffff;
  padding: 12px 0 12px 27px;
  border-radius: 5px;
  font-size: 12px;
  border: none;
  outline: none;
  ::placeholder {
    color: #ffffff;
  }
  :first-of-type {
    margin-top: 18px;
  }
  :not(:last-child) {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 480px) {
    width: 248px;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  margin: 0 auto 18px;
  padding: 12px 0;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  width: 222px;
  background-color: #0048ff;
  border-radius: 5px;
  outline: none;
  border: none;
  @media screen and (min-width: 480px) {
    width: 248px;
    background-color: #ff3459;
  }
`;

export const Policy = styled.p`
  padding: 0 80px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  font-size: 11px;
  line-height: 1.45;
  @media screen and (min-width: 480px) {
    padding: 0 42px;
  }
`;

export const Link = styled.a`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  font-size: 11px;
`;
export const Wrap = styled.div`
  padding: 0 90px;
  text-align: left;
  display: flex;
  :not(:last-child) {
    margin-bottom: 22px;
  }
  @media screen and (min-width: 480px) {
    padding: 0 250px 0 0;
    margin: 0;
    :last-child {
      margin-bottom: 22px;
    }
  }
`;

export const WrapCont = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const TextFinish = styled.p`
  display: block;
  margin-left: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;

export const Bonus = styled.span`
  display: block;
  font-weight: 700;
  font-size: 14px;
  margin-right: 5px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin-right: 5px;
`;

export const BonusBlue = styled.span`
  color: #4252d1;
  font-weight: 700;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 14px;
`;

export const Footer = styled.p`
  margin-top: 40px;
  font-weight: 800;
  font-size: 8vw;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.05);
`;
