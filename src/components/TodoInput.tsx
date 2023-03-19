import React, { ChangeEvent } from "react";
import { useState, FC } from "react";
import TodoList from "./TodoList";
import { IItem } from "./Interfaces";

const TodoInput: FC = () => {
  const [item, setItem] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [edit, setEdit] = useState<boolean>(false);
  const [items, setItems] = useState<IItem[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setItem(event.target.value);
  };
  const handleAdd = () => {
    if (item == "") {
      return 0;
    }
    const newItem = { text: item, id: id };
    if (edit == false) {
      let generateId: number = Math.floor(Math.random() * 10000000000);
      setId(generateId);
      setItems([newItem, ...items]);
    }
    if (edit == true) {
    }
    setEdit(false);
    setItem("");

    // *! setId(0) yaptığımda (id yi en son 0 a eşitlesin sonra tekrardan add e bastığımda yeni değer versin diye bunu yapıyorum) tüm taskları siliyor setId(0) yokken kod istediğim gibi çalışıyor ?
  };

  const handleEdit = (id: number): void => {
    items.map((item) => {
      if (item.id === id) {
        setItem(item.text);
        setId(item.id);
      }
    });

    setEdit(true);
  };

  return (
    <>
      <div className="input-card">
        <div className="input-group">
          <input
            type="text"
            placeholder="Write something to do"
            value={item}
            onChange={handleChange}
          />
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
      <TodoList items={items} setItems={setItems} handleEdit={handleEdit} />
    </>
  );
};

export default TodoInput;
