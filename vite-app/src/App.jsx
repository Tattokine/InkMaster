import React, { useEffect, useState } from 'react'
import MotivCard from './components/MotivCard'

export default function App(){
  const [motifs, setMotifs] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [selected, setSelected] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(()=>{
    fetch('/api/motifs').then(r=>r.json()).then(setMotifs)
  },[])

  useEffect(()=>{
    if(!selectedId){ setSelected(null); return }
    fetch('/api/motifs/'+selectedId).then(r=>r.json()).then(setSelected)
  },[selectedId])

  function book(id){
    fetch('/api/book', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ motifId: id, name:'Demo bruker', time: new Date().toISOString() })
    }).then(()=> {
      setToast('Booking fullført (demo)')
      setTimeout(()=>setToast(null),3000)
    })
  }

  return (
    <div className="min-h-screen bg-ink text-ink-text font-ui">
      <div className="max-w-6xl mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <div className="text-2xl font-display">InkMaster</div>
          <div className="flex items-center gap-3">
            <input className="bg-ink-surface text-ink-text placeholder:text-ink-muted px-3 py-2 rounded-md border border-white/5" placeholder="Søk motiver..." />
            <button className="px-3 py-2 rounded-md bg-ink-accent text-white">Profil</button>
          </div>
        </header>

        <section className="flex flex-col md:flex-row gap-6 bg-gradient-to-r from-rose-800/10 to-yellow-500/6 rounded-lg p-6">
          <div className="flex-1">
            <h1 className="text-4xl font-display mb-2">Kunst på huden. Trygghet i prosessen.</h1>
            <p className="text-ink-muted">Utforsk ferdigde motiver og prøv dem i visualizer.</p>
            <div className="mt-4 flex gap-3">
              <button className="bg-ink-accent text-white px-4 py-2 rounded-md" onClick={()=>window.scrollTo({top:1000,behavior:'smooth'})}>Utforsk motiver</button>
              <button className="border border-white/10 text-white px-4 py-2 rounded-md">Prøv på kroppen</button>
            </div>
          </div>
          <div className="w-full md:w-80 h-40 rounded-md bg-gradient-to-br from-rose-700 to-yellow-400" />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <main className="md:col-span-2 bg-ink-surface p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Flash‑galleri</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {motifs.map(m => <MotivCard key={m.id} m={m} onClick={setSelectedId} />)}
            </div>
          </main>

          <aside className="bg-ink-surface p-4 rounded-lg">
            {selected ? (
              <div>
                <h2 className="text-xl font-semibold">{selected.title}</h2>
                <div className="flex items-center gap-3 mt-3">
                  <img src={selected.artistAvatar} alt="" className="w-14 h-14 rounded-md object-cover" />
                  <div>
                    <div className="font-medium">{selected.artist}</div>
                    <div className="text-ink-muted text-sm">Stil: {selected.style}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-ink-muted text-sm">Estimat</div>
                  <div className="text-lg font-bold">{selected.price} NOK</div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="bg-ink-accent text-white px-4 py-2 rounded-md" onClick={() => book(selected.id)}>Book time</button>
                  <button className="border border-white/10 text-white px-4 py-2 rounded-md">♥ Lagre</button>
                </div>

                <div className="mt-4 text-ink-muted text-sm">
                  <h3 className="font-semibold">Beskrivelse</h3>
                  <p>{selected.description}</p>
                </div>
              </div>
            ) : (
              <div className="text-ink-muted">Velg et motiv for detaljer</div>
            )}
          </aside>
        </div>

        {toast && <div className="fixed right-5 bottom-5 bg-ink-accent text-white px-4 py-2 rounded-md">{toast}</div>}
      </div>
    </div>
  )
}
