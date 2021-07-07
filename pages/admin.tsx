import FeedbackList from '../components/Feedback/FeedbackList';
import { IGuardedPage } from '../interfaces';

const AdminPage: IGuardedPage = () => (<><FeedbackList /></>);

AdminPage.auth = true;

export default AdminPage;
