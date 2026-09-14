import { useState, useEffect, useRef } from 'react'

// Real church photos
import heroBg from '@/imports/Capa.jpg'
import cultoImg from '@/imports/Sobre nós.jpg'
import jovensImg from '@/imports/Jovens.png'
import eventoPoster1 from '@/imports/Anúncios projetor (3).png'
import eventoPoster2 from '@/imports/Carlos Cardoso.png'
import eventoPoster3 from '@/imports/Anúncios projetor (4).png'
import socialImg from '@/imports/+vida.jpeg'
import contribuirBg from '@/imports/Gostaria de contribuir.png'
import oracaoImg from '@/imports/Oração.jpg'
import palavraImg from '@/imports/Palavra.jpg'
import comunhaoImg from '@/imports/Comunhão.JPG'
import superIgrejaImg from '@/imports/Super Igreja.jpg'
import louvarteImg from '@/imports/Louvarte.jpg'
import mulheresImg from '@/imports/Mulheres.png'
import homensImg from '@/imports/Homens com vida.jpg'
import casaisImg from '@/imports/Casais.jpg'
import escolaMusicaImg from '@/imports/Escola de música.jpg'

// Logos
import logoBranco from '@/imports/Logo_ccva_branco.png'
import vidaLogo from '@/imports/__vida_logo.png'
import superIgrejaLogo from '@/imports/Supere_igreja_Logo.png'

const font = "'Century Gothic', 'CenturyGothic', AppleGothic, Poppins, sans-serif"
const TEAL = '#00B4CE'
const jovensInstagramUrl = 'https://www.instagram.com/youchoose.pt?stkn=OGFzM3N2bWdvejNz'

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  function go(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#ministerios', label: 'Ministérios' },
    { href: '#eventos', label: 'Eventos' },
    { href: '#oracao', label: 'Oração' },
    { href: '#contribuicoes', label: 'Contribuições' },
    { href: '#contactos', label: 'Contactos' },
  ]

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(10, 18, 28, 0.12)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.10)' : 'none',
        backdropFilter: 'blur(8px)',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => go('#inicio')} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={logoBranco} alt="CCVA" style={{ width: 104, height: 30, objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.22))' }} />
        </button>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: 4 }}>
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', borderRadius: 8, transition: 'color 0.2s', textShadow: '0 1px 2px rgba(0,0,0,0.25)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#d6f8ff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Hamburger */}
        <button className="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, background: '#ffffff', borderRadius: 2,
              transition: 'all 0.25s',
              transform: open ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scaleX(0)') : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mobile-menu" style={{ background: '#fff', borderTop: '1px solid #F3F4F6', padding: '8px 0' }}>
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              style={{ display: 'block', width: '100%', textAlign: 'left', fontFamily: font, fontWeight: 600, fontSize: 14, color: '#374151', background: 'none', border: 'none', cursor: 'pointer', padding: '12px 24px' }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '82vh', display: 'flex', alignItems: 'center', background: '#0D2233', overflow: 'hidden' }}>
      <img src={heroBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%', opacity: 0.72, transform: 'scale(1.08)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,34,51,0.72) 0%, rgba(10,50,68,0.52) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '100px 24px 40px', width: '100%' }}>
        <p style={{ fontFamily: font, fontWeight: 600, fontSize: 12, color: TEAL, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16 }}>
          Centro Cristão Vida Abundante
        </p>

        <h1 style={{
          fontFamily: font,
          fontWeight: 800,
          fontStyle: 'italic',
          fontSize: 'clamp(28px, 4.4vw, 54px)',
          color: '#fff',
          lineHeight: 1.08,
          marginBottom: 32,
          maxWidth: 560,
          textAlign: 'left',
          alignSelf: 'flex-start',
          letterSpacing: '-0.04em',
        }}>
          IGREJA{' '}
          <span style={{ color: TEAL }}>FAMÍLIA</span>
          <br />
          apaixonada por{' '}
          <span style={{ color: TEAL }}>Deus</span>
          <br />
          e por{' '}
          <span style={{ color: TEAL }}>pessoas</span>
        </h1>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="https://www.youtube.com/@CCVA-Moscavide" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 10, background: TEAL, border: 'none', borderRadius: 100, padding: '14px 24px', fontFamily: font, fontWeight: 700, fontSize: 13, color: '#fff', cursor: 'pointer', letterSpacing: 1, textDecoration: 'none', boxShadow: '0 12px 26px rgba(0, 180, 206, 0.25)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 16px 30px rgba(0, 180, 206, 0.32)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 26px rgba(0, 180, 206, 0.25)' }}
          >
            <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0l10 6-10 6z"/></svg>
            </span>
            VER CULTO
          </a>
          <button onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.35)', borderRadius: 100, padding: '14px 24px', fontFamily: font, fontWeight: 700, fontSize: 13, color: '#fff', cursor: 'pointer', letterSpacing: 1, transition: 'transform 0.2s ease, border-color 0.2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}
          >
            CONHECER A IGREJA
          </button>
        </div>

        {/* Schedules */}
        <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', flexWrap: 'wrap', gap: 28, maxWidth: 760 }}>
          {[
            { dia: 'DOMINGOS', hora: '10H00', modo: 'Online e Presencial' },
            { dia: 'SEXTAS-FEIRAS', hora: '21H00', modo: 'Online e Presencial' },
            { dia: 'TERÇAS-FEIRAS', hora: '15H00', modo: 'Só Presencial' },
          ].map(s => (
            <div key={s.dia} style={{ minWidth: 160 }}>
              <p style={{ fontFamily: font, fontWeight: 700, fontSize: 11, color: TEAL, letterSpacing: 2, marginBottom: 4 }}>{s.dia}</p>
              <p style={{ fontFamily: font, fontWeight: 900, fontSize: 24, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{s.hora}</p>
              <p style={{ fontFamily: font, fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: 0.5 }}>{s.modo}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

/* ─── Sobre Nós ─── */
function Sobre() {
  const [tab, setTab] = useState<'missao' | 'visao' | 'valores'>('missao')

  const subtabs = [
    { id: 'missao' as const, label: 'Missão' },
    { id: 'visao' as const, label: 'Visão' },
    { id: 'valores' as const, label: 'Valores' },
  ]

  return (
    <section id="sobre" style={{ background: '#fff' }}>
      {/* Congregation photo strip */}
      <div style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
        <img src={cultoImg} alt="Culto CCVA Moscavide" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,34,51,0.2) 0%, rgba(0,180,206,0.15) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', paddingBottom: 0 }}>
          <div style={{ display: 'inline-block', background: '#fff', padding: '16px 40px', borderRadius: '20px 20px 0 0' }}>
            <h2 style={{ fontFamily: font, fontWeight: 900, fontSize: 'clamp(28px, 5vw, 52px)', color: TEAL, letterSpacing: -1, margin: 0 }}>
              SOBRE NÓS
            </h2>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 80px' }}>
        {/* Intro text */}
        <p style={{ fontFamily: font, fontSize: 16, color: '#4B5563', lineHeight: 1.8, maxWidth: 700, margin: '0 auto 40px', textAlign: 'center' }}>
          O <strong style={{ color: '#1F2937' }}>Centro Cristão Vida Abundante de Moscavide</strong> é uma comunidade de fé viva, enraizada em Moscavide há décadas, comprometida em amar a Deus e servir as pessoas.
        </p>

        {/* Tab buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {subtabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{
                fontFamily: font, fontWeight: 700, fontSize: 13, letterSpacing: 0.5,
                padding: '10px 24px', borderRadius: 100, border: 'none', cursor: 'pointer',
                background: tab === t.id ? TEAL : '#F3F4F6',
                color: tab === t.id ? '#fff' : '#4B5563',
                transition: 'all 0.2s',
              }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Content cards */}
        {tab === 'missao' && (
          <div style={{ background: '#F8FAFC', borderRadius: 24, padding: '40px 48px', maxWidth: 680, margin: '0 auto', borderLeft: `5px solid ${TEAL}` }}>
            <p style={{ fontFamily: font, fontWeight: 700, fontSize: 11, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>A Nossa Missão</p>
            <h3 style={{ fontFamily: font, fontWeight: 800, fontSize: 26, color: '#1F2937', marginBottom: 16, lineHeight: 1.2 }}>Amar, Servir e Partilhar</h3>
            <p style={{ color: '#6B7280', lineHeight: 1.85, fontSize: 15, margin: 0 }}>
              A nossa missão é amar a Deus acima de tudo e ao próximo como a nós mesmos, servindo a comunidade local e partilhando o evangelho de Jesus Cristo de forma genuína e acessível — independentemente da idade, origem ou história de vida.
            </p>
          </div>
        )}
        {tab === 'visao' && (
          <div style={{ background: '#F8FAFC', borderRadius: 24, padding: '40px 48px', maxWidth: 680, margin: '0 auto', borderLeft: `5px solid ${TEAL}` }}>
            <p style={{ fontFamily: font, fontWeight: 700, fontSize: 11, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>A Nossa Visão</p>
            <h3 style={{ fontFamily: font, fontWeight: 800, fontSize: 26, color: '#1F2937', marginBottom: 16, lineHeight: 1.2 }}>Uma Igreja para Todos</h3>
            <p style={{ color: '#6B7280', lineHeight: 1.85, fontSize: 15, margin: 0 }}>
              Sonhamos com uma comunidade onde cada pessoa — de qualquer geração ou origem — se sinta amada, aceite e equipada para viver com propósito. Uma família espiritual que cresce, serve e alcança Moscavide e o mundo.
            </p>
          </div>
        )}
        {tab === 'valores' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, maxWidth: 980, margin: '0 auto' }}>
            {[
              { titulo: 'Oração', desc: 'O fundamento de tudo o que fazemos. Buscamos a Deus em comunidade e individualmente.', img: oracaoImg },
              { titulo: 'Palavra', desc: 'A Bíblia é a nossa autoridade. Pregamos e vivemos a Palavra com fidelidade.', img: palavraImg },
              { titulo: 'Comunhão', desc: 'Somos uma família. Celebramos, choramos e crescemos juntos.', img: comunhaoImg },
            ].map(v => (
              <div key={v.titulo} style={{ background: '#F8FAFC', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(15, 23, 42, 0.05)', boxShadow: '0 10px 22px rgba(13,34,51,0.04)' }}>
                <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                  <img src={v.img} alt={v.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,18,28,0.82), rgba(8,18,28,0.18))' }} />
                  <p style={{ position: 'absolute', left: 18, bottom: 16, right: 18, margin: 0, fontFamily: font, fontWeight: 900, fontSize: 26, color: '#fff', letterSpacing: '-0.05em' }}>{v.titulo}</p>
                </div>
                <div style={{ padding: '18px 18px 20px' }}>
                  <p style={{ color: '#5B6472', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Ministérios ─── */
function Ministerios() {
  return (
    <section id="ministerios" style={{ background: '#F8FAFC', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: 11, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 10 }}>
            Servir com propósito
          </p>
          <h2 style={{ fontFamily: font, fontWeight: 900, fontSize: 'clamp(32px, 5vw, 56px)', color: '#1F2937', letterSpacing: -1, margin: 0 }}>
            MINIST<span style={{ color: TEAL }}>ÉRIOS</span>
          </h2>
        </div>

        {/* Top 2 featured cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 16 }}>
          {/* +Vida */}
          <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', minHeight: 300 }}>
            <img src={socialImg} alt="+Vida Acção Social" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,34,51,0.93) 45%, rgba(13,34,51,0.25) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 1, padding: 28, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <img src={vidaLogo} alt="+Vida" style={{ height: 40, objectFit: 'contain', objectPosition: 'left', marginBottom: 12 }} />
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>
                Acção social e solidariedade — apoio alimentar, acompanhamento e esperança para quem mais precisa na nossa comunidade.
              </p>
              <button onClick={() => document.querySelector('#contactos')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ alignSelf: 'flex-start', background: TEAL, border: 'none', borderRadius: 100, padding: '10px 22px', fontFamily: font, fontWeight: 700, fontSize: 12, color: '#fff', cursor: 'pointer', letterSpacing: 1 }}>
                ENTRAR EM CONTACTO
              </button>
            </div>
          </div>

          {/* Jovens */}
          <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', minHeight: 300 }}>
            <img src={jovensImg} alt="Jovens CCVA" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,34,51,0.93) 45%, rgba(13,34,51,0.15) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 1, padding: 28, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <p style={{ fontFamily: font, fontWeight: 900, fontSize: 26, color: '#fff', lineHeight: 1.15, marginBottom: 10 }}>JOVENS</p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>
                Espaço para os jovens crescerem na fé, encontrarem propósito e construírem amizades que duram.
              </p>
              <a href={jovensInstagramUrl} target="_blank" rel="noopener noreferrer"
                style={{ alignSelf: 'flex-start', background: TEAL, border: 'none', borderRadius: 100, width: 48, height: 48, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', textDecoration: 'none', boxShadow: '0 8px 18px rgba(0,0,0,0.12)' }}
                aria-label="Instagram dos jovens"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 22, height: 22, display: 'block' }}>
                  <rect x="3.7" y="3.7" width="16.6" height="16.6" rx="4.3" fill="none" stroke="white" strokeWidth="2.2"/>
                  <circle cx="12" cy="12" r="4.1" fill="none" stroke="white" strokeWidth="2.2"/>
                  <circle cx="17.2" cy="6.7" r="1.2" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom ministry tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {[
            { nome: 'Super Igreja', desc: 'Crianças e famílias em crescimento', image: superIgrejaImg },
            { nome: 'Louvarte', desc: 'Louvor & Artes', image: louvarteImg },
            { nome: 'Mulheres', desc: 'Ministério feminino', image: mulheresImg },
            { nome: 'Homens com Vida', desc: 'Ministério masculino', image: homensImg },
            { nome: 'Casais', desc: 'Relacionamentos, comunhão e cuidado', image: casaisImg },
            { nome: 'Escola de Música', desc: 'Formação e expressão musical na fé', image: escolaMusicaImg },
          ].map(m => (
            <div key={m.nome} style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', minHeight: 240, boxShadow: '0 10px 22px rgba(13,34,51,0.05)' }}>
              <img src={m.image} alt={m.nome} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,34,51,0.92) 28%, rgba(13,34,51,0.18) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 22 }}>
                <p style={{ fontFamily: font, fontWeight: 900, fontSize: 22, color: '#fff', lineHeight: 1.15, margin: '0 0 6px' }}>{m.nome}</p>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 12, lineHeight: 1.5, margin: 0 }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Eventos ─── */
function Eventos() {
  const eventImages = [eventoPoster1, eventoPoster2, eventoPoster3]
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const goTo = (index: number) => {
    const safe = (index + eventImages.length) % eventImages.length
    setCurrent(safe)
    const el = trackRef.current
    if (!el) return
    const slide = el.children[safe] as HTMLElement | undefined
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  return (
    <section id="eventos" style={{ background: '#0D2233', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{
          fontFamily: font,
          fontWeight: 900,
          fontSize: 'clamp(30px, 5vw, 62px)',
          color: TEAL,
          letterSpacing: -1,
          marginBottom: 40,
          lineHeight: 0.9,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 6,
        }}>
          <span>PRÓXIMOS</span>
          <span style={{ color: '#fff' }}>EVENTOS</span>
        </h2>

        <div style={{ position: 'relative', marginBottom: 16 }}>
          <div ref={trackRef} style={{ display: 'flex', gap: 18, overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory', paddingBottom: 8 }}>
            {eventImages.map((img, index) => (
              <div key={index} style={{ flex: '0 0 100%', scrollSnapAlign: 'start', borderRadius: 24, overflow: 'hidden', background: '#0f2235', border: '1px solid rgba(255,255,255,0.08)' }}>
                <img src={img} alt={`Próximo evento ${index + 1}`} style={{ width: '100%', height: '100%', maxHeight: 520, objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 18 }}>
            <button aria-label="Evento anterior" onClick={() => goTo(current - 1)}
              style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: 20, cursor: 'pointer' }}>
              ‹
            </button>

            <div style={{ display: 'flex', gap: 8 }}>
              {eventImages.map((_, index) => (
                <button key={index} aria-label={`Ir para evento ${index + 1}`} onClick={() => goTo(index)}
                  style={{ width: 10, height: 10, borderRadius: '50%', border: 'none', background: index === current ? TEAL : 'rgba(255,255,255,0.3)', cursor: 'pointer', padding: 0 }} />
              ))}
            </div>

            <button aria-label="Próximo evento" onClick={() => goTo(current + 1)}
              style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: 20, cursor: 'pointer' }}>
              ›
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{
            background: 'rgba(255,255,255,0.05)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)',
            padding: '22px 28px', color: 'rgba(255,255,255,0.7)', fontFamily: font, fontSize: 14,
          }}>
            Mantemos a agenda em destaque com os próximos encontros e momentos especiais da igreja.
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Oração ─── */
function Oracao() {
  const [nome, setNome] = useState('')
  const [pedido, setPedido] = useState('')
  const [anonimo, setAnonimo] = useState(false)
  const [enviado, setEnviado] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const assunto = encodeURIComponent('Pedido de oração — CCVA Moscavide')
    const remetente = anonimo ? 'Pedido anónimo' : nome || 'Sem nome'
    const corpo = encodeURIComponent(`Nome: ${remetente}\n\nPedido de oração:\n${pedido}`)
    window.location.href = `mailto:geral@ccvamoscavide.pt?subject=${assunto}&body=${corpo}`
    setEnviado(true)
  }

  return (
    <section id="oracao" style={{ background: '#fff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: font, fontWeight: 600, fontSize: 11, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 10 }}>
            "A oração do justo tem muito poder" — Tiago 5:16
          </p>
          <h2 style={{ fontFamily: font, fontWeight: 900, fontSize: 'clamp(28px, 4.5vw, 52px)', color: '#1F2937', letterSpacing: -1, margin: 0 }}>
            PEDIDOS DE <span style={{ color: TEAL }}>ORAÇÃO</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {/* Form */}
          <div style={{ background: '#F8FAFC', borderRadius: 24, padding: '36px 32px' }}>
            <h3 style={{ fontFamily: font, fontWeight: 800, fontSize: 20, color: '#1F2937', marginBottom: 24 }}>Enviar um Pedido</h3>
            {enviado ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🙏</div>
                <p style={{ fontFamily: font, fontWeight: 700, fontSize: 18, color: '#1F2937', marginBottom: 8 }}>Pedido Recebido!</p>
                <p style={{ color: '#9CA3AF', fontSize: 14, margin: 0 }}>A nossa equipa pastoral irá orar por si.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: font, fontSize: 13, color: '#6B7280' }}>
                  <input type="checkbox" checked={anonimo} onChange={e => setAnonimo(e.target.checked)} style={{ accentColor: TEAL, width: 16, height: 16 }} />
                  Enviar anonimamente
                </label>
                {!anonimo && (
                  <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="O seu nome"
                    style={{ width: '100%', border: '1.5px solid #E5E7EB', borderRadius: 12, padding: '12px 16px', fontFamily: font, fontSize: 14, color: '#1F2937', outline: 'none', background: '#fff', boxSizing: 'border-box' }} />
                )}
                <textarea rows={5} value={pedido} onChange={e => setPedido(e.target.value)} placeholder="Partilhe o seu pedido de oração..." required
                  style={{ width: '100%', border: '1.5px solid #E5E7EB', borderRadius: 12, padding: '12px 16px', fontFamily: font, fontSize: 14, color: '#1F2937', outline: 'none', resize: 'none', background: '#fff', boxSizing: 'border-box' }} />
                <button type="submit"
                  style={{ background: TEAL, border: 'none', borderRadius: 100, padding: '14px', fontFamily: font, fontWeight: 700, fontSize: 13, color: '#fff', cursor: 'pointer', letterSpacing: 1 }}>
                  ENVIAR PEDIDO
                </button>
              </form>
            )}
          </div>

          {/* Privacy note */}
          <div style={{ background: '#F8FAFC', borderRadius: 24, padding: '36px 32px', alignSelf: 'start' }}>
            <p style={{ fontFamily: font, fontWeight: 700, fontSize: 11, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Confidencialidade</p>
            <h3 style={{ fontFamily: font, fontWeight: 800, fontSize: 22, color: '#1F2937', marginBottom: 14 }}>O seu pedido é importante.</h3>
            <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.8, margin: 0 }}>
              Os pedidos de oração não serão publicados automaticamente no site. Para proteger a privacidade, serão encaminhados apenas para a equipa responsável.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Contribuições ─── */
function Contribuicoes() {
  const [metodo, setMetodo] = useState<'mbway' | 'iban' | 'presencial'>('mbway')

  return (
    <section id="contribuicoes" className="contributions-section" style={{
      background: `linear-gradient(135deg, rgba(232, 247, 251, 0.78), rgba(255,255,255,0.9)), url(${contribuirBg}) center/cover no-repeat`,
      padding: '80px 0',
      position: 'relative',
      minHeight: 640,
      boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: font, fontWeight: 900, fontStyle: 'italic', fontSize: 'clamp(22px, 4vw, 40px)', color: '#1F2937', marginBottom: 8 }}>
          Gostaria de <span style={{ color: TEAL }}>contribuir</span>?
        </h2>
        <p style={{ color: '#4B5563', fontSize: 14, lineHeight: 1.7, marginBottom: 36, maxWidth: 560 }}>
          As suas ofertas e dízimos ajudam a sustentar os ministérios e o serviço à comunidade.{' '}
          <em style={{ color: '#374151' }}>"Deus ama aquele que dá com alegria."</em> — 2 Cor 9:7
        </p>

        {/* Method tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {([
            { id: 'mbway' as const, label: 'MB WAY' },
            { id: 'iban' as const, label: 'Transferência Bancária' },
            { id: 'presencial' as const, label: 'Presencial' },
          ]).map(m => (
            <button key={m.id} onClick={() => setMetodo(m.id)}
              style={{
                fontFamily: font, fontWeight: 700, fontSize: 12, letterSpacing: 0.5,
                padding: '10px 20px', borderRadius: 100, border: 'none', cursor: 'pointer',
                background: metodo === m.id ? TEAL : '#E5E7EB',
                color: metodo === m.id ? '#fff' : '#4B5563',
                transition: 'all 0.2s',
              }}>
              {m.label}
            </button>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: 24, padding: '36px 40px', minHeight: 230, boxSizing: 'border-box', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', border: '1px solid #F3F4F6' }}>
          {metodo === 'mbway' && (
            <div>
              <p style={{ fontFamily: font, fontWeight: 700, fontSize: 11, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>MB WAY</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <p style={{ color: '#9CA3AF', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>Número</p>
                  <p style={{ fontFamily: font, fontWeight: 800, fontSize: 28, color: '#1F2937', margin: 0 }}>(+351) 910 242 604</p>
                </div>
                <div>
                  <p style={{ color: '#9CA3AF', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>Nome</p>
                  <p style={{ fontFamily: font, fontWeight: 700, fontSize: 16, color: '#1F2937', margin: 0 }}>CCVA Moscavide</p>
                </div>
              </div>
            </div>
          )}
          {metodo === 'iban' && (
            <div>
              <p style={{ fontFamily: font, fontWeight: 700, fontSize: 11, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Transferência Bancária</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { label: 'Titular', valor: 'Centro Cristão Vida Abundante de Moscavide' },
                  { label: 'IBAN', valor: 'PT50 0036 0042 9910 0383 5067 7' },
                ].map(r => (
                  <div key={r.label} style={{ padding: '14px 0', borderBottom: '1px solid #F3F4F6' }}>
                    <p style={{ color: '#9CA3AF', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>{r.label}</p>
                    <p style={{ fontFamily: font, fontWeight: 700, fontSize: 16, color: '#1F2937', margin: 0 }}>{r.valor}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {metodo === 'presencial' && (
            <div>
              <p style={{ fontFamily: font, fontWeight: 700, fontSize: 11, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Oferta Presencial</p>
              <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                As ofertas presenciais são recolhidas durante os cultos, nos momentos de adoração. Existem envelopes disponíveis na entrada para dízimos, missões e ofertas especiais.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── Contactos + Footer ─── */
function ContactosFooter() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [enviado, setEnviado] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const assunto = encodeURIComponent(`Contacto pelo site — ${nome}`)
    const corpo = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${msg}`)
    window.location.href = `mailto:geral@ccvamoscavide.pt?subject=${assunto}&body=${corpo}`
    setEnviado(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', border: '1.5px solid #E5E7EB', borderRadius: 12,
    padding: '12px 16px', fontFamily: font, fontSize: 14, color: '#1F2937',
    outline: 'none', background: '#F8FAFC', boxSizing: 'border-box',
  }

  return (
    <>
      <section id="contactos" style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: font, fontWeight: 900, fontSize: 'clamp(28px, 4.5vw, 52px)', color: '#1F2937', letterSpacing: -1, margin: 0 }}>
              FALA <span style={{ color: TEAL }}>CONNOSCO</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {/* Form */}
            <div style={{ background: '#F8FAFC', borderRadius: 24, padding: '36px 32px' }}>
              <h3 style={{ fontFamily: font, fontWeight: 800, fontSize: 20, color: '#1F2937', marginBottom: 24 }}>Enviar Mensagem</h3>
              {enviado ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✉️</div>
                  <p style={{ fontFamily: font, fontWeight: 700, fontSize: 18, color: '#1F2937', marginBottom: 8 }}>Mensagem Enviada!</p>
                  <p style={{ color: '#9CA3AF', fontSize: 14, margin: 0 }}>Entraremos em contacto em breve.</p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <input type="text" value={nome} onChange={e => setNome(e.target.value)} required placeholder="Nome completo" style={inputStyle} />
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" style={inputStyle} />
                  <textarea rows={4} value={msg} onChange={e => setMsg(e.target.value)} required placeholder="A sua mensagem..."
                    style={{ ...inputStyle, resize: 'none' }} />
                  <button type="submit"
                    style={{ background: TEAL, border: 'none', borderRadius: 100, padding: '14px', fontFamily: font, fontWeight: 700, fontSize: 13, color: '#fff', cursor: 'pointer', letterSpacing: 1 }}>
                    ENVIAR MENSAGEM
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { emoji: '📍', label: 'Morada', valor: 'Rua Gonçalo Braga, 23 A/B\n1885-041 Moscavide' },
                { emoji: '📧', label: 'Email', valor: 'geral@ccvamoscavide.pt' },
                { emoji: '📞', label: 'Telefone', valor: '(+351) 910 242 604' },
              ].map(i => (
                <div key={i.label} style={{ background: '#F8FAFC', borderRadius: 18, padding: '20px 22px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{i.emoji}</span>
                  <div>
                    <p style={{ color: '#9CA3AF', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>{i.label}</p>
                    <p style={{ fontFamily: font, fontWeight: 600, fontSize: 14, color: '#1F2937', whiteSpace: 'pre-line', margin: 0 }}>{i.valor}</p>
                  </div>
                </div>
              ))}

              <div style={{ background: '#F8FAFC', borderRadius: 18, padding: '20px 22px' }}>
                <p style={{ color: '#9CA3AF', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Redes Sociais</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                  {[
                    {
                      label: 'facebook',
                      url: 'https://www.facebook.com/share/1FW62keTWv/',
                      bg: '#0B63D6',
                      icon: (
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 22, height: 22, display: 'block' }}>
                          <path d="M13.9 22v-9h3l.4-3.3h-3.4V7.2c0-1 .3-1.7 1.7-1.7H17V2.2c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.4 1.9-5.4 5.5v2.3H6v3.3h2.4v9h5.5Z" fill="white"/>
                        </svg>
                      ),
                    },
                    {
                      label: 'youtube',
                      url: 'https://www.youtube.com/@CCVA-Moscavide',
                      bg: '#FF0000',
                      icon: (
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 22, height: 22, display: 'block' }}>
                          <path d="M7 7.2c0-1.2 1-2.2 2.2-2.2h5.6c1.2 0 2.2 1 2.2 2.2v9.6c0 1.2-1 2.2-2.2 2.2H9.2C8 19 7 18 7 16.8V7.2Zm7.4 4.8-3.8-2.3v4.6l3.8-2.3Z" fill="white"/>
                        </svg>
                      ),
                    },
                    {
                      label: 'instagram',
                      url: 'https://www.instagram.com/ccva_moscavide?stkn=anN4YmN5eDBwYTN1',
                      bg: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 52%, #F59E0B 100%)',
                      icon: (
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 22, height: 22, display: 'block' }}>
                          <rect x="3.7" y="3.7" width="16.6" height="16.6" rx="4.3" fill="none" stroke="white" strokeWidth="2.2"/>
                          <circle cx="12" cy="12" r="4.1" fill="none" stroke="white" strokeWidth="2.2"/>
                          <circle cx="17.2" cy="6.7" r="1.2" fill="white"/>
                        </svg>
                      ),
                    },
                    {
                      label: 'youchoose',
                      url: jovensInstagramUrl,
                      bg: 'linear-gradient(135deg, #00B4CE 0%, #1D4ED8 100%)',
                      icon: (
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 22, height: 22, display: 'block' }}>
                          <path d="M12 3.5c-2.8 0-5 2.2-5 5 0 1.1.4 2.1 1.1 2.9l.2.2v.8l-1.7 3.2c-.3.5.1 1.1.7 1.1h10.7c.6 0 1-.6.7-1.1L16.7 12v-.8l.2-.2c.7-.8 1.1-1.8 1.1-2.9 0-2.8-2.2-5-5-5Zm0 2.2c1.5 0 2.8 1.2 2.8 2.8 0 .9-.4 1.7-1.1 2.3l-.4.3-.2.4v.5h-2.2v-.5l-.2-.4-.4-.3A2.8 2.8 0 0 1 9.2 8.5c0-1.6 1.3-2.8 2.8-2.8Zm-1.2 7.7h2.4v1.6h-2.4v-1.6Z" fill="white"/>
                        </svg>
                      ),
                    },
                  ].map(s => (
                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        background: s.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        textDecoration: 'none',
                        boxSizing: 'border-box',
                        boxShadow: '0 8px 18px rgba(0,0,0,0.10)',
                      }} aria-label={s.label}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0D2233', padding: '56px 0 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
            {/* Logo + tagline */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <img src={logoBranco} alt="CCVA" style={{ width: 120, height: 38, objectFit: 'contain' }} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.7, margin: '0 0 16px' }}>
                Centro Cristão Vida Abundante de Moscavide — uma comunidade de fé para todas as idades.
              </p>
            </div>

            {/* Schedules */}
            <div>
              <p style={{ fontFamily: font, fontWeight: 700, fontSize: 10, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Horários</p>
              {[
                { dia: 'DOMINGOS', hora: '10H00', modo: 'Online e Presencial' },
                { dia: 'SEXTAS-FEIRAS', hora: '21H00', modo: 'Online e Presencial' },
                { dia: 'TERÇAS-FEIRAS', hora: '15H00', modo: 'Só Presencial' },
              ].map(h => (
                <div key={h.dia} style={{ marginBottom: 14 }}>
                  <p style={{ fontFamily: font, fontWeight: 700, fontSize: 12, color: '#fff', letterSpacing: 1, margin: '0 0 2px' }}>{h.dia} — {h.hora}</p>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, margin: 0 }}>{h.modo}</p>
                </div>
              ))}
            </div>

            {/* Location */}
            <div>
              <p style={{ fontFamily: font, fontWeight: 700, fontSize: 10, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Como Chegar</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.8, marginBottom: 12 }}>
                Rua Gonçalo Braga, 23 A/B<br />
                1885-041 Moscavide, Portugal
              </p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.7 }}>
                🚇 Metro: Moscavide<br />
                📍 Lisboa, Portugal
              </p>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
              <p style={{ fontFamily: font, fontWeight: 700, fontSize: 10, color: TEAL, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>Juntas-te a Nós?</p>
              <button onClick={() => document.querySelector('#contactos')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: TEAL, border: 'none', borderRadius: 100, padding: '14px 28px', fontFamily: font, fontWeight: 700, fontSize: 13, color: '#fff', cursor: 'pointer', letterSpacing: 1 }}>
                CONTACTA-NOS
              </button>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, margin: 0 }}>© 2026 CCVA Moscavide — Centro Cristão Vida Abundante. Todos os direitos reservados.</p>
            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11, fontStyle: 'italic', margin: 0 }}>
              "Eu sou o caminho, a verdade e a vida." — João 14:6
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

/* ─── APP ─── */
export default function App() {
  return (
    <div style={{ fontFamily: font }}>
      <Navbar />
      <Hero />
      <Sobre />
      <Ministerios />
      <Eventos />
      <Oracao />
      <Contribuicoes />
      <ContactosFooter />
    </div>
  )
}
