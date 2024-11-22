import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"; // Import AWS SDK v3 modules
import multer from "multer";

// Set up AWS credentials and region for S3 client (v3)
const s3Client = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.ACCESSKEY_ID,
    secretAccessKey: process.env.ACCESSKEY_SECRET,
  },
});

// File upload function using AWS SDK v3
export const uploadFile = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME, // S3 bucket name
    Key: `uploads/${Date.now()}-${file.originalname}`, // Unique key for the file
    Body: file.buffer, // File content
    ContentType: file.mimetype, // File type
  
  };

  try {
    // Create the PutObjectCommand
    const command = new PutObjectCommand(params);

    // Upload the file to S3
    const data = await s3Client.send(command);

    // Replace S3 URL with CloudFront URL
    const s3BucketUrl = process.env.S3BUCKET_URL;
    const cloudFrontUrl = process.env.CLOUDFRONT_URL; // Your CloudFront distribution URL
    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/${params.Key}`;

    // Replace the S3 URL with the CloudFront URL
    const cloudFrontFileUrl = fileUrl.replace(s3BucketUrl, cloudFrontUrl);

    return cloudFrontFileUrl; // Return the CloudFront URL for the uploaded file
  } catch (err) {
    console.error("Error uploading file:", err);
    throw err;
  }
};

// Use multer with memory storage (for in-memory file processing)
export const upload = multer({ storage: multer.memoryStorage() });
