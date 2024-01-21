// // before creating the search , first need to create the index on this specific field 
// db.massiveData.createIndex(
//     { "about": "text" },  

// )
// then we can search for this field 

db.massiveData.find({$text: { $search: "elit" }}, {about:1})