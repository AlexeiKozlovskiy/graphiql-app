import { GraphiQlMsg } from './graphiQlMsg';
import { AuthMsg } from './authMsg';
import { LOCALES } from './locales';
import { Message } from './messages';
import { WelcomePageMsg } from './welcomePageMsg';
import { NotFoundMsg } from './notFoundMsg';
import { ApiMsg } from './apiMsg';

export const translations = {
  [LOCALES.ENGLISH]: {
    [Message.Logout]: 'Log out',
    [Message.Account]: 'Account',
    [Message.Home]: 'Home',
    [Message.SignIn]: 'Sign In',
    [Message.SignUp]: 'Sign up',
    [Message.SignOut]: 'Sign Out',
    [Message.NotMember]: 'Not a member?',
    [Message.GoToMainPage]: 'Go to Main Page',
    [WelcomePageMsg.mainDescr]:
      'A graphical interactive in-browser IDE - a powerful tool that offers syntax highlighting, automatic documentation, and much more.',
    [WelcomePageMsg.getStartedBtn]: 'Get Started',
    [WelcomePageMsg.aboutMainHeader]: 'About the QraphiQL',
    [WelcomePageMsg.aboutHeader1]: 'A query language for API',
    [WelcomePageMsg.aboutHeader2]: 'Get exactly what you need from the API',
    [WelcomePageMsg.aboutHeader3]: 'Get many resources in a single request',
    [WelcomePageMsg.aboutDescr1]:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries. GraphQL provides a complete and understandable description of the data in API, giving your the power to ask for exactly what need and nothing more.',
    [WelcomePageMsg.aboutDescr2]:
      'Send a GraphQL query to the API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphQL are fast and stable because they control the data they get, not the server.',
    [WelcomePageMsg.aboutDescr3]:
      'GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data our needs in a single request. App GraphQL quick even on slow mobile network connections.',
    [WelcomePageMsg.courseAboutHeader]: 'About the course',
    [WelcomePageMsg.courseAboutDescr1p1]:
      'is free-of-charge and community-based education program conducted by',
    [WelcomePageMsg.courseAboutDescr1p2]: 'developer community since 2013',
    [WelcomePageMsg.courseAboutDescr2]:
      'Everyone can study at RS School, regardless of age, professional employment, or place of residence.',
    [WelcomePageMsg.courseAboutDescr3]:
      'The mentors and trainers of our school are front-end and javascript developers from different companies and countries.',
    [WelcomePageMsg.ourTeamHeader]: 'Our Team',
    [WelcomePageMsg.name1]: 'Sasha Sonich',
    [WelcomePageMsg.name2]: 'Alexei Kozlovskiy',
    [WelcomePageMsg.name3]: 'Anatoliy Iliev',
    [WelcomePageMsg.prof1]: 'Frontend Developer',
    [AuthMsg.sideHeader]: 'Welcome to',
    [AuthMsg.signInMainHeader]: 'Hello!',
    [AuthMsg.signInSubHeader]: 'Welcome to GraphQl client.',
    [AuthMsg.signInGoogleBtn]: 'Log in with Google',
    [AuthMsg.signInOrHr]: 'or',
    [AuthMsg.signInEmailPlh]: 'Your email',
    [AuthMsg.signInPwdPlaceholder]: 'Password',
    [AuthMsg.signInForgotPwd]: 'Forgot password?',
    [AuthMsg.signInLogInBtn]: 'Log In',
    [AuthMsg.signInSignUp]: 'Sign up',
    [AuthMsg.signInNoAccount]: "Don't have an account?",
    [AuthMsg.signInSuccess]: 'Successfully logged in',
    [AuthMsg.signUpMainHeader]: 'Sign up',
    [AuthMsg.signUpSubheader]: 'Join the GraphGl community.',
    [AuthMsg.signUpNameLabel]: 'Name',
    [AuthMsg.signUpEmailLabel]: 'Email',
    [AuthMsg.signUpPwdLabel]: 'Password',
    [AuthMsg.signUpNamePlh]: 'Your name',
    [AuthMsg.signUpEmailPlh]: 'Email',
    [AuthMsg.signUpPwdPlh]: 'Enter your password',
    [AuthMsg.signUpMainBtn]: 'Get started now',
    [AuthMsg.singUpLogIn]: 'Log in',
    [AuthMsg.signUpAlreadyUser]: 'Already a user?',
    [AuthMsg.signUpNameError]: 'The name must be longer that 3 characters',
    [AuthMsg.signUpEmailError]: 'Please input the correct email',
    [AuthMsg.signUpPwdError]:
      'The password must be at least 8 characters long, contain at least 1 letter, 1 number and 1 special character',
    [AuthMsg.signUpSuccess]: 'Sign up successful',
    [AuthMsg.resetPwdHeader]: 'Reset password',
    [AuthMsg.resetPwdSubHeader]:
      'Input your email below and we will send you an email with instructions.',
    [AuthMsg.resetPwdMainBtn]: 'Send password reset email',
    [AuthMsg.resetPwdEmailPlh]: 'Email',
    [AuthMsg.logOutMsg]: 'Are you sure you want to sign out?',
    [AuthMsg.logOutNo]: 'No, get me back',
    [AuthMsg.logOutYes]: 'Yes, log me out',
    [GraphiQlMsg.variablesHeader]: 'Variables',
    [GraphiQlMsg.headersHeader]: 'Headers',
    [GraphiQlMsg.docsHeader]: 'Docs',
    [GraphiQlMsg.queriesHeader]: 'Queries',
    [GraphiQlMsg.queryDetailsHeader]: 'Query details',
    [GraphiQlMsg.typeDetailsHeader]: 'Type details',
    [GraphiQlMsg.argsHeader]: 'Arguments',
    [GraphiQlMsg.addHeaderBtn]: 'Add Header',
    [NotFoundMsg.header]: 'Whoops!',
    [NotFoundMsg.mainText]: "Looks like you've got lost.",
    [NotFoundMsg.subtextP1]: 'Go back to the',
    [NotFoundMsg.linkText]: 'home',
    [NotFoundMsg.subtextP2]: 'page?',
    [AuthMsg.APIErrorUnknown]: 'Unknown error',
    [AuthMsg.APIErrorInvalidEmail]: 'Invalid email',
    [AuthMsg.APIErrorUserNotFound]: 'User with this email does not exist',
    [AuthMsg.APIErrorWrongPwd]: 'Wrong password',
    [AuthMsg.APIErrorNoPwd]: 'Please input password',
    [AuthMsg.APIErrorEmailInUse]: 'Email address already in use',
    [AuthMsg.APIErrorNotAllowed]: 'Error during sign up',
    [AuthMsg.resetPwdResOk]: 'Email with instructions has been sent',
    [AuthMsg.resetPwdResError]: 'An error occured during your request',
    [ApiMsg.apiGenError]: 'An error occured.\n The server response:',
    [ApiMsg.apiErrorHeaders]: 'Error parsing header data',
    [ApiMsg.apiErrorVars]: 'Error parsing variables data',
    [ApiMsg.apiErrorUnknown]: 'Unknown error',
  },
  [LOCALES.RUSSIAN]: {
    [Message.Logout]: 'Выйти',
    [Message.Account]: 'Аккаунт',
    [Message.Home]: 'Домой',
    [Message.SignIn]: 'Войти',
    [Message.SignUp]: 'Регистрация',
    [Message.SignOut]: 'Выйти',
    [Message.NotMember]: 'Еще не в команде?',
    [Message.GoToMainPage]: 'На главную',
    [WelcomePageMsg.mainDescr]:
      'Графическая интерактивная среда разработки в браузере — мощный инструмент, предлагающий подсветку синтаксиса, автоматическую документацию и многое другое.',
    [WelcomePageMsg.getStartedBtn]: 'Начать',
    [WelcomePageMsg.aboutMainHeader]: 'О QraphiQL',
    [WelcomePageMsg.aboutHeader1]: 'Язык запросов для API',
    [WelcomePageMsg.aboutHeader2]: 'Получайте только то что вам нужно от API',
    [WelcomePageMsg.aboutHeader3]: 'Сразу несколько ресурсов в одном запросе',
    [WelcomePageMsg.aboutDescr1]:
      'GraphQL — это язык запросов для API и IDE для выполнения этих запросов. GraphQL предоставляет полное и понятное описание данных в API, давая вам возможность запрашивать именно то, что вам нужно, и ничего более.',
    [WelcomePageMsg.aboutDescr2]:
      'Отправьте GraphQL-запрос на API и получите именно то, что вам нужно, не больше и не меньше. Запросы GraphQL всегда возвращают предсказуемые результаты. Приложения, использующие GraphQL, работают быстро и стабильно, потому что они контролируют получаемые данные, а не сервер.',
    [WelcomePageMsg.aboutDescr3]:
      'GraphQL-запросы обращаются не только к свойствам одного ресурса, но и плавно следуют ссылкам между ними. В то время как типичные API REST требуют загрузки с нескольких URL-адресов, API GraphQL получают все данные, которые нам нужны, в одном запросе. Приложение GraphQL работает быстро даже при медленном подключении к мобильной сети.',
    [WelcomePageMsg.courseAboutHeader]: 'О курсе',
    [WelcomePageMsg.courseAboutDescr1p1]:
      '- это бесплатная общественная образовательная программа, проводимая сообществом разработчиков',
    [WelcomePageMsg.courseAboutDescr1p2]: 'с 2013 года.',
    [WelcomePageMsg.courseAboutDescr2]:
      'Учиться в RS School могут все желающие, независимо от возраста, профессиональной занятости и места жительства.',
    [WelcomePageMsg.courseAboutDescr3]:
      'Менторы и тренеры нашей школы — фронтенд- и javascript-разработчики из разных компаний и стран.',
    [WelcomePageMsg.ourTeamHeader]: 'Наша команда',
    [WelcomePageMsg.name1]: 'Саша Сонич',
    [WelcomePageMsg.name2]: 'Алексей Козловский',
    [WelcomePageMsg.name3]: 'Анатолий Ильев',
    [WelcomePageMsg.prof1]: 'Frontend-разработчик',
    [AuthMsg.sideHeader]: 'Добро пожаловать в',
    [AuthMsg.signInMainHeader]: 'Привет!',
    [AuthMsg.signInSubHeader]: 'Добро пожаловать в клиент GraphQl.',
    [AuthMsg.signInGoogleBtn]: 'Войти через Google',
    [AuthMsg.signInOrHr]: 'или',
    [AuthMsg.signInEmailPlh]: 'Ваш email',
    [AuthMsg.signInPwdPlaceholder]: 'Пароль',
    [AuthMsg.signInForgotPwd]: 'Забыли пароль?',
    [AuthMsg.signInLogInBtn]: 'Вход',
    [AuthMsg.signInSignUp]: 'Зарегистрироваться',
    [AuthMsg.signInNoAccount]: 'Нет аккаунта?',
    [AuthMsg.signInSuccess]: 'Вход произведен успешно',
    [AuthMsg.signUpMainHeader]: 'Регистрация',
    [AuthMsg.signUpSubheader]: 'Присоединяйтесь к сообществу GraphQl.',
    [AuthMsg.signUpNameLabel]: 'Имя',
    [AuthMsg.signUpEmailLabel]: 'Электронная почта',
    [AuthMsg.signUpPwdLabel]: 'Пароль',
    [AuthMsg.signUpNamePlh]: 'Ваше имя',
    [AuthMsg.signUpEmailPlh]: 'Электронная почта',
    [AuthMsg.signUpPwdPlh]: 'Введите ваш пароль',
    [AuthMsg.signUpMainBtn]: 'Присоединиться',
    [AuthMsg.singUpLogIn]: 'Вход',
    [AuthMsg.signUpAlreadyUser]: 'Уже зарегистрированы?',
    [AuthMsg.signUpNameError]: 'Имя должно быть длиннее 3 символов',
    [AuthMsg.signUpEmailError]: 'Пожалуйста, введите правильный адрес электронной почты',
    [AuthMsg.signUpPwdError]:
      'Пароль должен состоять не менее чем из 8 символов, содержать как минимум 1 букву, 1 цифру и 1 спецсимвол',
    [AuthMsg.signUpSuccess]: 'Регистрация прошла успешно',
    [AuthMsg.resetPwdEmailPlh]: 'Электронная почта',
    [GraphiQlMsg.variablesHeader]: 'Переменные',
    [GraphiQlMsg.headersHeader]: 'Заголовки',
    [GraphiQlMsg.docsHeader]: 'Документация',
    [GraphiQlMsg.queriesHeader]: 'Запросы',
    [GraphiQlMsg.queryDetailsHeader]: 'Описание запроса',
    [GraphiQlMsg.typeDetailsHeader]: 'Свойства возвращаемого типа',
    [GraphiQlMsg.argsHeader]: 'Аргументы',
    [GraphiQlMsg.addHeaderBtn]: 'Добавить Заголовок',
    [NotFoundMsg.header]: 'Упс!',
    [NotFoundMsg.mainText]: 'Кажется вы потерялись.',
    [NotFoundMsg.subtextP1]: 'Вернуться на',
    [NotFoundMsg.linkText]: 'домашнюю',
    [NotFoundMsg.subtextP2]: 'страницу?',
    [AuthMsg.resetPwdHeader]: 'Сброс пароля',
    [AuthMsg.resetPwdSubHeader]:
      'Введите свой адрес электронной почты, и мы отправим вам электронное письмо с инструкциями по смене пароля.',
    [AuthMsg.resetPwdMainBtn]: 'Отправить',
    [AuthMsg.APIErrorUnknown]: 'Неизвестная ошибка',
    [AuthMsg.APIErrorInvalidEmail]: 'Неправильный email',
    [AuthMsg.APIErrorUserNotFound]: 'Пользователь не сущестует',
    [AuthMsg.APIErrorWrongPwd]: 'Неправильный пароль',
    [AuthMsg.APIErrorNoPwd]: 'Пожалуйста, введите пароль',
    [AuthMsg.APIErrorEmailInUse]: 'Пользователь с таким email уже существует',
    [AuthMsg.APIErrorNotAllowed]: 'Ошибка при регистрации',
    [AuthMsg.resetPwdResOk]: 'Письмо с инструкциями отправлено',
    [AuthMsg.resetPwdResError]: 'Во время вашего запроса произошла ошибка',
    [AuthMsg.logOutMsg]: 'Вы уверены что хотите выйти?',
    [AuthMsg.logOutNo]: 'Нет, вернуться',
    [AuthMsg.logOutYes]: 'Да, выйти',
    [ApiMsg.apiGenError]: 'Произошла ошибка.\n Сервер ответил:',
    [ApiMsg.apiErrorHeaders]: 'Ошибка при анализе заголовков',
    [ApiMsg.apiErrorVars]: 'Ошибка при анализе переменных',
    [ApiMsg.apiErrorUnknown]: 'Неизвестная ошибка',
  },
};
