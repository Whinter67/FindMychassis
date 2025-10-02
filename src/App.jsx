import { useState } from 'react';
import './App.css';

import { Bike, Calendar, Heart, Menu, X, ChevronRight, Search, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import motoBg from "/home/davide/RepositoryGIT/FindMyChassis1/F.M.C./src/assets/GettyImages-1217903658.jpg";

// Navbar Component
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bike className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">F.M.C.</span>
          </Link>
          

                    

          
          <div className="sticky top-0 space-x-5">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</Link>
            <a href="#veicoli" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Veicoli</a>
            <a href="#storia" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Chi Siamo</a>
            <Link to="/collaudo" className="px-4 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red0-700 transition-colors">
              Ottieni un Collaudo
            </Link>
          </div>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

// Search Bar Component
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Ricerca per: ${searchTerm}\n\nFunzionalità in sviluppo - Qui verrà mostrata la scheda del veicolo`);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Inserisci codice telaio o modello (es: Vespa 50, Ciao P, VNB5T...)"
            className="w-full px-6 py-4 pr-14 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-red-500/50 shadow-xl"
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-3 text-center">
          Cerca informazioni sul tuo veicolo storico per codice telaio o modello
        </p>
      </div>
    </div>
  );
}

// Home Page
function HomePage() {
  const vehicles = [
    {
      name: "Piaggio Ciao",
      year: "1967-2006",
      description: "Il leggendario ciclomotore che ha motorizzato l'Italia. Icona di libertà e semplicità.",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Piaggio Bravo",
      year: "1970-1983",
      description: "Il fratello maggiore del Ciao, più sportivo. Design inconfondibile.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Piaggio Si",
      year: "1976-1998",
      description: "Eleganza e praticità in un ciclomotore compatto. Il preferito dalle città.",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Piaggio Grillo",
      year: "1968-1973",
      description: "Design unico un mix dell'iconico SI e il Ciao.",
      color: "from-purple-500 to-pink-500"
    },
     {
      name: "Piaggio Boxer",
      year: "1993-2002",
      description: "Ciclomotore moderno con linee aggressive.",
      color: "from-gray-600 to-gray-800"
    },
     {
      name: "SuperBravo Piaggio",
      year: "1993-1997",
      description: "L'unico della linea dedicato all fuoristrada/enduro.",
      color: "from-red-600 to-gray-800"
    },
    {
      name: "Vespa 50 Special",
      year: "1963-oggi",
      description: "L'icona italiana per eccellenza.",
      color: "from-teal-500 to-blue-500"
    },
    {
      name: "Vespa PX",
      year: "1977-oggi",
      description: "La Vespa più venduta di sempre. Classica, robusta e intramontabile.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Vespa Primavera",
      year: "1968-1983",
      description: "Eleganza e leggerezza.",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Vespa Rally",
      year: "1968-1979",
      description: "La Vespa sportiva. Prestazioni e design aggressivo.",
      color: "from-amber-500 to-orange-500"
    },
     {
      name: "Vespa ET3",
      year: "1976-1983",
      description: "La Vespa economica e affidabile. Perfetta per la città.",
      color: "from-lime-400 to-blue-600"
    },
    {
      name: "Gilera CBA",
      year: "1965-1990",
      description: "Ciclomotore sportivo italiano con prestazioni eccellenti.",
      color: "from-red-600 to-pink-600"
    },
   
   
   
    {
      name: "Gilera Arcore",
      year: "1959-1980",
      description: "Il ciclomotore che ha lanciato Gilera nel mercato popolare.",
      color: "from-lime-500 to-green-600"
    },
     {
      name: "Fantic Caballero",
      year: "1975-1987",
      description: "Il ciclomotore fuoristrada più amato dagli italiani.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: "Fantic Issimo",
      year: "1969-1985",
      description: "Ciclomotore dal design minimale e sportivo.",
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <>
      <SearchBar />
      
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${motoBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay più leggero per meno contrasto */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              Motoveicoli Storici
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400 drop-shadow-lg">
                Piaggio Gilera Fantic
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
              Un viaggio nella storia dei leggendari ciclomotori che hanno fatto la storia del motociclismo in Italia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#veicoli"
                className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center justify-center"
              >
                Scopri i Veicoli
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/collaudo"
                className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl border-2 border-red-600 inline-flex items-center justify-center"
              >
                Prenota Collaudo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Storia Autentica</h3>
              <p className="text-gray-600">Scopri le origini e l'evoluzione di ogni modello</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bike className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Icone Italiane</h3>
              <p className="text-gray-600">Veicoli che hanno definito un'epoca</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaudo Professionale</h3>
              <p className="text-gray-600">Servizio di collaudo certificato per veicoli storici</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="veicoli" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              I Veicoli Leggendari
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ogni modello racconta una storia unica di design, innovazione e cultura italiana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${vehicle.color} flex items-center justify-center`}>
                  <Bike className="w-24 h-24 text-white opacity-90" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{vehicle.name}</h3>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {vehicle.year}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {vehicle.description}
                  </p>
                  <button className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center">
                    Scopri di più
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Hai bisogno di un Collaudo?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Prenota il tuo collaudo per veicoli storici con i nostri esperti certificati
          </p>
          <Link to="/collaudo" className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl inline-block">
            Prenota Ora
          </Link>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section id="storia" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Chi Siamo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La passione per i motoveicoli storici è nel nostro DNA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">La Nostra Storia</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Siamo un team di appassionati e professionisti del settore motociclistico con oltre 30 anni di esperienza nella restaurazione e certificazione di veicoli storici italiani.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                La nostra missione è preservare e valorizzare il patrimonio storico dei ciclomotori che hanno fatto la storia della mobilità italiana. Ogni Piaggio, Vespa, Gilera e Fantic racconta una storia unica che merita di essere conservata per le generazioni future.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Offriamo servizi di collaudo certificato, consulenza tecnica e documentazione storica per aiutare i proprietari a mantenere autentici i loro preziosi veicoli.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white p-3 rounded-lg">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Passione Autentica</h4>
                    <p className="text-gray-700 text-sm">
                      Non siamo solo esperti, siamo collezionisti e appassionati proprio come te.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Certificazioni Ufficiali</h4>
                    <p className="text-gray-700 text-sm">
                      Collaudi riconosciuti e documentazione completa per l'immatricolazione storica.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">30+ Anni di Esperienza</h4>
                    <p className="text-gray-700 text-sm">
                      Conoscenza approfondita di ogni modello e periodo storico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Veicoli Collaudati</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-orange-600 mb-2">30+</div>
              <p className="text-gray-700 font-medium">Anni di Esperienza</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-600 mb-2">100%</div>
              <p className="text-gray-700 font-medium">Clienti Soddisfatti</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Collaudo Page
function CollaudoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    modello: '',
    telaio: '',
    anno: '',
    data: '',
    note: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Prenotazione inviata:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        modello: '',
        telaio: '',
        anno: '',
        data: '',
        note: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prenota il tuo Collaudo
          </h1>
          <p className="text-xl text-gray-600">
            Compila il modulo per prenotare un collaudo professionale per il tuo veicolo storico
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Sede</h3>
            <p className="text-gray-600 text-sm">Via Gustavo 123, Milano</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Telefono</h3>
            <p className="text-gray-600 text-sm">+39 02 1234 5678</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Mail className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">info@findchassis.it</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Prenotazione Ricevuta!</h3>
              <p className="text-gray-600">Ti contatteremo presto per confermare l'appuntamento.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dati Personali */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dati Personali</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nome *</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Cognome *</label>
                    <input
                      type="text"
                      name="cognome"
                      required
                      value={formData.cognome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Telefono *</label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Dati Veicolo */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dati Veicolo</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Modello *</label>
                    <input
                      type="text"
                      name="modello"
                      required
                      placeholder="es: Vespa PX 125, Ciao P"
                      value={formData.modello}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Codice Telaio *</label>
                    <input
                      type="text"
                      name="telaio"
                      required
                      placeholder="es: VNB5T123456"
                      value={formData.telaio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Anno Immatricolazione *</label>
                    <input
                      type="text"
                      name="anno"
                      required
                      placeholder="es: 1978"
                      value={formData.anno}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Data Preferita *</label>
                    <input
                      type="date"
                      name="data"
                      required
                      value={formData.data}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Note Aggiuntive</label>
                <textarea
                  name="note"
                  rows="4"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Eventuali richieste particolari o informazioni aggiuntive..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Invia Prenotazione
                </button>
                <Link
                  to="/"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Annulla
                </Link>
              </div>
            </form>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h4 className="font-bold text-blue-900 mb-2">📋 Documenti Necessari</h4>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>• Documento di identità del proprietario(se esiste)</li>
            <li>• Certificato di proprietà (se disponibile)</li>
            <li>• Eventuale documentazione storica del veicolo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bike className="w-6 h-6 text-red-500" />
              <span className="text-xl font-bold">Piaggio Storici</span>
            </div>
            <p className="text-gray-400">
              Preservando la storia dei leggendari motoveicoli Italiani
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Link Utili</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <a href="#veicoli" className="block text-gray-400 hover:text-white transition-colors">Veicoli</a>
              <Link to="/collaudo" className="block text-gray-400 hover:text-white transition-colors">Prenota Collaudo</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contatti</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 Via Gustavo 123, Milano</p>
              <p>📞 +39 02 1234 5678</p>
              <p>✉️ info@findchassis.it</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Realizzato con passione per i cultori del motociclismo italiano.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collaudo" element={<CollaudoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router> 
  );
}

export default App;