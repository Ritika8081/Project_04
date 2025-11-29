import React from 'react'

type Props = {
  sign: string
  compact?: boolean // image-only
  size?: number // px
}

export default function ZodiacAvatar({ sign, compact, size = 72 }: Props){
  const src = `/constellation-${sign.toLowerCase()}.svg`
  const s = Number(size) || 72
  if(compact){
    return (
      <div className="flex items-center justify-center" style={{ width: s, height: s }}>
        <img src={src} alt={`${sign} constellation`} width={s} height={s} className="rounded-md object-cover max-w-full h-auto" />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <img src={src} alt={`${sign} constellation`} width={s} height={s} className="rounded-md max-w-full h-auto" />
      <div className="">
        <div className="text-sm font-semibold">{sign}</div>
      </div>
    </div>
  )
}
