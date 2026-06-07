import React from 'react'

export default function MotivCard({ m, onClick }){
  return (
    <div className="bg-[#0b0b0b] rounded-lg overflow-hidden cursor-pointer border border-white/5" onClick={()=>onClick(m.id)}>
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage:`url(${m.image})` }} />
      <div className="p-3">
        <div className="font-semibold">{m.title}</div>
        <div className="text-ink-muted text-sm">{m.artist} • {m.price} NOK</div>
      </div>
    </div>
  )
}
