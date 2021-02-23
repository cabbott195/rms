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
var viewIr = require('./home/view')
var ir = require('./models/create')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var ir = []
var viewIr = []

function irCreate(
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

    ir = {first_name:first_name , last_name: last_name, d_birth, p_age, p_sex, p_race, p_weight, p_height, p_eyes, p_hair, p_tats, p_address, p_phone, p_ssn, p_dln, p_gang, ir_location, ir_locationName, ir_narrative, ir_type, v_vin, v_year, v_make, v_model, v_color, v_otherInfo}
    
    var ir = new ir(ir);
         
    author.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New Report: ' + ir);
      ir.push(ir)
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