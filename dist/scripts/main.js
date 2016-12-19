;(function() {
	"use strict";
	var playList = [
	{
		author: "LED ZEPPELIN",
		song:"STAIRWAY TO HEAVEN"
	},
	{
		author: "QUEEN",
		song:"BOHEMIAN RHAPSODY"
	},
	{
		author: "LYNYRD SKYNYRD",
		song:"FREE BIRD"
	},
	{
		author: "DEEP PURPLE",
		song:"SMOKE ON THE WATER"
	},
	{
		author: "JIMI HENDRIX",
		song:"ALL ALONG THE WATCHTOWER"
	},
	{
		author: "AC/DC",
		song:"BACK IN BLACK"
	},
	{
		author: "QUEEN",
		song:"WE WILL ROCK YOU"
	},
	{
		author: "METALLICA",
		song:"ENTER SANDMAN"
	}
	];

	function showList() {
		var songList = document.createElement('ol');
		document.body.appendChild(songList);

		var list;
		for (var i = 0; i < playList.length; i++) {
			list = document.createElement('li');
			list.innerText = playList[i].author + " - " + playList[i].song;
			document.querySelector('ol').appendChild(list);
		}
	}

	showList();

})();