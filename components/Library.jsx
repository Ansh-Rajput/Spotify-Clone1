'use client'

import React from 'react'
import {TbPlaylist} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import UseAuthModal from '@/hooks/UseAuthModal'
import { useUser } from '@/hooks/UseUser'
import UseUploadModal from '@/hooks/UseUploadModal'
import MediaItem from './MediaItem'
import UseOnPlay from '@/hooks/UseOnPlay'

const Library = ({songs}) => {
    const authModal = UseAuthModal();
    const uploadModal = UseUploadModal();
    const {user} = useUser();
    const onPlay  = UseOnPlay(songs);
    const onClick = () => {
        if((!user)){
          return authModal.onOpen();
        }

        return uploadModal.onOpen();
    }
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-5 pt-4'>
            <div className='inline-flex items-center gap-x-2'>
                <TbPlaylist size={26} className='text-neutral-400'/>
                <p className='text-neutral-400 font-medium text-md'>
                    Your Library
                </p>
            </div>
            <AiOutlinePlus
                onClick={onClick}
                size={20}
                className='text-neutral-400 cursor-pointer hover:text-white transition'
            />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {
          songs.map((item)=>{
            return <MediaItem
              onClick={(id)=>onPlay(id)}
              key={item.id}
              data={item}
            />
          })
        }
      </div>
    </div>
  )
}

export default Library
