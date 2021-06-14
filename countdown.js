
var media_url = '';
var sports = {
    "belgium-vs-russia" : { "date" : new Date("June 13,2021 01:00:00").getTime(), "flag" : media_url + 'assets/belgiumVsRussia.png' },
    "england-vs-croatia" : { "date" : new Date("June 13,2021 19:00:00").getTime(), "flag" : media_url + 'assets/englandVsCroatia.png' },
    "austria-vs-north-macedonia" : { "date" : new Date("June 13,2021 22:00:00").getTime(), "flag" : media_url + 'assets/austriavsnorthmacedonia.png' },
    "netherlands-vs-ukraine" : { "date" : new Date("June 14,2021 01:00:00").getTime(), "flag" : media_url + 'assets/netherlandsVsUkraine.png' },
    "scotland-vs-czechRepublic" : { "date" : new Date("June 14,2021 19:00:00").getTime(), "flag" : media_url + 'assets/scotlandVsCzechRepublic.png' },
    "poland-vs-slovakia" : { "date" : new Date("June 14,2021 22:00:00").getTime(), "flag" : media_url + 'assets/polandVsSlovakia.png' },
    "spain-vs-sweden" : { "date" : new Date("June 15,2021 01:00:00").getTime(), "flag" : media_url + 'assets/spainVsSweden.png' },
    "hungary-vs-portugal" : { "date" : new Date("June 15,2021 22:00:00").getTime(), "flag" : media_url + 'assets/hungaryVsPortugal.png' },
    "france-vs-germany" : { "date" : new Date("June 16,2021 01:00:00").getTime(), "flag" : media_url + 'assets/franceVsGermany.png' },
    "finland-vs-russia" : { "date" : new Date("June 16,2021 19:00:00").getTime(), "flag" : media_url + 'assets/finlandVsRussia.png' },
    "turkey-vs-wales" : { "date" : new Date("June 16,2021 22:00:00").getTime(), "flag" : media_url + 'assets/turkeyVsWales.png' },
    "italy-vs-switzerland" : { "date" : new Date("June 17,2021 01:00:00").getTime(), "flag" : media_url + 'assets/ItalyVsSwitzerland.png' },
    "ukraine-vs-northMacedonia" : { "date" : new Date("June 17,2021 19:00:00").getTime(), "flag" : media_url + 'assets/ukraineVsNorthMacedonia.png' },
    "denmark-vs-belgium" : { "date" : new Date("June 17,2021 22:00:00").getTime(), "flag" : media_url + 'assets/denmarkVsBelgium.png' },
    "netherlands-vs-austria" : { "date" : new Date("June 18,2021 01:00:00").getTime(), "flag" : media_url + 'assets/netherlandsVsAustria.png' },
    "sweden-vs-slovakia" : { "date" : new Date("June 18,2021 19:00:00").getTime(), "flag" : media_url + 'assets/swedenVsSlovakia.png' },
    "croatia-vs-czechRepublic" : { "date" : new Date("June 18,2021 22:00:00").getTime(), "flag" : media_url + 'assets/croatiaVsCzechRepublic.png' },
};

function countdown_runner ( info ) {
    document.querySelector( '.country_flag' ).innerHTML = `<img src="${info['flag']}" alt="">`;;
    setTimeout( function() { countdown( info['date']);}, 1000 );
}

function countdown ( countDate ) 
{
    const now = new Date().getTime();
    const gap = countDate - now;

    if( gap > 0) {
        const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

        const textDay = Math.floor(gap/day);
        const textHour = Math.floor((gap%day) / hour);
        const textMinute = Math.floor((gap%hour) / minute);
        const textSecond = Math.floor((gap%minute) / second);
        
        var _day = textDay < 10? "0"+textDay : textDay;
        var _hour = textHour < 10? "0"+textHour : textHour;
        var _minute = textMinute < 10? "0"+textMinute : textMinute;
        var _second = textSecond < 10? "0"+textSecond : textSecond;

        document.querySelector(".day").innerHTML = _day;
        document.querySelector(".hour").innerHTML = _hour;
        document.querySelector(".minute").innerHTML = _minute;
        document.querySelector(".second").innerHTML = _second;
    }

    setTimeout( function(){countdown(countDate);}, 1000 );

}
