import {Router} from 'express';

import logs from './logs';

const router = Router();

export default (): Router => {
    logs(router);
    return router;
}