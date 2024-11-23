import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";

const s3Client = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.ACCESSKEY_ID,
    secretAccessKey: process.env.ACCESSKEY_SECRET,
  },
});

export const uploadFile = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `uploads/${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const command = new PutObjectCommand(params);

    const data = await s3Client.send(command);

    const s3BucketUrl = process.env.S3BUCKET_URL;
    const cloudFrontUrl = process.env.CLOUDFRONT_URL;
    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/${params.Key}`;

    const cloudFrontFileUrl = fileUrl.replace(s3BucketUrl, cloudFrontUrl);

    return cloudFrontFileUrl;
  } catch (err) {
    console.error("Error uploading file:", err);
    throw err;
  }
};

export const upload = multer({ storage: multer.memoryStorage() });
