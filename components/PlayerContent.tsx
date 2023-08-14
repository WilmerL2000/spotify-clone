'use client';

import useSound from 'use-sound';
import { useEffect, useState } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';

import { Song } from '@/types';
import usePlayer from '@/hooks/usePlayer';

import LikeButton from './LikeButton';
import MediaItem from './MediaItem';

type Props = { song: Song; songUrl: string };

export default function PlayerContent({ song, songUrl }: Props) {
  return <div>PlayerContent</div>;
}
