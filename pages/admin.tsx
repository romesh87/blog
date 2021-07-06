import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/client';


const AdminPage: React.FC = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setIsLoading(false);
      } else {
        router.replace('/auth');
      }
    })
  }, [])

  if (isLoading) return <div style={{textAlign: 'center'}}>Loading...</div>

  return ( <div>Admin page</div> );
}
 
export default AdminPage;