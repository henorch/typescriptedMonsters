import React, { useEffect, useState, ChangeEvent, lazy, Suspense } from 'react';
import SearchBar from './searcbar/searchbar.component';
import { getData } from './utils/fetch.utils';
import { AppContainer, MenuContainer } from './App.styled';

const CardList = lazy(() => import('./card_list/CardList.component'))




export type Monsters = {
  id: number,
  name: string,
  email: string
}

const App = () => {
  const [searcField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  
  useEffect(() => {
     const fetchData = async () => {
      const user = await getData<Monsters[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(user)
     }

     fetchData()
  },[])

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searcField);
  })
  setFilteredMonster(newFilteredMonster)
  }, [monsters, searcField])
  
  
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString)
  }

return (
  <AppContainer>
    <MenuContainer>
     <h1 className='app-title'> monsters Club</h1>
      <SearchBar
        placeholder="what're you looking for"
        onChangeHandler={onSearchChange}/>
    </MenuContainer>
    <Suspense fallback={<p>Loading Please wait</p>}>
      <CardList monsters={filteredMonster}/>
    </Suspense>

    </AppContainer>
  );

}
export default App;
