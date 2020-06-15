let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;


let vicepresidenciaSchema = mongoose.Schema({
	nombre: { type : String },
	satisfaccion: { type : Number },
	lealtad: { type: String },
	experiencia: { type: String }
	
});

// let userSchema = mongoose.Schema({
// 	username : { type : String, 
// 				 required : true, 
// 				 unique : true },
// 	password : { type : String,
// 				 required : true }
// })

let Vicepresidencia = mongoose.model( 'encuestas', vicepresidenciaSchema );
// let User = mongoose.model( 'User', userSchema );

// let UserList = {
// 	register : function( user ){
// 		return User.find( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser.length == 0 ){
// 					return bcrypt.hash(user.password, 10)
// 				}
// 			})
// 			.then( hashPassword =>{
// 				return User.create({
// 					username : user.username, 
// 					password : hashPassword
// 				})
// 				.then( newUser => {
// 					return newUser;
// 				})
// 				.catch( error => {
// 					throw Error( error );
// 				});
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	},
// 	login : function( user ){
// 		return User.findOne( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser ){
// 					return bcrypt.compare(user.password, checkUser.password)
// 				}
// 			})
// 			.then( validUser => {
// 				if( validUser ){
// 					return "Valid User";
// 				}
// 				else{
// 					throw Error("Invalid User");
// 				}
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	}
// }


let VPList = {
	get : function(){
		return Vicepresidencia.find()
				.then( datosVP => {
					return datosVP;
				})
				.catch( error => {
					throw Error( error );
				});
	}, 
		 postSatisfaccion : function( id, satisfaccion ){
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {satisfaccion: satisfaccion}, (err) => {
			if (err) {
				throw Error(error);
			}
		 });
	 },
	
		 PostSatis : function( id, satisfaccion ){
		 return Vicepresidencia.insertOne({nombre: id}, {satisfaccion: satisfaccion}, (err) => {
			if (err) {
				throw Error(error);
			}
		 });
	 },

	 postLealtad : function( id, lealtad ){
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {lealtad: lealtad}, (err) => {
			if (err) {
				throw Error(error);
			}
		 });
	 },

	 postExperiencia : function( id, experiencia ){
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {experiencia: experiencia}, (err) => {
			if (err) {
				throw Error(error);
			}
		 });
	 }
	// ,
	// post : function( newPet ){
	// 	return Pet.create( newPet )
	// 			.then( pet => {
	// 				return pet;
	// 			})
	// 			.catch( error => {
	// 				throw Error(error);
	// 			});
	// }
};

module.exports = { VPList };


