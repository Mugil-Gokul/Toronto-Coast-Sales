const containerClient =
require("../config/azure");


const uploadToAzure =
async(file)=>{


const blobName =
Date.now()
+
"-"
+
file.originalname;



const blockBlobClient =
containerClient.getBlockBlobClient(
 blobName
);



await blockBlobClient.uploadData(
 file.buffer,
 {
  blobHTTPHeaders:{
   blobContentType:
   file.mimetype
  }
 }
);



return blockBlobClient.url;


}



module.exports =
uploadToAzure;