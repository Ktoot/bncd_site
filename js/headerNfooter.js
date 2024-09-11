$(document).ready(function(){

    let header = document.createElement('header')
    let footer = document.createElement('footer')


    header.innerHTML = "<div class='headerContainer' >" +
                            "<a href='mainPage.html'  class= 'heigthFit'>" +
                                "<img src='../images/logoBig.png' alt='logo' class='heigthFit'>" +
                            "</a>" +
                            "<div class='flexRow flexCenter flexBetween menu'>" +
                                "<a href='mainPage.html' class='mainButton menuButton' id='menu_mainPage'>ГЛАВНАЯ</a>" +
                                "<a href='news.html' class='mainButton menuButton' id='menu_news'>НОВОСТИ</a>" +
                                "<a href='services.html' class='mainButton menuButton' id='menu_services'>УСЛУГИ</a>" +
                             "<div class='dropdown mainButton menuButton'>" +
                                "<button class='dropbtn'>О НАС    ↓</button>" +
                              "<div class='dropdown-content'>" +
                                "<a href='#'>Об организации</a>" +
                                "<a href='publications.html'>Разработки и публикации</a>" +
                              "</div>" +
                              "</div>" +
                                "<a href='contacts.html' class='mainButton menuButton' id='menu_contacts'>КОНТАКТЫ</a>" +
                            "</div>" +
                        "</div>"



    footer.innerHTML = "<div class='footerContainer'>" +
                            "<a href='#' class='footerLogo'>" +
                                "<img src='../images/logo.png' alt='logo' class='heigth250' style='border-radius: 150px;'>" +
                            "</a>" +
                            "<div class='flexColoumn footerNav'>" +
                                "<div class='fontSize_12 textWhite margin10_0 fontWidth700 marginBottom20'>Навигация</div>" +
                                "<a href='mainPage.html' class='fontSize_12 textWhite margin10_0 fontWidth700'>Главная</a>" +
                                "<a href='services.html' class='fontSize_12 textWhite margin10_0 fontWidth700'>Услуги</a>" +
                                "<a href='about.html' class='fontSize_12 textWhite margin10_0 fontWidth700'>О нас</a>" +
                                "<a href='contacts.html' class='fontSize_12 textWhite margin10_0 fontWidth700'>Контакты</a>" +
                            "</div>" +
                        "</div>" +
                        "<div class='qw'>© 2024 Белорусский научно-исследовательский центр электронной документации</div>"


    document.body.prepend(header)
    document.body.append(footer)

    let currentPage = window.location.href
    let regex = /(?<=\/)([^\/]+)(?=\.html)/g;
    let pageNameList = regex.exec(currentPage)
    
    if (pageNameList) {
        let buttonId = "menu_" + pageNameList[0]

        $("#" + buttonId).addClass("active")
    }


});