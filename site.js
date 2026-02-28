const BASE_URL = "https://estoyok.netlify.app/";
const translations = {};

translations.es = {
  meta: {
    title: "EstoyOK | App de seguridad inteligente con check-ins automaticos",
    description: "EstoyOK es la app de seguridad personal que aprende tu rutina, hace check-ins automaticos cuando estas bien y avisa a tus seres queridos solo cuando realmente importa.",
    keywords: "app de seguridad personal, check-in automatico, alerta a cuidadores, seguridad para adultos mayores, seguridad para viajeros solos, monitoreo de bienestar, app de seguridad, family safety",
    ogTitle: "EstoyOK | Seguridad que piensa antes",
    ogDescription: "EstoyOK aprende tu rutina, hace check-ins automaticos cuando estas bien y alerta a tus seres queridos solo cuando hace falta.",
    twitterDescription: "Seguridad personal inteligente para vida independiente, tranquilidad familiar y menos falsas alarmas.",
    locale: "es_ES"
  },
  headerTagline: "Seguridad personal, sin ruido",
  headerCta: "Descargar gratis",
  heroBadge: '<span class="inline-block h-2.5 w-2.5 rounded-full bg-coral"></span>Porque a alguien le importa saber si estas bien',
  heroTitle: 'Seguridad que <span class="text-brand-700">piensa antes</span>',
  heroDescription: "EstoyOK aprende tu rutina diaria y hace check-ins automaticos cuando estas bien. Si algo parece fuera de lo normal, te acompana con un recordatorio amable y avisa a tus seres queridos solo cuando realmente hace falta.",
  heroPills: '<span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Safety Score inteligente</span><span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Check-ins automaticos</span><span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Alertas con privacidad</span><span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Espanol, English e Portugues</span>',
  placeholderNote: "Los enlaces de App Store y Google Play son placeholders temporales.",
  appStoreTop: "Disponible en",
  appStoreLabel: "App Store",
  googlePlayTop: "Disponible en",
  googlePlayLabel: "Google Play",
  appStoreAria: "Placeholder de App Store",
  googlePlayAria: "Placeholder de Google Play",
  score: {
    statusLabel: "Estado",
    status: "Check-in automatico",
    signalsLabel: "Senales",
    signalsText: "Ubicacion, actividad, movimiento, rutina y bateria",
    privacyLabel: "Privacidad",
    privacyText: "Tus datos de comportamiento quedan en tu telefono"
  },
  miniStories: [
    { title: "Para vida independiente", text: "Ayuda a adultos mayores a vivir con autonomia mientras su familia se siente cerca y tranquila." },
    { title: "Para tranquilidad diaria", text: "Ideal para viajeros solos, personas con condiciones de salud y cualquiera que quiera una red de apoyo inteligente." }
  ],
  stats: [
    {
      value: "5",
      wrapperClass: "rounded-[2rem] bg-white/80 p-8 shadow-sm ring-1 ring-slate-200/70",
      valueClass: "text-4xl font-black text-brand-700",
      titleClass: "mt-4 text-xl font-bold text-ink",
      textClass: "mt-3 leading-7 text-slate-600",
      title: "Cinco senales, una sola decision inteligente",
      text: "Ubicacion, actividad del telefono, movimiento, rutina diaria y bateria se combinan para entender si estas bien."
    },
    {
      value: "7 dias",
      wrapperClass: "rounded-[2rem] bg-ink p-8 text-white shadow-sm",
      valueClass: "text-4xl font-black text-brand-200",
      titleClass: "mt-4 text-xl font-bold",
      textClass: "mt-3 leading-7 text-slate-300",
      title: "Suficientes para aprender tu ritmo",
      text: "En una semana, EstoyOK entiende tus patrones y reduce check-ins manuales sin bajar la proteccion."
    },
    {
      value: "0 ruido",
      wrapperClass: "rounded-[2rem] bg-coral p-8 text-white shadow-sm",
      valueClass: "text-4xl font-black",
      titleClass: "mt-4 text-xl font-bold",
      textClass: "mt-3 leading-7 text-orange-50",
      title: "Alertas solo cuando importa",
      text: "Tus seres queridos ven un score de seguridad, no un sistema invasivo de vigilancia."
    }
  ],
  featuresIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Por que EstoyOK</p><h2 class="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">Una app de seguridad personal que trabaja con tu vida, no contra ella</h2><p class="mt-5 text-lg leading-8 text-slate-600">Las apps tradicionales piden demasiado y entienden demasiado poco. EstoyOK aprende tu rutina, automatiza los momentos seguros y escala solo cuando algo parece realmente distinto.</p>',
  featureCards: [
    { title: "Smart Safety Score", text: "Un puntaje de 0 a 100 calculado en tiempo real con las senales que mejor describen tu bienestar diario." },
    { title: "Check-ins automaticos", text: "Cuando tu score es alto, la app confirma que estas bien en silencio. Sin friccion. Sin ansiedad." },
    { title: "Safe Zones", text: "Marca casa, oficina, gimnasio o cualquier lugar confiable. Estar ahi mejora tu score y simplifica los check-ins." },
    { title: "Aprendizaje de patrones", text: "En pocos dias, EstoyOK detecta tu comportamiento normal y reconoce cuando algo sale de lo habitual." },
    { title: "Alertas a cuidadores", text: "Familiares, amigos o vecinos reciben una alerta solo despues de que el sistema probo pasos mas suaves primero." },
    { title: "Privacidad desde el diseno", text: "Los datos de comportamiento quedan en el dispositivo. Los cuidadores ven claridad, no vigilancia." }
  ],
  storiesIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Historias reales</p><h2 class="mt-4 text-4xl font-black tracking-tight sm:text-5xl">La tranquilidad tambien es emocional</h2><p class="mt-5 max-w-xl text-lg leading-8 text-slate-300">El valor es simple: menos miedo, menos interrupciones y mas independencia. Estos son los momentos para los que EstoyOK fue creada.</p>',
  storyQuotes: [
    { quote: "Mi mama vive sola y odia sentirse vigilada. Con EstoyOK conserva su libertad y yo se cuando realmente debo prestar atencion.", label: "Cuidado familiar" },
    { quote: "Viajo sola por trabajo. Saber que la app detectaria si me salgo de mi ritmo normal me hace sentir acompanada sin sentirme observada.", label: "Viajera sola" },
    { quote: "Es la primera app de seguridad que no me molesta todo el dia. Solo actua cuando algo realmente parece mal.", label: "Bienestar diario" }
  ],
  howIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Como funciona</p><h2 class="mt-4 text-4xl font-black tracking-tight text-ink">Simple para vos. Reasegurante para quienes te quieren.</h2>',
  howSteps: [
    { title: "Configuralo una vez", text: "Agrega tus contactos de confianza y define los lugares donde normalmente te sentis segura o seguro." },
    { title: "Deja que aprenda", text: "Durante la primera semana, EstoyOK reconoce tu ritmo cotidiano y reduce check-ins innecesarios." },
    { title: "Mantente protegido", text: "Si todo esta bien, la app se mantiene silenciosa. Si algo parece raro, escala con cuidado." }
  ],
  faqIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">FAQ</p><h2 class="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">Preguntas que tambien ayudan al SEO</h2><p class="mt-5 text-lg leading-8 text-slate-600">Esta pagina incluye respuestas claras sobre seguridad personal, check-ins automaticos, privacidad y monitoreo para adultos mayores y viajeros.</p>',
  faqItems: [
    { q: "Como funciona EstoyOK?", a: "EstoyOK aprende tu rutina, calcula un Safety Score con cinco senales y hace check-ins automaticos cuando estas bien. Si detecta algo inusual, te pide confirmacion y alerta a tus cuidadores solo cuando hace falta." },
    { q: "Que ven los cuidadores?", a: "Ven un numero de seguridad y el estado general de la situacion. No ven tu historial de actividad ni un seguimiento invasivo de tu comportamiento." },
    { q: "Funciona en iPhone y Android?", a: "Si. EstoyOK esta pensada para iOS y Android, con descarga desde App Store y Google Play." }
  ],
  finalCopy: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Descarga EstoyOK</p><h2 class="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Hace menos check-ins. Senti mas seguridad.</h2><p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">Seguridad inteligente para vida independiente, tranquilidad familiar y confianza cotidiana.</p>',
  footerCopy: "EstoyOK es una app de seguridad personal, check-ins inteligentes, monitoreo de bienestar y alertas a cuidadores con privacidad primero."
};

translations.en = {
  meta: {
    title: "EstoyOK | Smart personal safety app with automatic check-ins",
    description: "EstoyOK is the personal safety app that learns your routine, checks in automatically when you're safe, and alerts your loved ones only when it truly matters.",
    keywords: "personal safety app, automatic check-in app, caregiver alerts, elderly monitoring, solo traveler safety, wellness check app, family safety app, privacy-first safety app",
    ogTitle: "EstoyOK | Safety that thinks ahead",
    ogDescription: "Smart check-ins, privacy-first safety, and calm caregiver alerts for independent living, families, and solo travelers.",
    twitterDescription: "A smart safety app for independent living, family peace of mind, and fewer false alarms.",
    locale: "en_US"
  },
  headerTagline: "Personal safety, without the noise",
  headerCta: "Download free",
  heroBadge: '<span class="inline-block h-2.5 w-2.5 rounded-full bg-coral"></span>Because someone cares if you are OK',
  heroTitle: 'Safety that <span class="text-brand-700">thinks ahead</span>',
  heroDescription: "EstoyOK learns your daily routine and handles automatic check-ins when you are clearly safe. If something feels off, it nudges you gently and alerts your loved ones only when it truly matters.",
  heroPills: '<span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Smart Safety Score</span><span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Automatic check-ins</span><span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Privacy-first alerts</span><span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Spanish, English and Portuguese</span>',
  placeholderNote: "App Store and Google Play links are temporary placeholders.",
  appStoreTop: "Download on the",
  appStoreLabel: "App Store",
  googlePlayTop: "Get it on",
  googlePlayLabel: "Google Play",
  appStoreAria: "App Store placeholder",
  googlePlayAria: "Google Play placeholder",
  score: {
    statusLabel: "Status",
    status: "Auto check-in",
    signalsLabel: "Signals",
    signalsText: "Location, activity, movement, routine, and battery",
    privacyLabel: "Privacy",
    privacyText: "Your behavioral data stays on your phone"
  },
  miniStories: [
    { title: "For independent living", text: "Helps older adults stay autonomous while family members feel calm, informed, and connected." },
    { title: "For everyday peace of mind", text: "Ideal for solo travelers, people with health conditions, and anyone who wants a smarter safety net." }
  ],
  stats: [
    {
      value: "5",
      wrapperClass: "rounded-[2rem] bg-white/80 p-8 shadow-sm ring-1 ring-slate-200/70",
      valueClass: "text-4xl font-black text-brand-700",
      titleClass: "mt-4 text-xl font-bold text-ink",
      textClass: "mt-3 leading-7 text-slate-600",
      title: "Five signals, one smart decision",
      text: "Location, phone activity, movement, routine, and battery work together to understand whether you are safe."
    },
    {
      value: "7 days",
      wrapperClass: "rounded-[2rem] bg-ink p-8 text-white shadow-sm",
      valueClass: "text-4xl font-black text-brand-200",
      titleClass: "mt-4 text-xl font-bold",
      textClass: "mt-3 leading-7 text-slate-300",
      title: "Enough to learn your rhythm",
      text: "In about a week, EstoyOK understands your patterns and cuts down manual check-ins without lowering protection."
    },
    {
      value: "0 noise",
      wrapperClass: "rounded-[2rem] bg-coral p-8 text-white shadow-sm",
      valueClass: "text-4xl font-black",
      titleClass: "mt-4 text-xl font-bold",
      textClass: "mt-3 leading-7 text-orange-50",
      title: "Alerts only when it matters",
      text: "Your loved ones see a safety score, not an invasive surveillance system."
    }
  ],
  featuresIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Why EstoyOK</p><h2 class="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">A personal safety app that works with your life, not against it</h2><p class="mt-5 text-lg leading-8 text-slate-600">Traditional check-in apps ask too much and learn too little. EstoyOK adapts to your routine, automates safe moments, and escalates only when something truly feels unusual.</p>',
  featureCards: [
    { title: "Smart Safety Score", text: "A real-time score from 0 to 100 built from the signals that best reflect your daily wellbeing." },
    { title: "Automatic check-ins", text: "When your score is high, the app confirms you are OK silently in the background. No friction. No anxiety." },
    { title: "Safe Zones", text: "Mark home, office, the gym, or any trusted place. Being there boosts your score and simplifies check-ins." },
    { title: "Pattern learning", text: "Within days, EstoyOK learns your usual behavior and notices when something falls outside your normal routine." },
    { title: "Caregiver alerts", text: "Family, friends, or neighbors are notified only after the smart system has already tried gentler steps first." },
    { title: "Privacy by design", text: "Behavioral data stays on the device. Caretakers get clarity, not surveillance." }
  ],
  storiesIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Real stories</p><h2 class="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Peace of mind is emotional too</h2><p class="mt-5 max-w-xl text-lg leading-8 text-slate-300">The value is simple: less fear, fewer interruptions, and more independence. These are the moments EstoyOK was built for.</p>',
  storyQuotes: [
    { quote: "My mom lives alone and hates feeling monitored. With EstoyOK, she keeps her freedom and I still know when I should pay attention.", label: "Family care" },
    { quote: "I travel solo for work. Knowing the app would notice if I drift away from my normal rhythm makes me feel supported without feeling watched.", label: "Solo traveler" },
    { quote: "It is the first safety app that does not nag me all day. It steps in only when something actually seems wrong.", label: "Everyday wellness" }
  ],
  howIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">How it works</p><h2 class="mt-4 text-4xl font-black tracking-tight text-ink">Simple for you. Reassuring for the people who care about you.</h2>',
  howSteps: [
    { title: "Set it up once", text: "Add trusted contacts and define the places where you usually feel safe." },
    { title: "Let it learn", text: "During the first week, EstoyOK learns your daily rhythm and reduces unnecessary check-ins." },
    { title: "Stay protected", text: "If everything looks normal, the app stays quiet. If something looks off, it escalates with care." }
  ],
  faqIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">FAQ</p><h2 class="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">Questions that also help Google understand the app</h2><p class="mt-5 text-lg leading-8 text-slate-600">This page answers core questions about personal safety, automatic check-ins, privacy, and caregiver monitoring for seniors and solo travelers.</p>',
  faqItems: [
    { q: "How does EstoyOK work?", a: "EstoyOK learns your routine, calculates a Safety Score from five signals, and performs automatic check-ins when you are clearly safe. If it detects something unusual, it asks for confirmation and alerts caregivers only when needed." },
    { q: "What do caretakers see?", a: "They see a safety number and the general status of the situation. They do not get your detailed behavior history or invasive tracking data." },
    { q: "Does it work on iPhone and Android?", a: "Yes. EstoyOK is designed for both iOS and Android, with downloads through the App Store and Google Play." }
  ],
  finalCopy: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Download EstoyOK</p><h2 class="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Check in less. Feel safer.</h2><p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">Smart safety for independent living, family peace of mind, and everyday confidence.</p>',
  footerCopy: "EstoyOK is a personal safety app for smart check-ins, wellness monitoring, and privacy-first caregiver alerts."
};

translations.pt = {
  meta: {
    title: "EstoyOK | App de seguranca inteligente com check-ins automaticos",
    description: "EstoyOK e o app de seguranca pessoal que aprende sua rotina, faz check-ins automaticos quando voce esta bem e avisa quem cuida de voce somente quando realmente importa.",
    keywords: "app de seguranca pessoal, check-in automatico, alertas para cuidadores, monitoramento de idosos, seguranca para viajantes sozinhos, bem-estar, seguranca familiar, safety app",
    ogTitle: "EstoyOK | Seguranca que pensa antes",
    ogDescription: "Check-ins inteligentes, privacidade em primeiro lugar e alertas cuidadosos para vida independente, familias e viajantes sozinhos.",
    twitterDescription: "Um app de seguranca inteligente para vida independente, tranquilidade da familia e menos falsos alarmes.",
    locale: "pt_BR"
  },
  headerTagline: "Seguranca pessoal, sem ruido",
  headerCta: "Baixar gratis",
  heroBadge: '<span class="inline-block h-2.5 w-2.5 rounded-full bg-coral"></span>Porque alguem se importa em saber se voce esta bem',
  heroTitle: 'Seguranca que <span class="text-brand-700">pensa antes</span>',
  heroDescription: "EstoyOK aprende sua rotina diaria e faz check-ins automaticos quando voce esta claramente bem. Se algo parecer fora do normal, ela envia um lembrete gentil e avisa quem cuida de voce somente quando realmente precisa.",
  heroPills: '<span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Safety Score inteligente</span><span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Check-ins automaticos</span><span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Alertas com privacidade</span><span class="rounded-full bg-white/80 px-4 py-2 shadow-sm">Espanhol, ingles e portugues</span>',
  placeholderNote: "Os links da App Store e do Google Play sao placeholders temporarios.",
  appStoreTop: "Baixe na",
  appStoreLabel: "App Store",
  googlePlayTop: "Disponivel no",
  googlePlayLabel: "Google Play",
  appStoreAria: "Placeholder da App Store",
  googlePlayAria: "Placeholder do Google Play",
  score: {
    statusLabel: "Status",
    status: "Check-in automatico",
    signalsLabel: "Sinais",
    signalsText: "Localizacao, atividade, movimento, rotina e bateria",
    privacyLabel: "Privacidade",
    privacyText: "Seus dados de comportamento ficam no seu telefone"
  },
  miniStories: [
    { title: "Para vida independente", text: "Ajuda idosos a manter autonomia enquanto a familia se sente mais tranquila e presente." },
    { title: "Para tranquilidade do dia a dia", text: "Ideal para viajantes sozinhos, pessoas com condicoes de saude e qualquer pessoa que queira uma rede de apoio mais inteligente." }
  ],
  stats: [
    {
      value: "5",
      wrapperClass: "rounded-[2rem] bg-white/80 p-8 shadow-sm ring-1 ring-slate-200/70",
      valueClass: "text-4xl font-black text-brand-700",
      titleClass: "mt-4 text-xl font-bold text-ink",
      textClass: "mt-3 leading-7 text-slate-600",
      title: "Cinco sinais, uma decisao inteligente",
      text: "Localizacao, atividade do telefone, movimento, rotina e bateria trabalham juntos para entender se voce esta bem."
    },
    {
      value: "7 dias",
      wrapperClass: "rounded-[2rem] bg-ink p-8 text-white shadow-sm",
      valueClass: "text-4xl font-black text-brand-200",
      titleClass: "mt-4 text-xl font-bold",
      textClass: "mt-3 leading-7 text-slate-300",
      title: "Tempo suficiente para aprender seu ritmo",
      text: "Em cerca de uma semana, EstoyOK entende seus padroes e reduz check-ins manuais sem diminuir a protecao."
    },
    {
      value: "0 ruido",
      wrapperClass: "rounded-[2rem] bg-coral p-8 text-white shadow-sm",
      valueClass: "text-4xl font-black",
      titleClass: "mt-4 text-xl font-bold",
      textClass: "mt-3 leading-7 text-orange-50",
      title: "Alertas so quando importa",
      text: "Quem cuida de voce ve um score de seguranca, nao um sistema invasivo de vigilancia."
    }
  ],
  featuresIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Por que EstoyOK</p><h2 class="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">Um app de seguranca pessoal que trabalha com a sua vida, nao contra ela</h2><p class="mt-5 text-lg leading-8 text-slate-600">Apps tradicionais pedem demais e entendem de menos. EstoyOK aprende sua rotina, automatiza os momentos seguros e escala apenas quando algo realmente parece diferente.</p>',
  featureCards: [
    { title: "Smart Safety Score", text: "Uma pontuacao de 0 a 100 calculada em tempo real a partir dos sinais que melhor refletem seu bem-estar diario." },
    { title: "Check-ins automaticos", text: "Quando seu score esta alto, o app confirma em silencio que esta tudo bem. Sem atrito. Sem ansiedade." },
    { title: "Safe Zones", text: "Marque casa, escritorio, academia ou qualquer local confiavel. Estar ali melhora seu score e simplifica os check-ins." },
    { title: "Aprendizado de padroes", text: "Em poucos dias, EstoyOK aprende seu comportamento normal e percebe quando algo sai da rotina." },
    { title: "Alertas para cuidadores", text: "Familiares, amigos ou vizinhos sao avisados somente depois de o sistema tentar abordagens mais suaves primeiro." },
    { title: "Privacidade desde o inicio", text: "Os dados de comportamento ficam no dispositivo. Os cuidadores recebem clareza, nao vigilancia." }
  ],
  storiesIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Historias reais</p><h2 class="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Tranquilidade tambem e emocional</h2><p class="mt-5 max-w-xl text-lg leading-8 text-slate-300">O valor e simples: menos medo, menos interrupcoes e mais independencia. Estes sao os momentos para os quais EstouOK foi criada.</p>',
  storyQuotes: [
    { quote: "Minha mae mora sozinha e odeia se sentir monitorada. Com EstoyOK, ela mantem sua liberdade e eu sei quando realmente preciso prestar atencao.", label: "Cuidado familiar" },
    { quote: "Viajo sozinha a trabalho. Saber que o app perceberia se eu saisse do meu ritmo normal me faz sentir amparada sem me sentir observada.", label: "Viajante solo" },
    { quote: "E o primeiro app de seguranca que nao me incomoda o dia inteiro. Ele so age quando algo realmente parece errado.", label: "Bem-estar diario" }
  ],
  howIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Como funciona</p><h2 class="mt-4 text-4xl font-black tracking-tight text-ink">Simples para voce. Tranquilizador para quem se importa com voce.</h2>',
  howSteps: [
    { title: "Configure uma vez", text: "Adicione contatos de confianca e defina os lugares onde voce normalmente se sente seguro." },
    { title: "Deixe aprender", text: "Durante a primeira semana, EstoyOK entende seu ritmo diario e reduz check-ins desnecessarios." },
    { title: "Fique protegido", text: "Se tudo parecer normal, o app fica silencioso. Se algo parecer estranho, ele escala com cuidado." }
  ],
  faqIntro: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">FAQ</p><h2 class="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">Perguntas que tambem ajudam o SEO</h2><p class="mt-5 text-lg leading-8 text-slate-600">Esta pagina responde perguntas importantes sobre seguranca pessoal, check-ins automaticos, privacidade e monitoramento para idosos e viajantes sozinhos.</p>',
  faqItems: [
    { q: "Como funciona o EstoyOK?", a: "EstoyOK aprende sua rotina, calcula um Safety Score com cinco sinais e faz check-ins automaticos quando voce esta claramente bem. Se detectar algo incomum, pede confirmacao e avisa os cuidadores somente quando necessario." },
    { q: "O que os cuidadores veem?", a: "Eles veem um numero de seguranca e o estado geral da situacao. Nao recebem seu historico detalhado de comportamento nem dados invasivos de rastreamento." },
    { q: "Funciona no iPhone e no Android?", a: "Sim. EstoyOK foi pensada para iOS e Android, com download pela App Store e Google Play." }
  ],
  finalCopy: '<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Baixe EstoyOK</p><h2 class="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Faca menos check-ins. Sinta mais seguranca.</h2><p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">Seguranca inteligente para vida independente, tranquilidade da familia e confianca no dia a dia.</p>',
  footerCopy: "EstoyOK e um app de seguranca pessoal com check-ins inteligentes, monitoramento de bem-estar e alertas para cuidadores com privacidade em primeiro lugar."
};

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  const explicit = params.get("lang");
  if (explicit && translations[explicit]) {
    localStorage.setItem("estoyok-lang", explicit);
    return explicit;
  }

  const saved = localStorage.getItem("estoyok-lang");
  if (saved && translations[saved]) return saved;

  const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
  for (const value of prefs) {
    const lang = String(value).toLowerCase();
    if (lang.startsWith("es")) return "es";
    if (lang.startsWith("pt")) return "pt";
    if (lang.startsWith("en")) return "en";
  }

  return "en";
}

function canonicalUrl(lang) {
  return `${BASE_URL}?lang=${lang}`;
}

function placeholderUrl(lang, hash) {
  return `${BASE_URL}?lang=${lang}#${hash}`;
}

function setMeta(id, value) {
  const node = document.getElementById(id);
  if (node) node.setAttribute("content", value);
}

function setHtml(id, value) {
  const node = document.getElementById(id);
  if (node) node.innerHTML = value;
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function renderCards(items, articleClass) {
  return items.map((item) => `<article class="${articleClass}"><h3 class="text-xl font-bold text-ink">${item.title}</h3><p class="mt-3 leading-7 text-slate-600">${item.text}</p></article>`).join("");
}

function renderMiniStories(items) {
  return items.map((item, index) => {
    const articleClass = index === 0 ? "rounded-3xl bg-white p-5 shadow-sm" : "rounded-3xl bg-brand-50 p-5 shadow-sm";
    const titleClass = index === 0 ? "text-sm font-semibold text-brand-700" : "text-sm font-semibold text-brand-800";
    const textClass = index === 0 ? "mt-2 text-sm leading-6 text-slate-600" : "mt-2 text-sm leading-6 text-slate-700";
    return `<article class="${articleClass}"><p class="${titleClass}">${item.title}</p><p class="${textClass}">${item.text}</p></article>`;
  }).join("");
}

function renderStats(items) {
  return items.map((item) => `<div class="${item.wrapperClass}"><p class="${item.valueClass}">${item.value}</p><h2 class="${item.titleClass}">${item.title}</h2><p class="${item.textClass}">${item.text}</p></div>`).join("");
}

function renderQuotes(items) {
  return items.map((item) => `<article class="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10"><p class="text-lg leading-8 text-slate-100">"${item.quote}"</p><p class="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">${item.label}</p></article>`).join("");
}

function renderSteps(items) {
  return items.map((item, index) => `<article class="rounded-[2rem] bg-white/85 p-6 shadow-sm ring-1 ring-slate-200/70"><p class="text-sm font-semibold text-brand-700">0${index + 1}</p><h3 class="mt-3 text-xl font-bold text-ink">${item.title}</h3><p class="mt-3 leading-7 text-slate-600">${item.text}</p></article>`).join("");
}

function renderFaq(items) {
  return items.map((item) => `<article class="rounded-[2rem] bg-white/85 p-6 shadow-sm ring-1 ring-slate-200/70"><h3 class="text-xl font-bold text-ink">${item.q}</h3><p class="mt-3 leading-7 text-slate-600">${item.a}</p></article>`).join("");
}

function renderScorePanel(copy) {
  return `<div class="flex items-center justify-between"><div><p class="text-sm uppercase tracking-[0.3em] text-brand-200">Safety Score</p><p class="mt-2 text-5xl font-black">92</p></div><div class="rounded-2xl bg-white/10 px-4 py-3 text-right"><p class="text-xs uppercase tracking-[0.25em] text-slate-300">${copy.score.statusLabel}</p><p class="mt-1 text-base font-semibold text-brand-200">${copy.score.status}</p></div></div><div class="mt-6 h-3 overflow-hidden rounded-full bg-white/10"><div class="h-full w-[92%] rounded-full bg-gradient-to-r from-brand-300 via-brand-400 to-brand-200"></div></div><div class="mt-6 grid gap-3 sm:grid-cols-2"><div class="rounded-2xl bg-white/8 p-4"><p class="text-xs uppercase tracking-[0.2em] text-slate-400">${copy.score.signalsLabel}</p><p class="mt-2 text-sm text-slate-200">${copy.score.signalsText}</p></div><div class="rounded-2xl bg-white/8 p-4"><p class="text-xs uppercase tracking-[0.2em] text-slate-400">${copy.score.privacyLabel}</p><p class="mt-2 text-sm text-slate-200">${copy.score.privacyText}</p></div></div>`;
}

function buildStructuredData(lang, copy) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "EstoyOK",
        url: BASE_URL,
        inLanguage: lang,
        description: copy.meta.description
      },
      {
        "@type": "SoftwareApplication",
        name: "EstoyOK",
        url: canonicalUrl(lang),
        inLanguage: lang,
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS, Android",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: copy.meta.description
      },
      {
        "@type": "FAQPage",
        inLanguage: lang,
        mainEntity: copy.faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a }
        }))
      }
    ]
  };
}

function updateLangLinks(lang) {
  document.querySelectorAll("[data-lang-link]").forEach((link) => {
    const targetLang = link.getAttribute("data-lang-link");
    const isHeaderSwitcher = Boolean(link.closest("nav"));
    link.href = canonicalUrl(targetLang);
    if (targetLang === lang) {
      link.setAttribute("aria-current", "page");
      if (isHeaderSwitcher) {
        link.classList.add("bg-brand-700", "text-white");
        link.classList.remove("text-slate-600", "text-brand-700", "font-semibold");
      } else {
        link.classList.add("text-brand-700", "font-semibold");
        link.classList.remove("text-slate-600", "bg-brand-700", "text-white");
      }
    } else {
      link.removeAttribute("aria-current");
      link.classList.remove("bg-brand-700", "text-white");
      link.classList.remove("text-brand-700", "font-semibold");
      link.classList.add("text-slate-600");
    }
  });
}

function applyLanguage(lang) {
  const copy = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.title = copy.meta.title;
  setMeta("meta-description", copy.meta.description);
  setMeta("meta-keywords", copy.meta.keywords);
  setMeta("og-title", copy.meta.ogTitle);
  setMeta("og-description", copy.meta.ogDescription);
  setMeta("og-url", canonicalUrl(lang));
  setMeta("og-locale", copy.meta.locale);
  setMeta("twitter-title", copy.meta.ogTitle);
  setMeta("twitter-description", copy.meta.twitterDescription);

  const canonical = document.getElementById("canonical-link");
  if (canonical) canonical.href = canonicalUrl(lang);
  const brandLink = document.getElementById("brand-link");
  if (brandLink) brandLink.href = canonicalUrl(lang);

  setText("header-tagline", copy.headerTagline);
  setText("header-cta", copy.headerCta);
  setHtml("hero-badge", copy.heroBadge);
  setHtml("hero-title", copy.heroTitle);
  setText("hero-description", copy.heroDescription);
  setHtml("hero-pills", copy.heroPills);
  setText("placeholder-note", copy.placeholderNote);
  setHtml("score-panel", renderScorePanel(copy));
  setHtml("mini-story-grid", renderMiniStories(copy.miniStories));
  setHtml("stats-grid", renderStats(copy.stats));
  setHtml("features-intro", copy.featuresIntro);
  setHtml("feature-grid", renderCards(copy.featureCards, "rounded-[2rem] bg-white/85 p-7 shadow-sm ring-1 ring-slate-200/70"));
  setHtml("stories-intro", copy.storiesIntro);
  setHtml("stories-grid", renderQuotes(copy.storyQuotes));
  setHtml("how-intro", copy.howIntro);
  setHtml("how-steps", renderSteps(copy.howSteps));
  setHtml("faq-intro", copy.faqIntro);
  setHtml("faq-grid", renderFaq(copy.faqItems));
  setHtml("final-copy", copy.finalCopy);
  setText("footer-copy", copy.footerCopy);
  setText("app-store-top", copy.appStoreTop);
  setText("app-store-label", copy.appStoreLabel);
  setText("google-play-top", copy.googlePlayTop);
  setText("google-play-label", copy.googlePlayLabel);
  setText("footer-app-store-label", copy.appStoreLabel);
  setText("footer-google-play-label", copy.googlePlayLabel);

  const appUrl = placeholderUrl(lang, "app-store-placeholder");
  const playUrl = placeholderUrl(lang, "google-play-placeholder");
  ["app-store-link", "footer-app-store-link"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) {
      node.href = appUrl;
      node.setAttribute("aria-label", copy.appStoreAria);
    }
  });
  ["google-play-link", "footer-google-play-link"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) {
      node.href = playUrl;
      node.setAttribute("aria-label", copy.googlePlayAria);
    }
  });

  updateLangLinks(lang);

  const structuredData = document.getElementById("structured-data");
  if (structuredData) structuredData.textContent = JSON.stringify(buildStructuredData(lang, copy));
}

(function init() {
  const lang = detectLanguage();
  const params = new URLSearchParams(window.location.search);
  if (!params.get("lang")) {
    params.set("lang", lang);
    const url = new URL(window.location.href);
    url.search = params.toString();
    window.history.replaceState({}, "", url.toString());
  }
  window.addEventListener("DOMContentLoaded", () => applyLanguage(lang));
})();
