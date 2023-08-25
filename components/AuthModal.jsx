'use client'
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Modal from './Modal'
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import UseAuthModal from '@/hooks/UseAuthModal';

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const {session} = useSessionContext();
    const {onClose,isOpen} = UseAuthModal();
    const onChange = (open) => {
      if(!open){
        onClose();
      }
    }

  useEffect(()=>{
    if(session){
      router.refresh();
      onClose();
    }
  },[session,router,onClose]);
  return (
    <Modal title='welcome back' description='login to your account' isOpen={isOpen} onChange={onChange}>
      <Auth 
        theme='dark'
        magicLink
        providers={["google","github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme:ThemeSupa,
          variables:{
            default:{
              colors:{
                brand:'#404040',
                brandAccent:'#22c55e'
              }
            }
          }
        }}
      />
    </Modal>
  )
}

export default AuthModal
