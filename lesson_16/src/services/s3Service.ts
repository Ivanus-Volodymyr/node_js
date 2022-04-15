import S3, { ManagedUpload } from 'aws-sdk/clients/s3';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

import { configEnv } from '../configs/configEnv';

class S3Service {
    Bucket;

    constructor() {
        this.Bucket = new S3({
            region: configEnv.region,
            accessKeyId: configEnv.access_key_bucket,
            secretAccessKey: configEnv.secret_access_key_bucket,
        });
    }

    uploadFile(file:UploadedFile, itemType:string, itemId:number): Promise<ManagedUpload.SendData> {
        const filePath = S3Service.filePathBuilder(file.name, itemType, itemId);

        return this.Bucket.upload({
            Bucket: configEnv.bucket_name as string,
            Body: file.data,
            Key: filePath,
            ContentType: file.mimetype,
            ACL: 'public-read',
        })
            .promise();
        // promise must have!!!!!!!!.....;
    }

    private static filePathBuilder(fileName: string, itemType: string, itemId: number): string {
        const fileExtension = path.extname(fileName);
        return `${itemType}/${itemId}/${uuidv4()}${fileExtension}`;
    }
}

export const s3Service = new S3Service();
