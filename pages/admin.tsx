import { IGuardedPage } from '../interfaces';

const AdminPage: IGuardedPage = () => (<div>Admin page</div>);

AdminPage.auth = true;

export default AdminPage;
