import path from 'path';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');
export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const extension = file.originalname.substring(
        file.originalname.lastIndexOf('.'),
      );

      if (extension !== '.csv') {
        return callback(
          new Error(
            'Invalid image extension. Only PNG, GIF ou JPG/JPEG are permited.',
          ),
          file.originalname,
        );
      }
      // eslint-disable-next-line no-console
      console.log(extension);

      return callback(null, file.originalname);
    },
  }),
};
