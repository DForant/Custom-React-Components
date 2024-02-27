const SkillBar = ({label, skillLvl}) => {
    const divs = []
    for (let i=0; i<skillLvl; i++){
      divs.push(<div key={i} className='h-5 w-10  bg-yellow-500'></div>)
    }
  
    const pct = skillLvl*10
    return (
      <article className='p-2 flex flex-col w-'>
        <h3 className='ml-2 pb-2 text-xl'>{label}</h3>
        <div className='flex'>
          <div className='h-5 w-5 bg-yellow-500 rounded-l-2xl'></div>
          {divs}
          <div className='h-5 w-5  bg-yellow-500 rounded-r-2xl'></div>
          <p>{pct}%</p>
        </div>
        
  
      </article>
      
    )
}

export default SkillBar