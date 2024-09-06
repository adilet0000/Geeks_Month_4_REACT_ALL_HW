import { Todo } from "../../components/todo/Todo";

export function TodosPage() {
   const arr = ["todo1", "todo2", "todo3"];

   return (
      <>
         {
            arr.map((el, indx) => {
               return <Todo props={el} key={indx} />
            })
         }
      </>
   );
}