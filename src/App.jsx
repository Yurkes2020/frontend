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
} from './App.styled';
import logo from './images/logo.png';
import cal from './images/cal.svg';
import date from './images/time.svg';
import globe from './images/globe.svg';
import gift from './images/gift.png';
import person from './images/person.png';

const App = () => {
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
        <Form>
          <TextGift>
            Запишитесь <TextRed>бесплатно</TextRed> и получите подарок
          </TextGift>
          <Input placeholder="Ваше имя и фамилия" type="text" />
          <Input placeholder="Ваш номер телефона" type="tel" />
          <Input placeholder="Ваш email" type="email" />
          <Button type="button">Записаться бесплатно</Button>
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
                КИРИЛЛ
                <BonusBlue>КАСАТОНОВ</BonusBlue>
              </Name>
              6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
              другими крупными корпорациями
            </TextFinish>
          </Wrap>
        </WrapCont>
      </Main>
      <footer>
        <Footer>FRONT-END DEVELOPER</Footer>
      </footer>
    </div>
  );
};

export default App;
