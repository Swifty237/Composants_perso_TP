import { ScrollView } from 'react-native';
import MyComponent from './Components/MyComponent';
import data from './assets/tp.json';

export default function App() {
  return (
    <ScrollView>

      {data.map(obj => (
          <MyComponent title ={obj.title} img ={obj.img} desc ={obj.desc}/>
      ))}

    </ScrollView>
  );
}