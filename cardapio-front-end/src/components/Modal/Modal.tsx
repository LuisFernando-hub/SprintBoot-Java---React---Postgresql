import { SetStateAction, useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./Modal.css";

interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: SetStateAction<string> | SetStateAction<number>): void
}


const Input = ({label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}/>
        </>
    )
}

interface ModalProps {
    closeModal() : void;
}

export function Modal({closeModal}: ModalProps) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess }  = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData);
    }

    useEffect(() => {
        if (!isSuccess) return;
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Created a new item at menu</h2>
                <form className="form-container">
                    <Input label="Title" value={title} updateValue={setTitle}/>
                    <Input label="Price" value={price} updateValue={setPrice}/>
                    <Input label="Image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">Save</button>
            </div>
        </div>
    )
}