'use client';

import Image from 'next/image';

import useLoadImage from '@/hooks/useLoadImage';

import { Song } from '@/types';
import usePlayer from '@/hooks/usePlayer';

type Props = { data: Song; onClick?: (id: string) => void };

export default function MediaItem({ data, onClick }: Props) {
  const imageUrl = useLoadImage(data);
  const player = usePlayer();

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    return player.setId(data.id);
  };

  return (
    <div
      onClick={handleClick}
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
    >
      <div
        className="
          relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
          group
        "
      >
        <Image
          fill
          src={imageUrl || '/images/music-placeholder.png'}
          alt="MediaItem"
          className="object-cover group-hover:scale-110 duration-300"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">By {data.author}</p>
      </div>
    </div>
  );
}
