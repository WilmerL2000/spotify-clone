/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'misc.scdn.co',
      'i.scdn.co',
      'geo-media.beatsource.com',
      'i1.sndcdn.com',
      'media.pitchfork.com',
      'seed-mix-image.spotifycdn.com',
      'tbvswgcbrilqlaxdsxii.supabase.co',
      'ctyqmrnsybasjkqvdoes.supabase.co',
    ],
  },
};

module.exports = nextConfig;
