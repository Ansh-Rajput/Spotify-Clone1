import SideBar from '@/components/SideBar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToastProvider from '@/providers/TostProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Spotify Clone',
  description: 'listen to music',
}

export const revalidate = 0;

export default async function RootLayout({ children }) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <SideBar songs={userSongs}>
              {children}
            </SideBar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
