//LAYOUT
import { UploadLayout } from '../components/Layout';

//PAGES
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
//PUBLIC ROUTES
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: UploadLayout },
];

//PRIVATE ROUTES
const privateRoutes = [];

export { publicRoutes, privateRoutes };
