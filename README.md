# netflowcollector
* Waits for netflow data from a netflow data generator (vswitch)
* Waits for nfdump file in CSV format
* Reads the file
* Converts each row to a JSON object
* Stores the json object in mongodb. 
