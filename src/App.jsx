import {
  Header,
  Nav,
  Img,
  Text,
  Span,
  List,
  Item,
  Svg,
  Main,
  Wrapper,
  Web,
  Front,
  WebImg,
  Zero,
  Start,
  TextBold,
  TextBlue,
  TextSkil,
  Form,
  TextGift,
  TextRed,
  Input,
  Button,
  Policy,
  Link,
  TextFinish,
  Wrap,
  Name,
  Bonus,
  BonusBlue,
  WrapCont,
  Footer,
  Skills,
  Html,
  Css,
  Js,
  Sub,
  Vs,
  Dot,
} from './App.styled';
import { useRef } from 'react';
import logo from './images/logo.png';
import cal from './images/cal.svg';
import date from './images/time.svg';
import globe from './images/globe.svg';
import gift from './images/gift.png';
import person from './images/person.png';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import sub from './images/sub.png';
import vs from './images/vs.png';
import emailjs from '@emailjs/browser';

const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_w94ah69',
        'template_4jn4chr',
        form.current,
        '4Bq7wnX_3delq7GUE'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <Header>
        <Nav>
          <Img src={logo} alt="logotype" />
          <Text>
            POWERCODE<Span>ACADEMY</Span>
          </Text>
        </Nav>
        <List>
          <Item>
            <Svg src={cal} alt="calendar" />
            28 декабря
          </Item>
          <Item>
            <Svg src={date} alt="date" />
            3,5 часа
          </Item>
        </List>
      </Header>
      <Main>
        <Wrapper>
          <Web>
            <WebImg src={globe} alt="globe" />
            Вебинар
          </Web>
          <Front>FRONT-END</Front>
          <Start>
            <Zero>С НУЛЯ</Zero>легкий старт в IT профессии
          </Start>
          <TextSkil>
            Узнайте какими
            <TextBold>
              навыками должен обладать фронтенд разработчик в 2022 году
            </TextBold>
            и как начать карьеру в востребованной профессии
            <TextBlue>с зарплатой от 1000$</TextBlue>
          </TextSkil>
        </Wrapper>
        <Form ref={form} onSubmit={sendEmail}>
          <TextGift>
            Запишитесь <TextRed>бесплатно</TextRed> и получите подарок
          </TextGift>
          <Input
            required
            name="user"
            placeholder="Ваше имя и фамилия"
            type="text"
          />
          <Input
            required
            name="phone"
            placeholder="Ваш номер телефона"
            type="tel"
          />
          <Input required name="email" placeholder="Ваш email" type="email" />
          <Button type="submit">Записаться бесплатно</Button>
          <Policy>
            Нажимая на кнопку я согашаюсь{' '}
            <Link href="/">с политикой конфидециальности</Link>
          </Policy>
        </Form>
        <WrapCont>
          <Wrap>
            <img width={46} height={46} src={gift} alt="globe" />
            <TextFinish>
              <Bonus>Бонус за регистрацию</Bonus>PDF-файл "5 преимуществ
              профессии веб-дизайнера"
            </TextFinish>
          </Wrap>
          <Wrap>
            <img width={46} height={46} src={person} alt="globe" />
            <TextFinish>
              <Name>
                КИРИЛЛ<BonusBlue>КАСАТОНОВ</BonusBlue>
              </Name>
              6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
              другими крупными корпорациями
            </TextFinish>
          </Wrap>
        </WrapCont>
        <Skills>
          <Html width={88} height={88} src={html} alt="globe" />
          <Dot></Dot>
          <Css width={60} height={85} src={css} alt="globe" />
          <Dot></Dot>
          <Js width={62} height={73} src={js} alt="globe" />
          <Dot></Dot>
          <Sub width={54} height={54} src={sub} alt="globe" />
          <Dot></Dot>
          <Vs width={61} height={61} src={vs} alt="globe" />
          <Dot></Dot>
        </Skills>
      </Main>
      <footer>
        <Footer>FRONT-END DEVELOPER</Footer>
      </footer>
    </div>
  );
};

export default App;
