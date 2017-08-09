// Retrieve
var MongoClient = require('mongodb').MongoClient;
var Converter = require("csvtojson").Converter;
var glob = require('glob');
//Get all files.
var inputFiles = []
var path = "./netflow_output_csv_files/**/*.csv";
glob(path, function (er, files) {
  for(i=0; i < files.length;i++){
  	inputFiles.push(files[i]);
  	//console.log(files[i]);
  }
})

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/flowdb", function(err, db) {
  if(err) { return console.dir(err); }
  var collection = db.collection('netflowReadFromfile');
  var converter = new Converter({});
  for(j=0; j < inputFiles.length;j++){
	  converter.fromFile(inputFiles[j],function(err,result){
		    // if an error has occured then handle it
		    if(err){
			console.log("An Error Has Occured");
			console.log(err);
		    }
		    var json = result;
		    for(i=0;i < json.length;i++){
	  			collection.insert(json[i],function(err, result) {
            console.log(result);
          });
        }//ending saving each record.
	  });
  }//ending saving each file
});
