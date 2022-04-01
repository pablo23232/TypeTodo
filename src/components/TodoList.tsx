import Todo from "./Todo";


interface data{
   

}
  
const TodoList: React.FC<data>=(props) => { 

        return (
            <ul>
                <li><Todo/></li>
            </ul>
        );
}
export default TodoList;