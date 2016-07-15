/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 9001,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'Upcoming Events',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					},
					{
						symbol: 'indy-colts ',
						url: 'webcal://www.southendzone.com/ical/colts.ics'
					},
					{
						symbol: 'indy-pacers ',
						url: 'webcal://ics.ecal.com/ecal-sub/5779cc2032b8eed90ac258bb/Indiana%20Pacers.ics'
					},
					{
						symbol: 'indy-eleven ',
						url: 'webcal://www.indyeleven.com/feeds/schedule-csv.php?type=ics'
					},
					// {
					// 	symbol: 'cincy-reds',
					// 	url: 'webcal://mlb.am/tix/reds_schedule_full'
					// }
				]
			}
		},
		// {
		// 	module: 'compliments',
		// 	position: 'lower_third'
		// },
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Fishers',
				locationID: '4257494',  //ID from bulk.openweather.org/sample/
				appid: '2a773d4d4b2817d1b18853a270faa39a'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'Fishers',
							locationID: '4257494',  //ID from bulk.openweather.org/sample/
	            appid: '2a773d4d4b2817d1b18853a270faa39a'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "BBC",
						url: "http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
