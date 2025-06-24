import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir inserir dois comentários', () => {
        render(<PostComment />);
        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('submit-button');

        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);

        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

        const comments = screen.getAllByTestId('comment-item');
        expect(comments).toHaveLength(2);
        expect(comments[0]).toHaveTextContent('Primeiro comentário');
        expect(comments[1]).toHaveTextContent('Segundo comentário');
    });
});