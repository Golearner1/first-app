import AuthForm from '@/components/auth-form';

export default async function Home({searchparams}) {
  const formMode = searchparams.mode || 'login';
  return <AuthForm mode={formMode}/>;
}
