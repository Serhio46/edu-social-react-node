import React, { FC } from 'react';
import { cleanup, render, screen, waitFor, fireEvent } from '@testing-library/react';
import CreatePost from './CreatePost';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

jest.mock('axios');

describe('CreatePost', () => {
   beforeEach(async () => {
      await act(async () => {
         render(<CreatePost />);
      });
   });
   afterEach(() => {
      cleanup();
   });
   it('renders CreatePost component', () => {
      //Types of search 6 pcs bellow ByText, ByRole, By PlaceholderText, search variants: 3 pcs get(getAll), find(findAll), query(queryAll), total 18 pcs
      expect(screen.getByText(/Add photo/i)).toBeInTheDocument;
      expect(screen.getByRole('textbox')).toBeInTheDocument;
      expect(screen.getByPlaceholderText(/Whats in your/i)).toBeInTheDocument;
      expect(screen.getByAltText(/avatar/i)).toBeInTheDocument;
      //expect(screen.getByLabelText(/file/i)).toBeDefined;
      //expect(screen.getByDisplayValue('')).toBeInTheDocument;
   });

   it('async render', async () => {
      expect(screen.queryByText(/Logged in/i)).toBeNull;
      expect(await screen.findByText(/Logged in/i)).toBeInTheDocument; //the first case, this case better becouse it contains waitFor inside!!!!
      /*  await waitFor(() => {
         //the second case
         expect(screen.findByText(/Logged in/i)).toBeInTheDocument;
      }); */
   });
   it('createPost', () => {
      const onSubmit = jest.fn();
      const button = screen.getByText(/Share/i);
      expect(button).toBeInTheDocument;
      expect(button).not.toBeCalled;
      fireEvent.click(button);
      expect(onSubmit).toHaveBeenCalled;
   });

   it('createPOstUserEvent', () => {
      const handleSubmit = jest.fn();
      const button = screen.getByText(/Share/i);
      expect(button).toBeInTheDocument;
      expect(button).not.toBeCalled;
      userEvent.click(button);
      expect(handleSubmit).toHaveBeenCalled;
   });

   //testing axios
   it('getPost and resolve', async () => {
      const posts = [
         {
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
         },
         {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
         },
      ];

      axios.get = jest.fn().mockResolvedValue({ data: posts });
      const button = screen.getByText(/Get posts/i);
      userEvent.click(button);
      const items = await screen.findAllByRole('listitem');
      expect(items).toHaveLength(2);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?limit=10'); // much better use here variable instead string
   });

   it('getPost and reject', async () => {
      axios.get = jest.fn().mockRejectedValue(new Error('async error'));
      const button = screen.getByText(/Get posts/i);
      const butto1 = screen.getByRole('button', { name: /Get posts/i }); //if page has several buttons
      userEvent.click(button);
      const items = screen.queryAllByRole('listitem');
      expect(items).toHaveLength(0);
   });
});

//variant get uses for searching elements that are on the page, return  error or element; (error or array)
//variant query uses for searching elements that are not on the page, return null or element(queryAllBy return [] or array)
//variant find uses for asinc elements, from the start element doesn't exist on the page, but after execution some async code it will appear, return error or element(error or array)
