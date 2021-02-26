#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/

var async = require('async')
//var viewIr = require('./models/ir')
var ir = require('./models/ir')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var ir = []
//var viewIr = []
//var updatedIr = []

function ir(
     first_name,
     last_name,
     d_birth,
     p_age,
     p_sex,
     p_race,
     p_weight,
     p_height,
     p_eyes,
     p_hair,
     p_tats,
     p_address,
     p_phone,
     p_ssn,
     p_dln,
     p_gang,
     ir_location,
     ir_locationName,
     ir_narrative,
     ir_type,
     v_vin,
     v_year,
     v_make,
     v_model,
     v_color,
     v_otherInfo) {
        ir = {first_name:first_name , last_name: last_name, d_birth:d_birth, p_age:p_age, p_sex:p_sex, p_race:p_race, p_weight:p_weight, p_height:p_height, p_eyes:p_eyes, p_hair:p_hair, p_tats:p_tats, p_address:p_address, p_phone:p_phone, p_ssn:p_ssn, p_dln:p_dln, p_gang:p_gang, ir_location:ir_location, ir_locationName:ir_locationName, ir_narrative:ir_narrative, ir_type:ir_type, v_vin:v_vin, v_year:v_year, v_make:v_make, v_model:v_model, v_color:v_color, v_otherInfo:v_otherInfo}
    
        var ir = new Ir(ir);
         
    author.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New Report: ' + ir);
      irs.push(ir)
      cb(null, ir)
    }  );
  }
  
  async.series([
      createIr
  ],
  // Optional callback
  function(err, results) {
      if (err) {
          console.log('FINAL ERR: '+err);
      }
      else {
          console.log('ir: '+ir);
          
      }
      // All done, disconnect from database
      mongoose.connection.close();
  });