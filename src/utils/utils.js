const regexUserName = /[^[а-яА-ЯёЁa-zA-Z -]+/i

const navigationListForMainPage = [
    {
        content: 'Регистрация',
        to: '/signup',
        linkClass: ''
    },
    {
        content: 'Войти',
        to: '/signin',
        linkClass: 'navigation__link_type_button'
    }
];

const navigationListForInnerMenu = [
    {
        content: 'Фильмы',
        to: '/movies',
        linkClass: 'navigation__link_type_inner-page',
        activeLinkClass: 'navigation__link_type_active-inner-page'
    },
    {
        content: 'Сохранённые фильмы',
        to: '/saved-movies',
        linkClass: 'navigation__link_type_inner-page',
        activeLinkClass: 'navigation__link_type_active-inner-page'
    },
];

const navigationListForInnerBurgerMenu = [
    {
        content: 'Главная',
        to: '/',
        linkClass: 'navigation__link_type_burger-menu',
        activeLinkClass: 'navigation__link_type_active-burger-menu'
    },
    {
        content: 'Фильмы',
        to: '/movies',
        linkClass: 'navigation__link_type_burger-menu',
        activeLinkClass: 'navigation__link_type_active-burger-menu'
    },
    {
        content: 'Сохранённые фильмы',
        to: '/saved-movies',
        linkClass: 'navigation__link_type_burger-menu',
        activeLinkClass: 'navigation__link_type_active-burger-menu'
    },
];

const navigationList = [{
    content: 'Яндекс.Практикум',
    to: 'https://practicum.yandex.ru',
    linkClass: 'navigation__link_type_footer'
},
{
    content: 'Github',
    to: 'https://github.com',
    linkClass: 'navigation__link_type_footer'
},
{
    content: 'Facebook',
    to: 'https://facebook.com',
    linkClass: 'navigation__link_type_footer'
}];

const navigationListMenu = [{
    content: 'О проекте',
    to: '#project',
    linkClass: 'navigation__link_type_underlined'
},
{
    content: 'Технологии',
    to: '#technologies',
    linkClass: 'navigation__link_type_underlined'
},
{
    content: 'Студент',
    to: '#student',
    linkClass: 'navigation__link_type_underlined'
}];

module.exports = {
    regexUserName,
    navigationListForMainPage,
    navigationListForInnerMenu,
    navigationListForInnerBurgerMenu,
    navigationList,
    navigationListMenu,
};
