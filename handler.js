'use strict';
const sheetKey = '1b2bIuIb8fKZ4NoC7UHV4hoEmw8W0Levkw2h_tJwDryM';

module.exports.sheet = (event, context, callback) => {
    const gsjson = require('google-spreadsheet-to-json');

    gsjson({
        spreadsheetId: sheetKey,
        worksheet: [ 'Build']
    })
        .then(function(result) {
            const response = {
                statusCode: 200,
                body: JSON.stringify(result)
            };

            callback(null, response);

        })
        .catch(function(err) {
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: err,
                    input: event
                })
            };
            callback(null, response);

        });




};
