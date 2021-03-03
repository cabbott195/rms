var mongoose = require('mongoose');

const { DateTime } = require("luxon");  //for date handling

var Schema = mongoose.Schema;

var IrSchema = new Schema({
    first_name: { type: String, required: true, maxlength: 100 },
    last_name: { type: String, required: true, maxlength: 100 },
    date_of_birth: { type: Date, required: true },
    p_age: { type: String, required: true, maxlength: 3 },
    p_sex: { type: String, required: true, maxlength: 7 },
    p_race: { type: String, required: true, maxlength: 100 },
    p_weight: { type: String, required: true, maxlength: 4 },
    p_height: { type: String, required: true, maxlength: 3 },
    p_eyes: { type: String, required: true, maxlength: 3 },
    p_hair: { type: String, required: true, maxlength: 3 },
    p_tats: { type: String, required: true },
    p_address: { type: String, required: true },
    p_phone: { type: String, required: true, maxlength: 12 },
    p_ssn: { type: String, required: true, maxlength: 9 },
    p_dln: { type: String, required: true, maxlength: 9 },
    p_gang: { type: String, required: true },
    ir_location: { type: String, required: true },
    ir_locationName: { type: String, required: true },
    ir_narrative: { type: String, required: true },
    ir_type: { type: String, required: true },
    v_vin: { type: String, required: true, minlength: 11, maxlength: 17 },
    v_year: { type: String, required: true, maxlength: 2 },
    v_make: { type: String, required: true },
    v_model: { type: String, required: true },
    v_color: { type: String, required: true, maxlength: 3 },
    v_otherInfo: { type: String, required: true }
});

// Virtual for persons "full" name.
/*IrSchema.virtual('name').get(function () {
    return this.last_name + ', ' + this.first_name;
});*/

// Virtual for this author instance URL.
IrSchema.virtual('url').get(function () {
    return '/home/create/';
});

// IrSchema.virtual('date_of_birth_yyyy_mm_dd').get(function () {
//     return DateTime.fromJSDate(this.date_of_birth).toISODate(); //format 'YYYY-MM-DD'
// });



// Export model.
module.exports = mongoose.model('Ir', IrSchema);