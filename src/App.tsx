// 1. Importamos o CSS para estilização e nosso novo componente.
import './App.css'; // Supondo que os estilos do card estejam aqui.
import ProfileCard from './components/ProfileCard.tsx';

function App() {
  // 2. Nossos dados continuam sendo um simples array de objetos.
  const profilesData = [
    {   
        id: 1,
        imageUrl: 'https://avatars.githubusercontent.com/u/63750580?v=4',
        name: 'Guilherme Silva Motta',
        title: 'Estudante de Engenharia de Software',
        github: 'https://github.com/GuilhermeSMotta'
    },
    {
        id: 2,
        imageUrl: 'https://avatars.githubusercontent.com/u/12242706?v=4',
        name: 'Igor Brito dos Santos',
        title: 'Programador',
        github: 'https://github.com/BritoIgor'
    }
];

  // 3. A mágica do React: usamos .map() para transformar dados em componentes.
  return (
    <div className="App">
      <h1>VolunTech</h1>
      <div className="profiles-container">
        {profilesData.map(profile => (
          <ProfileCard
            key={profile.id} // Chave especial para o React otimizar a lista
            name={profile.name}
            title={profile.title}
            github={profile.github}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;