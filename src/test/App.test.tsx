import React from 'react';
import App from "../sites/App";
import {render,fireEvent,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

test('añadir tarea y completarla',()=>{
    render(<App />);
    const input= screen.getByTestId("input");
    userEvent.type(input, "pruebaAñadir");
    const addButton =screen.getByTestId('add');
    

    fireEvent.click(addButton);

    const todo = screen.getByText("pruebaAñadir");

    expect(todo).toBeInTheDocument();
    
    const check= screen.getByTestId("check");

    expect(todo).toBeInTheDocument();

    fireEvent.click(check);

    expect(check).toBeChecked();
});

test('añadir tarea y borrarla', async()=>{
    render(<App/>);
    const input= screen.getByTestId("input");
    userEvent.type(input, "limpiar");
    const addButton =screen.getByTestId('add');
    

    fireEvent.click(addButton);

    const todo = screen.getByText("limpiar");

    expect(todo).toBeInTheDocument();
    const delIcon =screen.getByTestId('delete');

    fireEvent.click(delIcon);

    fireEvent.click(screen.getByTestId("Borrar"));

    expect (todo).not.toBeInTheDocument();
});

test('añadir tarea y modificarla',()=>{
    render(<App/>);
    const input= screen.getByTestId("input");
    userEvent.type(input, "prueba");
    const addButton =screen.getByTestId('add');
    

    fireEvent.click(addButton);

    const todo = screen.getByText("prueba");

    expect(todo).toBeInTheDocument();
    
    const modIcon =screen.getByTestId('modify');

    fireEvent.click(modIcon);

    userEvent.type(input, "modificado");

    fireEvent.click(screen.getByTestId("Modificar"));

    expect (screen.getByText("modificado")).toBeInTheDocument();
});

test('añadir tarea y cambiar prioridad',()=>{
    render(<App/>);
    const input= screen.getByTestId("input");
    userEvent.type(input, "prioridad");
    const addButton =screen.getByTestId('add');
    

    fireEvent.click(addButton);

    const todo = screen.getByText("prioridad");

    expect(todo).toBeInTheDocument();
    const priorityIcon =screen.getByTestId('priority');

    fireEvent.click(priorityIcon);

    const prior = screen.getByTestId("priorityBox");

    expect(prior.classList.contains("moderada")).toBe(true);
});

/*test('cambiar de pagina ',()=>{
    render(<RouterDom/>);
    const nav= screen.getByTestId("navAbout");
    
    fireEvent.click(nav);

    expect(screen.getByText("About us")).toBeInTheDocument();
})*/


