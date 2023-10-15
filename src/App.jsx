
import { useState } from 'react';
import './App.css'
import { Card } from './components/Cards';
import themes,{language} from './data'
import { aiRequest } from './services/openai.config';
import { Documentation } from './components/Documentation';
import { Loading } from './components/Locading';

function App() {

  const [theme, setTheme] = useState("");
  const [loading, setLoading] = useState(false);
  
  async function handleClickTema(message){
    setLoading(true);
    const response = await aiRequest(message);
    setTheme( response.data.choices[0].text);
    //console.log( response );
    setLoading(false);
  }

  function handleBackToCard(){
    setTheme("");
  }
  if ( loading ) return ( <Loading/>)
  return (
    <section className='grid place-content-center w-full h-full'>
      <h1 className='text-amber-400 text-5xl font-bold grid
      grid-cols-1 py-10 text-center'> {language}</h1>

      { theme ? ( <Documentation  handdleBackToCard={handleBackToCard}
                  responseAI={theme}/>) : 

      <div className='grid grid-cols-3 gap-10 px-2 w-auto'>      
      { themes.map((theme, idx) => (
         <Card 
            Key={idx} 
            title={theme.name} 
            onClick={()=>handleClickTema(theme.message)}/>
        ))}
      </div>  
       }

    </section>
    
  )
}

export default App
