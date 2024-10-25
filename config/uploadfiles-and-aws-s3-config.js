import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";


aws.config.update({
    accessKeyId: 'your_access_key_id',
    secretAccessKey: 'your_secret_access_key',
    region: 'your_bucket_region',
})

const s3=new aws.S3();



const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'some-bucket',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })})




export default upload;