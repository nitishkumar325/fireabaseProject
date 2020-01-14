import ImagePicker from 'react-native-image-crop-picker';
import { RNS3 } from 'react-native-aws3';
class UploadImage{

static uploadPicToServer(images,callback,callback1)//call back method
{

    const file = {
        uri: 'file://'+images,
        name: "image.png",
        type: "image/png"

      }
      
      const options = {
        keyPrefix: "uploads/",
        bucket: "appinventiv-development",
        region: "us-east-1",
        accessKey: "AKIAJ3UHQTWRRT2AH3RA",
        secretKey: "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",
        successActionStatus: 201
      }

      RNS3.put(file, options).progress((e)=> {callback(e.percent)})
.then(response => {
    console.warn("myuri",file.uri)
    if (response.status !== 201){
      throw new Error("Failed to upload image to S3");
    console.log(response.body);
    }else{
        console.warn("data upload susses")
        console.warn("getting rsponse",response)
      {callback1(false,0.0)}
    
    }
  
  })
    
}
static getImageFromGallery(errorCallback,callback)
{
  console.warn("handle image")
  try{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.warn(image.path)
      callback(image.path)
    });

  }catch(Error){
errorCallback(Error)
  }
  
}
}

export default UploadImage;