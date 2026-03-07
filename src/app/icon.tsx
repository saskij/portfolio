import { ImageResponse } from 'next/og';
import { getAssetPath } from '@/lib/utils';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '4px',
          border: '1px solid #FFAB00',
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  )
}
