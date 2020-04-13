module.exports = function(app, express, bodyParser, path) {
    console.log('Registering traffic-injuries API...');

    const dataStore = require('nedb');

    const dbFileName = path.join(__dirname, '/traffic-injuries.db');
    const BASE_API_URL = '/api/v1';

    app.use(bodyParser.json());

    const db = new dataStore({
        filename: dbFileName,
        autoload: true
    });

    var initialTrafficInjuries = [
        {
            auto_com: 'andalusia',
            year: 2018,
            accident: 17.066,
            dead: 274,
            injure: 24.2
        },
        {
            auto_com: 'aragon',
            year: 2018,
            accident: 2.228,
            dead: 85,
            injure: 2.915
        },
        {
            auto_com: 'asturias',
            year: 2018,
            accident: 2.103,
            dead: 43,
            injure: 2.873
        },
        {
            auto_com: 'balearic-islands',
            year: 2018,
            accident: 3.501,
            dead: 53,
            injure: 4.642
        },
        {
            auto_com: 'canary-islands',
            year: 2018,
            accident: 3.506,
            dead: 68,
            injure: 4.96
        },
        {
            auto_com: 'cantabria',
            year: 2018,
            accident: 647,
            dead: 23,
            injure: 971
        },
        {
            auto_com: 'castile-leon',
            year: 2018,
            accident: 2.586,
            dead: 100,
            injure: 3.649
        },
        {
            auto_com: 'castile-la-mancha',
            year: 2018,
            accident: 4.425,
            dead: 176,
            injure: 5.869
        },
        {
            auto_com: 'catalonia',
            year: 2018,
            accident: 27.202,
            dead: 326,
            injure: 35.426
        },
        {
            auto_com: 'ceuta-melilla',
            year: 2018,
            accident: 1.504,
            dead: 51,
            injure: 2.068
        },
        {
            auto_com: 'valencia',
            year: 2018,
            accident: 4.519,
            dead: 144,
            injure: 6.267
        },
        {
            auto_com: 'extremadura',
            year: 2018,
            accident: 16.724,
            dead: 114,
            injure: 21.285
        },
        {
            auto_com: 'galicia',
            year: 2018,
            accident: 2.58,
            dead: 66,
            injure: 3.456
        },
        {
            auto_com: 'madrid',
            year: 2018,
            accident: 855,
            dead: 35,
            injure: 1.067
        },
        {
            auto_com: 'murcia',
            year: 2018,
            accident: 612,
            dead: 10,
            injure: 819
        },
        {
            auto_com: 'navarre',
            year: 2018,
            accident: 8.36,
            dead: 183,
            injure: 10.96
        },
        {
            auto_com: 'basque-country',
            year: 2018,
            accident: 4.798,
            dead: 49,
            injure: 6.151
        },
        {
            auto_com: 'the-rioja',
            year: 2018,
            accident: 762,
            dead: 6,
            injure: 1.031
        },
        {
            auto_com: 'andalusia',
            year: 2017,
            accident: 15.671,
            dead: 305,
            injure: 22.303
        },
        {
            auto_com: 'aragon',
            year: 2017,
            accident: 2.483,
            dead: 80,
            injure: 3.289
        },
        {
            auto_com: 'asturias',
            year: 2017,
            accident: 2.348,
            dead: 37,
            injure: 3.197
        },
        {
            auto_com: 'balearic-islands',
            year: 2017,
            accident: 3.846,
            dead: 68,
            injure: 5.017
        },
        {
            auto_com: 'canary-islands',
            year: 2017,
            accident: 3.58,
            dead: 67,
            injure: 5.133
        },
        {
            auto_com: 'cantabria',
            year: 2017,
            accident: 734,
            dead: 22,
            injure: 1.017
        },
        {
            auto_com: 'castile-leon',
            year: 2017,
            accident: 2.761,
            dead: 129,
            injure: 3.783
        },
        {
            auto_com: 'castile-la-mancha',
            year: 2017,
            accident: 4.492,
            dead: 164,
            injure: 5.877
        },
        {
            auto_com: 'catalonia',
            year: 2017,
            accident: 27.305,
            dead: 283,
            injure: 35.884
        },
        {
            auto_com: 'ceuta-melilla',
            year: 2017,
            accident: 1.546,
            dead: 62,
            injure: 2.137
        },
        {
            auto_com: 'valencia',
            year: 2017,
            accident: 4.741,
            dead: 117,
            injure: 6.716
        },
        {
            auto_com: 'extremadura',
            year: 2017,
            accident: 16.364,
            dead: 125,
            injure: 20.94
        },
        {
            auto_com: 'galicia',
            year: 2017,
            accident: 2.552,
            dead: 85,
            injure: 3.453
        },
        {
            auto_com: 'madrid',
            year: 2017,
            accident: 898,
            dead: 29,
            injure: 1.156
        },
        {
            auto_com: 'murcia',
            year: 2017,
            accident: 730,
            dead: 26,
            injure: 917
        },
        {
            auto_com: 'navarre',
            year: 2017,
            accident: 8.206,
            dead: 176,
            injure: 10.882
        },
        {
            auto_com: 'basque-country',
            year: 2017,
            accident: 4.769,
            dead: 51,
            injure: 6.213
        },
        {
            auto_com: 'the-rioja',
            year: 2017,
            accident: 879,
            dead: 4,
            injure: 1.248
        },
        {
            auto_com: 'andalusia',
            year: 2016,
            accident: 15.859,
            dead: 303,
            injure: 22.988
        },
        {
            auto_com: 'aragon',
            year: 2016,
            accident: 2.239,
            dead: 73,
            injure: 2.991
        },
        {
            auto_com: 'asturias',
            year: 2016,
            accident: 2.258,
            dead: 35,
            injure: 3.156
        },
        {
            auto_com: 'balearic-islands',
            year: 2016,
            accident: 3.872,
            dead: 60,
            injure: 5.276
        },
        {
            auto_com: 'canary-islands',
            year: 2016,
            accident: 3.639,
            dead: 71,
            injure: 5.184
        },
        {
            auto_com: 'cantabria',
            year: 2016,
            accident: 728,
            dead: 21,
            injure: 1.068
        },
        {
            auto_com: 'castile-leon',
            year: 2016,
            accident: 2.928,
            dead: 118,
            injure: 4.098
        },
        {
            auto_com: 'castile-la-mancha',
            year: 2016,
            accident: 4.735,
            dead: 175,
            injure: 6.432
        },
        {
            auto_com: 'catalonia',
            year: 2016,
            accident: 27.244,
            dead: 282,
            injure: 35.999
        },
        {
            auto_com: 'ceuta-melilla',
            year: 2016,
            accident: 1.366,
            dead: 62,
            injure: 1.853
        },
        {
            auto_com: 'valencia',
            year: 2016,
            accident: 4.874,
            dead: 141,
            injure: 6.848
        },
        {
            auto_com: 'extremadura',
            year: 2016,
            accident: 16.27,
            dead: 121,
            injure: 20.659
        },
        {
            auto_com: 'galicia',
            year: 2016,
            accident: 2.354,
            dead: 58,
            injure: 3.222
        },
        {
            auto_com: 'madrid',
            year: 2016,
            accident: 756,
            dead: 26,
            injure: 944
        },
        {
            auto_com: 'murcia',
            year: 2016,
            accident: 733,
            dead: 25,
            injure: 958
        },
        {
            auto_com: 'navarre',
            year: 2016,
            accident: 8.388,
            dead: 180,
            injure: 11.104
        },
        {
            auto_com: 'basque-country',
            year: 2016,
            accident: 4.92,
            dead: 56,
            injure: 6.369
        },
        {
            auto_com: 'the-rioja',
            year: 2016,
            accident: 862,
            dead: 3,
            injure: 1.241
        },
        {
            auto_com: 'andalusia',
            year: 2015,
            accident: 16.431,
            dead: 262,
            injure: 23.897
        },
        {
            auto_com: 'aragon',
            year: 2015,
            accident: 2.264,
            dead: 71,
            injure: 2.962
        },
        {
            auto_com: 'asturias',
            year: 2015,
            accident: 2.408,
            dead: 36,
            injure: 3.425
        },
        {
            auto_com: 'balearic-islands',
            year: 2015,
            accident: 3.513,
            dead: 53,
            injure: 4.724
        },
        {
            auto_com: 'canary-islands',
            year: 2015,
            accident: 3.33,
            dead: 62,
            injure: 4.669
        },
        {
            auto_com: 'cantabria',
            year: 2015,
            accident: 723,
            dead: 22,
            injure: 1.043
        },
        {
            auto_com: 'castile-leon',
            year: 2015,
            accident: 2.727,
            dead: 107,
            injure: 3.776
        },
        {
            auto_com: 'castile-la-mancha',
            year: 2015,
            accident: 4.503,
            dead: 181,
            injure: 6.192
        },
        {
            auto_com: 'catalonia',
            year: 2015,
            accident: 25.554,
            dead: 291,
            injure: 33.675
        },
        {
            auto_com: 'ceuta-melilla',
            year: 2015,
            accident: 1.446,
            dead: 54,
            injure: 2.03
        },
        {
            auto_com: 'valencia',
            year: 2015,
            accident: 4.581,
            dead: 123,
            injure: 6.526
        },
        {
            auto_com: 'extremadura',
            year: 2015,
            accident: 15.523,
            dead: 111,
            injure: 20.003
        },
        {
            auto_com: 'galicia',
            year: 2015,
            accident: 1.796,
            dead: 44,
            injure: 2.517
        },
        {
            auto_com: 'madrid',
            year: 2015,
            accident: 475,
            dead: 26,
            injure: 586
        },
        {
            auto_com: 'murcia',
            year: 2015,
            accident: 723,
            dead: 20,
            injure: 957
        },
        {
            auto_com: 'navarre',
            year: 2015,
            accident: 7.787,
            dead: 154,
            injure: 10.213
        },
        {
            auto_com: 'basque-country',
            year: 2015,
            accident: 4.613,
            dead: 67,
            injure: 5.982
        },
        {
            auto_com: 'the-rioja',
            year: 2015,
            accident: 918,
            dead: 5,
            injure: 1.278
        }
    ];

    // README info
    app.use('/', express.static('./public'));

    // Testing Cool
    app.get('/cool', (request, response) => {
        response.send('<html>' + cool() + '</html>');
    });

    // Redirect to postman url
    app.get('/api/v1/traffic-injuries/docs', (req, res) => {
        res.redirect('https://documenter.getpostman.com/view/10693282/SzYT5gnd');
    });

    // GET LoadInitialData
    app.get(BASE_API_URL + '/traffic-injuries/loadInitialData', (req, res) => {
        db.insert(initialTrafficInjuries);
		res.send(initialTrafficInjuries);
        console.log(
            'START - LOAD INITIAL DATA\n' +
                JSON.stringify(initialTrafficInjuries, null, 2) +
                '\nEND - LOAD INITIAL DATA'
        );
    });

    // a) GET /traffic-injuries
    app.get(BASE_API_URL + '/traffic-injuries', (req, res) => {
        db.find({}, (err, docs) => {
			if(docs.length == 0){
				res.sendStatus(204);
				console.log('\nNO CONTENT TO SHOW');
			}else{
			res.send(docs.map((ti)=>{
					delete ti._id;
					return(ti);
				}));
            console.log(
                '\nSTART - SHOW ALL DATA ON DB\n' +
                    JSON.stringify(docs, null, 2) +
                    '\nEND - SHOW ALL DATA ON DB');	
			}
        });
    });

    // b) POST /traffic-injuries
    app.post(BASE_API_URL + '/traffic-injuries', (req, res) => {
        var newTrafficInjury = req.body;

        if (newTrafficInjury.auto_com == null ||
            newTrafficInjury.year == null ||
            newTrafficInjury.accident == null ||
            newTrafficInjury.dead == null ||
            newTrafficInjury.injure == null ||
            newTrafficInjury == '') {
            res.sendStatus(400);
            console.log('\n400 - TRAFFIC INJURY CAN NOT BE EMPTY OR NULL');
        } else {
            db.insert(newTrafficInjury);
            res.sendStatus(201);
            console.log(
                '\nSTART - ADD NEW DATA TO DB\n' +
                    JSON.stringify(newTrafficInjury, null, 2) +
                    '\nEND - ADD NEW DATA TO DB'
            );
        }
    });
	
	// c) GET /traffic-injuries/auto_com
    app.get(BASE_API_URL + '/traffic-injuries/:auto_com', (req, res) => {
        var auto_com_url = req.params.auto_com;

        db.find({ auto_com: auto_com_url }, (err, docs) => {
            if (docs.length >= 1) {
			res.send(docs.map((ti)=>{
					delete ti._id;
					return(ti);
				}));
				
                console.log(
                    '\nSTART - SHOW THIS DATA FROM DB\n' +
                        JSON.stringify(docs, null, 2) +
                        '\nEND - SHOW THIS DATA FROM DB\n'
                );
            } else {
                res.sendStatus(404);
                console.log('\n404 - TRAFFIC INJURIES NOT FOUND');
            }
        });
    });

    // c) GET /traffic-injuries/auto_com/year
    app.get(BASE_API_URL + '/traffic-injuries/:auto_com/:year', (req, res) => {
        var auto_com_url = req.params.auto_com;
        var year_url = req.params.year;

        db.find({ auto_com: auto_com_url, year: parseInt(year_url) }, (err, docs) => {
            if (docs.length >= 1) {
			res.send(docs.map((ti)=>{
					delete ti._id;
					return(ti);
				})[0]);
				
                console.log(
                    '\nSTART - SHOW THIS DATA FROM DB\n' +
                        JSON.stringify(docs, null, 2) +
                        '\nEND - SHOW THIS DATA FROM DB\n'
                );
            } else {
                res.sendStatus(404);
                console.log('\n404 - TRAFFIC INJURY NOT FOUND');
            }
        });
    });

    // d) DELETE /traffic-injuries/auto_com/year
    app.delete(BASE_API_URL + '/traffic-injuries/:auto_com/:year', (req, res) => {
        var auto_com_url = req.params.auto_com;
        var year_url = req.params.year;

        db.remove({ auto_com: auto_com_url, year: parseInt(year_url) }, {}, (err, numRemoved) => {
            if (numRemoved == 0) {
                res.sendStatus(404);
                console.log('TRAFFIC INJURY NOT FOUND');
            } else {
                res.sendStatus(200);
                console.log(
                    '\nSTART - DELETE THIS DATA FROM DB\n' +
                        numRemoved +
                        '\nEND - DELETE THIS DATA FROM DB\n'
                );
            }
        });
    });

    // e) PUT /traffic-injuries/auto_com/year
    app.put(BASE_API_URL + '/traffic-injuries/:auto_com/:year', (req, res) => {
        var newTrafficInjury = req.body;
        var auto_com_url = req.params.auto_com;
        var year_url = req.params.year;

        if (
            newTrafficInjury.auto_com == null ||
            newTrafficInjury.year == null ||
            newTrafficInjury.accident == null ||
            newTrafficInjury.dead == null ||
            newTrafficInjury.injure == null ||
            newTrafficInjury == ''
        ) {
            res.sendStatus(400);
            console.log('\n400 - TRAFFIC INJURY CAN NOT BE EMPTY OR NULL');
        } else {
            db.update(
                { auto_com: auto_com_url, year: parseInt(year_url) },
                {
                    auto_com: newTrafficInjury.auto_com,
                    year: newTrafficInjury.year,
                    accident: newTrafficInjury.accident,
                    dead: newTrafficInjury.dead,
                    injure: newTrafficInjury.injure
                },
                {},
                (err, numReplaced) => {
                    res.sendStatus(200);
                    console.log(
                        '\nSTART - UPDATE THIS DATA FROM DB\n' +
                            numReplaced +
                            '\nEND - UPDATE THIS DATA FROM DB\n'
                    );
                }
            );
        }
    });

    // f) POST /traffic-injuries/auto_com/
    // f.1) POST /traffic-injuries/auto_com/year
    app.post(BASE_API_URL + '/traffic-injuries/:auto_com', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED\n');
    });

    app.post(BASE_API_URL + '/traffic-injuries/:auto_com/:year', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED\n');
    });

    // g) PUT /traffic-injuries
    // g.1) PUT /traffic-injuries/auto_com
    app.put(BASE_API_URL + '/traffic-injuries', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED\n');
    });

    app.put(BASE_API_URL + '/traffic-injuries/:auto_com', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED');
    });

    // h) DELETE /traffic-injuries
    app.delete(BASE_API_URL + '/traffic-injuries', (req, res) => {
        db.remove({}, { multi: true }, function(err, numRemoved) {
            if (numRemoved >= 1) {
                res.sendStatus(200);
                console.log(
                    '\nSTART - DELETE ALL DATA FROM DB\n' +
                        numRemoved +
                        '\nEND - DELETE ALL DATA FROM DB\n'
                );
            } else {
                res.sendStatus(404);
                console.log('NO DATA TO REMOVE');
            }
        });
    });

    console.log('Registered traffic-injuries API!\n');
};