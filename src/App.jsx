import './App.scss';

import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener">
          <ViteLogo className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
          <ReactLogo className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite React Boilerplate</h1>
      <span>
        ⚙️ Created with [ <code>🔱 ESLint</code> | <code>🎀 Prettier</code> |{' '}
        <code>🎨 SCSS</code> | <code>🔮 StyleLint</code> ]
      </span>
    </>
  );
}

export default App;
