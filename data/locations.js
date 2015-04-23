var niko_locations = {
	"type": "Feature",
	"geometry": {
		"type": "MultiPoint",
		"coordinates": [
			[47.606284, -122.331786],//seattle
			[21.306479, -157.855962],//honolulu
			[32.757515, -97.336011],//fort worth
			[32.528217, -93.757405],//shreveport
			[42.110741, -88.032199],//palatine
			[41.866114, -87.646157],//JST
			[41.874008, -87.686129]//harrison & western
		]//end coords
	},//end geometry
	"properties": {
		"title": "Niko",
		"path_options": {"color": "red"},
		"time": [
			664502400,//seattle
			694224000,//honolulu
			820454400,//fort worth
			852076800,//shreveport
			1041379200,//palatine
			1251244800,//uic (jst)
			1404172800,//harrison & western
		],//end time
	}//end properties
}//end niko_locations