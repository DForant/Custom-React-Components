import SkillBar from './Components/SkillBar'

function App() {


  return (
    <main>
        <h1 className='text-6xl text-blue-600 font-semibold text-center'> 
          DF React Components
        </h1>

        <h2 className='text-3xl font-bold my-4'>
          Skillbar
        </h2>

        <SkillBar label='Skill 1' skillLvl='5'/>
        <SkillBar label='Skill 2' skillLvl='10'/>
        <SkillBar label='Skill 3' skillLvl='2'/>
        <SkillBar label='Skill 4' skillLvl='6'/>
        
    </main>
  )
}

export default App
