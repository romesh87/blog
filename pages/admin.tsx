import { IGuardedPage } from '../interfaces';

const AdminPage: IGuardedPage = () => {
  return ( <div>Admin page</div> );
}

AdminPage.auth = true;

export default AdminPage;