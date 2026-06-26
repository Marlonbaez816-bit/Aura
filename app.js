const { useState, useEffect } = React;

function AuraApp() {
    // ESTADOS: Para cambiar de pestaña y guardar datos
    const [tab, setTab] = useState('ondas'); 
    const [isAiCalling, setIsAiCalling] = useState(false);
    const [monetizacion, setMonetizacion] = useState(12.50);

    // 1. COMPONENTE DE NAVEGACIÓN (Sidebar)
    const Sidebar = () => (
        <nav className="w-24 md:w-64 h-screen bg-white border-r border-purple-100 flex flex-col items-center md:items-start p-6 shadow-xl z-20">
            <div className="text-purple-600 font-black text-4xl mb-12 italic">Aura</div>
            <div className="flex flex-col gap-6 w-full">
                <button onClick={() => setTab('ondas')} className={`flex items-center gap-4 p-4 rounded-3xl transition ${tab === 'ondas' ? 'bg-purple-600 text-white shadow-lg' : 'text-purple-400 hover:bg-purple-50'}`}>
                    <i data-lucide="waves"></i> <span className="hidden md:block font-bold">Ondas</span>
                </button>
                <button onClick={() => setTab('ecos')} className={`flex items-center gap-4 p-4 rounded-3xl transition ${tab === 'ecos' ? 'bg-purple-600 text-white shadow-lg' : 'text-purple-400 hover:bg-purple-50'}`}>
                    <i data-lucide="sparkles"></i> <span className="hidden md:block font-bold">Ecos</span>
                </button>
                <button onClick={() => setTab('ia')} className={`flex items-center gap-4 p-4 rounded-3xl transition ${tab === 'ia' ? 'bg-purple-600 text-white shadow-lg' : 'text-purple-400 hover:bg-purple-50'}`}>
                    <i data-lucide="bot"></i> <span className="hidden md:block font-bold">Ecos IA</span>
                </button>
                <button onClick={() => setTab('interacciones')} className={`flex items-center gap-4 p-4 rounded-3xl transition ${tab === 'interacciones' ? 'bg-purple-600 text-white shadow-lg' : 'text-purple-400 hover:bg-purple-50'}`}>
                    <i data-lucide="users"></i> <span className="hidden md:block font-bold">Red</span>
                </button>
            </div>
            <div className="mt-auto w-full bg-purple-50 p-4 rounded-3xl text-center border border-purple-100">
                <p className="text-[10px] text-purple-400 font-black uppercase">Ganancias</p>
                <p className="text-xl font-black text-purple-700">${monetizacion.toFixed(2)}</p>
            </div>
        </nav>
    );

    // 2. VISTA DE IA (ECOS IA - Centro de Operaciones)
    const AICenter = () => (
        <div className="flex h-full w-full gap-4 p-4">
            {/* Chat de IA */}
            <div className="flex-1 bg-white rounded-[3rem] shadow-sm border border-purple-100 flex flex-col overflow-hidden">
                <div className="bg-purple-600 p-6 text-white flex justify-between items-center">
                    <div><h2 className="text-xl font-bold">Ecos IA</h2><p className="text-xs opacity-80">Online • Avatar 3D Listo</p></div>
                    <button onClick={() => alert("Llamando a Ecos IA...")} className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition">
                        <i data-lucide="phone"></i>
                    </button>
                </div>
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                    <div className="bg-purple-50 p-4 rounded-3xl rounded-tl-none max-w-[80%] text-purple-800">
                        Hola! Soy Ecos. He analizado tus hilos y he creado un código para tu nueva función. ¡Míralo a la derecha! 🚀
                    </div>
                </div>
                <div className="p-4 border-t border-purple-50 flex gap-2">
                    <input className="flex-1 bg-gray-50 p-4 rounded-3xl outline-none focus:ring-2 ring-purple-200" placeholder="Escribe a la IA..." />
                    <button className="bg-purple-600 text-white p-4 rounded-full shadow-lg"><i data-lucide="send"></i></button>
                </div>
            </div>
            {/* Ventana de Ejecución Paralela */}
            <div className="w-1/3 bg-gray-900 rounded-[3rem] p-6 text-green-400 font-mono text-xs shadow-2xl relative">
                <div className="flex justify-between mb-4 border-b border-gray-800 pb-2">
                    <span>EXECUTION_LOG</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span> Live</span>
                </div>
                <p className="text-white">// Código generado por Ecos IA</p>
                <p className="mt-2 text-purple-400">const redSocial = "Aura";</p>
                <p>function innovar() {"{"}</p>
                <p className="pl-4">console.log("Cambiando el mundo...");</p>
                <p>{"}"}</p>
                <div className="mt-10 p-4 bg-white/10 rounded-2xl border border-white/10 text-center">
                    <p className="text-gray-500 mb-2 italic">Vista Previa Real</p>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-xl">Botón de Prueba</button>
                </div>
            </div>
        </div>
    );

    // 3. VISTA DE ONDAS (HILOS Y POSTS)
    const OndasFeed = () => (
        <div className="max-w-2xl mx-auto py-8 space-y-8 h-full overflow-y-auto pr-4">
            <h2 className="text-4xl font-black text-purple-900 mb-8">Tus Ondas</h2>
            {/* Tarjeta de ejemplo */}
            <div className="onda-card bg-white p-8 shadow-sm border border-purple-50">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-tr from-purple-500 to-pink-400 rounded-2xl rotate-3"></div>
                    <div>
                        <h4 className="font-black text-gray-800">Aura_Creator</h4>
                        <p className="text-xs text-purple-400">En Subeco: Futuro • Hace 2 min</p>
                    </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    ¡Bienvenidos a la red! Las "Ondas" son hilos infinitos. Toca para expandir el multiverso. 🌌
                </p>
                <div className="grid grid-cols-2 gap-3 rounded-[2rem] overflow-hidden">
                    <img src="https://picsum.photos/400/400?random=1" className="w-full h-48 object-cover" />
                    <img src="https://picsum.photos/400/400?random=2" className="w-full h-48 object-cover" />
                </div>
                <div className="flex justify-between mt-6 text-gray-400">
                    <button className="flex items-center gap-2 hover:text-purple-600"><i data-lucide="heart"></i> 2.4k</button>
                    <button className="flex items-center gap-2 hover:text-purple-600"><i data-lucide="message-circle"></i> 156</button>
                    <button className="flex items-center gap-2 hover:text-purple-600"><i data-lucide="share-2"></i></button>
                </div>
            </div>
        </div>
    );

    // RENDERIZADO FINAL
    useEffect(() => { lucide.createIcons(); }, [tab]);

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-[#F8F7FF]">
            <Sidebar />
            <main className="flex-1 relative overflow-hidden bg-white/30 backdrop-blur-sm rounded-l-[4rem] shadow-inner">
                {tab === 'ia' && <AICenter />}
                {tab === 'ondas' && <OndasFeed />}
                {tab === 'ecos' && <div className="h-full flex items-center justify-center text-purple-300">Pantalla de Ecos (Reels) - Cargando...</div>}
                {tab === 'interacciones' && <div className="h-full flex items-center justify-center text-purple-300 italic">Red de Interacciones - Visualizando conexiones...</div>}
            </main>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuraApp />);
